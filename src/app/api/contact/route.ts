import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  service?: string;
  budget?: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, service, company, budget } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !service?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  try {
    await transporter.sendMail({
      from: `"Pinexa Digital Contact" <${process.env.ZOHO_USER}>`,
      to: "sales@pinexadigital.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Service: ${service}`,
        budget ? `Budget: ${budget}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("[contact] email send failed", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
