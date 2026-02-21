"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SevaBookingForm({ temple, seva }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gothram: "",
    nakshatram: "",
    note: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = new URLSearchParams({
      temple: temple.name,
      seva: seva.name,
      name: formData.name || "Devotee",
    });
    router.push(`/confirmation?${query.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-6 rounded-[32px] border border-[#D4AF37]/20 bg-white/80 p-8 shadow-[0_24px_60px_rgba(92,26,27,0.12)]"
    >
      <div className="grid gap-2">
        <label className="text-sm text-[#5C1A1B]">Devotee Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-2xl border border-[#D4AF37]/30 bg-white px-4 py-3 text-sm text-[#5C1A1B] outline-none focus:border-[#FF9933]"
          placeholder="Enter your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-[#5C1A1B]">Gothram (optional)</label>
        <input
          name="gothram"
          value={formData.gothram}
          onChange={handleChange}
          className="rounded-2xl border border-[#D4AF37]/30 bg-white px-4 py-3 text-sm text-[#5C1A1B] outline-none focus:border-[#FF9933]"
          placeholder="Your lineage"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-[#5C1A1B]">Nakshatram (optional)</label>
        <input
          name="nakshatram"
          value={formData.nakshatram}
          onChange={handleChange}
          className="rounded-2xl border border-[#D4AF37]/30 bg-white px-4 py-3 text-sm text-[#5C1A1B] outline-none focus:border-[#FF9933]"
          placeholder="Your star"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-[#5C1A1B]">Sankalpam Note</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={4}
          className="rounded-2xl border border-[#D4AF37]/30 bg-white px-4 py-3 text-sm text-[#5C1A1B] outline-none focus:border-[#FF9933]"
          placeholder="Share your prayer intention"
        />
      </div>
      <button type="submit" className="btn-golden w-full">
        Offer Seva
      </button>
    </form>
  );
}
