"use client";

import { motion } from "framer-motion";

/** Infinite horizontal ticker — two identical tracks sliding as one. */
export function Marquee({ items, speed = 26 }: { items: string[]; speed?: number }) {
  const row = (
    <div className="marquee-item">
      {items.map((item) => (
        <span key={item} style={{ display: "inline-flex", gap: 42, alignItems: "center" }}>
          {item}
          <i aria-hidden>✦</i>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div style={{ display: "flex" }} aria-hidden={false}>{row}{row}</div>
        <div style={{ display: "flex" }} aria-hidden>{row}{row}</div>
      </motion.div>
    </div>
  );
}
