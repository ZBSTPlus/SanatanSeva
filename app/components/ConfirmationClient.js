"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConfirmationClient() {
  const searchParams = useSearchParams();
  const temple = searchParams.get("temple") || "Selected Temple";
  const seva = searchParams.get("seva") || "Sacred Seva";
  const name = searchParams.get("name") || "Devotee";

  const date = useMemo(() => {
    const now = new Date();
    return now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  return (
    <div className="mt-12 rounded-[36px] border border-[#D4AF37]/20 bg-white/80 p-10 text-center shadow-[0_26px_70px_rgba(92,26,27,0.15)]">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4">
        <div className="diya" />
        <div>
          <p className="text-sm text-[#5C1A1B]/60">Temple</p>
          <p className="font-heading text-xl text-[#5C1A1B]">{temple}</p>
        </div>
        <div>
          <p className="text-sm text-[#5C1A1B]/60">Seva</p>
          <p className="font-heading text-xl text-[#5C1A1B]">{seva}</p>
        </div>
        <div>
          <p className="text-sm text-[#5C1A1B]/60">Devotee</p>
          <p className="font-heading text-xl text-[#5C1A1B]">{name}</p>
        </div>
        <div>
          <p className="text-sm text-[#5C1A1B]/60">Date</p>
          <p className="font-heading text-lg text-[#5C1A1B]">{date}</p>
        </div>
        <Link href="/temples" className="btn-golden mt-4">
          Offer Another Seva
        </Link>
      </div>
    </div>
  );
}
