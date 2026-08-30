import React from "react";
import { SERVICES, SLIDESHOW_IMAGES } from "../data/services";
import { PrimaryButton, SecondaryLink } from "../components/Button";
import Slideshow from "../components/Slideshow";

export default function Home({ goTo, goToService }) {
  const heroImage = SERVICES.find((s) => s.slug === "flooring").cover;

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3">
            <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05]">
              Nothing about this work is improvised.
            </h1>
            <p className="text-ink/60 mt-6 text-lg max-w-xl leading-relaxed">
              Seven years of painting, drywall, and flooring across Sault Ste. Marie
              and the Algoma District. Every job gets planned out and measured
              twice before anything gets cut, patched, or painted.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-9">
              <PrimaryButton onClick={() => goTo("contact")}>Request a free quote</PrimaryButton>
              <SecondaryLink onClick={() => goTo("services")}>View services →</SecondaryLink>
            </div>
            <p className="text-sm text-ink/40 mt-10">
              Seven years owning Absolute 10 Property Maintenance, zero years of
              subcontracting, and quotes that cost exactly nothing.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src={heroImage}
              alt="Recent flooring job, before and after"
              className="w-full rounded-2xl shadow-lg shadow-ink/5"
            />
          </div>
        </div>
      </section>

      {/* Recent work slideshow */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-ink/10">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="font-display text-3xl text-ink">Recent Work</h2>
        </div>
        <p className="text-ink/50 mb-8">A few jobs from the last little while.</p>
        <Slideshow images={SLIDESHOW_IMAGES} />
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-ink/10">
        <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
          <h2 className="font-display text-3xl text-ink">Services</h2>
          <SecondaryLink onClick={() => goTo("services")}>See full details →</SecondaryLink>
        </div>
        <p className="text-ink/50 mb-10">
          Six trades, one standard, and zero shortcuts clever enough to hide from a flashlight.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <button
              key={s.slug}
              onClick={() => goToService(s)}
              className="text-left group rounded-2xl overflow-hidden border border-ink/10 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {s.cover ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.cover}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-forest-50 flex items-center justify-center">
                  <span className="text-xs text-ink/40 uppercase tracking-wide">Photos coming soon</span>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display text-xl text-ink">{s.name}</h3>
                <p className="text-sm text-ink/50 mt-1">{s.short}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-ink/10">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl text-ink mb-5">About</h2>
            <p className="text-ink/60 leading-relaxed mb-4">
              I am Jazz. I own Absolute 10 Property Maintenance, and Jazz It Up
              Contracting is the shop I started on my own, no partner this time,
              to take on more home renovation work and build a portfolio that is
              entirely mine.
            </p>
            <p className="text-ink/60 leading-relaxed">
              There is no crew to blame and no subcontractor to track down. If
              something is off, it is on me, and I would rather fix it quietly
              than explain it loudly.
            </p>
          </div>
          <div className="md:col-span-2 bg-forest-50 rounded-2xl p-8">
            <p className="font-display text-2xl text-forest-900 leading-snug">
              "Nothing about this work is improvised."
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-forest-800 mt-16">
        <div className="max-w-6xl mx-auto px-5 py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl text-white">Got a room that needs a comeback?</h2>
            <p className="text-white/70 mt-2">Quotes do not cost anything, and neither does asking.</p>
          </div>
          <button
            onClick={() => goTo("contact")}
            className="bg-white text-forest-900 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-forest-50 transition-colors whitespace-nowrap"
          >
            Request a quote
          </button>
        </div>
      </section>
    </div>
  );
}
