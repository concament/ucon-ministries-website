"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "Welcome to United Convict Ministries",
  "WORTHLESSNESS?",
  "NO PURPOSE?",
  "BROKEN?",
  "ADDICTED?",
  "GUILT?",
  "HELP?"
];

const FINAL_WORDS = ["PLEASE", "COME", "IN."];

export default function WordShuffleHero() {
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextWord = () => {
      if (currentIndex < WORDS.length) {
        // Show word/phrase with simple fade
        setCurrentWord(WORDS[currentIndex]);
        
        // Hide word after 2500ms (slow, cinematic)
        setTimeout(() => {
          setCurrentWord(null);
          setTimeout(() => {
            currentIndex++;
            if (currentIndex < WORDS.length) {
              showNextWord();
            } else {
              // Show final words after last word fades out
              setTimeout(() => {
                setShowFinal(true);
              }, 1000); // Dramatic pause before final reveal
            }
          }, 1000); // Pause between words
        }, 2500); // Display duration for each word/phrase
      }
    };
    
    showNextWord();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
      {/* Individual words/phrases that fade in and out */}
      <AnimatePresence mode="wait">
        {currentWord && (
          <motion.span
            key={currentWord}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            className={`
              inline-block font-bold text-center
              ${currentWord.includes("?") 
                ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(169,47,250,0.6)]" 
                : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground"
              }
            `}
          >
            {currentWord}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Final words that stay on screen */}
      <AnimatePresence>
        {showFinal && (
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center">
            {FINAL_WORDS.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.5
                }}
                className="inline-block font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#A92FFA] drop-shadow-[0_0_40px_rgba(169,47,250,0.8)]"
              >
                {word}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}