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
  "NO",
  "PURPOSE?",
  "BROKEN?",
  "ADDICTED?",
  "GUILT?",
  "HELP?",
  "PLEASE",
  "COME",
  "IN."
];

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
        transition: { type: "spring", stiffness: 200, damping: 10 }
      },
      exit: { opacity: 0, scale: 0 }
    }
  ];
  
  return effects[Math.floor(Math.random() * effects.length)];
};

export default function WordShuffleHero() {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [wordEffects, setWordEffects] = useState<any[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < WORDS.length) {
        setDisplayedWords(prev => [...prev, WORDS[currentIndex]]);
        setWordEffects(prev => [...prev, getRandomEffect()]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Show new word every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center items-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
      <AnimatePresence mode="popLayout">
        {displayedWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            {...wordEffects[index]}
            transition={{ duration: 0.5 }}
            className={`
              inline-block font-bold
              ${word.includes("?") 
                ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent" 
                : word === "Welcome" || word === "to" || word === "United" || word === "Convict" || word === "Ministers"
                ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground"
                : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#A92FFA]"
              }
              ${word.includes("?") ? "drop-shadow-[0_0_20px_rgba(169,47,250,0.5)]" : ""}
            `}
            style={{
              perspective: 1000
            }}
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
