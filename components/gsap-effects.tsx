"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function GsapEffects() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to("[data-ticker]", {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });

      gsap.to(".bg-stripes", {
        backgroundPosition: "-=16px 0px",
        ease: "none",
        duration: 3,
        repeat: -1,
      });

      gsap.to("[data-blink]", {
        opacity: 0,
        ease: "steps(1)",
        duration: 0.9,
        repeat: -1,
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
