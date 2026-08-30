import React, { useState } from "react";
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from "../data/services";

export default function Nav({ page, goTo, goToService }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesActive = page === "services" || page === "service";

  function handleGoTo(p) {
    goTo(p);
    setMenuOpen(false);
  }

  function handleGoToService(service) {
    goToService(service);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-20">
        <button onClick={() => handleGoTo("home")} className="flex flex-col items-start leading-none">
          <span className="font-display text-2xl text-ink">Jazz It Up</span>
          <span className="text-[11px] tracking-[0.25em] text-forest-700 mt-0.5">CONTRACTING</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button
            onClick={() => handleGoTo("home")}
            className={page === "home" ? "text-ink font-medium" : "text-ink/60 hover:text-ink transition-colors"}
          >
            Home
          </button>

          <div className="relative group">
            <button
              onClick={() => handleGoTo("services")}
              className={servicesActive ? "text-ink font-medium" : "text-ink/60 hover:text-ink transition-colors"}
            >
              Services
            </button>
            <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
              <div className="bg-white border border-ink/10 rounded-2xl shadow-lg shadow-ink/5 p-2 w-64">
                {SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleGoToService(s)}
                    className="flex items-center gap-3 w-full text-left px-2 py-2 rounded-xl text-ink/80 hover:bg-forest-50 hover:text-ink transition-colors"
                  >
                    {s.cover ? (
                      <img src={s.cover} alt="" className="w-10 h-10 object-cover rounded-lg flex-shrink-0" />
                    ) : (
                      <span className="w-10 h-10 rounded-lg bg-forest-50 flex-shrink-0" />
                    )}
                    <span className="text-sm">{s.name}</span>
                  </button>
                ))}
                <div className="border-t border-ink/10 mt-1 pt-1">
                  <button
                    onClick={() => handleGoTo("services")}
                    className="block w-full text-left px-2 py-2 rounded-xl text-forest-700 hover:bg-forest-50 text-sm font-medium"
                  >
                    All services →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleGoTo("contact")}
            className={page === "contact" ? "text-ink font-medium" : "text-ink/60 hover:text-ink transition-colors"}
          >
            Contact
          </button>

          <a href={`tel:${PHONE_TEL}`} className="text-ink/60 hover:text-ink transition-colors">
            {PHONE_DISPLAY}
          </a>

          <button
            onClick={() => handleGoTo("contact")}
            className="bg-forest-800 text-white text-sm px-5 py-2.5 rounded-full font-medium hover:bg-forest-900 transition-colors shadow-sm"
          >
            Get a Quote
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className="w-5 h-0.5 bg-ink mb-1.5" />
          <div className="w-5 h-0.5 bg-ink mb-1.5" />
          <div className="w-5 h-0.5 bg-ink" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-ink/10 px-5 py-4 flex flex-col text-sm bg-paper">
          <button onClick={() => handleGoTo("home")} className="text-left py-2.5 text-ink/80">Home</button>

          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between py-2.5 text-ink/80"
          >
            <span>Services</span>
            <span className="text-ink/40">{mobileServicesOpen ? "\u2212" : "+"}</span>
          </button>
          {mobileServicesOpen && (
            <div className="pl-3 flex flex-col pb-2 gap-1">
              {SERVICES.map((s) => (
                <button key={s.slug} onClick={() => handleGoToService(s)} className="flex items-center gap-2 text-left py-1.5 text-ink/60">
                  {s.cover ? (
                    <img src={s.cover} alt="" className="w-7 h-7 object-cover rounded-md flex-shrink-0" />
                  ) : (
                    <span className="w-7 h-7 rounded-md bg-forest-50 flex-shrink-0" />
                  )}
                  {s.name}
                </button>
              ))}
              <button onClick={() => handleGoTo("services")} className="text-left py-1.5 text-forest-700 font-medium">
                All services
              </button>
            </div>
          )}

          <button onClick={() => handleGoTo("contact")} className="text-left py-2.5 text-ink/80">Contact</button>
          <a href={`tel:${PHONE_TEL}`} className="text-ink/60 py-2.5">Call {PHONE_DISPLAY}</a>
        </div>
      )}
    </header>
  );
}
