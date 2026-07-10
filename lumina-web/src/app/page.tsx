"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FintechEngine from "@/components/FintechEngine";
import LendingProtocol from "@/components/LendingProtocol";
import CareerShield from "@/components/CareerShield";
import MentorshipSandbox from "@/components/MentorshipSandbox";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, HeartPulse, Trophy } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col text-[#f8fafc] selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
      {/* Global Interactive Constellation Canvas & Aurora Mesh (Active continuously on EVERY tab & section!) */}
      <GlobalBackground />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Vibe2Vision Hackathon Cross-Track Live Infrastructure Ribbon (Visible across all tabs) */}
      <div className="relative z-30 max-w-6xl mx-auto w-full px-4 pt-28 pb-2">
        <div className="iaas-panel py-2 px-4 rounded-full flex flex-wrap items-center justify-between gap-3 text-xs font-sans shadow-lg border border-indigo-500/30">
          <div className="flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span className="font-bold text-white uppercase tracking-wider font-heading text-[11px]">Vibe2Vision Cluster:</span>
            <span className="text-gray-300 font-mono hidden sm:inline">All 3 Women's Empowerment Tracks Online</span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-indigo-300 font-semibold" title="Education, FinTech & Career Empowerment">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              T3: ElevateHer
            </span>
            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold" title="Tech for Women's Safety & Security">
              <Shield className="w-3 h-3 text-emerald-400" />
              T1: SafeSphere
            </span>
            <span className="flex items-center gap-1.5 text-pink-300 font-semibold" title="Health & Wellness Tech for Women">
              <HeartPulse className="w-3 h-3 text-pink-400" />
              T2: HerWellness
            </span>
          </div>
        </div>
      </div>

      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <HeroSection setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === "fintech" && (
            <motion.div
              key="fintech"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <FintechEngine />
            </motion.div>
          )}

          {activeTab === "lending" && (
            <motion.div
              key="lending"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <LendingProtocol />
            </motion.div>
          )}

          {activeTab === "career" && (
            <motion.div
              key="career"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <CareerShield />
            </motion.div>
          )}

          {activeTab === "mentorship" && (
            <motion.div
              key="mentorship"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <MentorshipSandbox />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer now rendered continuously on ALL tabs so no page ever feels incomplete or basic! */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
