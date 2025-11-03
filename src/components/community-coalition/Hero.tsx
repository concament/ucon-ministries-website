"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image
        src="/community-coalition.jpg"
        alt="Community Coalition"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <Badge className="mb-6 bg-[#A92FFA] hover:bg-[#A92FFA]/90 text-lg px-6 py-2">
            <Users className="w-5 h-5 mr-2" />
            Community Coalition
          </Badge>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white">
            Recognizing Our
            <br />
            <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
              Community Heroes
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto">
            Celebrating the individuals and organizations across Colorado making a
            lasting impact in their communities through service, advocacy, and
            compassion.
          </p>
        </div>
      </div>
    </div>
  );
}
