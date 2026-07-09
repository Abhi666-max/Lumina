"use client";

import React, { useEffect, useRef } from "react";
import { Zap, Shield, Terminal, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse telemetry interaction
    const mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize 70 high-precision cyber constellation nodes
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);
    const nodes: Node[] = [];
    const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#c084fc"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction/repulsion interaction
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          node.x -= (dxMouse / distMouse) * force * 1.5;
          node.y -= (dyMouse / distMouse) * force * 1.5;
        }

        // Draw individual glowing node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw connecting neural network lines between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            const alpha = (1 - dist / 135) * 0.28;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect nodes directly to cursor if within telemetry radius
        if (distMouse < 150) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          const alphaMouse = (1 - distMouse / 150) * 0.45;
          ctx.strokeStyle = `rgba(6, 182, 212, ${alphaMouse})`;
          ctx.lineWidth = 1.2;
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
    <section className="relative min-h-[92vh] pt-36 pb-24 flex flex-col justify-center items-center overflow-hidden px-4 lg:px-8 ambient-mesh-bg">
      {/* 1. Animated Drifting Aurora Mesh Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-indigo-600/22 via-purple-600/18 to-cyan-500/12 rounded-full blur-[140px] pointer-events-none animate-aurora-1" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-gradient-to-bl from-cyan-500/15 via-indigo-500/15 to-transparent rounded-full blur-[130px] pointer-events-none animate-aurora-2" />

      {/* 2. Interactive Cyber Constellation Canvas Field */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-85"
      />

      {/* 3. High-Precision Institutional Content Overlay (z-10) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Sleek Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full iaas-panel border border-white/10 text-gray-300 text-xs font-sans shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="font-semibold text-white">Lumina Cloud OS</span>
          <span className="text-gray-500 font-mono">&bull;</span>
          <span className="text-indigo-400 font-mono text-[11px]">Sovereign AI Infrastructure v1.4.0</span>
        </motion.div>

        {/* Main Headline in Outfit Font */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.06] text-white max-w-4xl drop-shadow-sm"
        >
          Quantitative AI &amp; Financial <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
            Infrastructure OS
          </span>
        </motion.h1>

        {/* Subtitle in Inter Font */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-sans font-normal"
        >
          High-precision multi-agent quantitative modeling, bias-free alternative underwriting protocols, and real-time audio telemetry engineered for high-growth enterprises and founders.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 font-sans"
        >
          <button
            onClick={() => setActiveTab("fintech")}
            className="flex items-center gap-2 px-6.5 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-xl shadow-indigo-600/30 group hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4 text-indigo-200" />
            <span>Launch Valuation Engine</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setActiveTab("lending")}
            className="flex items-center gap-2 px-6.5 py-3.5 rounded-full iaas-panel text-gray-300 hover:text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all shadow-md hover:scale-[1.02]"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Sovereign Underwriting Protocol</span>
          </button>

          <button
            onClick={() => setActiveTab("career")}
            className="flex items-center gap-2 px-6.5 py-3.5 rounded-full iaas-panel text-gray-300 hover:text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all shadow-md hover:scale-[1.02]"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Live Telemetry HUD</span>
          </button>
        </motion.div>

        {/* Real-time Telemetry Stats Console Grid in JetBrains Mono */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mt-16 pt-12 border-t border-white/10 text-left"
        >
          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-400 block mb-1">CAPITAL-DISPATCHED</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              $14.2M+
            </span>
            <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 mt-2">
              <CheckCircle className="w-3 h-3" />
              Sovereign Quant Models
            </span>
          </div>

          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-400 block mb-1">UNDERWRITING-ACCURACY</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              99.4%
            </span>
            <span className="text-[11px] text-indigo-400 font-mono block mt-2">
              Algorithmic Bias Eliminated
            </span>
          </div>

          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-400 block mb-1">EDGE-TELEMETRY</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight font-mono">
              14ms
            </span>
            <span className="text-[11px] text-gray-400 font-mono block mt-2">
              Audio Waveform Ingest
            </span>
          </div>

          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-400 block mb-1">INSTITUTIONAL-NODES</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight font-mono">
              520+
            </span>
            <span className="text-[11px] text-emerald-400 font-mono block mt-2">
              Connected Capital Pools
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
