"use client";

import { useState } from "react";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4 p-6">
      {submitted ? (
        <div className="rounded-md border border-green-200 bg-green-50 p-4 font-semibold text-green-800">
          Thank you for your admission enquiry. A member of the admissions team will follow up using the contact details provided.
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Parent or guardian name
          <input required name="guardian" className="rounded-md border border-slate-200 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Child's name
          <input required name="child" className="rounded-md border border-slate-200 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Child's age
          <input required min="1" max="20" name="age" type="number" className="rounded-md border border-slate-200 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Class applying for
          <select required name="class" className="rounded-md border border-slate-200 px-4 py-3">
            <option value="">Select class</option>
            <option>Nursery</option>
            <option>Kindergarten</option>
            <option>Primary</option>
            <option>Junior High School</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone number
          <input required name="phone" type="tel" className="rounded-md border border-slate-200 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Email
          <input required name="email" type="email" className="rounded-md border border-slate-200 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Preferred visit date
          <input required name="visitDate" type="date" className="rounded-md border border-slate-200 px-4 py-3" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Message
        <textarea required name="message" className="min-h-32 rounded-md border border-slate-200 px-4 py-3" />
      </label>
      <button className="rounded-md bg-purple-brand px-6 py-3 font-black text-white hover:bg-purple-brand/90">
        Submit Admission Enquiry
      </button>
    </form>
  );
}
