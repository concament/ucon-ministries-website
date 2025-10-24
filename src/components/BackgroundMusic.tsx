"use client"

import { useState, useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element - hidden and low volume
    audioRef.current = new Audio("https://files.ceenaija.com/wp-content/uploads/music/2022/05/Cody_Carnes_-_Til_The_End_Of_Time_Ft_Kari_Jobe_CeeNaija.com_.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15; // Low volume as requested

    // Auto-play on any user interaction
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(err => {
          console.error("Audio play failed:", err);
        });
        setHasInteracted(true);
      }
    };

    // Listen for click, scroll, or hover anywhere on the page
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });
    document.addEventListener('mousemove', handleInteraction, { once: true });

    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
    };
  }, [hasInteracted]);

  // Music continues across page transitions automatically
  // Hidden component - no UI rendered
  return null;
}