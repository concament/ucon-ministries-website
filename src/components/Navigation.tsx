"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1000021808-1761356032294.png"
                alt="UCon Ministries Logo"
                fill
                className="object-contain !w-full !h-[57px] !max-w-full"
                priority />

            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground !whitespace-pre-line !w-full !h-8">Ucon Ministries</h1>
              <p className="text-xs text-muted-foreground">Where Your Past Becomes Your Purpose</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              About
            </Link>
            <Link href="/ldi" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              LDI
            </Link>
            <Link href="/donations" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Donate
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Contact
            </Link>
            
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0"
              aria-label="Toggle theme">

              {theme === "dark" ?
              <Sun className="w-5 h-5 text-[#F28C28]" /> :

              <Moon className="w-5 h-5 text-[#A92FFA]" />
              }
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0"
              aria-label="Toggle theme">

              {theme === "dark" ?
              <Sun className="w-5 h-5 text-[#F28C28]" /> :

              <Moon className="w-5 h-5 text-[#A92FFA]" />
              }
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent">

              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
        <div className="lg:hidden py-4 space-y-3">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/ldi" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              LDI
            </Link>
            <Link href="/donations" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Donate
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>
        }
      </div>
    </nav>);

}