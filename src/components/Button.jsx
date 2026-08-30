import React from "react";

export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 bg-forest-800 text-white px-6 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:bg-forest-900 hover:shadow-md transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryLink({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-1.5 text-forest-700 hover:text-forest-900 text-sm font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
