import AnimatedSection from "../components/AnimatedSection";
import TempleCard from "../components/TempleCard";
import { groupTemplesByState } from "../data/temples";

export default function TemplesPage() {
  const grouped = groupTemplesByState();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <AnimatedSection className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FF9933]">
          Temple Listings
        </p>
        <h1 className="mt-3 font-heading text-4xl text-[#5C1A1B]">
          Discover sacred spaces by region
        </h1>
        <p className="mt-4 text-base text-[#5C1A1B]/70">
          Choose a temple and begin your devotional journey with curated sevas.
        </p>
      </AnimatedSection>

      <div className="mt-12 flex flex-col gap-12">
        {Object.entries(grouped).map(([state, temples]) => (
          <AnimatedSection key={state} className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl text-[#5C1A1B]">{state}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {temples.map((temple) => (
                <TempleCard key={temple.slug} temple={temple} />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </main>
  );
}
