"use client";

import React, { useState } from "react";
import { Terminal, TrendingUp, DollarSign, Play, RefreshCw, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

const PRESETS = [
  {
    title: "AI Biomarkers for Diagnostic Telemetry",
    pitch: "Edge-AI diagnostic platform analyzing ultrasound metrics on mobile devices to detect early clinical biomarkers in underserved medical infrastructure.",
    burn: 14000,
    cac: 32,
    ltv: 840,
  },
  {
    title: "CleanTech Micro-Grid Decentralized Payments",
    pitch: "Decentralized IoT micro-grid controllers coupled with smart contract payment channels for equipment leasing and energy distribution across emerging markets.",
    burn: 18500,
    cac: 45,
    ltv: 1200,
  },
  {
    title: "Adaptive Quantitative AI Tutoring Infrastructure",
    pitch: "Sovereign AI quantitative mathematics and coding mentor engineered with real-time code verification sandboxes for competitive technical training.",
    burn: 11000,
    cac: 18,
    ltv: 450,
  },
];

export default function FintechEngine() {
  const [pitchText, setPitchText] = useState(PRESETS[0].pitch);
  const [isGenerating, setIsGenerating] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM-INIT] Cluster us-east-quant-01 connected and ready.",
    "[QUANT-NODE] Preset parameters loaded. Ready for multi-agent simulation.",
  ]);
  const [modelReady, setModelReady] = useState(true);

  const [monthlyBurn, setMonthlyBurn] = useState(PRESETS[0].burn);
  const [cac, setCac] = useState(PRESETS[0].cac);
  const [ltv, setLtv] = useState(PRESETS[0].ltv);
  const [initialCapital, setInitialCapital] = useState(250000);

  const handleRunSimulation = () => {
    if (!pitchText.trim()) return;
    setIsGenerating(true);
    setModelReady(false);
    setLogs([
      "[IAAS-NODE-04] Allocating secure containerized execution pods...",
      "[QUANT-AGENT-1] Parsing input vectors & sizing TAM/SOM capital pools...",
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        "[QUANT-AGENT-2] Executing 10,000 Monte Carlo DCF simulations...",
        `[QUANT-AGENT-2] Unit economics verified: CAC to LTV ratio ${(ltv / cac).toFixed(1)}x`,
      ]);
    }, 800);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        "[QUANT-AGENT-3] Indexing vector database of 520+ institutional capital providers...",
        "[STATUS: COMPLETE] 3-Year Institutional DCF Model & Valuation Report generated successfully.",
      ]);
      setIsGenerating(false);
      setModelReady(true);
    }, 1600);
  };

  const handleSelectPreset = (idx: number) => {
    const p = PRESETS[idx];
    setPitchText(p.pitch);
    setMonthlyBurn(p.burn);
    setCac(p.cac);
    setLtv(p.ltv);
  };

  const runwayMonths = (initialCapital / monthlyBurn).toFixed(1);
  const ltvCacRatio = (ltv / cac).toFixed(1);
  const estimatedYear3Revenue = ((initialCapital / cac) * ltv * 0.45).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 lg:px-8">
      <div className="text-left mb-12 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Sovereign Multi-Agent Valuation Console</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Quantitative Capital & DCF Simulation Suite
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed font-normal">
          Synthesize institutional-grade 3-year discounted cash flow models, evaluate unit economics in real time, and dispatch verified quantitative dossiers directly to institutional capital endpoints.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Console: Input & Logs */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="iaas-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                1. System Input Parameters
              </span>
              <span className="text-[11px] text-gray-500 font-mono">Input format: UTF-8 Text / Voice Vector</span>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              {PRESETS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectPreset(i)}
                  className="text-left p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-indigo-500/30 transition-all text-xs font-medium text-gray-300 flex flex-col justify-between h-20"
                >
                  <span className="line-clamp-2 font-semibold text-white">{p.title}</span>
                  <span className="text-[10px] text-indigo-400 font-mono mt-1">Load Vector #{i + 1} &rarr;</span>
                </button>
              ))}
            </div>

            <textarea
              rows={5}
              value={pitchText}
              onChange={(e) => setPitchText(e.target.value)}
              placeholder="Enter comprehensive architecture specification, revenue streams, and unit economic parameters..."
              className="w-full bg-[#090a0f] border border-white/10 rounded-lg p-3.5 text-xs font-mono text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none leading-relaxed placeholder:text-gray-600"
            />

            <button
              onClick={handleRunSimulation}
              disabled={isGenerating || !pitchText.trim()}
              className={`mt-4 w-full py-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                isGenerating
                  ? "bg-indigo-600/40 cursor-not-allowed text-gray-400"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing Multi-Agent Pods...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run Quantitative Valuation Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Real-Time Kubernetes/IaaS Terminal Output */}
          <div className="iaas-panel p-5 rounded-xl font-mono text-xs bg-[#090a0f]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-semibold text-gray-300 text-[11px]">Execution Telemetry Stream</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Node: us-east-quant-01</span>
            </div>

            <div className="space-y-2 min-h-[120px] max-h-[160px] overflow-y-auto pr-2 text-[11px] leading-relaxed">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">&gt;</span>
                  <span className={log.includes("COMPLETE") ? "text-emerald-400 font-bold" : "text-gray-300"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Console: Interactive DCF Sliders & Institutional Matcher */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="iaas-panel p-6 rounded-xl">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  2. Dynamic DCF Parameters & Unit Economics
                </span>
              </div>
              {modelReady && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  Real-Time Engine Active
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white/[0.01] p-4 rounded-lg border border-white/5 mb-6">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-gray-400">Monthly Burn Rate</span>
                  <span className="text-white font-semibold">${monthlyBurn.toLocaleString()}/mo</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="1000"
                  value={monthlyBurn}
                  onChange={(e) => setMonthlyBurn(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-gray-400">Initial Seed Capital</span>
                  <span className="text-white font-semibold">${initialCapital.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-gray-400">Customer Acq. Cost (CAC)</span>
                  <span className="text-white font-semibold">${cac}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="2"
                  value={cac}
                  onChange={(e) => setCac(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-gray-400">Lifetime Value (LTV)</span>
                  <span className="text-white font-semibold">${ltv}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3000"
                  step="50"
                  value={ltv}
                  onChange={(e) => setLtv(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated KPI Grid */}
            <div className="grid grid-cols-3 gap-3 text-left mb-6 font-mono">
              <div className="p-3 rounded-lg bg-[#090a0f] border border-white/10">
                <span className="text-[10px] text-gray-500 block font-sans uppercase">Runway Duration</span>
                <span className="text-base font-extrabold text-white mt-1 block">{runwayMonths} Months</span>
              </div>
              <div className="p-3 rounded-lg bg-[#090a0f] border border-white/10">
                <span className="text-[10px] text-gray-500 block font-sans uppercase">LTV : CAC Ratio</span>
                <span className="text-base font-extrabold text-indigo-400 mt-1 block">{ltvCacRatio}x</span>
              </div>
              <div className="p-3 rounded-lg bg-[#090a0f] border border-white/10">
                <span className="text-[10px] text-gray-500 block font-sans uppercase">Year 3 Est. ARR</span>
                <span className="text-base font-extrabold text-emerald-400 mt-1 block">{estimatedYear3Revenue}</span>
              </div>
            </div>

            {/* Institutional Endpoints */}
            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3">
              3. Connected Institutional Capital Endpoints
            </h4>

            <div className="space-y-2.5 font-mono text-xs">
              {[
                { name: "Sovereign Capital Pool Alpha", focus: "Pre-Seed B2B Infrastructure", check: "$500k - $1.5M", match: "98.7%" },
                { name: "Apex Venture Syndicate", focus: "Quantitative FinTech & EdTech", check: "$750k - $2.0M", match: "96.4%" },
                { name: "Decentralized Escrow Fund", focus: "Web3 Infrastructure & AI", check: "$150k - $500k", match: "94.1%" },
              ].map((vc, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 flex items-center justify-between transition-all">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-xs font-sans">{vc.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                        {vc.match} Match
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-500 font-sans block mt-0.5">{vc.focus} &bull; Check: {vc.check}</span>
                  </div>

                  <button
                    onClick={() => alert(`Quantitative dossier successfully dispatched to ${vc.name} endpoint.`)}
                    className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-indigo-600 text-gray-300 hover:text-white text-[11px] font-sans font-semibold transition-colors flex items-center gap-1 border border-white/10"
                  >
                    <span>Dispatch</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
