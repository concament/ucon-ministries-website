
"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Server, Users, Heart, Eye, Download } from "lucide-react";
import Link from 'next/link';

// Intersection Observer Hook
function useIntersectionObserver(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
}

// Animated Card Component
const AnimatedCard = ({ children, animation }: { children: ReactNode, animation: 'left' | 'right' }) => {
    const [ref, isVisible] = useIntersectionObserver();
    const animationClass = animation === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right';

    return (
        <div ref={ref} style={{ opacity: 0 }} className={isVisible ? animationClass : ''}>
            {children}
        </div>
    );
};


export default function PrivacyPolicyPage() {
  const effectiveDate = "2024-07-24";
  const lastUpdated = "2024-07-24";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-[#A92FFA] to-[#F28C28] text-lg px-6 py-2">
            <ShieldCheck className="w-5 h-5 mr-2" />
            Your Trust, Our Commitment
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            At <span className="font-semibold text-[#A92FFA]">Ucon Ministries</span>, we are committed to protecting your privacy and handling your personal information with care and respect.
          </p>
          <div className="mt-4 text-sm text-muted-foreground space-x-4">
            <span>Effective Date: {effectiveDate}</span>
            <span>|</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">

          <AnimatedCard animation="left">
             <Card className="bg-gradient-to-r from-[#A92FFA]/10 to-[#F28C28]/10">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-center sm:text-left text-foreground font-semibold mb-4 sm:mb-0">For a complete version of our Privacy Policy, please download the official document.</p>
                    <Button asChild className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] text-white hover:opacity-90">
                        <Link href="https://od.lk/d/NzNfMTEwMjEzNTg1Xw/Privacy%20Policy.docx" target="_blank">
                            <Download className="mr-2 h-4 w-4" />
                            Download Full Policy
                        </Link>
                    </Button>
                </CardContent>
              </Card>
          </AnimatedCard>
        
          <AnimatedCard animation="right">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#A92FFA]">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Welcome to Ucon Ministries, also known as United Convicts Ministries or UCon ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit any of our websites, use our services, participate in our programs, or interact with us.</p>
                <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard animation="left">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F28C28]">2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We collect information you voluntarily provide (e.g., for program participation, volunteering) and information automatically collected when you visit our website (e.g., IP address, browser type).</p>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard animation="right">
            <Card className="hover-lift">
                <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#A92FFA]">3. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>We use your information for program delivery, organizational operations, fundraising, communications, legal compliance, and research to improve our services.</p>
                </CardContent>
            </Card>
          </AnimatedCard>

           <AnimatedCard animation="left">
            <Card className="hover-lift">
                <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F28C28]">4. How We Share Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>We only share information with your consent, with our trusted service providers, for legal obligations, or as anonymized, aggregate data.</p>
                </CardContent>
            </Card>
          </AnimatedCard>
          
          <AnimatedCard animation="right">
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 via-card to-[#F28C28]/10 border-[#A92FFA]/20 hover-lift">
                <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center"><Lock className="mr-3 text-[#A92FFA]"/>5. Protected Health Information (PHI) & HIPAA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                <p>When our services create Protected Health Information (PHI) under HIPAA, we comply fully with its regulations. You will receive a separate <span className="font-semibold text-foreground">Notice of Privacy Practices</span> in these cases.</p>
                </CardContent>
            </Card>
          </AnimatedCard>

           <AnimatedCard animation="left">
            <Card className="hover-lift">
                <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F28C28]">6. Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>We implement technical, physical, and administrative safeguards like encryption and access controls to protect your information.</p>
                </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard animation="right">
            <Card className="hover-lift">
                <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#A92FFA]">8. Your Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                <p>You have the right to access, correct, delete, or restrict the use of your information. To exercise these rights, please contact our Privacy Officer.</p>
                </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard animation="left">
            <Card className="border-[#F28C28] border-2 hover-lift">
                <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F28C28]">16. Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                <p>If you have questions, concerns, or complaints, please contact our Privacy Officer at <a href="mailto:privacy@uconministries.org" className="text-[#A92FFA] hover:underline">privacy@uconministries.org</a>.</p>
                </CardContent>
            </Card>
           </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
