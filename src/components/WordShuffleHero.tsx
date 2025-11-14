"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "Welcome to",
  "United Convict Ministries",
  "WORTHLESSNESS?",
  "NO PURPOSE?",
  "BROKEN?",
  "ADDICTED?",
  "GUILT?",
  "HELP?"
];

const FINAL_WORDS = ["PLEASE", "COME", "IN."];

// Audio file URLs
const OPENING_HIT_URL = "https://od.lk/d/NzNfMTEyMzg5ODUxXw/cinematic-hit-425569.mp3";
const WORD_BOOM_URL = "https://od.lk/d/NzNfMTEyMzg5ODUzXw/fx-dramatic-cinematic-boom-sound-effect-249258.mp3";
const IMPACT_AUDIO_URL = "https://od.lk/d/NzNfMTEyMzg5ODUyXw/cinematic-impact-106030.mp3";

// Preload audio file
const preloadAudio = (url: string): HTMLAudioElement => {
  const audio = new Audio(url);
  audio.preload = "auto";
  return audio;
};

// Play full audio file
const playAudioFull = (audio: HTMLAudioElement, volume: number = 0.6) => {
  const clone = audio.cloneNode(true) as HTMLAudioElement;
  clone.volume = volume;
  clone.currentTime = 0;
  
  const playPromise = clone.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(err => console.log("Audio play failed:", err));
  }
};

// Create ENHANCED scary, suspenseful, cinematic riser using Web Audio API
const createScarySuspensefulRiser = (audioContext: AudioContext | null, duration: number = 20) => {
  if (!audioContext) return;
  
  // Layer 1: Deep ominous sub-bass drone (DARKER)
  const subBass = audioContext.createOscillator();
  const subGain = audioContext.createGain();
  const subFilter = audioContext.createBiquadFilter();
  
  subBass.connect(subFilter);
  subFilter.connect(subGain);
  subGain.connect(audioContext.destination);
  
  subBass.frequency.setValueAtTime(20, audioContext.currentTime);
  subBass.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + duration);
  subBass.type = 'sawtooth';
  
  subFilter.type = 'lowpass';
  subFilter.frequency.setValueAtTime(60, audioContext.currentTime);
  subFilter.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + duration);
  subFilter.Q.value = 10;
  
  subGain.gain.setValueAtTime(0, audioContext.currentTime);
  subGain.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 2);
  subGain.gain.linearRampToValueAtTime(0.6, audioContext.currentTime + duration - 1);
  subGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
  
  subBass.start(audioContext.currentTime);
  subBass.stop(audioContext.currentTime + duration);
  
  // Layer 2: Dissonant horror tension sweep (UNSETTLING)
  const tensionOsc = audioContext.createOscillator();
  const tensionGain = audioContext.createGain();
  const tensionFilter = audioContext.createBiquadFilter();
  
  tensionOsc.connect(tensionFilter);
  tensionFilter.connect(tensionGain);
  tensionGain.connect(audioContext.destination);
  
  tensionOsc.frequency.setValueAtTime(120, audioContext.currentTime);
  tensionOsc.frequency.exponentialRampToValueAtTime(1800, audioContext.currentTime + duration);
  tensionOsc.type = 'square';
  
  tensionFilter.type = 'bandpass';
  tensionFilter.frequency.setValueAtTime(250, audioContext.currentTime);
  tensionFilter.frequency.exponentialRampToValueAtTime(4000, audioContext.currentTime + duration);
  tensionFilter.Q.value = 18;
  
  tensionGain.gain.setValueAtTime(0, audioContext.currentTime);
  tensionGain.gain.linearRampToValueAtTime(0.25, audioContext.currentTime + 3);
  tensionGain.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + duration - 2);
  tensionGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
  
  tensionOsc.start(audioContext.currentTime);
  tensionOsc.stop(audioContext.currentTime + duration);
  
  // Layer 3: Aggressive horror white noise sweep (SCARY)
  const bufferSize = audioContext.sampleRate * duration;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    output[i] = (Math.random() * 2 - 1) * (i / bufferSize) * 2.5;
  }
  
  const noiseSource = audioContext.createBufferSource();
  const noiseGain = audioContext.createGain();
  const noiseFilter = audioContext.createBiquadFilter();
  
  noiseSource.buffer = noiseBuffer;
  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(audioContext.destination);
  
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.setValueAtTime(500, audioContext.currentTime);
  noiseFilter.frequency.exponentialRampToValueAtTime(12000, audioContext.currentTime + duration);
  noiseFilter.Q.value = 6;
  
  noiseGain.gain.setValueAtTime(0, audioContext.currentTime);
  noiseGain.gain.linearRampToValueAtTime(0.22, audioContext.currentTime + duration - 1);
  noiseGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
  
  noiseSource.start(audioContext.currentTime);
  noiseSource.stop(audioContext.currentTime + duration);
  
  // Layer 4: Intense pulsing heartbeat LFO (SUSPENSEFUL)
  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  const pulseOsc = audioContext.createOscillator();
  const pulseGain = audioContext.createGain();
  
  lfo.frequency.value = 3; // Faster, more anxious pulse
  lfo.connect(lfoGain);
  lfoGain.connect(pulseGain.gain);
  
  pulseOsc.connect(pulseGain);
  pulseGain.connect(audioContext.destination);
  
  pulseOsc.frequency.setValueAtTime(60, audioContext.currentTime);
  pulseOsc.frequency.exponentialRampToValueAtTime(160, audioContext.currentTime + duration);
  pulseOsc.type = 'sine';
  
  lfoGain.gain.value = 0.25;
  pulseGain.gain.setValueAtTime(0, audioContext.currentTime);
  pulseGain.gain.linearRampToValueAtTime(0.25, audioContext.currentTime + 4);
  pulseGain.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + duration - 2);
  pulseGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
  
  lfo.start(audioContext.currentTime);
  pulseOsc.start(audioContext.currentTime);
  lfo.stop(audioContext.currentTime + duration);
  pulseOsc.stop(audioContext.currentTime + duration);
  
  // Layer 5: Eerie trembling effect (CINEMATIC SUSPENSE)
  const trembleOsc = audioContext.createOscillator();
  const trembleGain = audioContext.createGain();
  const trembleFilter = audioContext.createBiquadFilter();
  
  trembleOsc.connect(trembleFilter);
  trembleFilter.connect(trembleGain);
  trembleGain.connect(audioContext.destination);
  
  trembleOsc.frequency.setValueAtTime(40, audioContext.currentTime);
  trembleOsc.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + duration);
  trembleOsc.type = 'triangle';
  
  trembleFilter.type = 'lowpass';
  trembleFilter.frequency.setValueAtTime(300, audioContext.currentTime);
  trembleFilter.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + duration);
  trembleFilter.Q.value = 5;
  
  trembleGain.gain.setValueAtTime(0, audioContext.currentTime);
  trembleGain.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 5);
  trembleGain.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + duration - 3);
  trembleGain.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
  
  trembleOsc.start(audioContext.currentTime);
  trembleOsc.stop(audioContext.currentTime + duration);
};

