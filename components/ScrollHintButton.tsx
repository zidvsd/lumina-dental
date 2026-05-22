"use client";

import { ArrowDown } from "lucide-react";

export default function ScrollHintButton() {
  const handleScroll = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScroll}
      className="cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity animate-bounce"
    >
      <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant">
        Scroll to Explore
      </span>
      <ArrowDown
        size={16}
        strokeWidth={1.5}
        className="text-on-surface-variant"
      />
    </button>
  );
}
