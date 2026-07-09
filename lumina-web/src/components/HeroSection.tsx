"use client";

import React from "react";
import { Zap, Shield, Terminal, ArrowRight, CheckCircle, Activity, Lock, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-24 flex flex-col justify-center items-center overflow-hidden px-4 lg:px-8">
      {/* High-Precision Institutional Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Sleek Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full iaas-panel border border-white/15 text-gray-300 text-xs font-sans shadow-2xl"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="font-bold text-white tracking-wide">Lumina Cloud OS</span>
          <span className="text-gray-500 font-mono">&bull;</span>
          <span className="text-indigo-400 font-mono text-[11px] font-semibold">Sovereign AI Infrastructure v1.4.0</span>
        </motion.div>

        {/* Main Headline with Refined, Crisp Font Weight (Not Overly Heavy!) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl drop-shadow-sm"
        >
          Quantitative AI &amp; Financial <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 font-bold">
            Infrastructure OS
          </span>
        </motion.h1>

        {/* Subtitle in Crisp Inter Sans */}
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
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-xl shadow-indigo-600/30 group hover:scale-[1.03] border border-indigo-400/30"
          >
            <Zap className="w-4 h-4 text-indigo-200" />
            <span>Launch Valuation Engine</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setActiveTab("lending")}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full iaas-panel text-gray-200 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-white/30 transition-all shadow-lg hover:scale-[1.03]"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Sovereign Underwriting Protocol</span>
          </button>

          <button
            onClick={() => setActiveTab("career")}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full iaas-panel text-gray-200 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-white/30 transition-all shadow-lg hover:scale-[1.03]"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Live Telemetry HUD</span>
          </button>
        </motion.div>

        {/* Refined Holographic Telemetry Cards Grid (Sharp, Balanced Font Weight) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl mt-16 pt-12 border-t border-white/15 text-left"
        >
          {/* Card 1: Capital Dispatched */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative overflow-hidden iaas-card p-6 rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl group cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                DISPATCHED CAPITAL
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-3xl font-sans font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300 block my-1">
              $14.2M+
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono mt-3">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Sovereign Quant Models</span>
            </div>
            <span className="text-[11px] text-gray-400 font-sans block mt-1">10,000+ Monte Carlo DCF simulations verified</span>
          </motion.div>

          {/* Card 2: Underwriting Accuracy */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative overflow-hidden iaas-card p-6 rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl group cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                UNDERWRITING PRECISION
              </span>
              <span className="w-2 h-2 rounded-full bg-purple-400" />
            </div>
            <span className="text-3xl font-sans font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-300 block my-1">
              99.4%
            </span>
            <div className="flex items-center gap-1.5 text-xs text-purple-300 font-mono mt-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero-Knowledge Underwriting</span>
            </div>
            <span className="text-[11px] text-gray-400 font-sans block mt-1">Algorithmic bias and career gap anomalies eliminated</span>
          </motion.div>

          {/* Card 3: Edge Telemetry Latency */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative overflow-hidden iaas-card p-6 rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl group cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-transparent" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                EDGE LATENCY SLA
              </span>
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            </div>
            <span className="text-3xl font-mono font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 block my-1">
              14ms
            </span>
            <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono mt-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Real-Time Waveform HUD</span>
            </div>
            <span className="text-[11px] text-gray-400 font-sans block mt-1">Sub-second compensation equity ingestion</span>
          </motion.div>

          {/* Card 4: Institutional Endpoints */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative overflow-hidden iaas-card p-6 rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl group cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                INSTITUTIONAL NODES
              </span>
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-3xl font-mono font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-300 block my-1">
              520+
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono mt-3">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Active Capital Pools</span>
            </div>
            <span className="text-[11px] text-gray-400 font-sans block mt-1">Automated multi-sig smart escrow dispatch</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
