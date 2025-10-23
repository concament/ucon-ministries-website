"use client"

import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
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

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ldi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Leadership Development Institute
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Open Ministry Services
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Outreach & Advocacy
                </Link>
              </li>
              <li>
                <Link href="/prayer-wall" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Prayer Wall
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Hope Street<br />Community Center, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+15555551234" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (555) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:info@uconministries.org" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@uconministries.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and stories of transformation.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-background"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UCon Ministries. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/donate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}