"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
    Home,
    Gamepad2,
    Globe2,
    ShoppingBag,
    Trophy
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const navItems = [
    { name: "Region", href: "/region", icon: Globe2 },
    { name: "Games", href: "/games", icon: Gamepad2 },
    { name: "Home", href: "/", icon: Home },
    { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
    { name: "Orders", href: "/dashboard/order", icon: ShoppingBag },
];

export default function BottomNav() {
    const pathname = usePathname();
    const [show, setShow] = useState(true);
    
    const { scrollY } = useScroll();
    const [hiddenByScroll, setHiddenByScroll] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 50) {
            setHiddenByScroll(true);
        } else {
            setHiddenByScroll(false);
        }
    });

    useEffect(() => {
        fetch("/api/ui-settings")
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data && data.data.showBottomNav === false) {
                    setShow(false);
                }
            })
            .catch(err => console.error("Failed to fetch UI settings", err));
    }, []);

    if (!show) return null;

    const isHiddenPage = 
        pathname.startsWith("/login") || 
        pathname.startsWith("/register") || 
        pathname.startsWith("/games/") || 
        pathname.startsWith("/payment") || 
        pathname.startsWith("/owner-panel") ||
        pathname.startsWith("/owner-panal") ||
        pathname.startsWith("/admin") ||
        pathname.startsWith("/wallet");

    if (isHiddenPage) return null;

    return (
        <motion.div 
            className="fixed bottom-6 left-0 right-0 z-[100] lg:hidden flex justify-center pointer-events-none px-4 pb-safe"
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 150, opacity: 0 }
            }}
            initial="visible"
            animate={hiddenByScroll ? "hidden" : "visible"}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            {/* Pompompurin Compact Themed Dock */}
            <div className="w-full max-w-[280px] bg-[var(--card)] border-[3px] border-[var(--foreground)] rounded-[2rem] shadow-[0_6px_0_var(--foreground)] p-1.5 pointer-events-auto">
                <nav className="flex items-center justify-between relative h-10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative flex items-center justify-center h-full outline-none group"
                                style={{
                                    flex: isActive ? 1.5 : 1
                                }}
                            >
                                <motion.div 
                                    className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-300 overflow-hidden ${
                                        isActive 
                                            ? "bg-[var(--accent)] text-[var(--foreground)] h-8 px-2.5 gap-1.5 border-2 border-[var(--foreground)] shadow-[2px_2px_0_var(--foreground)]" 
                                            : "bg-[var(--foreground)]/5 text-[var(--foreground)]/60 h-8 w-8 hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)]"
                                    }`}
                                    layout
                                >
                                    {item.name === "Home" ? (
                                        <div className={`relative ${isActive ? "w-4 h-4" : "w-5 h-5"} transition-all duration-300 opacity-90`}>
                                            <Image src={logo} alt="Home" fill className="object-contain drop-shadow-md" />
                                        </div>
                                    ) : (
                                        <Icon 
                                            size={isActive ? 14 : 18}
                                            strokeWidth={isActive ? 3 : 2}
                                            className={`transition-colors duration-300 ${
                                                isActive 
                                                    ? "text-[var(--foreground)]" 
                                                    : "text-[var(--foreground)]/80"
                                            }`} 
                                        />
                                    )}
                                    
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div 
                                                initial={{ width: 0, opacity: 0 }}
                                                animate={{ width: "auto", opacity: 1 }}
                                                exit={{ width: 0, opacity: 0 }}
                                                className="overflow-hidden flex items-center justify-center"
                                            >
                                                <span className="inline-block text-[var(--foreground)] text-[10px] font-black tracking-tight whitespace-nowrap">
                                                    {item.name}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </motion.div>
    );
}
