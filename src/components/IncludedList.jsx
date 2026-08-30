import React from "react";

export default function IncludedList({ items }) {
  return (
    <div>
      <p className="text-sm font-medium text-ink mb-3">What's included</p>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink/65">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="text-forest-600 mt-1.5 w-1 h-1 rounded-full bg-forest-600 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
