import React, { useState } from "react";
import { SERVICES, PHONE_DISPLAY, PHONE_TEL, CONTACT_EMAIL, FACEBOOK_URL, WEB3FORMS_ACCESS_KEY } from "../data/services";
import { PrimaryButton } from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", service: SERVICES[0].name, details: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) {
      setError("Add your name and a way to reach you. Telepathy is not on the services list.");
      return;
    }
    setError("");
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Quote request: ${form.service}`,
          from_name: form.name,
          Name: form.name,
          "Reach them at": form.contact,
          "Service needed": form.service,
          "Project details": form.details,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(`That did not go through. Call or text ${PHONE_DISPLAY} instead.`);
      }
    } catch {
      setError(`That did not go through. Call or text ${PHONE_DISPLAY} instead.`);
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full border border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent transition";

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Contact</h1>
      <p className="text-ink/50 mb-14 max-w-xl text-lg">
        Send the details below and they land straight in Jazz's inbox, or
        just call it in. Either way, the quote is free.
      </p>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="bg-forest-50 rounded-2xl p-7 space-y-6 text-sm">
            <div>
              <p className="text-ink/50 mb-1">Call or text</p>
              <a href={`tel:${PHONE_TEL}`} className="text-xl font-display text-ink">{PHONE_DISPLAY}</a>
            </div>
            <div>
              <p className="text-ink/50 mb-1">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink hover:text-forest-800 transition-colors break-all">{CONTACT_EMAIL}</a>
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
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-forest-700 hover:text-forest-900 underline underline-offset-2">
                Jazz It Up Contracting on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {submitted ? (
            <div className="bg-forest-50 rounded-2xl p-7">
              <h2 className="font-display text-2xl text-ink mb-2">Thanks, {form.name}.</h2>
              <p className="text-ink/60">
                That went straight to Jazz's inbox. Expect a reply within a
                day, or call or text {PHONE_DISPLAY} if it is urgent.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-ink/70 mb-1.5">Name</label>
                <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm text-ink/70 mb-1.5">Phone or email</label>
                <input type="text" value={form.contact} onChange={(e) => update("contact", e.target.value)} className={inputClass} />
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
              <PrimaryButton type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send to Jazz"}
              </PrimaryButton>
              <p className="text-xs text-ink/40">This sends straight to {CONTACT_EMAIL}. Nothing opens on your end, it just goes.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}