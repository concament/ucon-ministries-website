"use client"

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/1000021808-1761356032294.png"
                  alt="UCon Ministries Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">UCon Ministries</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming feelings of worthlessness into enduring purpose and dignity through unconditional connection and Christ's love.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Programs & Ministry */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ministry</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ldi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LDI Program
                </Link>
              </li>
              <li>
                <Link href="/ldi-waitlist" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LDI Waitlist
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Open Services
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Outreach
                </Link>
              </li>
              <li>
                <Link href="/community-coalition" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community Coalition
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/prayer-wall" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Prayer Wall
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/volunteer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-t border-b border-border mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                123 Hope Street, Community Center, CA 90210
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:+15555551234" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                (555) 555-1234
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="mailto:info@uconministries.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                info@uconministries.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UCon Ministries. All rights reserved. | Transforming Lives Since 2024
          </p>
        </div>
      </div>
    </footer>
  );
}