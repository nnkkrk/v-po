"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiXCircle,
  FiLoader,
  FiHome,
  FiShoppingBag,
  FiArrowRight,
  FiHelpCircle
} from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function TopupComplete() {
  const [status, setStatus] = useState("checking"); // checking | success | failed
  const [message, setMessage] = useState("Checking payment...");
  const router = useRouter();

  // Trigger confetti boom on success
  useEffect(() => {
    if (status === "success") {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#3b82f6', '#f43f5e', '#a855f7', '#ffffff', '#eab308']
      });
    }
  }, [status]);

  useEffect(() => {
    const orderId = localStorage.getItem("pending_topup_order");

    if (!orderId) {
      setStatus("failed");
      setMessage("Order not found");
      return;
    }

    async function verify() {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("/api/order/verify-topup-payment", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ orderId }),
        });

        const data = await res.json();

        if (data?.success) {
          setStatus("success");
          setMessage("Payment successful");
          localStorage.removeItem("pending_topup_order");
        } else {
          setStatus("failed");
          setMessage("Payment failed");
        }
      } catch (err) {
        console.error("Topup verification error:", err);
        setStatus("failed");
        setMessage("Connection error");
      }
    }

    // Small delay to make it feel deliberate
    const timeout = setTimeout(() => {
      verify();
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[var(--background)] px-4 overflow-hidden">

      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div
        className="w-full max-w-sm relative z-10"
      >
        <div className="bg-[var(--card)] border-[4px] border-[#452b1b] shadow-[0_8px_0_rgba(69,43,27,1)] rounded-3xl p-6 md:p-8 overflow-hidden group">

          {/* TOP DECORATIVE BAR */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <AnimatePresence mode="wait">
            <div
              key={status}
              className="flex flex-col items-center text-center w-full"
            >
              {/* ICON SECTION */}
              <div className="mb-6 relative">
                {status === "checking" && (
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FiLoader className="text-3xl animate-spin text-[var(--accent)]" />
                    </div>
                    {/* Placeholder to keep size consistent */}
                    <div className="w-20 h-20 rounded-full border-4 border-[#452b1b] bg-[var(--background)] shadow-[0_4px_0_rgba(69,43,27,1)]" />
                  </div>
                )}

                {status === "success" && (
                  <div className="w-32 h-32 relative mx-auto drop-shadow-xl hover:-translate-y-2 transition-transform">
                    <Image src="/pompom_diamond.png" alt="Success" fill className="object-contain" />
                  </div>
                )}

                {status === "failed" && (
                  <div className="w-32 h-32 relative mx-auto drop-shadow-xl hover:-translate-y-2 transition-transform">
                    <Image src="/pompom_sleeping.png" alt="Failed" fill className="object-contain grayscale opacity-80" />
                  </div>
                )}
              </div>

              {/* MESSAGE SECTION */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${status === 'success' ? 'bg-green-500' : status === 'failed' ? 'bg-red-500' : 'bg-amber-500'}`} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted opacity-60">Status</span>
                </div>

                <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-foreground leading-[0.9]">
                  {message}
                </h1>

                <p className="text-[10px] md:text-xs font-bold text-muted/60 max-w-[280px] mx-auto uppercase tracking-wide leading-relaxed">
                  {status === "checking" && "Please wait while we confirm your payment."}
                  {status === "success" && "Your order is confirmed and will be delivered soon."}
                  {status === "failed" && "If money was deducted, your diamonds will be added soon or your amount will be refunded. Please contact support if needed."}
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="w-full space-y-3 mt-4">
                <button
                  onClick={() => router.push("/")}
                  className="w-full py-4 kawaii-btn bg-[#452b1b] text-white flex items-center justify-center gap-3 font-black italic uppercase tracking-widest text-[10px]"
                >
                  <FiHome size={14} />
                  Go Back Home
                  <FiArrowRight />
                </button>

                {status === "success" && (
                  <Link href="/dashboard/order" className="w-full flex">
                    <button className="w-full py-4 kawaii-btn bg-[var(--accent)] text-[#452b1b] flex items-center justify-center gap-3 font-black italic uppercase tracking-widest text-[10px]">
                      <FiShoppingBag size={14} />
                      Check Order
                    </button>
                  </Link>
                )}

                {status === "failed" && (
                  <Link href="/support" className="w-full flex">
                    <button className="w-full py-4 kawaii-btn bg-red-500 text-white flex items-center justify-center gap-3 font-black italic uppercase tracking-widest text-[10px]">
                      <FiHelpCircle size={14} />
                      Contact Support
                    </button>
                  </Link>
                )}

                <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-muted opacity-40 justify-center pt-2">
                  <span className="flex items-center gap-1.5"><FiShoppingBag size={10} /> Secure</span>
                  <div className="w-1 h-1 rounded-full bg-foreground/10" />
                  <span>Instant</span>
                </div>
              </div>

            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
