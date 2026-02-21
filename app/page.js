import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./components/AnimatedSection";
import TempleCard from "./components/TempleCard";
import { temples } from "./data/temples";

export default function Home() {
  return (
    <main className="hero-sunrise">
      <section className="relative overflow-hidden">
        <div className="floating-particles absolute inset-0">
          <span style={{ left: "12%", top: "30%" }} />
          <span style={{ left: "30%", top: "15%" }} />
          <span style={{ left: "52%", top: "25%" }} />
          <span style={{ left: "72%", top: "18%" }} />
          <span style={{ left: "85%", top: "35%" }} />
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pb-20 pt-16 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#FF9933]">
              SanatanSeal
            </p>
            <h1 className="font-heading text-4xl leading-tight text-[#5C1A1B] md:text-5xl">
              Receive Blessings from Sacred Temples Across India
            </h1>
            <p className="mt-5 text-base leading-7 text-[#5C1A1B]/70 md:text-lg">
              SanatanSeal is on a mission to bring every temple across the globe
              to your home.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link href="/temples" className="btn-golden">
                Start Your Darshan
              </Link>
              <span className="text-sm text-[#5C1A1B]/60">
                A sacred digital pilgrimage experience
              </span>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute -left-8 top-6 h-48 w-48 rounded-full bg-[#FFD8A6]/60 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#D4AF37]/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/30 bg-white/70 p-4 shadow-[0_30px_80px_rgba(92,26,27,0.2)]">
              <Image
                src="/images/temple-hero.svg"
                alt="Sacred temple silhouette"
                width={520}
                height={420}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 rounded-[32px] border border-[#D4AF37]/20 bg-white/70 p-8 text-center md:grid-cols-3 md:text-left">
          {[
            {
              title: "Choose Temple",
              body: "Browse sacred temples across India and select the one that calls to your heart.",
              icon: "🛕",
            },
            {
              title: "Select Seva",
              body: "Pick a divine seva and set your sankalpam with devotion and clarity.",
              icon: "🌸",
            },
            {
              title: "Receive Blessings & Prasadam",
              body: "The temple performs the pooja and blessings find their way to you.",
              icon: "✨",
            },
          ].map((step) => (
            <div key={step.title} className="flex flex-col gap-3">
              <span className="text-2xl">{step.icon}</span>
              <h3 className="font-heading text-lg text-[#5C1A1B]">
                {step.title}
              </h3>
              <p className="text-sm text-[#5C1A1B]/70">{step.body}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#FF9933]">
                Featured Temples
              </p>
              <h2 className="font-heading text-3xl text-[#5C1A1B]">
                Experience the divine from your home
              </h2>
            </div>
            <Link href="/temples" className="btn-golden">
              Explore All Temples
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {temples.slice(0, 4).map((temple) => (
              <TempleCard key={temple.slug} temple={temple} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Global Temples Coming Soon",
            "Multi-language Support Coming Soon",
          ].map((notice) => (
            <div
              key={notice}
              className="rounded-3xl border border-[#D4AF37]/30 bg-white/70 p-8 text-center shadow-[0_20px_50px_rgba(92,26,27,0.12)]"
            >
              <p className="font-heading text-xl text-[#5C1A1B]">{notice}</p>
              <p className="mt-3 text-sm text-[#5C1A1B]/70">
                We are preparing a wider horizon of sacred connections for every
                devotee.
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="rounded-[40px] border border-[#D4AF37]/20 bg-white/70 p-10 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#FF9933]">
            About SanatanSeal
          </p>
          <h2 className="mt-3 font-heading text-3xl text-[#5C1A1B]">
            A sacred seal for every prayer
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5C1A1B]/70">
            SanatanSeal curates a devotional journey that feels calm, sacred, and
            deeply personal. With every seva, we honor the living traditions of
            India’s temples and help devotees stay connected to their spiritual
            roots.
          </p>
        </div>
      </AnimatedSection>
    </main>
  );
}
