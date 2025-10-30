"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Pause, Play } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("https://od.lk/d/NzNfMTEwMDI1MTgyXw/Lord%2C%20Im%20Not%20Okay%20%281%29.mp3")
    audioRef.current.loop = true

    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.error("Audio play failed:", err)
        setIsPlaying(false)
      })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => {
          console.error("Audio play failed:", err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (isMuted && newVolume > 0) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <Card className="fixed bottom-24 right-6 z-40 p-2 bg-background/95 backdrop-blur-sm border-2 border-[#A92FFA]/20 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="flex items-center gap-2">
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
        <Button
          size="sm"
          variant="ghost"
          onClick={toggleMute}
          className="hover:bg-[#A92FFA]/10"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-[#A92FFA]" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#A92FFA]" />
          )}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          onValueChange={handleVolumeChange}
          max={1}
          step={0.05}
          className="w-24"
          aria-label="Volume"
        />
      </div>
    </Card>
  )
}