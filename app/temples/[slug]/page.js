import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import SevaCard from "../../components/SevaCard";
import { getTempleBySlug } from "../../data/temples";
import { notFound } from "next/navigation";

export default function TempleDetailPage({ params }) {
  const temple = getTempleBySlug(params.slug);

  if (!temple) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <AnimatedSection className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/30 bg-white/70 shadow-[0_30px_80px_rgba(92,26,27,0.15)]">
          <Image
            src={temple.image}
            alt={temple.name}
            width={640}
            height={480}
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#FF9933]">
            {temple.city}, {temple.state}
          </p>
          <h1 className="mt-3 font-heading text-4xl text-[#5C1A1B]">
            {temple.name}
          </h1>
          <p className="mt-4 text-base leading-7 text-[#5C1A1B]/70">
            {temple.description}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <h2 className="font-heading text-2xl text-[#5C1A1B]">
          Available Sevas
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {temple.services.map((seva) => (
            <SevaCard key={seva.id} templeSlug={temple.slug} seva={seva} />
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
