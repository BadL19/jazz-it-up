import React, { useState, useEffect } from "react";

export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length === 0) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, paused]);

  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] rounded-2xl border border-dashed border-ink/20 bg-forest-50 flex items-center justify-center">
        <span className="text-xs text-ink/40 uppercase tracking-wide">
          Slideshow photos
        </span>
      </div>
    );
  }

  function prev() {
    setPaused(true);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setPaused(true);
    setIndex((i) => (i + 1) % images.length);
  }

  function goToIndex(i) {
    setPaused(true);
    setIndex(i);
  }

  return (
    <div>
      {/* Slideshow */}
      <div className="relative aspect-[4/3] w-full max-w-[650px] mx-auto rounded-2xl overflow-hidden bg-ink/5 shadow-sm">
        <img
          src={images[index]}
          alt={`Recent work, photo ${index + 1} of ${images.length}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Previous */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2
            bg-white/90 hover:bg-white
            border border-ink/10
            rounded-full w-10 h-10
            flex items-center justify-center
            text-ink text-xl
            shadow-sm
            transition-all
            hover:scale-105"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2
            bg-white/90 hover:bg-white
            border border-ink/10
            rounded-full w-10 h-10
            flex items-center justify-center
            text-ink text-xl
            shadow-sm
            transition-all
            hover:scale-105"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "bg-forest-800 w-6"
                : "bg-ink/15 w-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}