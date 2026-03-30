"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#", label: "Home", active: true },
  { href: "#services", label: "Services", active: false },
  { href: "#contact", label: "Contact", active: false },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Image src="/logoby.png" alt="FL Electricidad" width={45} height={45} />
          <span className="text-lg font-black text-neutral-900 uppercase font-headline tracking-tight">
            FL Electricidad
          </span>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "font-headline font-bold tracking-tight text-neutral-900 border-b-4 border-yellow-400 pb-1"
                  : "font-headline font-bold tracking-tight text-neutral-500 hover:text-neutral-900 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+541100000000"
            className="hidden lg:flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all duration-200 active:scale-95 shadow-lg shadow-primary/20"
          >
            Llamar ahora
          </a>
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-headline font-bold tracking-tight text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <div className="bg-neutral-100 h-px w-full" />
    </nav>
  );
}
