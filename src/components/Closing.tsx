"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedHeading } from "./AnimatedHeading";
import { EASE, VIEWPORT } from "./motion";

export function Closing({
  eyebrow = "The Circle is here",
  heading = "Your next chapter does not have to be a solo journey.",
  ctaLabel = "Join the Circle",
  ctaHref = "/membership#join",
}: {
  eyebrow?: string;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="closing">
      <div className="wrap">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {eyebrow}
          </motion.span>
          <AnimatedHeading text={heading} delay={0.1} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <Link className="button light" href={ctaHref}>
            <span>{ctaLabel}</span>
            <span className="arrow" aria-hidden>↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
