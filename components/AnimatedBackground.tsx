"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrame = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const createParticles = () => {
      const area = window.innerWidth * window.innerHeight;

      const count = Math.min(
        75,
        Math.max(28, Math.floor(area / 22000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,

        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      const connectionDistance = 150;

      /* -------------------------------- */
      /* Connections */
      /* -------------------------------- */

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.18;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(142, 203, 255, ${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.stroke();
          }
        }
      }


      /* -------------------------------- */
      /* Particles */
      /* -------------------------------- */

      particles.forEach((particle) => {

        /* Movement */
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          /* Wrap around screen */

          if (particle.x < -10) {
            particle.x = window.innerWidth + 10;
          }

          if (particle.x > window.innerWidth + 10) {
            particle.x = -10;
          }

          if (particle.y < -10) {
            particle.y = window.innerHeight + 10;
          }

          if (particle.y > window.innerHeight + 10) {
            particle.y = -10;
          }
        }


        /* Glow */

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 7
        );

        gradient.addColorStop(
          0,
          "rgba(142, 203, 255, 0.35)"
        );

        gradient.addColorStop(
          1,
          "rgba(142, 203, 255, 0)"
        );

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius * 7,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;

        ctx.fill();


        /* Core */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(142, 203, 255, 0.65)";

        ctx.fill();

      });


      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };


    resize();

    draw();


    window.addEventListener("resize", resize);


    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );
    };

  }, []);


  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}