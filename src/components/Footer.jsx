import React from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "../data/services";

export default function Footer({ goTo }) {
  return (
    <footer className="border-t border-ink/10 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-display text-lg text-ink">Jazz It Up Contracting</p>
          <p className="text-sm text-ink/50 mt-1">Measured twice, finished once, in Sault Ste. Marie and the Algoma District.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <button onClick={() => goTo("home")} className="text-ink/60 hover:text-ink transition-colors">Home</button>
          <button onClick={() => goTo("services")} className="text-ink/60 hover:text-ink transition-colors">Services</button>
          <button onClick={() => goTo("contact")} className="text-ink/60 hover:text-ink transition-colors">Contact</button>
          <a href={`tel:${PHONE_TEL}`} className="text-forest-700 hover:text-forest-900 transition-colors font-medium">{PHONE_DISPLAY}</a>
        </div>
      </div>
    </footer>
  );
}
