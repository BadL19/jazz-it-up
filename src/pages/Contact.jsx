import React, { useState } from "react";
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from "../data/services";
import { PrimaryButton } from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0].name, details: "" });
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Add your name and a phone number. Telepathy is not on the services list.");
      return;
    }
    setError("");
    const message = `Hi Jazz, this is ${form.name}. I need ${form.service}. ${form.details} You can reach me at ${form.phone}.`;
    window.location.href = `sms:${PHONE_TEL}?&body=${encodeURIComponent(message)}`;
  }

  const inputClass =
    "w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent transition";

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Contact</h1>
      <p className="text-ink/50 mb-14 max-w-xl text-lg">
        Fill this in and it opens a text message with the details ready to
        send, or just call it in. Either way, the quote is free.
      </p>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="bg-forest-50 rounded-2xl p-7 space-y-6 text-sm">
            <div>
              <p className="text-ink/50 mb-1">Call or text</p>
              <a href={`tel:${PHONE_TEL}`} className="text-xl font-display text-ink">{PHONE_DISPLAY}</a>
            </div>
            <div>
              <p className="text-ink/50 mb-1">Service area</p>
              <p className="text-ink">Sault Ste. Marie and the Algoma District</p>
            </div>
            <div>
              <p className="text-ink/50 mb-1">Response time</p>
              <p className="text-ink">Usually within a day</p>
            </div>
            <div>
              <p className="text-ink/50 mb-1">Recent work</p>
              <p className="text-ink">Search Jazz It Up Contracting on Facebook</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-ink/70 mb-1.5">Name</label>
              <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm text-ink/70 mb-1.5">Phone number</label>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm text-ink/70 mb-1.5">Service needed</label>
              <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClass}>
                {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                <option value="Not sure / Other">Not sure / Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-ink/70 mb-1.5">Project details</label>
              <textarea value={form.details} onChange={(e) => update("details", e.target.value)} rows={4} className={inputClass} placeholder="Room size, current condition, timeline, and how bad it really is." />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <PrimaryButton type="submit">Text these details to Jazz</PrimaryButton>
            <p className="text-xs text-ink/40">This opens your messaging app with the details already filled in. Nothing gets sent until you hit send there.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
