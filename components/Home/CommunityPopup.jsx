"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, ArrowRight } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

const COMMUNITY_URL = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL_URL || "https://whatsapp.com/channel/0029Vb7jVuaLtOj7Q889qV1k";
const STORAGE_KEY = "community_popup_dismissed_v9";

export default function CommunityPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          {/* Compact Themed Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-[280px] bg-[var(--card)] border-[4px] border-[var(--foreground)] rounded-[2.5rem] shadow-[0_10px_0_var(--foreground)] mt-12"
          >
            {/* Peeking Pompompurin */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <Image src="/pompom_gaming.png" alt="Pompompurin" width={110} height={110} className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" />
            </div>
            <div className="p-5 flex flex-col items-center gap-4">
              {/* Header Section */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--accent)]/10 rounded-2xl flex items-center justify-center text-[var(--accent)] border border-[var(--accent)]/20 shadow-lg shadow-[var(--accent)]/5">
                    <MessageSquare size={16} />
                  </div>
                  <h2 className="text-[15px] font-black uppercase tracking-tight text-[var(--foreground)]">
                    Official Channel
                  </h2>
                </div>
                <p className="text-[8px] font-bold text-[var(--muted)]/60 uppercase tracking-widest mt-1">
                  Updates & Giveaways
                </p>
              </div>

              {/* QR Code */}
              <div className="p-3 bg-white rounded-3xl border-[3px] border-[var(--foreground)] shadow-[0_4px_0_var(--foreground)]">
                <QRCodeSVG
                  value={COMMUNITY_URL}
                  size={135}
                  level="M"
                />
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col items-center space-y-3">
                <a
                  href={COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[85%] py-3 rounded-2xl bg-[var(--accent)] border-[3px] border-[var(--foreground)] shadow-[0_4px_0_var(--foreground)] flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span className="text-[var(--foreground)] font-black uppercase tracking-[0.1em] italic text-[11px]">Join Now</span>
                  <ArrowRight size={14} strokeWidth={3} className="text-[var(--foreground)]" />
                </a>

                <button
                  onClick={handleClose}
                  className="w-full text-[8px] font-black uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-5 text-[var(--muted)] hover:text-[var(--foreground)] transition-all"
            >
              <X size={16} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
