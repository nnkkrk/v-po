"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import pompomDiamond from "@/public/pompom_diamond.png";

export default function BuyPanel({
  activeItem,
  onBuy,
  redirecting,
  buyPanelRef,
  gameLogo,
}) {
  return (
    <div className="relative max-w-6xl mx-auto mt-4 mb-4">
      {/* Pompompurin Peeking Image */}
      <div className="absolute -top-[55px] right-2 md:-top-[70px] md:right-8 z-10 w-[80px] h-[80px] md:w-[100px] md:h-[100px] pointer-events-none drop-shadow-xl">
        <Image
          src={pompomDiamond}
          alt="Pompompurin Diamond"
          fill
          className="object-contain"
        />
      </div>

      <div
        ref={buyPanelRef}
        className="relative z-20 bg-[var(--background)] border-[3px] border-[var(--foreground)]
        rounded-[2rem] p-3 md:p-4 flex flex-col gap-3 shadow-[0_6px_0_var(--foreground)]"
      >
        <div className="flex gap-3 items-center">
          <div className="relative w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-xl overflow-hidden border-2 border-[var(--foreground)] bg-[var(--card)] shrink-0">
            <Image
              src={activeItem.itemImageId?.image || gameLogo || logo}
              alt={activeItem.itemName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 min-w-0 pr-16 md:pr-24">
            <h2 className="text-sm md:text-base font-black text-[var(--foreground)] uppercase tracking-tight line-clamp-1">
              {activeItem.itemName}
            </h2>

            <div className="flex items-center gap-2 mt-0.5">
              <p className="text-xl md:text-2xl font-black text-[var(--accent)] drop-shadow-[1px_1px_0_var(--foreground)]">
                ₹{activeItem.sellingPrice}
              </p>

              {activeItem.dummyPrice && (
                <p className="text-xs font-bold line-through text-[var(--foreground)]/40">
                  ₹{activeItem.dummyPrice}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={() => onBuy(activeItem)}
          disabled={redirecting}
          className={`w-full py-2.5 md:py-3 rounded-xl font-black text-base md:text-lg uppercase tracking-wider transition-all
            ${
              redirecting
                ? "bg-[var(--foreground)]/20 border-[3px] border-[var(--foreground)]/20 text-[var(--foreground)]/50 cursor-not-allowed"
                : "bg-[var(--accent)] border-[3px] border-[var(--foreground)] text-[var(--foreground)] shadow-[0_4px_0_var(--foreground)] hover:translate-y-[2px] hover:shadow-[0_2px_0_var(--foreground)]"
            }`}
        >
          {redirecting ? "Redirecting…" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
