"use client";

import React, { useEffect, useRef } from "react";

/**
 * Ultra-fast zero-latency custom circular cursor.
 * 100% vanilla DOM transforms inside mousemove for exact 0ms physical tracking.
 * Zero React state updates inside mousemove to guarantee zero re-render lag or queue delays.
 */
export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Hide custom cursor on touch/mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let isHovering = false;
    let isClicked = false;

    const updateCursorDOM = (x: number, y: number) => {
      if (cursorDotRef.current) {
        const dotScale = isClicked ? 0.7 : isHovering ? 1.4 : 1;
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        
        if (isHovering) {
          cursorDotRef.current.style.backgroundColor = "#ffffff";
          cursorDotRef.current.style.boxShadow = "0 0 14px #ffffff";
        } else {
          cursorDotRef.current.style.backgroundColor = "#06b6d4";
          cursorDotRef.current.style.boxShadow = "0 0 10px #06b6d4";
        }
      }

      if (cursorRingRef.current) {
        const ringScale = isClicked ? 0.8 : isHovering ? 1.5 : 1;
        cursorRingRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        
        if (isHovering) {
          cursorRingRef.current.style.borderColor = "#22d3ee";
          cursorRingRef.current.style.backgroundColor = "rgba(34, 211, 238, 0.12)";
          cursorRingRef.current.style.boxShadow = "0 0 24px rgba(6, 182, 212, 0.7)";
        } else {
          cursorRingRef.current.style.borderColor = "rgba(99, 102, 241, 0.85)";
          cursorRingRef.current.style.backgroundColor = "transparent";
          cursorRingRef.current.style.boxShadow = "0 0 18px rgba(99, 102, 241, 0.5)";
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

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
        isHovering = true;
      } else {
        isHovering = false;
      }

      updateCursorDOM(x, y);
    };

    const onMouseDown = (e: MouseEvent) => {
      isClicked = true;
      updateCursorDOM(e.clientX, e.clientY);
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked = false;
      updateCursorDOM(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []); // Run ONLY once on mount, never re-bind or re-render during mousemove!

  return (
    <>
      {/* Outer Glowing Ring (Exact 0ms physical latency, transform explicitly excluded from transition) */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999] border-2 border-indigo-400/85"
        style={{
          pointerEvents: "none",
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition: "border-color 0.12s ease-out, background-color 0.12s ease-out, box-shadow 0.12s ease-out",
        }}
      />

      {/* Center Quantum Cyber Dot (Exact 0ms physical latency) */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
        style={{
          pointerEvents: "none",
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition: "background-color 0.12s ease-out, box-shadow 0.12s ease-out",
        }}
      />
    </>
  );
}
