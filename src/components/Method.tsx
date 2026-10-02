"use client";

import { motion } from "framer-motion";
import { method } from "@/lib/site";
import { EASE, VIEWPORT } from "./motion";

export function Method() {
  return (
    <motion.div
      className="method"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}
    >
      {method.map((item) => (
        <motion.div
          key={item.n}
          className="method-item"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
          }}
        >
          <span className="glow" aria-hidden />
          <span className="idx">{item.n}</span>
          <strong>{item.name}</strong>
          <p>{item.body}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
