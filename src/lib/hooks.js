// Small, dependency-free React hooks that power the site's motion and 3D.
// Every animated surface routes through these so `prefers-reduced-motion`
// and low-power devices get a calm, fast experience automatically.

import { useCallback, useEffect, useRef, useState } from "react";

/** True when the user asked the OS to reduce motion. Reactive to changes. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function webglAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Gate the heavy WebGL hero to capable machines only:
 * wide viewport + fine pointer + enough memory/cores + WebGL support,
 * and never when reduced motion is requested. Everyone else gets the
 * lightweight CSS fallback, so the page stays fast on phones.
 */
export function useEnable3D() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduced) {
      setEnabled(false);
      return;
    }
    const evaluate = () => {
      const wide = window.matchMedia("(min-width: 820px)").matches;
      const fine = window.matchMedia("(pointer: fine)").matches;
      const mem = navigator.deviceMemory ? navigator.deviceMemory >= 4 : true;
      const cores = navigator.hardwareConcurrency
        ? navigator.hardwareConcurrency >= 4
        : true;
      setEnabled(wide && fine && mem && cores && webglAvailable());
    };
    evaluate();
    // Re-check when crossing the desktop/mobile boundary.
    const mq = window.matchMedia("(min-width: 820px)");
    mq.addEventListener("change", evaluate);
    return () => mq.removeEventListener("change", evaluate);
  }, [reduced]);

  return enabled;
}

/**
 * Reveal-on-scroll. Returns [ref, inView]. Defaults to firing once.
 * Falls back to visible immediately if IntersectionObserver is missing.
 */
export function useInView({
  threshold = 0.16,
  rootMargin = "0px 0px -10% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

/** Tracks which section id is currently centered in the viewport (for nav highlighting). */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? null);
  const key = ids.join(",");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}

/**
 * Pointer-driven 3D tilt for cards. Writes CSS custom properties
 * (--rx, --ry, --mx, --my, --tilt) directly on the element for a
 * jank-free, re-render-free effect. Disabled under reduced motion.
 * Spread the returned props on the element you want to tilt.
 */
export function useTilt({ max = 9, disabled = false } = {}) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const active = !disabled && !reduced;

  const onPointerMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      el.style.setProperty("--ry", ((px - 0.5) * 2 * max).toFixed(2) + "deg");
      el.style.setProperty("--rx", (-(py - 0.5) * 2 * max).toFixed(2) + "deg");
      el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      el.style.setProperty("--tilt", "1");
    },
    [max]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tilt", "0");
  }, []);

  if (!active) return { ref };
  return { ref, onPointerMove, onPointerLeave };
}
