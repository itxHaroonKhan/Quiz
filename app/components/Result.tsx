"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  isDark: boolean;
}

export default function Result({ score, totalQuestions, onRestart, isDark }: ResultProps) {
  const percentage = (score / (totalQuestions * 10)) * 100;
  
  const getMessage = () => {
    if (percentage === 100) return { 
      title: "Perfect Score!", 
      description: "Incredible! You got all answers correct!",
      emoji: "🏆",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
    };
    if (percentage >= 80) return { 
      title: "Excellent Work!", 
      description: "Amazing job, you really know your stuff!",
      emoji: "🌟",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
    };
    if (percentage >= 60) return { 
      title: "Good Job!", 
      description: "Nice work! Keep practicing to improve!",
      emoji: "👍",
      gradient: "from-blue-400 via-indigo-500 to-purple-500",
    };
    if (percentage >= 40) return { 
      title: "Not Bad!", 
      description: "You're on the right track. Keep learning!",
      emoji: "📚",
      gradient: "from-purple-400 via-pink-500 to-rose-500",
    };
    return { 
      title: "Keep Going!", 
      description: "Every expert was once a beginner. Try again!",
      emoji: "💪",
      gradient: "from-gray-400 via-slate-500 to-zinc-500",
    };
  };

  const message = getMessage();

  useEffect(() => {
    if (percentage >= 60) {
      const colors = ["#a855f7", "#ec4899", "#3b82f6", "#22c55e", "#eab308"];
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: colors,
        scalar: 1.2,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });
      }, 300);
    }
  }, [percentage]);

  return (
    <Card className="w-[450px] mx-auto border-0 shadow-2xl overflow-hidden"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Animated gradient header */}
      <div className={`h-2 bg-gradient-to-r ${message.gradient} bg-[length:200%_100%] animate-gradient`} />
      
      <CardHeader className="text-center space-y-4 pb-4 pt-8">
        <motion.div 
          className="mx-auto relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${message.gradient} rounded-3xl blur-2xl opacity-40 animate-pulse`} />
          <div className="relative h-24 w-24 rounded-3xl flex items-center justify-center"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.9)",
              border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <motion.span 
              className="text-5xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {message.emoji}
            </motion.span>
          </div>
        </motion.div>
        
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CardTitle className="text-2xl font-bold" style={{ color: isDark ? "#fff" : "#1e293b" }}>{message.title}</CardTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CardDescription className="text-base mt-1" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>{message.description}</CardDescription>
          </motion.div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>Your Score</span>
            <motion.span 
              className={`text-4xl font-bold bg-gradient-to-r ${message.gradient} bg-clip-text text-transparent`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {score} / {totalQuestions * 10}
            </motion.span>
          </div>
          
          <div className="relative h-3 rounded-full overflow-hidden" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
            <motion.div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${message.gradient} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </div>
          
          <div className="flex justify-between text-xs" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>
            <span>0%</span>
            <motion.span 
              className="font-medium"
              style={{ color: isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.round(percentage)}%
            </motion.span>
            <span>100%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className={`p-4 rounded-xl border ${percentage >= 60 ? 'bg-green-500/20 border-green-500/30' : 'bg-amber-500/20 border-amber-500/30'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${percentage >= 60 ? 'bg-green-500/30' : 'bg-amber-500/30'}`}>
              <svg className={`w-5 h-5 ${percentage >= 60 ? 'text-green-300' : 'text-amber-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className={`font-medium ${percentage >= 60 ? 'text-green-300' : 'text-amber-300'}`}>
                {Math.round(percentage / 10)} out of {totalQuestions} correct
              </p>
              <p className="text-xs mt-0.5" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>
                {percentage >= 60 ? 'Great performance!' : 'Keep practicing!'}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div 
            className="p-4 rounded-xl bg-green-500/20 border border-green-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <motion.p 
                className="text-3xl font-bold text-green-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {Math.round(percentage / 10)}
              </motion.p>
              <p className="text-xs mt-1" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>Correct</p>
            </div>
          </motion.div>
          <motion.div 
            className="p-4 rounded-xl bg-red-500/20 border border-red-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <motion.p 
                className="text-3xl font-bold text-red-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
              >
                {totalQuestions - Math.round(percentage / 10)}
              </motion.p>
              <p className="text-xs mt-1" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>Incorrect</p>
            </div>
          </motion.div>
        </div>
      </CardContent>
      
      <CardFooter className="pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            onClick={onRestart} 
            className="w-full h-12 text-base font-semibold relative overflow-hidden group"
            size="lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 group-hover:scale-110" />
            <span className="relative flex items-center justify-center gap-2 text-white">
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </motion.svg>
              Restart Quiz
            </span>
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
}
