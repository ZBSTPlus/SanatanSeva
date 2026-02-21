"use client";

import { useTempleAudio } from "./AudioContext";

export default function AudioToggle() {
  const { isPlaying, toggle } = useTempleAudio();

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/80 px-4 py-2 text-sm font-medium text-[#5C1A1B] shadow-[0_8px_30px_rgba(92,26,27,0.12)] backdrop-blur transition hover:shadow-[0_0_24px_rgba(212,175,55,0.5)]"
      aria-label="Toggle temple chants"
    >
      <span className="text-lg">🔔</span>
      <span>{isPlaying ? "Chants On" : "Chants Off"}</span>
    </button>
  );
}
