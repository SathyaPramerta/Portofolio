"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, LayoutTemplate, ExternalLink, CheckCircle2 } from 'lucide-react';


// Manual GitHub SVG Component to prevent export errors
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function BuildWJaxDetail() {
  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 bg-slate-950 pb-20">
      
      {/* Background Effect (Cyan/Teal Theme) */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-15 blur-[120px] bg-gradient-to-b from-cyan-500 to-teal-600 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-20">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Project Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-400">
              <LayoutTemplate size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">BuildWJax</h1>
          </div>
          
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Mobile-Based PC Assembly Simulation System. A comprehensive application developed to simulate PC building, utilizing Java for core logic and integrating Firebase as the backend API.
          </p>

          {/* Action Buttons (GitHub & Vercel) */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://github.com/SathyaPramerta/BuildWJax" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors">
              <GithubIcon size={20} />
              View Source Code
            </a>
            <a href="https://drive.google.com/drive/folders/1gnzaz_joR2iYDUc10PFgNwvDTccWK8Z2?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              <ExternalLink size={20} />
              Download APK
            </a>
          </div>

          {/* Detail Content */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">About the Application</h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              BuildWJax is designed to help users simulate and plan their PC builds seamlessly through a mobile-based interface. The system implements a robust CRUD architecture for managing various PC components. It relies heavily on Object-Oriented Programming (OOP) principles in Java and ensures real-time data synchronization by integrating Firebase as its primary backend API.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3 mb-8">
              {['Comprehensive CRUD operational system for PC component simulation', 'Real-time database integration and API management using Firebase', 'Sleek and intuitive User Interface (UI) implemented with Tailwind CSS', 'Strong foundation in Java and Object-Oriented Programming (OOP)'].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg border border-white/5">Java</span>
              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg border border-white/5">Firebase</span>
              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg border border-white/5">Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}