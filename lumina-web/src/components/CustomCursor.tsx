"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Ultra-fast zero-latency custom circular cursor.
 * Uses direct DOM transforms inside mousemove for 0ms physical latency.
 */
export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch/mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Apply exact physical coordinates instantly with zero damping or frame delay (0ms latency)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isClicked ? 0.7 : isHovering ? 1.4 : 1})`;
      }

      if (cursorRingRef.current) {
        const ringScale = isClicked ? 0.8 : isHovering ? 1.6 : 1;
        cursorRingRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }

      // Check hover status against interactive elements
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".iaas-card") ||
          target.closest(".iaas-panel") ||
          target.closest("input"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isHovering, isClicked]);

  return (
    <>
      {/* Outer Glowing Ring (0 Latency Real-time Tracking) */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999] transition-colors duration-150 border-2 ${
          isHovering
            ? "border-cyan-400 bg-cyan-400/15 shadow-[0_0_24px_rgba(6,182,212,0.7)]"
            : "border-indigo-400/80 shadow-[0_0_18px_rgba(99,102,241,0.5)]"
        }`}
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />

      {/* Center Quantum Cyber Dot (0 Latency Real-time Tracking) */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] transition-colors duration-150 ${
          isHovering
            ? "bg-white shadow-[0_0_14px_#ffffff]"
            : "bg-gradient-to-tr from-cyan-400 via-indigo-400 to-purple-400 shadow-[0_0_10px_#06b6d4]"
        }`}
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />
    </>
  );
}
