"use client";

import React, { useState } from "react";
import { Terminal, Shield, Zap, Video, AlertTriangle, ArrowRight, TrendingUp, Layers } from "lucide-react";

const SCENARIOS = [
  {
    interviewer: "David M. — VP of Engineering at Enterprise Tech",
    question: "We typically offer around $110,000 base for this Level 4 Senior Systems role. Given your background, how does that sound to you?",
    detectedBias: "Lowball Compensation Attempt Detected (21% below Level 4 verified median of $140,000)",
    severity: "HIGH PRIORITY",
    counterScript: "I evaluate total compensation against verified quantitative benchmarks for Level 4 systems architecture, which currently sit between $140,000 and $158,000 base. Given my verified open-source engineering velocity and distributed systems track record, I am targeting $148,000 base.",
    marketMedian: 140000,
    offered: 110000,
  },
  {
    interviewer: "Sarah K. — Lead Technical Recruiter at CloudScale AI",
    question: "We noticed a 6-month gap on your resume prior to your current position. Can you clarify your recent technical exposure to modern edge orchestration?",
    detectedBias: "Non-Linear Career Gap Scrutiny (Systematic filtering anomaly)",
    severity: "MODERATE PRIORITY",
    counterScript: "During that transition period, I contributed 420+ commits to distributed consensus engines and executed extensive architecture sandboxing on high-concurrency systems. My benchmark verification shows 40% latency improvements over standard implementations.",
    marketMedian: 145000,
    offered: 135000,
  },
];

export default function CareerShield() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const scenario = SCENARIOS[activeIdx];

  const handleSwitch = (idx: number) => {
    setIsSimulating(true);
    setActiveIdx(idx);
    setTimeout(() => setIsSimulating(false), 450);
  };

  const payGapPercent = Math.round(((scenario.marketMedian - scenario.offered) / scenario.marketMedian) * 100);

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 lg:px-8">
      <div className="text-left mb-12 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Live Audio/Video Telemetry Console</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Real-Time Negotiation Shield & Compensation HUD
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed font-normal">
          Evaluate real-time interviewer audio streams alongside live technical discussions. The quantitative telemetry engine identifies compensation disparities and streams exact negotiation counter-scripts with sub-second latency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-mono text-xs">
        {/* Left Console: Telemetry Room */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="iaas-panel p-6 rounded-xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-sans">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Telemetry Stream Ingestion</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Video className="w-3.5 h-3.5 text-emerald-400" />
                <span>Audio Waveform Active</span>
              </div>
            </div>

            {/* Scenario Selector */}
            <div className="flex gap-2 mb-4 font-sans">
              {SCENARIOS.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSwitch(idx)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                    activeIdx === idx
                      ? "bg-indigo-600/20 text-white border-indigo-500/40"
                      : "bg-white/[0.02] text-gray-400 border-white/5 hover:text-white"
                  }`}
                >
                  Scenario #{idx + 1}: {idx === 0 ? "Compensation Lowball" : "Career Gap Scrutiny"}
                </button>
              ))}
            </div>

            {/* Simulated Audio Stream Box */}
            <div className="bg-[#090a0f] rounded-lg border border-white/10 p-5 mb-4 min-h-[150px] flex flex-col justify-between font-sans">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  {scenario.interviewer}
                </span>
                <span className="text-[10px] bg-white/[0.04] text-gray-400 px-2 py-0.5 rounded font-mono">Audio Stream Ingested</span>
              </div>

              <div className="my-4 p-3.5 rounded-md bg-white/[0.02] border-l-2 border-indigo-500 text-xs sm:text-sm text-gray-200 italic">
                &ldquo;{scenario.question}&rdquo;
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Quantitative Sentiment: Negotiation Scrutiny Detected</span>
                <span>Telemetry Latency: 14ms</span>
              </div>
            </div>

            {/* Real-Time Telemetry Alert */}
            <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/30 flex items-start gap-3 font-sans">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-red-400 block uppercase tracking-wide">
                  Telemetry Alert: {scenario.severity}
                </span>
                <span className="text-xs text-gray-300 block mt-0.5 font-normal">
                  {scenario.detectedBias}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Console: Counter-Script HUD & Equity Visualizer */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="iaas-panel p-6 rounded-xl font-sans">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
              <h3 className="text-xs font-mono font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                <span>Real-Time Counter-Script Co-Pilot</span>
              </h3>
              <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20">
                0.014ms Latency
              </span>
            </div>

            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Quantitative counter-phrasing synthesized directly from verified market compensation datasets:
            </p>

            <div className="p-4 rounded-lg bg-[#090a0f] border border-white/10 text-xs text-indigo-200 font-mono leading-relaxed mb-6">
              {isSimulating ? (
                <span className="text-gray-500 italic">Synthesizing counter-script vectors...</span>
              ) : (
                <span>&gt; &ldquo;{scenario.counterScript}&rdquo;</span>
              )}
            </div>

            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Compensation Equity Evaluation</span>
              <span className="text-[10px] text-red-400 font-bold">-{payGapPercent}% Disparity</span>
            </h4>

            <div className="space-y-3.5 bg-white/[0.01] p-4 rounded-lg border border-white/5 font-mono text-xs">
              <div>
                <div className="flex justify-between font-sans text-xs mb-1">
                  <span className="text-gray-400">Initial Offer Vector</span>
                  <span className="text-red-400 font-bold">${scenario.offered.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(scenario.offered / 160000) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-sans text-xs mb-1">
                  <span className="text-gray-400">Verified Market Median (Level 4)</span>
                  <span className="text-emerald-400 font-bold">${scenario.marketMedian.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(scenario.marketMedian / 160000) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => alert("Telemetry session log archived to secure encrypted storage.")}
              className="mt-6 w-full py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <span>Archive Session Telemetry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
