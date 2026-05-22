"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, navCta, brandName } from "@/data/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating Nav Bar ── */}
      <nav
        className={[
          "fixed top-6 left-1/2 -translate-x-1/2 z-50",
          "w-[92%] container",
          "flex items-center justify-between",
          "px-6 py-2 rounded-full lg:py-3",
          "border border-outline-variant/30",
          "bg-surface/80 backdrop-blur-2xl",
          "transition-shadow duration-300",
          scrolled ? "shadow-[0_20px_50px_rgba(0,0,0,0.07)]" : "",
        ].join(" ")}
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl text-primary tracking-tighter select-none"
        >
          {brandName}
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={"#consultation"}
            className="hidden sm:inline-flex items-center bg-primary text-on-primary px-6 py-2.5 rounded-full text-label-sm hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            {navCta.label}
          </a>

          <button
            className="lg:hidden cursor-pointer p-2 rounded-full text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden",
          "flex flex-col items-center justify-center gap-8",
          "bg-surface/95 backdrop-blur-3xl",
          "transition-all duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: `${i * 60}ms` }}
            className={[
              "text-headline-md text-on-surface hover:text-primary transition-all duration-300",
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            ].join(" ")}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={navCta.href}
          onClick={() => setMenuOpen(false)}
          style={{ transitionDelay: `${navLinks.length * 60}ms` }}
          className={[
            "mt-4 bg-primary text-on-primary px-10 py-4 rounded-full text-label-sm",
            "hover:opacity-90 active:scale-95 transition-all duration-200",
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
        >
          {navCta.label}
        </Link>
      </div>
    </>
  );
}
