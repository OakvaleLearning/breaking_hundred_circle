"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { offerings } from "@/lib/site";
import { EASE, VIEWPORT } from "./motion";

export function OfferCards() {
  return (
    <motion.div
      className="grid3"
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      {offerings.map((offer) => (
        <motion.article
          key={offer.title}
          className="offer-card"
          style={{ "--accent": offer.accent } as React.CSSProperties}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
          }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <span className="sheen" aria-hidden />
          <span className="num">{offer.num}</span>
          <h3>{offer.title}</h3>
          <p>{offer.body}</p>
          <Link className="text-link" href={offer.href}>
            {offer.cta} <span aria-hidden>↗</span>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
