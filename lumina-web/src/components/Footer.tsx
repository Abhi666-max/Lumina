"use client";

import React from "react";
import { Shield, Code, GitBranch, ExternalLink, Cpu, Terminal, Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090a0f] border-t border-white/10 mt-24 pt-16 pb-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 pb-12 border-b border-white/10">
        {/* Brand & Infrastructure Vision */}
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center font-mono font-bold text-indigo-400 text-xs">
              L/C
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Lumina Cloud OS
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/10">
              Enterprise Cluster
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-normal">
            High-precision quantitative infrastructure engineered for sovereign financial valuation, alternative data underwriting, and bias-free career telemetry.
          </p>
        </div>

        {/* System Telemetry & Regional Status */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white tracking-wide uppercase text-[11px]">System Status</span>
            <span className="text-gray-400 flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              API Gateway: 100%
            </span>
            <span className="text-gray-400 flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Quant Nodes: 48 Active
            </span>
            <span className="text-gray-400 flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Telemetry HUD: Online
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white tracking-wide uppercase text-[11px]">Architecture</span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sovereign Escrow Protocol</span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Multi-Agent Quant Pipelines</span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Alternative Underwriting</span>
          </div>

          <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
            <span className="font-semibold text-white tracking-wide uppercase text-[11px]">Compliance</span>
            <span className="text-gray-400">Zero Knowledge Proofs (ZKP)</span>
            <span className="text-gray-400">SOC2 Type II Compatible</span>
            <span className="text-gray-400">End-to-End Encryption</span>
          </div>
        </div>
      </div>

      {/* Founder Attribution & Copyright (EXPLICIT USER INSTRUCTION) */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-2 text-gray-300 font-medium">
          <Code className="w-4 h-4 text-indigo-400" />
          <span>
            Architected & Engineered by{" "}
            <span className="text-white font-extrabold tracking-wide text-sm border-b border-indigo-500/60 pb-0.5">
              Abhijeet Kangane
            </span>{" "}
            (Founder & Lead Infrastructure Architect) & Team.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5 text-gray-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Algorithmic Bias Verified</span>
          </span>
          <a
            href="https://github.com/Abhi666-max/Lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors font-mono text-[11px]"
          >
            <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
            <span>Abhi666-max/Lumina</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>
        </div>
      </div>
    </footer>
  );
}
