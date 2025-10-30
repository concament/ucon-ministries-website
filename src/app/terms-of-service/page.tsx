
"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, Heart, AlertTriangle, Copyright, Users, DollarSign, Phone, Download } from "lucide-react";
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

export default function TermsOfServicePage() {
  const effectiveDate = "2024-07-24";
  const lastUpdated = "2024-07-24";

  const renderSection = (title: string, content: React.ReactNode, color: 'purple' | 'orange', icon: React.ReactNode, animation: 'left' | 'right') => (
    <AnimatedCard animation={animation}>
        <Card className="hover-lift">
        <CardHeader>
            <CardTitle className={`text-2xl font-bold flex items-center text-[${color === 'purple' ? '#A92FFA' : '#F28C28'}]`}>
            {icon}
            {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            {content}
        </CardContent>
        </Card>
    </AnimatedCard>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-[#A92FFA] to-[#F28C28] text-lg px-6 py-2">
            <FileText className="w-5 h-5 mr-2" />
            Our Guiding Principles
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to <span className="font-semibold text-[#A92FFA]">Ucon Ministries</span>. These Terms govern your access to and use of our websites, services, and programs.
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
                        <p className="text-center sm:text-left text-foreground font-semibold mb-4 sm:mb-0">For a complete version of our Terms of Service, please download the official document.</p>
                        <Button asChild className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] text-white hover:opacity-90">
                            <Link href="https://od.lk/d/NzNfMTEwMjEzNTY3Xw/Terms%20of%20Service.docx" target="_blank">
                                <Download className="mr-2 h-4 w-4" />
                                Download Full Terms
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </AnimatedCard>
          
          {renderSection("1. Introduction and Acceptance of Terms", (
            <p>By accessing our services, you agree to be bound by these Terms and our Privacy Policy. You must be at least 18 years old or have parental consent.</p>
          ), 'purple', <FileText className="mr-3" />, "right")}

          {renderSection("2. About Ucon Ministries", (
             <p>We provide faith-integrated mental health support, recovery programs, leadership development (LDI), and community outreach, all rooted in our mission to transform lives.</p>
          ), 'orange', <Heart className="mr-3" />, "left")}
          
          {renderSection("3. User Accounts and Registration", (
            <p>To access certain services, you must create an account with accurate information and accept responsibility for all activities under your account.</p>
          ), 'purple', <Users className="mr-3" />, "right")}

          {renderSection("4. Program Participation", (
            <p>Participation requires an application and adherence to program rules. We do not guarantee specific outcomes, as personal transformation is an individual journey.</p>
          ), 'orange', <Users className="mr-3" />, "left")}

          {renderSection("8. Intellectual Property Rights", (
            <p>All content on our websites is owned by Ucon Ministries. We grant you a limited, non-commercial license to view and share our content. No reproduction without permission.</p>
          ), 'purple', <Copyright className="mr-3" />, "right")}

            <AnimatedCard animation="left">
              <Card className="border-red-500/50 border-2 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center text-red-500">
                        <AlertTriangle className="mr-3" />
                        9. User Conduct and Prohibited Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>You agree to use our services lawfully and respectfully. Prohibited activities include illegal acts, harassment, security violations, and misrepresentation. Violations may result in account termination and legal action.</p>
                  </CardContent>
              </Card>
            </AnimatedCard>

          {renderSection("10. Privacy and Data Protection", (
            <p>Your use of our services is governed by our Privacy Policy. You acknowledge our mandatory reporting obligations for safety concerns (e.g., child abuse, threats of harm).</p>
          ), 'orange', <ShieldCheck className="mr-3" />, "right")}

           <AnimatedCard animation="left">
            <Card className="border-amber-500/50 border-2 hover-lift">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center text-amber-500">
                        <AlertTriangle className="mr-3" />
                        12. Disclaimers and Limitations of Liability
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p><span className="font-bold">IMPORTANT:</span> Our services are for informational and supportive purposes only and do not constitute professional medical, legal, or financial advice. Our liability is limited to the maximum extent permitted by law.</p>
                </CardContent>
            </Card>
           </AnimatedCard>

           <AnimatedCard animation="right">
            <Card className="border-red-500/50 border-2 hover-lift">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center text-red-500">
                        <AlertTriangle className="mr-3" />
                        14. Emergency Services and Crisis Situations
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p><span className="font-bold">UCON MINISTRIES DOES NOT PROVIDE EMERGENCY SERVICES.</span> If you are in a crisis, call 911 immediately or contact a crisis hotline (988).</p>
                </CardContent>
            </Card>
           </AnimatedCard>

          {renderSection("15. Dispute Resolution", (
            <p>Disputes will be resolved through binding arbitration, not in court. You also waive your right to participate in class-action lawsuits. These Terms are governed by the laws of Colorado.</p>
          ), 'purple', <FileText className="mr-3" />, "left")}
          
          {renderSection("20. Contact Information", (
            <p>
              For inquiries, please contact us at <a href="mailto:info@uconministries.org" className="text-[#A92FFA] hover:underline">info@uconministries.org</a>.
            </p>
          ), 'orange', <Phone className="mr-3" />, "right")}

        </div>
      </section>

      <Footer />
    </div>
  );
}
