"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { quizData, type Question } from "./quiz";
import Result from "./Result";

interface QuestionProps {
  onComplete: (score: number) => void;
  isDark: boolean;
}

// Fisher-Yates shuffle with crypto random for better randomness
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  const getRandomInt = (max: number) => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  };
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle both questions and their options with extra randomness
function shuffleQuiz(questions: Question[]): Question[] {
  // First shuffle the questions
  const shuffledQuestions = shuffleArray([...questions]);
  
  // Then shuffle options for each question
  return shuffledQuestions.map(q => {
    const shuffledOptions = shuffleArray([...q.options]);
    return {
      ...q,
      options: shuffledOptions,
    };
  });
}

export default function Question({ onComplete, isDark }: QuestionProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Shuffle questions and options on component mount with fresh randomness
    const shuffled = shuffleQuiz(quizData);
    // Add extra shuffle pass for maximum randomness
    const doubleShuffled = shuffleQuiz(shuffled);
    setQuestions(doubleShuffled);
  }, []);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const handleAnswer = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      onComplete(score);
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <Card className="w-[500px] border-0 shadow-2xl overflow-hidden"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

      <CardHeader className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <span className="text-white font-bold">{currentIndex + 1}</span>
            </div>
            <div>
              <CardDescription className="text-xs" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>Question</CardDescription>
              <p className="text-sm font-medium" style={{ color: isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)" }}>of {questions.length}</p>
            </div>
          </motion.div>

          <div className="px-4 py-2 rounded-xl"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
              border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <span className="text-sm font-medium" style={{ color: isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)" }}>
              Score: {score}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(30,41,59,0.6)" }}>Progress</span>
            <span className="font-medium" style={{ color: isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)" }}>{Math.round(progress)}%</span>
          </div>
          <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CardTitle className="text-xl font-semibold leading-relaxed pt-2" style={{ color: isDark ? "#fff" : "#1e293b" }}>
            {currentQuestion.question}
          </CardTitle>
        </motion.div>
      </CardHeader>

      <CardContent className="space-y-3">
        <AnimatePresence>
          {currentQuestion.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Button
                variant="outline"
                className={`w-full justify-start h-auto py-4 px-5 text-left whitespace-normal transition-all duration-300 border ${
                  !isAnswered
                    ? "hover:shadow-lg hover:scale-[1.01]"
                    : ""
                }`}
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
                  borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                }}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                asChild={false}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold shrink-0 transition-all ${
                      isAnswered && option === currentQuestion.answer
                        ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                        : isAnswered && option === selectedAnswer
                        ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                        : ""
                    }`}
                    style={{
                      ...(isAnswered && option !== currentQuestion.answer && option !== selectedAnswer ? {} :
                        !isAnswered ? {
                          backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                          color: isDark ? "rgba(255,255,255,0.8)" : "rgba(30,41,59,0.8)",
                          border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)",
                        } : {})
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium" style={{ color: isDark ? "rgba(255,255,255,0.9)" : "rgba(30,41,59,0.9)" }}>{option}</span>
                </span>
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <CardFooter className="pt-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button
                  onClick={handleNext}
                  className="w-full h-12 text-base font-semibold shadow-lg"
                  size="lg"
                >
                  <span className="flex items-center gap-2 text-white">
                    {currentIndex < questions.length - 1 ? (
                      <>
                        Next Question
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </>
                    ) : (
                      <>
                        See Results
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </CardFooter>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
