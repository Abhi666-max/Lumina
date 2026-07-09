"use client";

import React from "react";
import { Code, GitBranch, ExternalLink, Sparkles, Activity } from "lucide-react";

// Crisp inline SVGs for social verification icons (guaranteed 100% reliable)
const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current text-blue-400 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.67a1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current text-pink-400 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current text-cyan-400 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#09090b]/55 backdrop-blur-2xl border-t border-white/10 mt-28 pt-16 pb-12 px-6 lg:px-12 relative z-10 font-sans">
      {/* Top Subtle Ambient Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />

      {/* Main 4-Column Linear/Vercel Clean Grid (No Clunky Boxes!) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14">
        {/* Column 1: Brand & Core SLA Status (Col-span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#09090b] rounded-xl flex items-center justify-center font-sans font-black text-indigo-300 text-xs">
                  L/C
                </div>
              </div>
              <span className="text-xl font-sans font-extrabold tracking-tight text-white">
                Lumina Cloud OS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Sovereign quantitative AI valuation, multi-agent financial modeling, and zero-knowledge underwriting infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono text-gray-400 pt-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              All Systems Operational
            </span>
            <span>&bull;</span>
            <span className="text-gray-500">us-east-1</span>
          </div>
        </div>

        {/* Column 2: Platform Modules (Col-span 3) */}
        <div className="lg:col-span-3 flex flex-col gap-2.5 text-sm">
          <span className="text-[11px] font-mono font-bold tracking-wider text-indigo-400 uppercase mb-1">
            Platform Modules
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Quantitative DCF Engine
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Sovereign Underwriting Protocol
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Real-Time Telemetry HUD
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Edge IaaS Code Sandbox
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Zero-Knowledge Verification
          </span>
        </div>

        {/* Column 3: Security & Compliance Specs (Col-span 3) */}
        <div className="lg:col-span-3 flex flex-col gap-2.5 text-sm">
          <span className="text-[11px] font-mono font-bold tracking-wider text-indigo-400 uppercase mb-1">
            Security &amp; Compliance
          </span>
          <span className="text-gray-400 py-0.5 flex items-center justify-between pr-4">
            <span>Algorithmic Bias:</span>
            <span className="text-emerald-400 font-mono font-medium text-xs">0.00% Anomaly</span>
          </span>
          <span className="text-gray-400 py-0.5 flex items-center justify-between pr-4">
            <span>Execution Latency:</span>
            <span className="text-cyan-400 font-mono font-medium text-xs">&lt; 14.2ms</span>
          </span>
          <span className="text-gray-400 py-0.5 flex items-center justify-between pr-4">
            <span>Cryptography:</span>
            <span className="text-indigo-300 font-mono font-medium text-xs">ZK-SNARKs</span>
          </span>
          <span className="text-gray-400 py-0.5 flex items-center justify-between pr-4">
            <span>Smart Escrow:</span>
            <span className="text-gray-300 font-mono font-medium text-xs">Multi-Sig EVM</span>
          </span>
        </div>

        {/* Column 4: Resources & Topology (Col-span 2) */}
        <div className="lg:col-span-2 flex flex-col gap-2.5 text-sm">
          <span className="text-[11px] font-mono font-bold tracking-wider text-indigo-400 uppercase mb-1">
            Resources
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Cluster Topology
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Underwriting Specs
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Telemetry SLAs
          </span>
          <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5">
            Sovereign Nodes
          </span>
        </div>
      </div>

      {/* SLEEK, UNIFIED HORIZONTAL EXECUTIVE FOUNDER SIGNATURE BAR & SOCIAL PILLS (NO GIANT SEPARATE CARDS!) */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Clean Architectural Signature (Unified directly into the bar!) */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
          <div className="w-7 h-7 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-white tracking-normal">
              Architected &amp; Engineered by Abhijeet Kangane
            </span>
            <span className="text-gray-600 hidden sm:inline">&bull;</span>
            <span className="text-xs text-gray-400 font-mono">
              Founder &amp; Principal Infrastructure Architect
            </span>
          </div>
        </div>

        {/* Right: Minimalist Glass Pill Social Verification Links */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium">
          <a
            href="https://www.linkedin.com/in/abhijeet-kangane/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-blue-500/15 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-blue-300 transition-all shadow-sm group"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://www.instagram.com/abhijeet.037/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/40 text-gray-300 hover:text-pink-300 transition-all shadow-sm group"
          >
            <InstagramIcon />
            <span>Instagram</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://github.com/abhi666-max"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-purple-500/15 border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-purple-300 transition-all shadow-sm group"
          >
            <GitBranch className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://x.com/abhijeet_037"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-300 transition-all shadow-sm group"
          >
            <XTwitterIcon />
            <span>X</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-3">
        <div className="flex items-center gap-2">
          <Code className="w-3.5 h-3.5 text-indigo-400" />
          <span>&copy; 2026 Lumina Cloud OS. Sovereign Quantitative Platform.</span>
        </div>
        <div>
          <span>Built with zero algorithmic bias &amp; sub-second edge telemetry.</span>
        </div>
      </div>
    </footer>
  );
}
