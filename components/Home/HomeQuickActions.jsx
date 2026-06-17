"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Trophy,
  ShieldCheck,
  Gamepad2,
  Layers,
  Zap,
} from "lucide-react";

const QUICK_ACTIONS = [
  {
    href: "/region",
    icon: Globe,
    label: "Region",
    color: "from-blue-500 to-cyan-400",
    desc: "Global Access"
  },
  {
    href: "/services",
    icon: Layers,
    label: "Services",
    color: "from-emerald-500 to-teal-400",
    desc: "All Features"
  },
  {
    href: "/games",
    icon: Gamepad2,
    label: "Games",
    color: "from-amber-500 to-orange-400",
    desc: "Play Now"
  },
  {
    href: "/games/membership/silver-membership",
    icon: ShieldCheck,
    label: "Member",
    color: "from-violet-500 to-purple-400",
    desc: "VIP Perks"
  },
  {
    href: "/leaderboard",
    icon: Trophy,
    label: "Leader",
    color: "from-rose-500 to-red-400",
    desc: "Top Ranks"
  },
];

export default function HomeQuickActions() {
  return (
    <section className="relative w-full pt-1 pb-4 -mt-2 sm:-mt-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-5 gap-1.5 sm:gap-4 max-w-lg mx-auto">
          {QUICK_ACTIONS.map((action, idx) => (
            <QuickItem
              key={idx}
              {...action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickItem({ href, icon: Icon, label, color }) {
  return (
    <div className="flex-1 min-w-0">
      <Link
        href={href}
        className="flex flex-col items-center gap-0.5 group cursor-pointer"
      >
        {/* Flat Colored Icon Container */}
        <div className={`
          relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex items-center justify-center 
          rounded-2xl border-[3px] border-[#452b1b] shadow-[0_4px_0_rgba(69,43,27,1)] 
          bg-[var(--card)] group-hover:shadow-[0_2px_0_rgba(69,43,27,1)] group-hover:translate-y-[2px] transition-all
        `}>
            {/* Icon - Always Colorful & Bold */}
            <Icon
              className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 md:w-8 md:h-8"
              style={{ color: 'var(--accent)' }} 
              strokeWidth={2.5}
            />
        </div>

        {/* Ultra-Compact Label */}
        <span className="
          text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] 
          text-zinc-500 group-hover:text-[var(--foreground)]
          transition-colors duration-300 text-center truncate px-0.5
        ">
          {label}
        </span>
      </Link>
    </div>
  );
}
