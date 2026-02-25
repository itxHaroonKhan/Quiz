"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Question from "./components/Question";
import Result from "./components/Result";
import { quizData } from "./components/quiz";

type QuizState = "start" | "playing" | "completed";

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [finalScore, setFinalScore] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const handleStart = () => {
    setQuizState("playing");
  };

  const handleComplete = (score: number) => {
    setFinalScore(score);
    setQuizState("completed");
  };

  const handleRestart = () => {
    setQuizState("start");
    setFinalScore(0);
  };

  // Background colors based on theme
  const bgGradient = isDark 
    ? "bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]" 
    : "bg-gradient-to-br from-[#f0f4ff] via-[#e8ecff] to-[#f0f4ff]";

  // Orb colors
  const orb1Color = isDark ? "bg-purple-500/20" : "bg-purple-500/15";
  const orb2Color = isDark ? "bg-blue-500/20" : "bg-blue-500/15";
  const orb3Color = isDark ? "bg-pink-500/10" : "bg-pink-500/5";

  if (quizState === "playing") {
    return (
      <>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main className={`min-h-screen ${bgGradient} pt-24 pb-24 px-4 flex items-center justify-center relative overflow-hidden`}>
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${orb1Color}`} />
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${orb2Color}`} />
            <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-500 ${orb3Color}`} />
          </div>
          
          <div className="relative z-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Question onComplete={handleComplete} isDark={isDark} />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <Footer isDark={isDark} />
      </>
    );
  }

  if (quizState === "completed") {
    return (
      <>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main className={`min-h-screen ${bgGradient} pt-24 pb-24 px-4 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0">
            <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${orb1Color}`} />
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${orb2Color}`} />
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
              >
                <Result
                  score={finalScore}
                  totalQuestions={quizData.length}
                  onRestart={handleRestart}
                  isDark={isDark}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <Footer isDark={isDark} />
      </>
    );
  }

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className={`min-h-screen ${bgGradient} pt-24 pb-24 px-4 flex items-center justify-center relative overflow-hidden`}>
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30' : 'bg-gradient-to-br from-purple-600/20 to-blue-600/20'}`}
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className={`absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-gradient-to-tr from-pink-600/30 to-purple-600/30' : 'bg-gradient-to-tr from-pink-600/20 to-purple-600/20'}`}
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20' : 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10'}`}
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'} bg-[size:64px_64px]`} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          <Card className="w-[500px] border-0 shadow-2xl overflow-hidden"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Gradient header bar */}
            <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
            
            <CardHeader className="text-center pb-6 pt-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                className="mx-auto mb-6 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
                <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-2xl">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <CardTitle className="text-2xl font-bold mb-3" style={{ color: isDark ? "#fff" : "#1e293b" }}>
                  <span className={isDark ? "bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"}>
                    Web Development Quiz
                  </span>
                </CardTitle>
                <CardDescription className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>
                  Challenge yourself and test your knowledge
                </CardDescription>
              </motion.div>

              {/* Stats badges */}
              <motion.div 
                className="flex justify-center gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Badge variant="secondary" className="px-3 py-1.5 text-xs bg-purple-500/20 border-purple-500/30" style={{ color: isDark ? "#c4b5fd" : "#7c3aed" }}>
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {quizData.length} Questions
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-xs bg-pink-500/20 border-pink-500/30" style={{ color: isDark ? "#f9a8d4" : "#db2777" }}>
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  {quizData.length * 10} Points
                </Badge>
              </motion.div>
            </CardHeader>
            
            <CardContent className="pb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                {/* Info cards */}
                <div className="grid grid-cols-3 gap-2">
                  <motion.div 
                    className="group relative p-3 rounded-xl border transition-all duration-300"
                    style={{
                      background: isDark ? "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(168,85,247,0.05))" : "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.05))",
                      borderColor: isDark ? "rgba(168,85,247,0.2)" : "rgba(168,85,247,0.3)",
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-1 ${isDark ? "bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent"}`}>
                        {quizData.length}
                      </div>
                      <div className="text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(30,41,59,0.5)" }}>Questions</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group relative p-3 rounded-xl border transition-all duration-300"
                    style={{
                      background: isDark ? "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(236,72,153,0.05))" : "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.05))",
                      borderColor: isDark ? "rgba(236,72,153,0.2)" : "rgba(236,72,153,0.3)",
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-1 ${isDark ? "bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent"}`}>
                        10
                      </div>
                      <div className="text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(30,41,59,0.5)" }}>Points Each</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group relative p-3 rounded-xl border transition-all duration-300"
                    style={{
                      background: isDark ? "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))" : "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
                      borderColor: isDark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.3)",
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-1 ${isDark ? "bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent" : "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent"}`}>
                        {quizData.length * 10}
                      </div>
                      <div className="text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(30,41,59,0.5)" }}>Total Points</div>
                    </div>
                  </motion.div>
                </div>

                {/* Info box */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative p-3 rounded-xl border"
                  style={{
                    background: isDark 
                      ? "linear-gradient(90deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1), rgba(59,130,246,0.1))" 
                      : "linear-gradient(90deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15), rgba(59,130,246,0.15))",
                    borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-lg" style={{ backgroundColor: isDark ? "rgba(168,85,247,0.2)" : "rgba(168,85,247,0.15)" }}>
                      <svg className="w-4 h-4" style={{ color: isDark ? "#c4b5fd" : "#7c3aed" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm" style={{ color: isDark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.7)" }}>
                      <p className="font-medium mb-1" style={{ color: isDark ? "rgba(255,255,255,0.9)" : "rgba(30,41,59,0.9)" }}>Quiz Rules</p>
                      <p>Each question has one correct answer. Answer all {quizData.length} questions to complete the quiz.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
            
            <CardFooter className="pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full"
              >
                <Button 
                  onClick={handleStart} 
                  className="w-full h-11 text-base font-semibold relative overflow-hidden group"
                  size="lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    Start Quiz
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
      <Footer isDark={isDark} />
    </>
  );
}
