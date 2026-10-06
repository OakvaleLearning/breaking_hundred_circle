"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * The Circle's logo. `tone="dark"` (black logo) sits on light backgrounds,
 * `tone="light"` (white logo) on dark ones.
 */
export function Brand({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={`brand ${className ?? ""}`}
      aria-label="Breaking Hundred Circle, home"
    >
      <motion.span
        className="brand-logo"
        whileHover={{ rotate: -6, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
      >
        <Image
          src={tone === "light" ? "/logo/logo_W.png" : "/logo/logo_B.png"}
          alt=""
          width={2500}
          height={2500}
          sizes="(max-width: 700px) 96px, 120px"
          loading="eager"
        />
      </motion.span>
    </Link>
  );
}
