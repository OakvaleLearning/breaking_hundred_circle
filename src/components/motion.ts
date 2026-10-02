import type { Variants } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const maskUp: Variants = {
  hidden: { opacity: 0, y: "55%", filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

export const VIEWPORT = { once: true, amount: 0.25 } as const;
