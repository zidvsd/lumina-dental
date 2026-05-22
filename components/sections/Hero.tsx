import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import ScrollHintButton from "../ScrollHintButton";
export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden bg-surface"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-linear-to-b from-surface/60 via-transparent to-surface" />
        <Image
          src="/hero.avif"
          alt="Lumina Boutique Clinic Interior"
          fill
          priority
          sizes="100vw"
          loading="eager"
          className="select-none blur-xs object-cover"
        />
      </div>

      {/* ── Content ── */}
      <div className="container relative z-20 text-center">
        <div className="max-w-4xl mx-auto reveal active">
          {/* Eyebrow */}
          <span className="text-label-sm text-tertiary uppercase tracking-widest mb-8 block bg-surface/70 backdrop-blur-sm w-fit mx-auto px-4 py-1 rounded-full border border-outline-variant/30 italic">
            Reimagining the Patient Experience
          </span>

          {/* Headline */}
          <h1 className="text-display-lg md:text-[80px] md:leading-[1.05] text-black mb-8 tracking-tight">
            Dental Care Designed <br />
            Around <em className="text-white italic">Comfort</em>
          </h1>

          {/* Body */}
          <p className="text-body-lg text-primary-container mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience a sanctuary of wellness where advanced technology meets
            hospitality-driven serenity. Your journey to a radiant smile starts
            in silence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <Link
              href="#journey"
              className="bg-primary text-on-primary px-10 py-4 rounded-full text-label-sm tracking-widest uppercase hover:bg-on-surface transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="#treatments"
              className="text-label-sm text-on-surface tracking-widest uppercase border-b border-primary/40 hover:border-primary transition-all duration-300 py-1"
            >
              View Services
            </Link>
          </div>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-3 bg-surface/80 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant/30 shadow-sm">
            <div className="flex gap-0.5" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-[#FFB800]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-label-sm text-on-surface-variant font-semibold">
              4.9 / 5 Google Review
            </span>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <ScrollHintButton />
    </header>
  );
}
