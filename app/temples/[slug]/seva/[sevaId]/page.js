import AnimatedSection from "../../../../components/AnimatedSection";
import SevaBookingForm from "../../../../components/SevaBookingForm";
import { getSevaById, getTempleBySlug } from "../../../../data/temples";
import { notFound } from "next/navigation";

export default async function SevaBookingPage({ params }) {
  const { slug, sevaId } = await params;
  const temple = getTempleBySlug(slug);
  const seva = getSevaById(temple, sevaId);

  if (!temple || !seva) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-14">
      <AnimatedSection className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FF9933]">
          {temple.name}
        </p>
        <h1 className="mt-3 font-heading text-4xl text-[#5C1A1B]">
          {seva.name}
        </h1>
        <p className="mt-4 text-base text-[#5C1A1B]/70">
          {seva.description}
        </p>
      </AnimatedSection>

      <SevaBookingForm temple={temple} seva={seva} />
    </main>
  );
}
