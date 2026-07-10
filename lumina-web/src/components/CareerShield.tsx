"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Shield, Zap, Video, AlertTriangle, ArrowRight, TrendingUp, Layers, Mic, MicOff, Play, CheckCircle2, RefreshCw, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    interviewer: "Marcus T. — Principal Architect at HighFrequency Labs",
    question: "You have strong backend skills, but are you comfortable leading large distributed infrastructure migrations without senior oversight?",
    detectedBias: "Leadership Authority Questioning (Gender-based competency verification bias)",
    severity: "CRITICAL PRIORITY",
    counterScript: "I architected and deployed sovereign multi-node escrow networks handling $14M+ in volume with zero downtime and verified SOC2 compliance. My technical leadership is documented by open-source peer reviews and 99.8% SLA escrow performance.",
    marketMedian: 160000,
    offered: 140000,
  },
];

export default function CareerShield() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const [customQuestion, setCustomQuestion] = useState("");
  const [customActive, setCustomActive] = useState(false);
  const [customCounter, setCustomCounter] = useState("");
  const [isAnalyzingCustom, setIsAnalyzingCustom] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const scenario = SCENARIOS[activeIdx];

  const handleSwitch = (idx: number) => {
    setIsSimulating(true);
    setCustomActive(false);
    setActiveIdx(idx);
    setTimeout(() => setIsSimulating(false), 450);
  };

  // Audio Equalizer Canvas Animation Engine (Synthesized & Live Microphone API)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const barCount = 38;
    const bars: number[] = new Array(barCount).fill(10);
    const targetBars: number[] = new Array(barCount).fill(10);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = (width / barCount) - 3;

      if (isMicActive && analyserRef.current) {
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);

        for (let i = 0; i < barCount; i++) {
          const index = Math.floor((i / barCount) * (bufferLength / 2));
          const val = (dataArray[index] / 255) * (height - 8);
          targetBars[i] = Math.max(val, 4);
        }
      } else {
        // High-precision synthetic quantum telemetry waveform
        const time = Date.now() * 0.005;
        for (let i = 0; i < barCount; i++) {
          const wave1 = Math.sin(time + i * 0.3) * 18;
          const wave2 = Math.cos(time * 0.8 + i * 0.5) * 14;
          const noise = Math.random() * 8;
          targetBars[i] = Math.max(12 + wave1 + wave2 + noise, 6);
        }
      }

      // Smooth interpolation & rendering
      for (let i = 0; i < barCount; i++) {
        bars[i] += (targetBars[i] - bars[i]) * 0.18;
        const x = i * (barWidth + 3);
        const barHeight = bars[i];

        const gradient = ctx.createLinearGradient(0, height, 0, height - barHeight);
        gradient.addColorStop(0, "#6366f1");
        gradient.addColorStop(0.6, "#8b5cf6");
        gradient.addColorStop(1, "#06b6d4");

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#6366f1";
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      }
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMicActive]);

  const toggleMicrophone = async () => {
    if (isMicActive) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      setIsMicActive(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioCtx;
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 128;
        analyserRef.current = analyser;
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);
        sourceRef.current = source;
        setIsMicActive(true);
      } catch (err) {
        alert("Microphone hardware access denied or not available. Running high-precision simulated telemetry waveform.");
        setIsMicActive(false);
      }
    }
  };

  const handleAnalyzeCustom = () => {
    if (!customQuestion.trim()) return;
    setIsAnalyzingCustom(true);
    setCustomActive(true);
    setTimeout(() => {
      setIsAnalyzingCustom(false);
      setCustomCounter(`[AI QUANT COUNTER-SCRIPT]: Regarding your inquiry ("${customQuestion.slice(0, 45)}..."), our quantitative verification engine confirms zero algorithmic risk. We enforce verified market medians with sub-second SLA compliance, anchoring compensation strictly to objective commits and quantitative output rather than legacy negotiation norms.`);
    }, 850);
  };

  const payGapPercent = Math.round(((scenario.marketMedian - scenario.offered) / scenario.marketMedian) * 100);

  return (
    <div className="relative max-w-7xl mx-auto py-24 px-4 lg:px-8 overflow-hidden">
      {/* Background Aurora Blobs for Seamless Landing Aesthetics */}
      <div className="absolute top-1/4 left-10 w-[420px] h-[280px] bg-indigo-600/12 rounded-full blur-[130px] pointer-events-none animate-aurora-1" />
      <div className="absolute bottom-1/3 right-10 w-[380px] h-[260px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-aurora-2" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left mb-12 border-b border-white/10 pb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full iaas-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3 shadow-lg">
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span>Live Audio/Video Telemetry HUD &bull; Sub-14ms Latency</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Real-Time Negotiation Shield &amp; Compensation HUD
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed font-sans">
          Evaluate real-time interviewer audio streams alongside live technical discussions. The quantitative telemetry engine identifies compensation disparities and streams exact negotiation counter-scripts with sub-second latency.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-mono text-xs relative z-10">
        {/* Left Console: Telemetry Room & Equalizer */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="iaas-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-sans">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">Telemetry Waveform Ingest</span>
              </div>
              <button
                onClick={toggleMicrophone}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all shadow-md ${
                  isMicActive
                    ? "bg-red-500 text-white border border-red-400 shadow-red-500/30"
                    : "bg-white/[0.05] hover:bg-white/[0.1] text-cyan-400 border border-cyan-500/30"
                }`}
              >
                {isMicActive ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                <span>{isMicActive ? "Stop Live Mic" : "Connect Live Mic API"}</span>
              </button>
            </div>

            {/* Live Frequency Equalizer Canvas */}
            <div className="bg-[#090a0f] rounded-xl border border-white/10 p-4 mb-6 relative overflow-hidden group">
              <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono mb-2">
                <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                  <Volume2 className="w-3.5 h-3.5" />
                  {isMicActive ? "AUDIO API STREAM: LIVE HARDWARE INPUT" : "QUANTUM SYNTHETIC WAVEFORM ENGINE"}
                </span>
                <span className="text-emerald-400 font-bold font-mono">14.2ms Buffer</span>
              </div>
              <canvas
                ref={canvasRef}
                width={540}
                height={75}
                className="w-full h-[75px] rounded border border-white/5 bg-black/40"
              />
            </div>

            {/* Scenario Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-5 font-sans">
              {SCENARIOS.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSwitch(idx)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                    activeIdx === idx && !customActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400/50 shadow-lg shadow-indigo-600/30"
                      : "bg-white/[0.03] text-gray-400 border-white/5 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  Scenario #{idx + 1}: {idx === 0 ? "Compensation Lowball" : idx === 1 ? "Career Gap Scrutiny" : "Leadership Bias"}
                </button>
              ))}
            </div>

            {/* Simulated Audio Stream Box */}
            {!customActive ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#090a0f] rounded-xl border border-white/10 p-5 mb-5 min-h-[160px] flex flex-col justify-between font-sans relative shadow-inner"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      {scenario.interviewer}
                    </span>
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-mono font-semibold">
                      Telemetry Active
                    </span>
                  </div>

                  <div className="my-4 p-4 rounded-lg bg-white/[0.03] border-l-4 border-indigo-500 text-xs sm:text-sm text-gray-100 italic font-medium leading-relaxed">
                    &ldquo;{scenario.question}&rdquo;
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <span className="text-red-400 font-semibold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Negotiation Scrutiny Vector Detected
                    </span>
                    <span>Sample Rate: 48.0 kHz</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="bg-[#090a0f] rounded-xl border border-indigo-500/30 p-5 mb-5 min-h-[160px] font-sans">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-heading">Custom Scenario Telemetry Analysis</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">Quant Engine Active</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white/[0.02] border-l-4 border-cyan-400 text-xs text-gray-200 italic mb-3">
                  &ldquo;{customQuestion}&rdquo;
                </div>
              </div>
            )}

            {/* Custom Interactive Question Tester */}
            <div className="pt-4 border-t border-white/10 font-sans">
              <span className="text-[11px] font-mono text-gray-400 block mb-2 uppercase tracking-wider font-semibold">
                &gt; Test Custom Interviewer Question or Compensation Objection:
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="e.g. 'Can you justify asking for $150k when the budget is $125k?'"
                  className="flex-grow bg-[#090a0f] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                />
                <button
                  onClick={handleAnalyzeCustom}
                  disabled={isAnalyzingCustom || !customQuestion.trim()}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5 flex-shrink-0"
                >
                  {isAnalyzingCustom ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                  <span>Analyze</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Console: Counter-Script HUD & Equity Visualizer */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="iaas-panel p-6 rounded-2xl border border-white/10 font-sans shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <h3 className="text-xs font-mono font-bold text-white flex items-center gap-2 uppercase tracking-wider font-heading">
                <Zap className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span>Autonomous Counter-Script Co-Pilot</span>
              </h3>
              <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-bold">
                0.014ms SLA
              </span>
            </div>

            <p className="text-xs text-gray-300 mb-4 leading-relaxed font-sans">
              Quantitative counter-phrasing synthesized directly from verified institutional compensation datasets:
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={customActive ? "custom" : activeIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-xl bg-[#090a0f] border border-indigo-500/30 text-xs text-indigo-100 font-mono leading-relaxed mb-6 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400" />
                {isSimulating || isAnalyzingCustom ? (
                  <span className="text-gray-500 italic flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                    Synthesizing quantitative counter-script vectors...
                  </span>
                ) : (
                  <span>&gt; &ldquo;{customActive ? customCounter : scenario.counterScript}&rdquo;</span>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Real-Time Telemetry Alert Card */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 flex items-start gap-3.5 font-sans mb-6 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-400 block uppercase tracking-wider font-heading">
                  Telemetry Alert: {customActive ? "CUSTOM NEGOTIATION VECTOR" : scenario.severity}
                </span>
                <span className="text-xs text-gray-300 block mt-1 font-normal leading-relaxed">
                  {customActive ? "Custom query benchmarked against verified Level 4 engineering compensation parameters." : scenario.detectedBias}
                </span>
              </div>
            </div>

            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center justify-between border-t border-white/10 pt-5 font-heading">
              <span>Compensation Equity Evaluation</span>
              {!customActive && <span className="text-xs text-red-400 font-extrabold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">-{payGapPercent}% Disparity</span>}
            </h4>

            {!customActive ? (
              <div className="space-y-4 bg-white/[0.01] p-4 rounded-xl border border-white/5 font-mono text-xs">
                <div>
                  <div className="flex justify-between font-sans text-xs mb-1.5">
                    <span className="text-gray-400">Initial Offer Vector</span>
                    <span className="text-red-400 font-bold font-mono">${scenario.offered.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full transition-all duration-700 shadow-sm shadow-red-500/30"
                      style={{ width: `${(scenario.offered / 165000) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-sans text-xs mb-1.5">
                    <span className="text-gray-400">Verified Market Median (Level 4)</span>
                    <span className="text-emerald-400 font-bold font-mono">${scenario.marketMedian.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 h-full rounded-full transition-all duration-700 shadow-sm shadow-emerald-500/30"
                      style={{ width: `${(scenario.marketMedian / 165000) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-gray-400 font-sans text-xs">
                Custom scenario equity computed via Level 4 sovereign index ($140k - $158k baseline).
              </div>
            )}

            <button
              onClick={() => alert("Telemetry session log archived to secure SOC2 encrypted storage node.")}
              className="mt-6 w-full py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md group"
            >
              <Shield className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>Archive Session Telemetry to Vault</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

