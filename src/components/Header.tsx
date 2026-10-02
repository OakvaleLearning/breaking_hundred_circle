"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Brand } from "./Brand";
import { nav } from "@/lib/site";
import { EASE } from "./motion";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [navPath, setNavPath] = useState(pathname);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 40));

  // Collapse the mobile menu whenever the route changes, adjusting during
  // render rather than in an effect so there is no flash of the open menu.
  if (navPath !== pathname) {
    setNavPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header">
      <motion.div
        className="wrap nav"
        animate={{ height: compact ? 68 : 86 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <Brand />

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-bars" aria-hidden>
            <motion.i animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.35, ease: EASE }} />
            <motion.i animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.35, ease: EASE }} />
          </span>
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav className="links desktop-links" id="main-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              data-active={isActive(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
              <motion.span
                className="nav-underline"
                initial={false}
                animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <Link className="button nav-cta" href="/membership#join">
          <span>Join the Circle</span>
          <span className="arrow" aria-hidden>↗</span>
        </Link>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              {nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)} data-active={isActive(item.href)}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -14 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                }}
              >
                <Link className="button" href="/membership#join" onClick={() => setOpen(false)}>
                  <span>Join the Circle</span>
                  <span className="arrow" aria-hidden>↗</span>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
