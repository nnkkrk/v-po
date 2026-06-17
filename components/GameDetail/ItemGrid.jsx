"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Image from "next/image";

export default function ItemGrid({
  items,
  gameLogo,
  activeItem,
  setActiveItem,
  buyPanelRef,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.02 }
        }
      }}
      className="max-w-6xl mx-auto mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      {items.map((item, index) => {
        const isSelected = activeItem?.itemSlug === item.itemSlug;
        const discount = item.dummyPrice
          ? Math.round(((item.dummyPrice - item.sellingPrice) / item.dummyPrice) * 100)
          : 0;

        return (
          <motion.div
            key={item.itemSlug}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActiveItem(item);
              buyPanelRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className={`
              relative overflow-hidden group
              rounded-2xl transition-all duration-300
              flex items-center gap-3 min-h-[82px] p-3 cursor-pointer
              ${isSelected
                ? "border-[3px] border-[var(--foreground)] bg-[var(--background)] shadow-[0_6px_0_var(--foreground)] translate-y-[-2px]"
                : "border-2 border-[var(--foreground)]/20 bg-[var(--card)] hover:border-[var(--foreground)]/50 hover:shadow-[0_4px_0_var(--foreground)] hover:translate-y-[-2px]"
              }
            `}
          >
            {/* Selection Checkmark */}
            {isSelected && (
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute top-2 right-2 z-20 w-5 h-5 bg-[var(--accent)] border-2 border-[var(--foreground)] text-[var(--foreground)] rounded-full flex items-center justify-center shadow-[2px_2px_0_var(--foreground)]"
              >
                <FiCheck size={12} strokeWidth={4} />
              </motion.div>
            )}

            {/* Game Icon */}
            <div className={`
              relative w-10 h-10 rounded-xl overflow-hidden shrink-0 transition-all duration-500
              ${isSelected ? "ring-1 ring-[var(--accent)]/50 scale-105" : "grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0"}
            `}>
              <Image
                src={item.itemImageId?.image || gameLogo}
                alt={item.itemName}
                fill
                sizes="40px"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Header: Name & Price */}
            <div className="relative z-10 flex flex-col flex-1 h-full justify-between overflow-hidden">
              <div className="flex flex-col">
                <p className={`font-black text-[12px] uppercase tracking-tight transition-colors duration-300 line-clamp-2 leading-tight ${isSelected ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/70'}`}>
                  {item.itemName}
                </p>
                {discount > 0 && (
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter mt-0.5">
                    SAVE {discount}%
                  </span>
                )}
              </div>

              <div className="mt-1 flex items-baseline gap-1">
                <span className={`text-[10px] font-bold ${isSelected ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/50'}`}>₹</span>
                <p className={`text-lg font-black tracking-tighter transition-all duration-300 ${isSelected ? 'text-[var(--foreground)] scale-105 origin-left' : 'text-[var(--foreground)]/80'}`}>
                  {item.sellingPrice}
                </p>
              </div>
            </div>


          </motion.div>
        );
      })}
    </motion.div>
  );
}
