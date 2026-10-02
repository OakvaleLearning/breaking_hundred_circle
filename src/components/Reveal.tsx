"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger, VIEWPORT } from "./motion";

/**
 * Motion components are created once at module scope — creating them during
 * render would hand React a new component type each pass and remount children.
 */
const TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  article: motion.article,
  section: motion.section,
  nav: motion.nav,
  ul: motion.ul,
  li: motion.li,
  h2: motion.h2,
  h3: motion.h3,
  blockquote: motion.blockquote,
} as const;

type Tag = keyof typeof TAGS;

type Common = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

/** Single element that eases in once it scrolls into view. */
export function Reveal({
  children,
  as = "div",
  className,
  style,
  id,
  delay = 0,
  variants = fadeUp,
}: Common & { delay?: number; variants?: Variants }) {
  const Component = TAGS[as];
  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

/** Parent that reveals its <RevealItem> children in sequence. */
export function RevealGroup({
  children,
  as = "div",
  className,
  style,
  id,
  step = 0.09,
  delay = 0,
}: Common & { step?: number; delay?: number }) {
  const Component = TAGS[as];
  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger(step, delay)}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  as = "div",
  className,
  style,
  id,
  variants = fadeUp,
}: Common & { variants?: Variants }) {
  const Component = TAGS[as];
  return (
    <Component id={id} className={className} style={style} variants={variants}>
      {children}
    </Component>
  );
}
