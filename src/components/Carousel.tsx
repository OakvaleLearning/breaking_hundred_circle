"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./motion";

export type Slide = { src: string; alt: string };

const AUTOPLAY_MS = 6000;
const SWIPE_PX = 60;

/**
 * Full-width photo carousel. Arrows, dots, swipe and the keyboard arrows all
 * move between slides; it advances on its own until the visitor interacts.
 */
export function Carousel({ slides, label }: { slides: Slide[]; label: string }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (step: number) => setState(([i]) => [(i + step + count) % count, step]),
    [count],
  );

  const jump = (to: number) => setState(([i]) => [to, to > i ? 1 : -1]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setTimeout(() => go(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, count, go]);

  if (count === 0) return null;
  const slide = slides[index];

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="carousel-stage">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.src}
            className="carousel-slide"
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d >= 0 ? "100%" : "-100%", opacity: 0.4 }),
              center: { x: "0%", opacity: 1 },
              exit: (d: number) => ({ x: d >= 0 ? "-30%" : "30%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: EASE }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_PX) go(1);
              else if (info.offset.x > SWIPE_PX) go(-1);
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              style={{ objectFit: "contain" }}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel-arrow prev"
              onClick={() => go(-1)}
              aria-label="Previous photo"
            >
              ←
            </button>
            <button
              type="button"
              className="carousel-arrow next"
              onClick={() => go(1)}
              aria-label="Next photo"
            >
              →
            </button>
          </>
        )}

        <span className="carousel-count" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      </div>

      {count > 1 && (
        <div className="carousel-dots">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => jump(i)}
            />
          ))}
        </div>
      )}

      {/* Warm the next photo once the carousel is near the viewport, so it is ready before it slides in. */}
      {count > 1 && (
        <div className="carousel-preload" aria-hidden>
          <Image
            src={slides[(index + 1) % count].src}
            alt=""
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
          />
        </div>
      )}
    </div>
  );
}
