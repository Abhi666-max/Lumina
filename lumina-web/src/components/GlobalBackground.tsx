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

    // Global mouse telemetry interaction
    const mouse = { x: -1000, y: -1000, radiusSq: 180 * 180 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Cap at 38 optimized nodes to ensure 60+ FPS buttery smooth performance across all laptops/mobiles
    const nodeCount = Math.min(Math.floor((width * height) / 28000), 38);
    const nodes: Node[] = [];
    const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#c084fc"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.8 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes with high-performance zero-blur passes
      const len = nodes.length;
      for (let i = 0; i < len; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off screen boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction/repulsion interaction (Using squared distances to avoid Math.sqrt overhead)
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        if (distMouseSq < mouse.radiusSq) {
          const distMouse = Math.sqrt(distMouseSq);
          const force = (180 - distMouse) / 180;
          node.x -= (dxMouse / distMouse) * force * 1.4;
          node.y -= (dyMouse / distMouse) * force * 1.4;
        }

        // Draw individual glowing dot (No expensive per-circle shadowBlur filter inside loop!)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw connecting neural network lines between nearby nodes (Using squared distance limit 135*135 = 18225)
        for (let j = i + 1; j < len; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 18225) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            const alpha = (1 - dist / 135) * 0.28;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect nodes directly to cursor across any tab if within range (160*160 = 25600)
        if (distMouseSq < 25600) {
          const distMouse = Math.sqrt(distMouseSq);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          const alphaMouse = (1 - distMouse / 160) * 0.42;
          ctx.strokeStyle = `rgba(6, 182, 212, ${alphaMouse})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#09090b]">
      {/* 1. Global Drifting Aurora Mesh Blobs (Optimized opacity & blur for pure GPU composition) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[420px] bg-indigo-600/18 rounded-full blur-[160px] animate-aurora-1 will-change-transform pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[650px] h-[360px] bg-purple-600/14 rounded-full blur-[150px] animate-aurora-2 will-change-transform pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[320px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Global Interactive Neural Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />
    </div>
  );
}
