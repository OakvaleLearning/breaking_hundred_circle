"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { EASE } from "./motion";

/**
 * Joining requests are collected through the Circle's Google Form.
 */
export function JoinForm() {
  return (
    <motion.div
      className="join-form"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="wide">
        <a className="button" href={site.joinForm} target="_blank" rel="noopener noreferrer">
          <span>Request joining details</span>
          <span className="arrow" aria-hidden>↗</span>
        </a>
        <p className="notice">This opens our membership form in a new tab.</p>
      </div>
    </motion.div>
  );
}
