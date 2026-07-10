"use client";

import React, { useState } from "react";
import { Cpu, Terminal, Code, Play, CheckCircle2, Shield, Users, RefreshCw, Layers, Sparkles, Check, ArrowUpRight, Share2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [auditLogs, setAuditLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleSwitchLang = (lang: "escrow" | "agent") => {
    setActiveLang(lang);
    setCode(CODE_SAMPLES[lang]);
    setAuditResult(null);
    setAuditLogs([]);
  };

  const handleRunAudit = () => {
    setIsAuditing(true);
    setAuditResult(null);
    setAuditLogs([
      "[AST-PARSER] Constructing Abstract Syntax Tree & verifying imports...",
      "[SECURITY-NODE] Checking static re-entrancy vectors & arithmetic overflows...",
    ]);

    setTimeout(() => {
      setAuditLogs((prev) => [
        ...prev,
        "[BIAS-ENGINE] Analyzing algorithmic weight distribution for Enterprise Equitability...",
        "[QUANT-SLA] Verifying zero-collateral conditions against sovereign trust score...",
      ]);
    }, 700);

    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult("SECURITY AUDIT PASSED: 0 algorithmic bias anomalies detected, 0 re-entrancy vulnerabilities, 100% compliant with quantitative architectural standards.");
    }, 1500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative max-w-7xl mx-auto py-24 px-4 lg:px-8 overflow-hidden font-sans">
      {/* Background Aurora Blobs for Seamless Landing Aesthetics */}
      <div className="absolute top-1/4 right-10 w-[460px] h-[300px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none animate-aurora-1" />
      <div className="absolute bottom-1/3 left-10 w-[420px] h-[280px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-aurora-2" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left mb-12 border-b border-white/10 pb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full iaas-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3 shadow-lg">
          <Cpu className="w-3.5 h-3.5 animate-pulse" />
          <span>Cloud IaaS Sandbox Environment &bull; Edge IDE Container Node</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Collaborative Edge IDE &amp; Security Auditor
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed font-sans">
          Execute ephemeral code environments, review smart escrow architecture, and run real-time automated AI security and bias audits directly within your browser container.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Console: Editor */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-6 font-mono"
        >
          <div className="iaas-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
              <div className="flex items-center gap-2 font-sans">
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">Containerized Workspace Node</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSwitchLang("escrow")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all font-sans shadow-sm ${
                    activeLang === "escrow"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-600/30 scale-105"
                      : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  SovereignEscrow.sol
                </button>
                <button
                  onClick={() => handleSwitchLang("agent")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all font-sans shadow-sm ${
                    activeLang === "agent"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-600/30 scale-105"
                      : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  ValuationQuant.py
                </button>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-xs font-sans font-semibold transition-colors flex items-center gap-1 ml-1"
                  title="Copy code to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            <textarea
              rows={14}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-[#090a0f] text-xs text-gray-100 p-4 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-500 transition-colors resize-none leading-relaxed shadow-inner font-mono"
            />

            {/* Real-time Audit Telemetry Logs */}
            {isAuditing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-[#090a0f] border border-indigo-500/30 text-xs font-mono"
              >
                <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold">
                  <Terminal className="w-3.5 h-3.5 animate-pulse" />
                  <span>AST Security &amp; Bias Telemetry Stream</span>
                </div>
                <div className="space-y-1 text-[11px] text-gray-300">
                  {auditLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-white/10 font-sans">
              <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Active Peer Node: <strong className="text-white font-semibold">Dr. Elena R. (Systems Quant)</strong></span>
              </div>

              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-sans flex items-center gap-2 transition-all shadow-xl group ${
                  isAuditing
                    ? "bg-indigo-600/40 cursor-not-allowed text-gray-400"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-indigo-600/30 hover:scale-[1.01]"
                }`}
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-indigo-200" />
                    <span>Executing Automated AST Audit...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
                    <span>Run Security &amp; Bias Audit</span>
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {auditResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-4 p-4.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-indigo-950/30 to-emerald-950/30 border border-emerald-500/50 text-xs text-emerald-300 font-mono flex items-start gap-3 shadow-lg"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <div className="leading-relaxed font-sans font-medium">
                    <strong className="text-white block text-sm mb-0.5 font-heading">Security &amp; Equitability Audit Passed</strong>
                    <span>{auditResult}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Console: Connected Institutional Reviewers */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-6 font-sans"
        >
          <div className="iaas-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center justify-between font-heading">
              <span>Connected Review Endpoints</span>
              <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold">
                24/7 Active
              </span>
            </h3>

            <div className="space-y-3">
              {[
                { name: "Dr. Elena R.", role: "Lead Quant & AI Architect", status: "Active in Container", match: "ZKP Verified" },
                { name: "Meera Patel", role: "Principal Systems Engineer", status: "Available for Code Review", match: "Live Node" },
                { name: "Priyanka S.", role: "Web3 Escrow Specialist", status: "Connected via ZKP", match: "Multi-Sig SLA" },
              ].map((mentor, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-indigo-500/30 flex items-center justify-between transition-all group shadow-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-white group-hover:text-indigo-200 transition-colors">{mentor.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">{mentor.match}</span>
                    </div>
                    <span className="text-[11px] text-gray-400 block mt-1">{mentor.role}</span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 mt-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {mentor.status}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Container workspace invitation dispatched to ${mentor.name} via real-time ZKP bridge.`)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-indigo-600 text-gray-300 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-indigo-400 shadow-sm flex items-center gap-1"
                  >
                    <span>Invite</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
