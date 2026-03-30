"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#hero", sectionId: "hero", label: "Inicio" },
  { href: "#services", sectionId: "services", label: "Servicios" },
  { href: "#contact", sectionId: "contact", label: "Contacto" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollLocked, setScrollLocked] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setScrollLocked(true);
    setTimeout(() => setScrollLocked(false), 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLocked) return;

      const sectionIds = NAV_LINKS.map((link) => link.sectionId);
      const offset = 120;

      if (window.scrollY < offset) {
        setActiveSection("hero");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLocked]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-4 cursor-pointer"
        >
          <Image src="/logoby.png" alt="FL Electricidad" width={45} height={45} />
          <span className="font-black hidden sm:block  text-neutral-900 uppercase font-headline tracking-tight">
            FL Electricidad
          </span>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.sectionId)}
              className={
                activeSection === link.sectionId
                  ? "font-headline font-bold tracking-tight text-neutral-900 border-b-4 border-yellow-400 pb-1"
                  : "font-headline font-bold tracking-tight text-neutral-500 hover:text-neutral-900 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://api.whatsapp.com/send?phone=5492235982883"
            target="_blank"
            className="hidden lg:flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all duration-200 active:scale-95 shadow-lg shadow-primary/20"
          >
            Consultar ahora
          </Link>
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="material-symbols-outlined"
              animate={{ rotate: mobileOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? "close" : "menu"}
            </motion.span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t border-neutral-100 px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                handleNavClick(link.sectionId);
                setMobileOpen(false);
              }}
              className={
                activeSection === link.sectionId
                  ? "font-headline font-bold tracking-tight text-neutral-900 border-b-4 border-yellow-400 pb-1"
                  : "font-headline font-bold tracking-tight text-neutral-700 hover:text-neutral-900 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-neutral-100 h-px w-full" />
    </nav>
  );
}
