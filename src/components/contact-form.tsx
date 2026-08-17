"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong while sending your message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
          Your message has been received — we will contact you soon.
        </p>
      )}
      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
          Full Name <span className="text-brand-dark">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-dark focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
          Your E-mail <span className="text-brand-dark">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-dark focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Your Message <span className="text-brand-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-navy/20 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-dark focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-bold text-navy transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="size-4 animate-spin" />}
        Send Message
      </button>
    </form>
  );
}
