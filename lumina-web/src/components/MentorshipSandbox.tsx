"use client";

import React, { useState } from "react";
import { Cpu, Terminal, Code, Play, CheckCircle2, Shield, Users, RefreshCw, Layers } from "lucide-react";

const CODE_SAMPLES = {
  escrow: `// Sovereign Escrow Revenue-Share Contract (Solidity / Edge IaaS)
pragma solidity ^0.8.20;

contract SovereignEscrow {
    address public treasury;
    uint256 public totalAllocation = 25000 * 10**18;
    uint256 public revSharePercent = 25; // 2.5%
    bool public collateralRequired = false; // Verified via Sovereign Trust Score

    function disburseTranche() external {
        require(!collateralRequired, "Zero collateral protocol active");
        // Quantitative distribution to verified multi-sig endpoint
    }
}`,
  agent: `# Quantitative Multi-Agent Valuation Orchestrator (Python / LangChain)
class ValuationQuant:
    def __init__(self, trust_score_vector: int):
        self.trust_score = trust_score_vector

    def simulate_runway(self, burn_rate: float, capital: float) -> float:
        base_duration = capital / burn_rate
        if self.trust_score >= 800:
            return base_duration * 1.15 # Sovereign micro-grant allocation bonus
        return base_duration`,
};

export default function MentorshipSandbox() {
  const [activeLang, setActiveLang] = useState<"escrow" | "agent">("escrow");
  const [code, setCode] = useState(CODE_SAMPLES.escrow);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<string | null>(null);

  const handleSwitchLang = (lang: "escrow" | "agent") => {
    setActiveLang(lang);
    setCode(CODE_SAMPLES[lang]);
    setAuditResult(null);
  };

  const handleRunAudit = () => {
    setIsAuditing(true);
    setAuditResult(null);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult("SECURITY AUDIT PASSED: 0 algorithmic bias anomalies detected, 0 re-entrancy vulnerabilities, 100% compliant with quantitative architectural standards.");
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 lg:px-8 font-sans">
      <div className="text-left mb-12 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Cloud IaaS Sandbox Environment</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Collaborative Edge IDE & Security Auditor
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed font-normal">
          Execute ephemeral code environments, review smart escrow architecture, and run real-time automated AI security and bias audits directly within your browser container.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Console: Editor */}
        <div className="lg:col-span-8 flex flex-col gap-4 font-mono">
          <div className="iaas-panel p-5 rounded-xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-sans">
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Containerized Workspace Node</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSwitchLang("escrow")}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all font-sans ${
                    activeLang === "escrow"
                      ? "bg-indigo-600 text-white"
                      : "bg-white/[0.03] text-gray-400 hover:text-white"
                  }`}
                >
                  SovereignEscrow.sol
                </button>
                <button
                  onClick={() => handleSwitchLang("agent")}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all font-sans ${
                    activeLang === "agent"
                      ? "bg-indigo-600 text-white"
                      : "bg-white/[0.03] text-gray-400 hover:text-white"
                  }`}
                >
                  ValuationQuant.py
                </button>
              </div>
            </div>

            <textarea
              rows={14}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-[#090a0f] text-xs text-gray-200 p-4 rounded-lg border border-white/10 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
            />

            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-sans">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Active Peer Node: Dr. Elena R. (Systems Quant)</span>
              </div>

              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold font-sans flex items-center gap-2 transition-all shadow-sm ${
                  isAuditing
                    ? "bg-indigo-600/40 cursor-not-allowed text-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
                }`}
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Automated Audit...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run Security & Bias Audit</span>
                  </>
                )}
              </button>
            </div>

            {auditResult && (
              <div className="mt-4 p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/40 text-xs text-emerald-400 font-mono flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{auditResult}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Console: Connected Institutional Reviewers */}
        <div className="lg:col-span-4 flex flex-col gap-6 font-sans">
          <div className="iaas-panel p-6 rounded-xl">
            <h3 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Connected Review Endpoints</span>
              <span className="text-[10px] text-emerald-400 font-mono">24/7 Active</span>
            </h3>

            <div className="space-y-3">
              {[
                { name: "Dr. Elena R.", role: "Lead Quant & AI Architect", status: "Active in Container" },
                { name: "Meera Patel", role: "Principal Systems Engineer", status: "Available for Code Review" },
                { name: "Priyanka S.", role: "Web3 Escrow Specialist", status: "Connected via ZKP" },
              ].map((mentor, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-white block">{mentor.name}</span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">{mentor.role}</span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {mentor.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Container workspace invitation dispatched to ${mentor.name}.`)}
                    className="px-2.5 py-1 rounded bg-white/5 hover:bg-indigo-600 text-gray-300 hover:text-white text-[11px] font-semibold transition-colors border border-white/10"
                  >
                    Invite
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
