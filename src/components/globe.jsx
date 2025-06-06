"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.5,
  mapSamples: 16000,
  mapBrightness: 1.5,
  baseColor: [90/255, 160/255, 255/255],  // ≈ [0.353, 0.627, 1.0]  // ≈ [0.310, 0.553, 0.937]  // ≈ [0.231, 0.424, 0.769], // shows map image colors clearly
  markerColor: [1, 0, 0], // red markers
  glowColor: [39/255, 75/255, 139/255],  // ≈ [0.153, 0.294, 0.545]
  map: "/assets/earthmap.jpeg", // your stylized green/blue map
  backgroundColor: [0, 0, 0], // black background (space-like)
  markers: [
    { location: [13.0827, 80.2707], size: 0.05 },
    { location: [37.5483, -121.9886], size: 0.06 },
    { location: [34.0522, -118.2437], size: 0.06 },
    { location: [25.2048, 55.2708], size: 0.05 },
    { location: [18.5204, 73.8567], size: 0.03 },
    { location: [12.9716, 77.5946], size: 0.03 },
    { location: [17.3850, 78.4867], size: 0.03 },
    { location: [11.7401, 92.6586], size: 0.02 },
    { location: [40.4637, -3.7492], size: 0.04 },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
      style={{
        backgroundImage: "url('/assets/stars-bg.jpg')", // Optional starry sky
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <canvas
        className={twMerge(
          "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