export default function WordShuffleHero() {
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [showFinal, setShowFinal] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const riserPlayedRef = useRef(false);
  
  // Preloaded audio refs
  const openingHitAudioRef = useRef<HTMLAudioElement | null>(null);
  const wordBoomAudioRef = useRef<HTMLAudioElement | null>(null);
  const impactAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio context and preload audio files
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Preload all audio files
      openingHitAudioRef.current = preloadAudio(OPENING_HIT_URL);
      wordBoomAudioRef.current = preloadAudio(WORD_BOOM_URL);
      impactAudioRef.current = preloadAudio(IMPACT_AUDIO_URL);
    }
    
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    
    // Play opening hit sound and scary suspenseful riser at the start
    if (!riserPlayedRef.current) {
      // Play opening cinematic hit
      if (openingHitAudioRef.current) {
        playAudioFull(openingHitAudioRef.current, 0.7);
      }
      
      // Play scary suspenseful riser
      if (audioContextRef.current) {
        createScarySuspensefulRiser(audioContextRef.current, 20);
      }
      
      riserPlayedRef.current = true;
    }
    
    const showNextWord = () => {
      if (currentIndex < WORDS.length) {
        // Play boom sound on each word as it fades in
        if (wordBoomAudioRef.current) {
          playAudioFull(wordBoomAudioRef.current, 0.5);
        }
        
        // Show word/phrase with fade in
        setCurrentWord(WORDS[currentIndex]);
        
        // Hide word after 2500ms (slow, cinematic)
        setTimeout(() => {
          setCurrentWord(null);
          
          // If this is the last word, play impact sound during fade-out
          if (currentIndex === WORDS.length - 1 && impactAudioRef.current) {
            playAudioFull(impactAudioRef.current, 0.7);
          }
          
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
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 justify-center items-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
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