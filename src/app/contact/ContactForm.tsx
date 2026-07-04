"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full h-10 px-3 text-[14px] text-title bg-card border border-line rounded-lg outline-none focus:border-prose transition-colors placeholder:text-faint";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-card rounded-xl p-10 shadow-card-lg flex flex-col items-center justify-center text-center min-h-105 gap-4">
        <CheckCircle size={40} className="text-emerald-500" />
        <h2 className="display-md text-title">Message sent!</h2>
        <p className="text-[14px] text-prose">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card-lg flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-title">Name</label>
          <input name="name" type="text" placeholder="Jane Smith" required className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-title">Email</label>
          <input name="email" type="email" placeholder="jane@company.com" required className={inputCls} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-title">Company / Website</label>
        <input name="company" type="text" placeholder="Acme Inc. / acme.com" className={inputCls} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-title">Service needed</label>
        <select name="service" required className={`${inputCls} cursor-pointer`}>
          <option value="">Select a service…</option>
          <option value="web-design">Web Design &amp; Development</option>
          <option value="crm-automation">CRM Automation &amp; Integration</option>
          <option value="ecommerce">E-commerce</option>
          <option value="maintenance">Website Maintenance</option>
          <option value="other">Other / Not sure</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-title">Budget range</label>
        <select name="budget" className={`${inputCls} cursor-pointer`}>
          <option value="">Select a range…</option>
          <option value="under-1k">Under $1,000</option>
          <option value="1k-3k">$1,000 – $3,000</option>
          <option value="3k-10k">$3,000 – $10,000</option>
          <option value="10k-plus">$10,000+</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-title">Tell us about your project</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What are you looking to build? What's your timeline?"
          className="w-full px-3 py-2.5 text-[14px] text-title bg-card border border-line rounded-lg outline-none focus:border-prose transition-colors placeholder:text-faint resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-red-500">
          Something went wrong. Please email us at{" "}
          <a href="mailto:sales@pinexadigital.com" className="underline">sales@pinexadigital.com</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 flex items-center justify-center gap-2 rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 disabled:opacity-50 transition-opacity"
      >
        <Send size={15} />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
