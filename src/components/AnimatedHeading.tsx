"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion";

/**
 * Splits a heading into words and lifts each one out of a clipping mask.
 * Words stay in normal flow so wrapping and `text-wrap: balance` still work.
 */
export function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  once = true,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        style={{ display: "inline" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
        aria-hidden="false"
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.08em" }}
          >
            <motion.span
              style={{ display: "inline-block", willChange: "transform" }}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: { y: "0%", opacity: 1, transition: { duration: 0.95, ease: EASE } },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
