import React from "react";
import { SERVICES } from "../data/services";
import { PrimaryButton, SecondaryLink } from "../components/Button";
import IncludedList from "../components/IncludedList";

export default function Services({ goTo, goToService }) {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">Services</h1>
      <p className="text-ink/50 mb-16 max-w-xl text-lg">
        Every one of these gets the same treatment. Slow enough to get
        right, fast enough that the job does not stretch into next season.
      </p>

      <div className="space-y-20">
        {SERVICES.map((s, i) => (
          <div
            key={s.slug}
            className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2 w-full">
              {s.cover ? (
                <img src={s.cover} alt="" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm" />
              ) : (
                <div className="w-full aspect-[4/3] rounded-2xl bg-forest-50 border border-dashed border-ink/15 flex items-center justify-center">
                  <span className="text-xs text-ink/40 uppercase tracking-wide">Photos coming soon</span>
                </div>
              )}
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="font-display text-2xl text-ink">{s.name}</h2>
                <span className="text-sm text-ink/40">{s.short}</span>
              </div>
              <p className="text-ink font-medium mb-3">{s.tagline}</p>
              <p className="text-ink/60 mb-6 leading-relaxed">{s.body}</p>
              <IncludedList items={s.includes} />
              <SecondaryLink onClick={() => goToService(s)} className="mt-6">
                See before and after →
              </SecondaryLink>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-forest-50 rounded-2xl p-8">
        <p className="text-ink/70">Not sure which of these your project needs? Describe it and I will translate it into one of the six above.</p>
        <PrimaryButton onClick={() => goTo("contact")} className="whitespace-nowrap">
          Request a free quote
        </PrimaryButton>
      </div>
    </div>
  );
}
