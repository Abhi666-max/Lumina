"use client";

import React, { useState } from "react";
import { Layers, Zap, Shield, Terminal, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const tabs = [
    { id: "home", label: "Overview", icon: Layers },
    { id: "fintech", label: "Valuation Engine", icon: Zap },
    { id: "lending", label: "Trust Score", icon: Shield },
    { id: "career", label: "Telemetry HUD", icon: Terminal },
    { id: "mentorship", label: "Edge Sandbox", icon: Cpu },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 lg:px-8 pointer-events-none">
      <div className="max-w-4xl mx-auto glass-navbar rounded-full px-6 py-2.5 flex items-center justify-between gap-8 pointer-events-auto transition-all shadow-2xl shadow-indigo-950/40 border border-white/15">
        {/* Sleek Brand Logo with Ultra-Clean Futuristic Font */}
        <div
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full bg-[#09090b] rounded-full flex items-center justify-center">
              <span className="font-sans font-black text-sm bg-gradient-to-tr from-white to-indigo-300 bg-clip-text text-transparent group-hover:rotate-12 transition-transform duration-300">
                L
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.5)] transition-all">
              Lumina
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold hidden sm:inline-block">
              OS
            </span>
          </div>
        </div>

        {/* Floating Navigation Pill Tabs with Dynamic Framer-Motion Hover Animation */}
        <nav
          onMouseLeave={() => setHoveredTab(null)}
          className="hidden md:flex items-center gap-1.5 relative"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-200 group ${
                  isActive ? "text-white shadow-sm" : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Active Tab Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/45 to-purple-600/45 border border-indigo-400/50 rounded-full -z-10 shadow-md shadow-indigo-500/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}

                {/* Hover Tab Background Pill (Only visible when hovering an inactive tab) */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
                      className="absolute inset-0 bg-white/[0.07] border border-white/15 rounded-full -z-10 shadow-inner"
                    />
                  )}
                </AnimatePresence>

                <Icon
                  className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6 ${
                    isActive ? "text-indigo-300" : "text-gray-500 group-hover:text-indigo-400"
                  }`}
                />
                <span className="relative z-10 tracking-wide">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Tabs Bar */}
      <div className="flex md:hidden items-center justify-around mt-3 max-w-sm mx-auto glass-navbar rounded-2xl p-2 gap-1 pointer-events-auto overflow-x-auto border border-white/15">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-sans font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-indigo-600/45 text-white border border-indigo-400/50 shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
}
