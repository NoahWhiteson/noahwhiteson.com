"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; v: number };
type Ripple = { x: number; y: number; t: number };

const GAP = 24;
const SPOT_RADIUS = 90;
const RIPPLE_SPEED = 280;
const RIPPLE_LIFE = 1.4;

export function HeroPlayground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    const pointer = { x: -9999, y: -9999 };
    const ripples: Ripple[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const fgColor = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--foreground")
        .trim();

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          dots.push({ x, y, v: 0 });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const fg = fgColor();
      for (const dot of dots) {
        ctx.fillStyle = `hsl(${fg} / 0.18)`;
        ctx.fillRect(dot.x - 0.75, dot.y - 0.75, 1.5, 1.5);
      }
    };

    const start = performance.now();

    const frame = (now: number) => {
      const t = (now - start) / 1000;
      const fg = fgColor();
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const wave =
          0.09 +
          0.07 *
            Math.sin(dot.x * 0.018 + t * 0.9) *
            Math.cos(dot.y * 0.022 - t * 0.7);

        const dx = dot.x - pointer.x;
        const dy = dot.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        const spot = Math.exp(-d2 / (2 * SPOT_RADIUS * SPOT_RADIUS));

        let rip = 0;
        for (const r of ripples) {
          const age = t - r.t;
          if (age < 0 || age > RIPPLE_LIFE) continue;
          const rx = dot.x - r.x;
          const ry = dot.y - r.y;
          const dist = Math.sqrt(rx * rx + ry * ry);
          const band = Math.abs(dist - age * RIPPLE_SPEED);
          if (band < 30) {
            rip += (1 - band / 30) * (1 - age / RIPPLE_LIFE);
          }
        }

        const target = Math.min(1, wave + spot * 0.95 + rip);
        dot.v += (target - dot.v) * 0.14;

        const alpha = 0.07 + dot.v * 0.88;
        const size = 1.5 + dot.v * 2.6;
        ctx.fillStyle = `hsl(${fg} / ${alpha.toFixed(3)})`;
        ctx.fillRect(dot.x - size / 2, dot.y - size / 2, size, size);
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        if (t - ripples[i].t > RIPPLE_LIFE) ripples.splice(i, 1);
      }

      raf = requestAnimationFrame(frame);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        t: (performance.now() - start) / 1000,
      });
    };

    build();

    const observer = new ResizeObserver(() => {
      build();
      if (reducedMotion) drawStatic();
    });
    observer.observe(canvas);

    if (reducedMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerleave", onPointerLeave);
      canvas.addEventListener("click", onClick);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return <canvas ref={canvasRef} className={`cursor-crosshair ${className ?? ""}`} />;
}
