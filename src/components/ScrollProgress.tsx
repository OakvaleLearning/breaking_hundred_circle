"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** The original 8px gradient topbar, now doubling as a reading indicator. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <div
      aria-hidden
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        height: 8,
        background: "linear-gradient(90deg, var(--plum), var(--wine), var(--gold))",
      }}
    >
      <motion.div
        style={{
          transformOrigin: "left",
          scaleX,
          height: "100%",
          background: "linear-gradient(90deg, var(--gold), #fffdfb)",
        }}
      />
    </div>
  );
}
