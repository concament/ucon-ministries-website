"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "Welcome",
  "to",
  "United",
  "Convict",
  "Ministers",
  "WORTHLESSNESS?",
  "NO PURPOSE?",
  "BROKEN?",
  "ADDICTED?",
  "GUILT?",
  "HELP?"
];

const FINAL_WORDS = ["PLEASE", "COME", "IN."];

const getRandomEffect = () => {
  const effects = [
    // Fade and scale
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 }
    },
    // Slide from left
    {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 }
    },
    // Slide from right
    {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 }
    },
    // Slide from top
    {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 100 }
    },
    // Slide from bottom
    {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 }
    },
    // Rotate and fade
    {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: -90 }
    },
    // Flip
    {
      initial: { opacity: 0, rotateX: 90 },
      animate: { opacity: 1, rotateX: 0 },
      exit: { opacity: 0, rotateX: -90 }
    },
    // Bounce in
    {
      initial: { opacity: 0, scale: 0, y: -50 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 12 }
      },
      exit: { opacity: 0, scale: 0 }
    }
  ];
  
  return effects[Math.floor(Math.random() * effects.length)];
};

export default function WordShuffleHero() {
  const [currentWord, setCurrentWord] = useState<{ word: string; effect: any } | null>(null);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextWord = () => {
      if (currentIndex < WORDS.length) {
        // Show word
        setCurrentWord({ word: WORDS[currentIndex], effect: getRandomEffect() });
        
        // Hide word after 1200ms and show next (slower, more dramatic)
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
              }, 500);
            }
          }, 500); // Longer pause between words (more dramatic)
        }, 1200); // Longer display duration for each word
      }
    };
    
    showNextWord();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
      {/* Individual words that fade in and out */}
      <AnimatePresence mode="wait">
        {currentWord && (
          <motion.span
            key={currentWord.word}
            {...currentWord.effect}
            transition={{ duration: 0.8 }}
            className={`
              inline-block font-bold text-center
              ${currentWord.word.includes("?") 
                ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(169,47,250,0.6)]" 
                : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground"
              }
            `}
            style={{
              perspective: 1000
            }}
          >
            {currentWord.word}
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
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                className="inline-block font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#A92FFA] drop-shadow-[0_0_40px_rgba(169,47,250,0.8)]"
                style={{
                  perspective: 1000
                }}
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