"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logo from "@/public/logo.png";
import Skeleton from "@/components/Skeleton";


export default function GameBannerCarousel() {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  /* ================= FETCH ================= */
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/game-banners");
        const json = await res.json();
        if (!active) return;
        setBanners(json?.data || []);
      } catch {
        if (active) setBanners([]);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => (active = false);
  }, []);

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (banners.length <= 1 || isHovered) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(id);
  }, [banners.length, isHovered]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  if (loading) {
    return (
      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-12 mt-2 md:mt-6">
        <Skeleton height={340} className="w-full rounded-[2rem] md:rounded-[3.5rem]" />
      </div>
    );
  }

  if (!banners.length) return null;

  return (
    <div
      className="relative w-full max-w-[800px] mx-auto px-12 sm:px-16 md:px-32 my-8 md:my-12 select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND GLOW */}


      <div className="relative w-full">
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[280px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-[4px] border-[#452b1b] shadow-[0_12px_0_rgba(69,43,27,1)] bg-black z-20">
          <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Link href={banners[current].bannerLink || "/"} className="block w-full h-full relative group/banner">
              {/* IMAGE WITH KEN BURNS EFFECT */}
                <Image
                  src={banners[current].bannerImage || logo}
                  alt={banners[current].bannerTitle || "Game banner"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />

           
            

              {/* VIGNETTE */}
              <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[3.5rem] pointer-events-none" />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION BUTTONS (DESKTOP ONLY) */}
        <div className="hidden lg:block">
          <button
            onClick={(e) => { e.preventDefault(); goPrev(); }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); goNext(); }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
        
        {/* PROGRESS INDICATORS (MOVED INSIDE) */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center items-center gap-3">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="h-4 flex items-center group/dot"
            >
              <div className={`h-[4px] rounded-full transition-all duration-700 relative overflow-hidden ${current === i
                ? "w-8 bg-white border border-[#452b1b]/50"
                : "w-3 bg-white/40 border border-white/20 group-hover/dot:bg-white/60"
                }`}>
                {current === i && (
                  <div className="absolute inset-0 bg-amber-400" />
                )}
              </div>
            </button>
          ))}
        </div>
        </div>

        {/* 2 POMPOMPURINS PUSHING FROM SIDES */}
        <div className="absolute top-[100%] -translate-y-1/2 -left-[35px] md:-left-[60px] z-30 pointer-events-none">
          <Image src="/pompom_push_nowall.png" alt="Pompompurin pushing left" width={55} height={55} className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] md:w-[90px] md:h-[90px]" />
        </div>
        <div className="absolute top-[100%] -translate-y-1/2 -right-[35px] md:-right-[60px] z-30 pointer-events-none">
          <Image src="/pompom_push_nowall.png" alt="Pompompurin pushing right" width={55} height={55} className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] md:w-[90px] md:h-[90px] scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
}
