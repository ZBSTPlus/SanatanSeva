import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#D4AF37]/20 bg-[#FDF6EC]/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-lg tracking-[0.2em] text-[#5C1A1B]"
        >
          SanatanSeal
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-[#5C1A1B]">
          <Link href="/temples" className="hover:text-[#FF9933]">
            Temples
          </Link>
          <Link href="/" className="hover:text-[#FF9933]">
            About
          </Link>
          <Link href="/temples" className="btn-golden">
            Start Your Darshan
          </Link>
        </div>
      </nav>
    </header>
  );
}
