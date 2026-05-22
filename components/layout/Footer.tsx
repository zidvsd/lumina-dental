import Link from "next/link";
import { X, Mail } from "lucide-react";
import {
  footerColumns,
  footerAddress,
  footerTagline,
  footerCopyright,
  brandName,
} from "@/data/footer";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface">
      <div className="container py-20">
        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Brand block */}
          <div className="space-y-6 max-w-sm">
            <span className="text-headline-md text-primary tracking-tighter">
              {brandName}
            </span>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {footerTagline}
            </p>
            <div className="flex gap-5 pt-2">
              <Link
                href="#"
                aria-label="X"
                className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                <X size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="#"
                aria-label="Email"
                className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                <Mail size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
            {footerColumns.map((col) => (
              <div key={col.heading} className="space-y-5">
                <h5 className="text-label-sm text-on-surface tracking-widest uppercase">
                  {col.heading}
                </h5>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-md text-on-surface-variant hover:text-tertiary transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Address */}
            <div className="space-y-5">
              <h5 className="text-label-sm text-on-surface tracking-widest uppercase">
                {footerAddress.heading}
              </h5>
              <address className="text-body-md text-on-surface-variant not-italic leading-relaxed">
                {footerAddress.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < footerAddress.lines.length - 1 && <br />}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-on-surface-variant/60">
            {footerCopyright}
          </p>
          <div className="flex gap-2 items-center">
            <span className="text-label-sm text-on-surface-variant/40">
              Crafted with care ·
            </span>
            <Link
              href="#"
              className="text-label-sm text-tertiary hover:underline underline-offset-4 transition-colors"
            >
              lumina.dental
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
