import Link from "next/link";

export default function SevaCard({ templeSlug, seva }) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/80 p-6 shadow-[0_18px_50px_rgba(92,26,27,0.1)]">
      <h3 className="font-heading text-lg text-[#5C1A1B]">{seva.name}</h3>
      <p className="mt-2 text-sm text-[#5C1A1B]/70">{seva.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-[#5C1A1B]">
        <span className="font-semibold text-[#FF9933]">₹{seva.price}</span>
        <Link
          href={`/temples/${templeSlug}/seva/${seva.id}`}
          className="btn-golden"
        >
          Offer This Seva
        </Link>
      </div>
    </div>
  );
}
