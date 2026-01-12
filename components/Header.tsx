"use client";

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '#programs', label: 'University' },
  { href: '#courses', label: 'Courses' },
  { href: '#benefits', label: 'Benefits' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <Link href="/" prefetch={false} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white">
            C
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-900">Coursewala</div>
            <div className="text-xs text-slate-500">Online MBA comparison</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a className="btn btn-outline" href="tel:+918976422397">
            Call
          </a>
          <a className="btn btn-primary" href="#enquire">
            Enquire
          </a>
        </div>

        <button
          type="button"
          className="md:hidden btn btn-ghost px-3"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-app py-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <a className="btn btn-outline w-full" href="tel:+918976422397" onClick={() => setOpen(false)}>
                Call
              </a>
              <a className="btn btn-primary w-full" href="#enquire" onClick={() => setOpen(false)}>
                Enquire
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
