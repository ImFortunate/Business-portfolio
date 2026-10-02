"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  target: number;
  format: (value: number) => string;
  duration?: number;
  className?: string;
};

// Renders the real number by default (server HTML, no-JS, crawlers) and only resets to 0
// for the count-up when the stat is still below the fold. Any failure — no
// IntersectionObserver callback, throttled/paused animation frames — ends on the target,
// never on 0.
export function CountUp({ target, format, duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState<number | null>(null);
  const armed = useRef(false);

  // Arm the animation only if the stat hasn't been seen yet.
  useEffect(() => {
    if (reduceMotion || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      setValue(0);
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;

    let start: number | null = null;
    let frame = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(progress < 1 ? Math.round(eased * target) : null);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    // Safety net in case animation frames are throttled or paused (e.g. low-power mode).
    const fallback = window.setTimeout(() => setValue(null), duration * 1000 + 500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
      setValue(null);
    };
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value ?? target)}
    </span>
  );
}
