"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Cap at 28 ultra-optimized nodes for buttery smooth 60+ FPS without thread contention
    const nodeCount = Math.min(Math.floor((width * height) / 38000), 28);
    const nodes: Node[] = [];
    const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#c084fc"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const len = nodes.length;
      for (let i = 0; i < len; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw individual glowing dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Connect nearby nodes (squared distance limit 130*130 = 16900)
        for (let j = i + 1; j < len; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 16900) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            const alpha = (1 - dist / 130) * 0.24;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09090b]">
      {/* Drifting Aurora Mesh Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[420px] bg-indigo-600/16 rounded-full blur-[160px] animate-aurora-1 will-change-transform pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[650px] h-[360px] bg-purple-600/14 rounded-full blur-[150px] animate-aurora-2 will-change-transform pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[320px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Neural Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-75"
      />
    </div>
  );
}
