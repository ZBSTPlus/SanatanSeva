import { Suspense } from "react";
import AnimatedSection from "../components/AnimatedSection";
import ConfirmationClient from "../components/ConfirmationClient";

export default function ConfirmationPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-14">
      <AnimatedSection className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#FF9933]">
          Seva Confirmation
        </p>
        <h1 className="mt-3 font-heading text-4xl text-[#5C1A1B]">
          Blessings are on their way
        </h1>
        <p className="mt-4 text-base text-[#5C1A1B]/70">
          Your seva has been successfully registered. The pooja will be
          performed at the temple and blessings will reach you soon.
        </p>
      </AnimatedSection>
      <Suspense fallback={<div className="mt-12 h-40" />}>
        <ConfirmationClient />
      </Suspense>
    </main>
  );
}
