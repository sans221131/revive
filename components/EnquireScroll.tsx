"use client";

import { useEffect } from "react";

export default function EnquireScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!(e instanceof MouseEvent)) return;
      if (e.button !== 0) return;
      if (e.defaultPrevented) return;
      // ignore clicks with modifier keys
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target || !target.closest) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href !== "#enquire") return;

      // only override behaviour on desktop widths
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        e.preventDefault();
        const targetEl = document.getElementById("enquire");
        if (targetEl) {
          const header = document.querySelector("header");
          const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
          const top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8; // small offset
          window.scrollTo({ top, behavior: "smooth" });

          // focus the first input inside the form after a short delay (after scroll starts)
          setTimeout(() => {
            const input = targetEl.querySelector<HTMLInputElement>("input, select, textarea");
            input?.focus();
          }, 400);
        }
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
