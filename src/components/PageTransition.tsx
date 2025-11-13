"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Trigger fade out
    setIsTransitioning(true);
    
    // Show loader after fade out starts
    setTimeout(() => {
      setShowLoader(true);
    }, 150);
    
    // Hide loader and fade back in
    const timer = setTimeout(() => {
      setShowLoader(false);
      setIsTransitioning(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loading Overlay with Circular Spinner */}
      {showLoader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative">
            <Loader2 className="w-16 h-16 text-[#A92FFA] animate-spin" />
            <div className="absolute inset-0 rounded-full border-4 border-[#F28C28]/20" 
                 style={{ animation: "pulse 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      )}
      
      {/* Page Content */}
      <div
        className={`transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}