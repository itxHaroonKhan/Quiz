"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4 rounded-2xl backdrop-blur-xl border shadow-xl"
          style={{ 
            backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.95)",
            borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
          }}
        >
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold" style={{ color: isDark ? "#fff" : "#1e293b" }}>
                Quiz Master
              </h1>
              <p className="text-xs" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>
                Test Your Knowledge
              </p>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.7)" }}>Home</a>
            <a href="#" className="text-sm transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.7)" }}>Categories</a>
            <a href="#" className="text-sm transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.7)" }}>Leaderboard</a>
            <a href="#" className="text-sm transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.7)" }}>About</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <motion.button 
              className="p-2 rounded-lg transition-colors"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
              }}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
