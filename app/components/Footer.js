export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#FDF6EC]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-[#5C1A1B]">
        <p className="font-heading text-base tracking-[0.15em]">
          Powered by SanatanSeal
        </p>
        <p className="text-[#5C1A1B]/80">
          Sealing Faith. Delivering Blessings.
        </p>
        <a
          href="https://sanatanseal.in/"
          className="text-[#FF9933] hover:text-[#D4AF37]"
        >
          https://sanatanseal.in/
        </a>
      </div>
    </footer>
  );
}
