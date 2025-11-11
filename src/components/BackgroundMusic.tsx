"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with new music link
    audioRef.current = new Audio("https://od.lk/d/NzNfMTEwMDI1MTgyXw/Lord%2C%20Im%20Not%20Okay%20%281%29.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Audio play failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card className="fixed bottom-24 right-6 z-40 p-3 bg-background/95 backdrop-blur-sm border-2 border-[#A92FFA]/20 shadow-xl hover:shadow-2xl transition-shadow">
      <Button
        size="sm"
        variant="ghost"
        onClick={togglePlay}
        className="hover:bg-[#A92FFA]/10"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-[#A92FFA]" />
        ) : (
          <Play className="w-5 h-5 text-[#A92FFA]" />
        )}
      </Button>
    </Card>
  );
}