"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Check if touch device (hide on mobile/tablet touch)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move center dot immediately without delay
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isClicked ? 0.7 : isHovering ? 1.4 : 1})`;
      }

      // Check hover element
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a") || target.closest(".iaas-card") || target.closest(".iaas-panel"))) {
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

    // Smooth lerp physics for trailing circular ring (60-144hz zero lag)
    const renderRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRingRef.current) {
        const scale = isClicked ? 0.8 : isHovering ? 1.6 : 1;
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(renderRing);
    };

    renderRing();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, isClicked]);

  return (
    <>
      {/* Outer Hypnotic Trailing Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[99999] transition-colors duration-200 border-2 ${
          isHovering
            ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_24px_rgba(6,182,212,0.6)]"
            : "border-indigo-400/70 shadow-[0_0_18px_rgba(99,102,241,0.4)]"
        }`}
        style={{ willChange: "transform", transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />

      {/* Center Quantum Cyber Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[99999] transition-colors duration-150 ${
          isHovering ? "bg-white shadow-[0_0_15px_#ffffff]" : "bg-gradient-to-tr from-cyan-400 via-indigo-400 to-purple-400 shadow-[0_0_12px_#06b6d4]"
        }`}
        style={{ willChange: "transform", transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      />
    </>
  );
}
