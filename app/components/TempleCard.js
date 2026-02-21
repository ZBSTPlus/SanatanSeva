import Image from "next/image";
import Link from "next/link";

export default function TempleCard({ temple }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/80 shadow-[0_20px_60px_rgba(92,26,27,0.12)] transition hover:-translate-y-1">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={temple.image}
          alt={temple.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3 px-6 py-6">
        <div>
          <h3 className="font-heading text-lg text-[#5C1A1B]">
            {temple.name}
          </h3>
          <p className="text-sm text-[#5C1A1B]/70">
            {temple.city}, {temple.state}
          </p>
        </div>
        <Link href={`/temples/${temple.slug}`} className="btn-golden w-fit">
          View Sevas
        </Link>
      </div>
    </div>
  );
}
