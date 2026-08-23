import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  service?: string;
  budget?: string;
  /** Page the visitor was on immediately before landing on /contact (document.referrer). */
  cameFrom?: string;
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, service, company, budget, cameFrom } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !service?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "PinexaDigital Contact <contact@pinexadigital.com>",
      to: "sales@pinexadigital.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Service: ${service}`,
        budget ? `Budget: ${budget}` : null,
        cameFrom ? `Came from: ${cameFrom}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[contact] email send failed", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
  } catch (err) {
    console.error("[contact] email send failed", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
