"use client";

import React, { useState } from "react";
import { Shield, GitBranch, Award, CheckCircle2, DollarSign, Lock, RefreshCw, ArrowRight, Layers, Sparkles, Key, Cpu, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LendingProtocol() {
  const [githubConnected, setGithubConnected] = useState(true);
  const [freelanceConnected, setFreelanceConnected] = useState(true);
  const [mentorConnected, setMentorConnected] = useState(true);
  const [contractDeployed, setContractDeployed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployLogs, setDeployLogs] = useState<string[]>([]);

  const [grantAmount, setGrantAmount] = useState(25000);

  const calculateRevShare = (amount: number) => {
    return ((amount / 10000) * 0.8).toFixed(1);
  };

  const handleToggleConnection = (type: string) => {
    if (type === "mentor") setMentorConnected(!mentorConnected);
    if (type === "github") setGithubConnected(!githubConnected);
    if (type === "freelance") setFreelanceConnected(!freelanceConnected);
  };

  const handleDeployContract = () => {
    setIsDeploying(true);
    setDeployLogs([
      "[ZKP-CIRCUIT] Initializing Groth16 zk-SNARK proof verification...",
      "[UNDERWRITING] Cross-checking GitHub commit graph vs Escrow SLA history...",
    ]);

    setTimeout(() => {
      setDeployLogs((prev) => [
        ...prev,
        "[SMART-CONTRACT] Allocating zero-collateral escrow tranche on polygon-zkEVM...",
        "[STATUS: COMPLETE] Multisig contract 0x7F4e...b912 active & capital unlocked.",
      ]);
      setIsDeploying(false);
      setContractDeployed(true);
    }, 1600);
  };

  const baseTrustScore = 740 + (githubConnected ? 65 : 0) + (freelanceConnected ? 50 : 0) + (mentorConnected ? 40 : 0);
  const trustScore = Math.min(baseTrustScore, 995);

  return (
    <div className="relative max-w-7xl mx-auto py-24 px-4 lg:px-8 overflow-hidden font-sans">
      {/* Background Aurora Blobs for Seamless Landing Aesthetics */}
      <div className="absolute top-1/4 left-10 w-[460px] h-[300px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none animate-aurora-1" />
      <div className="absolute bottom-1/3 right-10 w-[420px] h-[280px] bg-indigo-600/12 rounded-full blur-[130px] pointer-events-none animate-aurora-2" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left mb-12 border-b border-white/10 pb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full iaas-panel border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3 shadow-lg">
          <Shield className="w-3.5 h-3.5 animate-pulse" />
          <span>Sovereign Alternative Underwriting Protocol &bull; Zero-Collateral Engine</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Algorithmic Trust Scoring &amp; Zero-Collateral Escrow
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed font-sans">
          Traditional credit algorithms penalize non-linear career trajectories and early-stage R&amp;D gaps. Lumina evaluates quantitative engineering velocity, escrow performance history, and community code verification to disburse non-dilutive capital.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Console: Data Connectors */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="iaas-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center justify-between font-heading">
              <span>Verified Alternative Data Vectors</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold flex items-center gap-1">
                <Key className="w-3 h-3" /> ZKP Active
              </span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {/* GitHub Card */}
              <div
                onClick={() => handleToggleConnection("github")}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all group ${
                  githubConnected
                    ? "bg-white/[0.03] border-white/10 shadow-sm"
                    : "bg-transparent border-white/5 hover:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform">
                    <GitBranch className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-sans text-xs sm:text-sm">GitHub Velocity Vector</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">+65 Pts</span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-sans block mt-0.5">1,420 Commits &bull; 18 High-Velocity Repositories</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold font-sans">
                  <CheckCircle2 className={`w-4 h-4 ${githubConnected ? "text-emerald-400" : "text-gray-600"}`} />
                  <span>{githubConnected ? "Verified" : "Offline"}</span>
                </div>
              </div>

              {/* Freelance Escrow Card */}
              <div
                onClick={() => handleToggleConnection("freelance")}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all group ${
                  freelanceConnected
                    ? "bg-white/[0.03] border-white/10 shadow-sm"
                    : "bg-transparent border-white/5 hover:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-emerald-400 font-extrabold text-xs shadow-inner group-hover:scale-105 transition-transform">
                    ESC
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-sans text-xs sm:text-sm">Contract Escrow Performance</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">+50 Pts</span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-sans block mt-0.5">14 Completed Enterprise SLA Contracts &bull; 99.8% Reliability</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold font-sans">
                  <CheckCircle2 className={`w-4 h-4 ${freelanceConnected ? "text-emerald-400" : "text-gray-600"}`} />
                  <span>{freelanceConnected ? "Verified" : "Offline"}</span>
                </div>
              </div>

              {/* Community & Mentorship Card */}
              <div
                onClick={() => handleToggleConnection("mentor")}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all group ${
                  mentorConnected
                    ? "bg-white/[0.03] border-white/10 shadow-sm"
                    : "bg-transparent border-white/5 hover:border-white/10 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-indigo-400 shadow-inner group-hover:scale-105 transition-transform">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-sans text-xs sm:text-sm">Open Source Peer Review Badge</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">+40 Pts</span>
                    </div>
                    <span className="text-[11px] text-gray-400 font-sans block mt-0.5">Institutional Systems Review &amp; Mentorship Node</span>
                  </div>
                </div>
                <button
                  className={`px-3 py-1 rounded-lg text-[11px] font-sans font-bold transition-all ${
                    mentorConnected
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {mentorConnected ? "Connected" : "Connect"}
                </button>
              </div>
            </div>
          </div>

          {/* Underwriting Comparison Card */}
          <div className="iaas-panel p-6 rounded-2xl font-mono border border-white/10 shadow-xl">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4 font-heading">
              Underwriting Algorithm Evaluation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4.5 rounded-xl bg-[#090a0f] border border-white/10 text-center shadow-inner">
                <span className="text-[11px] font-semibold text-gray-400 block mb-1 font-sans uppercase">Legacy Credit Algorithm</span>
                <span className="text-2xl font-heading font-extrabold text-white">610 / 850</span>
                <span className="text-[10px] text-red-400 font-bold block mt-2 font-sans bg-red-500/10 py-1 rounded border border-red-500/20">
                  Rejected (Non-Linear Career Gap)
                </span>
              </div>
              <div className="p-4.5 rounded-xl bg-gradient-to-br from-indigo-950/40 to-emerald-950/30 border border-indigo-500/40 text-center shadow-inner">
                <span className="text-[11px] font-semibold text-indigo-300 block mb-1 font-sans uppercase">Lumina Sovereign Trust</span>
                <span className="text-2xl font-heading font-extrabold text-white">{trustScore} / 1000</span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-2 font-sans bg-emerald-500/10 py-1 rounded border border-emerald-500/20">
                  Approved for Capital Tranche
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Console: Smart Escrow Micro-Grant Simulator */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="iaas-panel p-6 rounded-2xl font-mono border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                Smart Escrow Capital Allocation Console
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Zero Collateral Protocol
              </span>
            </div>

            <p className="text-xs text-gray-300 mb-6 leading-relaxed font-sans">
              Based on quantitative verification of your <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">Sovereign Trust Score ({trustScore})</span>, your organization is authorized for up to <span className="text-emerald-400 font-bold">$100,000</span> in non-dilutive revenue-share escrow capital.
            </p>

            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-400 font-sans">Select Capital Tranche</span>
                <span className="text-2xl font-heading font-extrabold text-white">${grantAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={grantAmount}
                onChange={(e) => { setGrantAmount(Number(e.target.value)); setContractDeployed(false); }}
                className="w-full my-3.5 cursor-pointer"
              />

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-left text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 block font-sans uppercase font-semibold">Revenue Share</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{calculateRevShare(grantAmount)}% monthly</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-sans uppercase font-semibold">Repayment Cap</span>
                  <span className="text-xs sm:text-sm font-bold text-white">1.2x Total</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-sans uppercase font-semibold">Personal Guarantee</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400">None Required</span>
                </div>
              </div>
            </div>

            {isDeploying && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-[#090a0f] border border-indigo-500/30 text-xs font-mono"
              >
                <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold">
                  <Terminal className="w-3.5 h-3.5 animate-pulse" />
                  <span>ZKP Cryptographic Verification Node</span>
                </div>
                <div className="space-y-1 text-[11px] text-gray-300">
                  {deployLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {contractDeployed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-950/40 to-indigo-950/30 border border-emerald-500/50 text-center space-y-3 font-sans shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto mb-2 font-extrabold text-lg shadow-lg shadow-emerald-500/30">
                  &check;
                </div>
                <h4 className="text-base sm:text-lg font-heading font-extrabold text-white">Smart Escrow Contract Deployed via ZKP</h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Tranche of <strong className="text-white">${grantAmount.toLocaleString()}</strong> has been dispatched to multisig treasury contract address: <code className="text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">0x7F4e...b912</code>
                </p>
                <button
                  onClick={() => setContractDeployed(false)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-indigo-300 hover:text-white transition-colors"
                >
                  <span>Configure additional tranche</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ) : (
              <button
                onClick={handleDeployContract}
                disabled={isDeploying}
                className={`w-full py-4 rounded-xl font-semibold text-xs sm:text-sm font-sans flex items-center justify-center gap-2 transition-all shadow-xl group ${
                  isDeploying
                    ? "bg-indigo-600/40 cursor-not-allowed text-gray-400"
                    : "bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white shadow-indigo-600/30 hover:scale-[1.01]"
                }`}
              >
                {isDeploying ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-indigo-200" />
                    <span>Verifying Zero-Knowledge Signatures...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">Deploy Smart Escrow Tranche (${grantAmount.toLocaleString()})</span>
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
