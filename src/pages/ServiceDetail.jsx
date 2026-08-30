import React, { useState } from "react";
import { PrimaryButton, SecondaryLink } from "../components/Button";
import IncludedList from "../components/IncludedList";
import Lightbox from "../components/Lightbox";

export default function ServiceDetail({ service, goTo }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-5 pt-10">
        <SecondaryLink onClick={() => goTo("services")}>← Back to services</SecondaryLink>
      </div>

      {service.cover && (
        <div className="max-w-6xl mx-auto px-5 mt-6">
          <img
            src={service.cover}
            alt={`${service.name} cover`}
            className="w-full max-h-[440px] object-cover rounded-2xl shadow-sm"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">{service.name}</h1>
        <p className="text-xl text-ink/80 mb-5">{service.tagline}</p>
        <p className="text-ink/60 leading-relaxed mb-10">{service.body}</p>
        <IncludedList items={service.includes} />
      </div>

      <div className="max-w-6xl mx-auto px-5 pb-16">
        <h2 className="font-display text-3xl text-ink mb-2">Before and After</h2>
        {service.gallery.length > 0 ? (
          <>
            <p className="text-ink/50 mb-8">Real jobs, not stock photos. Click any photo to enlarge.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxSrc(src)}
                  className="rounded-xl overflow-hidden border border-ink/10 shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <img
                    src={src}
                    alt={`${service.name} before and after, job ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-ink/50">Photos coming soon as jobs wrap up.</p>
        )}
      </div>

      <div className="bg-forest-50">
        <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-ink/70 text-lg">Want this done at your place?</p>
          <PrimaryButton onClick={() => goTo("contact")} className="whitespace-nowrap">
            Request a free quote
          </PrimaryButton>
        </div>
      </div>

      <Lightbox
        src={lightboxSrc}
        alt={`${service.name} before and after, enlarged`}
        onClose={() => setLightboxSrc(null)}
      />
    </div>
  );
}
