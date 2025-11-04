'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Image
        src="/donations-hero.png"
        alt="Donations for UCon Ministries"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
            <Heart className="w-4 h-4 mr-2" fill="currentColor" />
            Make a Difference
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Transform Lives Today
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your generosity helps restore hope, dignity, and purpose to individuals impacted by addiction, homelessness, and personal brokenness. Every donation makes a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
}
