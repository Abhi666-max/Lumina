"use client";

import React from "react";
import { Zap, Shield, Terminal, ArrowRight, CheckCircle, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-24 flex flex-col justify-center items-center overflow-hidden px-4 lg:px-8 ambient-mesh-bg">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Sleek Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full iaas-panel border border-white/10 text-gray-300 text-xs font-sans shadow-lg"
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
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.06] text-white max-w-4xl"
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
          className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed font-sans font-normal"
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
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-xl shadow-indigo-600/30 group"
          >
            <Zap className="w-4 h-4 text-indigo-200" />
            <span>Launch Valuation Engine</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setActiveTab("lending")}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full iaas-panel text-gray-300 hover:text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all shadow-md"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Sovereign Underwriting Protocol</span>
          </button>

          <button
            onClick={() => setActiveTab("career")}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full iaas-panel text-gray-300 hover:text-white font-semibold text-xs sm:text-sm border border-white/10 hover:border-white/20 transition-all shadow-md"
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
            <span className="text-[11px] font-mono text-gray-500 block mb-1">CAPITAL-DISPATCHED</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              $14.2M+
            </span>
            <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1 mt-2">
              <CheckCircle className="w-3 h-3" />
              Sovereign Quant Models
            </span>
          </div>

          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-500 block mb-1">UNDERWRITING-ACCURACY</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              99.4%
            </span>
            <span className="text-[11px] text-indigo-400 font-mono block mt-2">
              Algorithmic Bias Eliminated
            </span>
          </div>

          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-500 block mb-1">EDGE-TELEMETRY</span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight font-mono">
              14ms
            </span>
            <span className="text-[11px] text-gray-400 font-mono block mt-2">
              Audio Waveform Ingest
            </span>
          </div>

          <div className="iaas-card p-5 rounded-2xl border border-white/10">
            <span className="text-[11px] font-mono text-gray-500 block mb-1">INSTITUTIONAL-NODES</span>
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
