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

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col text-[#f8fafc] selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
      {/* Global Interactive Constellation Canvas & Aurora Mesh (Active continuously on EVERY tab & section!) */}
      <GlobalBackground />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

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

      {/* Footer ONLY visible on landing page (Overview / home tab) */}
      {activeTab === "home" && (
        <div className="relative z-10">
          <Footer />
        </div>
      )}
    </div>
  );
}
