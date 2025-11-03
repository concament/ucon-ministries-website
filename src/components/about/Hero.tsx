"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image
        src="/nano-banana.png"
        alt="About UCon Ministries"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <Badge className="mb-6 bg-[#A92FFA] hover:bg-[#A92FFA]/90 text-lg px-6 py-2">
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            About UCon Ministries
          </Badge>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white">
            Transforming Lives{" "}
            <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
              Through Purpose
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-10">
            We exist to meet individuals at their point of need, offering
            immediate practical assistance and guiding them through a
            comprehensive journey of healing and transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
