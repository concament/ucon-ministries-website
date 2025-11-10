"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for "Till the End of Time" by Kari Jobe
    audioRef.current = new Audio("https://files.ceenaija.com/wp-content/uploads/music/2022/05/Cody_Carnes_-_Til_The_End_Of_Time_Ft_Kari_Jobe_CeeNaija.com_.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  return (
    <Card className="fixed bottom-24 right-6 z-40 p-4 bg-background/95 backdrop-blur-sm border-2 border-[#A92FFA]/20 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          variant="ghost"
          onClick={togglePlay}
          className="hover:bg-[#A92FFA]/10 !w-5 !h-5"
          aria-label={isPlaying ? "Pause music" : "Play music"}>

          {isPlaying ?
          <Pause className="w-5 h-5 text-[#A92FFA]" /> :

          <Play className="w-5 h-5 text-[#A92FFA]" />
          }
        </Button>

        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold !whitespace-pre-line"></p>
          <p className="text-xs text-muted-foreground !whitespace-pre-line"></p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="bg-muted rounded-lg appearance-none cursor-pointer accent-[#A92FFA] !w-5 !h-5"
            aria-label="Volume control" />

          <Button
            size="sm"
            variant="ghost"
            onClick={toggleMute}
            className="hover:bg-[#A92FFA]/10 !w-[25.4%] !h-full"
            aria-label={isMuted ? "Unmute" : "Mute"}>

            {isMuted || volume === 0 ?
            <VolumeX className="w-5 h-5 text-muted-foreground" /> :

            <Volume2 className="w-5 h-5 text-[#A92FFA]" />
            }
          </Button>
        </div>
      </div>
    </Card>);

}