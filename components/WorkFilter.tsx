"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Pillar filter for /work. Children are <li data-pillars="web ai"> items; without JS every
 * project stays visible and the chips simply aren't interactive.
 */
export function WorkFilter({
  label,
  allLabel,
  options,
  children,
}: {
  label: string;
  allLabel: string;
  options: { id: string; label: string }[];
  children: ReactNode;
}) {
  const [active, setActive] = useState("all");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLLIElement>(":scope > li") ?? [];
    items.forEach((li) => {
      const pillars = (li.dataset.pillars ?? "").split(" ");
      li.hidden = active !== "all" && !pillars.includes(active);
    });
  }, [active]);

  const chip = (id: string, text: string) => (
    <button
      key={id}
      type="button"
      aria-pressed={active === id}
      onClick={() => setActive(id)}
      className="min-h-11 rounded-full border border-line px-5 text-sm font-semibold transition-colors hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper"
    >
      {text}
    </button>
  );

  return (
    <>
      <div role="group" aria-label={label} className="flex flex-wrap gap-2">
        {chip("all", allLabel)}
        {options.map((o) => chip(o.id, o.label))}
      </div>
      <ul ref={listRef} className="grid gap-x-5 gap-y-10 lg:grid-cols-2">
        {children}
      </ul>
    </>
  );
}
