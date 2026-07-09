"use client";

import React, { useState } from "react";
import { Shield, GitBranch, Award, CheckCircle2, DollarSign, Lock, RefreshCw, ArrowRight, Layers } from "lucide-react";

export default function LendingProtocol() {
  const [githubConnected, setGithubConnected] = useState(true);
  const [freelanceConnected, setFreelanceConnected] = useState(true);
  const [mentorConnected, setMentorConnected] = useState(true);
  const [contractDeployed, setContractDeployed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  const [grantAmount, setGrantAmount] = useState(25000);

  const calculateRevShare = (amount: number) => {
    return ((amount / 10000) * 0.8).toFixed(1);
  };

  const handleToggleConnection = (type: string) => {
    if (type === "mentor") setMentorConnected(!mentorConnected);
  };

  const handleDeployContract = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setContractDeployed(true);
    }, 1200);
  };

  const baseTrustScore = 740 + (githubConnected ? 65 : 0) + (freelanceConnected ? 50 : 0) + (mentorConnected ? 40 : 0);
  const trustScore = Math.min(baseTrustScore, 995);

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 lg:px-8">
      <div className="text-left mb-12 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <Shield className="w-3.5 h-3.5" />
          <span>Sovereign Alternative Underwriting Protocol</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Algorithmic Trust Scoring & Zero-Collateral Escrow
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed font-normal">
          Traditional credit algorithms penalize non-linear career trajectories and early-stage R&D gaps. Lumina evaluates quantitative engineering velocity, escrow performance history, and community code verification to disburse non-dilutive capital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Console: Data Connectors */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="iaas-panel p-6 rounded-xl">
            <h3 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Verified Alternative Data Vectors</span>
              <span className="text-[10px] text-emerald-400">Zero-Knowledge Proof (ZKP) Active</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {/* GitHub Card */}
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-900 border border-white/10 flex items-center justify-center text-white">
                    <GitBranch className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-sans text-xs">GitHub Velocity Vector</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">+65 Pts</span>
                    </div>
                    <span className="text-[11px] text-gray-500 font-sans block mt-0.5">1,420 Commits &bull; 18 High-Velocity Repositories</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Freelance Escrow Card */}
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-900 border border-white/10 flex items-center justify-center text-emerald-400 font-extrabold text-xs">
                    ESC
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-sans text-xs">Contract Escrow Performance</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">+50 Pts</span>
                    </div>
                    <span className="text-[11px] text-gray-500 font-sans block mt-0.5">14 Completed Enterprise SLA Contracts &bull; 99.8% Reliability</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Community & Mentorship Card */}
              <div
                onClick={() => handleToggleConnection("mentor")}
                className={`p-4 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                  mentorConnected
                    ? "bg-white/[0.02] border-white/10"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-gray-900 border border-white/10 flex items-center justify-center text-indigo-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white font-sans text-xs">Open Source Peer Review Badge</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400">+40 Pts</span>
                    </div>
                    <span className="text-[11px] text-gray-500 font-sans block mt-0.5">Institutional Systems Review & Mentorship Node</span>
                  </div>
                </div>
                <button
                  className={`px-3 py-1 rounded text-[11px] font-sans font-semibold transition-colors ${
                    mentorConnected
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {mentorConnected ? "Connected" : "Connect"}
                </button>
              </div>
            </div>
          </div>

          {/* Underwriting Comparison Card */}
          <div className="iaas-panel p-6 rounded-xl font-mono">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4 font-sans">
              Underwriting Algorithm Evaluation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#090a0f] border border-white/5 text-center">
                <span className="text-[11px] font-semibold text-gray-500 block mb-1 font-sans">Legacy Credit Algorithm</span>
                <span className="text-xl font-extrabold text-white">610 / 850</span>
                <span className="text-[10px] text-red-400 font-semibold block mt-1.5 font-sans">Rejected (Non-Linear Career Gap)</span>
              </div>
              <div className="p-4 rounded-lg bg-indigo-950/20 border border-indigo-500/30 text-center">
                <span className="text-[11px] font-semibold text-indigo-400 block mb-1 font-sans">Lumina Sovereign Trust</span>
                <span className="text-xl font-extrabold text-white">{trustScore} / 1000</span>
                <span className="text-[10px] text-emerald-400 font-semibold block mt-1.5 font-sans">Approved for Capital Tranche</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Console: Smart Escrow Micro-Grant Simulator */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="iaas-panel p-6 rounded-xl font-mono">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-sans">
                Smart Escrow Capital Allocation Console
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                Zero Collateral Protocol
              </span>
            </div>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed font-sans">
              Based on quantitative verification of your <span className="text-white font-semibold">Sovereign Trust Score ({trustScore})</span>, your organization is authorized for up to <span className="text-emerald-400 font-semibold">$100,000</span> in non-dilutive revenue-share escrow capital.
            </p>

            <div className="bg-white/[0.01] p-5 rounded-lg border border-white/5 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-400 font-sans">Select Capital Tranche</span>
                <span className="text-xl font-extrabold text-white">${grantAmount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={grantAmount}
                onChange={(e) => { setGrantAmount(Number(e.target.value)); setContractDeployed(false); }}
                className="w-full my-3 cursor-pointer"
              />

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-left text-xs">
                <div>
                  <span className="text-[10px] text-gray-500 block font-sans">Revenue Share</span>
                  <span className="text-xs font-bold text-white">{calculateRevShare(grantAmount)}% monthly</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block font-sans">Repayment Cap</span>
                  <span className="text-xs font-bold text-white">1.2x Total</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block font-sans">Personal Guarantee</span>
                  <span className="text-xs font-bold text-emerald-400">None Required</span>
                </div>
              </div>
            </div>

            {contractDeployed ? (
              <div className="p-5 rounded-lg bg-emerald-950/20 border border-emerald-500/40 text-center space-y-2 font-sans">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto mb-2 font-bold">
                  &check;
                </div>
                <h4 className="text-sm font-bold text-white">Smart Escrow Contract Deployed</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Tranche of <span className="text-white font-semibold">${grantAmount.toLocaleString()}</span> has been dispatched to multisig treasury contract address: <code className="text-indigo-400 font-mono">0x7F4e...b912</code>
                </p>
                <button
                  onClick={() => setContractDeployed(false)}
                  className="mt-2 text-xs font-semibold text-indigo-400 hover:underline"
                >
                  Configure additional tranche &rarr;
                </button>
              </div>
            ) : (
              <button
                onClick={handleDeployContract}
                disabled={isDeploying}
                className={`w-full py-3.5 rounded-lg font-semibold text-xs font-sans flex items-center justify-center gap-2 transition-all shadow-md ${
                  isDeploying
                    ? "bg-indigo-600/40 cursor-not-allowed text-gray-400"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
                }`}
              >
                {isDeploying ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Verifying Zero-Knowledge Signatures...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Deploy Smart Escrow Tranche (${grantAmount.toLocaleString()})</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
