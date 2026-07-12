"use client";

import { useState } from "react";

export default function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6">
      {sent ? (
        <div className="rounded-md border border-green-200 bg-green-50 p-4 font-semibold text-green-800">
          Thank you. Your message has been prepared successfully. The school team can connect this form to email or a backend before launch.
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input required className="rounded-md border border-slate-200 px-4 py-3" name="name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone
          <input required className="rounded-md border border-slate-200 px-4 py-3" name="phone" type="tel" />
        </label>
      </div>
      {!compact ? (
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Email
          <input className="rounded-md border border-slate-200 px-4 py-3" name="email" type="email" />
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Message
        <textarea required className="min-h-32 rounded-md border border-slate-200 px-4 py-3" name="message" />
      </label>
      <button className="rounded-md bg-purple-brand px-6 py-3 font-black text-white hover:bg-purple-brand/90">
        Send Message
      </button>
    </form>
  );
}
