"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`brand ${className ?? ""}`}
      aria-label="Breaking Hundred Circle, home"
    >
      <motion.span
        className="brand-mark"
        whileHover={{ rotate: -12, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
      >
        BH
      </motion.span>
      <span className="brand-text">
        Breaking
        <br />
        Hundred Circle
      </span>
    </Link>
  );
}
