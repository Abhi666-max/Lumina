"use client";

import React from "react";
import { Layers, Zap, Shield, Terminal, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = [
    { id: "home", label: "Overview", icon: Layers },
    { id: "fintech", label: "Valuation Engine", icon: Zap },
    { id: "lending", label: "Trust Score", icon: Shield },
    { id: "career", label: "Telemetry HUD", icon: Terminal },
    { id: "mentorship", label: "Edge Sandbox", icon: Cpu },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 lg:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto glass-navbar rounded-full px-5 py-2.5 flex items-center justify-between gap-6 pointer-events-auto transition-all">
        {/* Brand Logo with Custom Geometric Symbol & Outfit Font */}
        <div
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#09090b] rounded-full flex items-center justify-center">
              <span className="font-heading font-black text-xs bg-gradient-to-tr from-white to-indigo-300 bg-clip-text text-transparent">
                L
              </span>
            </div>
          </div>
          <span className="font-heading font-black text-xl tracking-tight bg-gradient-to-r from-white via-indigo-100 to-violet-300 bg-clip-text text-transparent">
            Lumina
          </span>
        </div>

        {/* Floating Navigation Pill Tabs */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium font-sans transition-all ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/[0.08] border border-white/15 rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-indigo-400" : "text-gray-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Clean Enterprise Action CTA */}
        <button
          onClick={() => setActiveTab("fintech")}
          className="flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-semibold text-xs transition-all shadow-md shadow-indigo-600/30 hover:scale-[1.02]"
        >
          <span>Launch Console</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mobile Tabs Bar */}
      <div className="flex md:hidden items-center justify-around mt-3 max-w-sm mx-auto glass-navbar rounded-2xl p-2 gap-1 pointer-events-auto overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-sans font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "bg-indigo-600/30 text-white border border-indigo-500/40"
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
