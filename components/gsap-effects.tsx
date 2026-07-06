"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapEffects() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* Scroll progress bar under the navbar */
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 0.3,
        },
      });

      /* Ticker marquee, two identical halves so -50% loops seamlessly */
      gsap.to("[data-ticker]", {
        xPercent: -50,
        ease: "none",
        duration: 28,
        repeat: -1,
      });

      /* Diagonal stripes slowly slide, pattern repeats every 8px */
      gsap.to(".bg-stripes", {
        backgroundPosition: "-=16px 0px",
        ease: "none",
        duration: 3,
        repeat: -1,
      });

      /* Avatar gently floats */
      gsap.to("[data-float]", {
        y: -6,
        ease: "sine.inOut",
        duration: 2.2,
        yoyo: true,
        repeat: -1,
      });

      /* Verified badge heartbeat every few seconds */
      gsap.to("[data-pulse]", {
        scale: 1.18,
        ease: "sine.inOut",
        duration: 0.35,
        yoyo: true,
        repeat: 1,
        repeatDelay: 0,
        delay: 2,
        transformOrigin: "50% 50%",
        onComplete: function () {
          this.restart(true);
        },
      });

      /* Blinking terminal cursor next to FIG_001 */
      gsap.to("[data-blink]", {
        opacity: 0,
        ease: "steps(1)",
        duration: 0.9,
        repeat: -1,
      });

      /* Tags, cards, and rows stagger in as they scroll into view */
      const groups = gsap.utils.toArray<HTMLElement>("[data-stagger]");
      for (const group of groups) {
        const items = Array.from(group.children);
        gsap.set(items, { y: 14, autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: group,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(items, {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
              ease: "power2.out",
              stagger: 0.06,
            }),
        });
      }
    });

    return () => mm.revert();
  }, []);

  return null;
}
