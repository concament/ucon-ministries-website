"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Users, Target, Compass, BookOpen, HandHeart,
  Home, Truck, Utensils, MessageSquare, Shield, Stethoscope,
  TrendingUp, Award, CheckCircle2, ArrowRight, Star,
  ChevronRight, MapPin, Calendar, Clock, Phone, Mail,
  Sparkles, Crown, Mountain, Rocket, GraduationCap, Building2,
  Quote, Lightbulb, UserCheck, Briefcase } from
"lucide-react";

// Intersection Observer Hook for animations
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

export default function HomePage() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [valuesRef, valuesVisible] = useIntersectionObserver();
  const [tracksRef, tracksVisible] = useIntersectionObserver();
  const [ldiRef, ldiVisible] = useIntersectionObserver();
  const [servicesRef, servicesVisible] = useIntersectionObserver();
  const [outreachRef, outreachVisible] = useIntersectionObserver();
  const [testimonialsRef, testimonialsVisible] = useIntersectionObserver();
  const [founderRef, founderVisible] = useIntersectionObserver();
  const [staffRef, staffVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [impactRef, impactVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  // Staff animation state
  const [staffAnimationPhase, setStaffAnimationPhase] = useState<'idle' | 'stacking' | 'spreading' | 'pulsing'>('idle');
  const [startStaffAnimation, setStartStaffAnimation] = useState(false);
  const [releasedCards, setReleasedCards] = useState<Set<number>>(new Set());
  const [pulsingCard, setPulsingCard] = useState<number | null>(null);

  useEffect(() => {
    if (staffVisible && !startStaffAnimation) {
      // Trigger the start of animation
      setStartStaffAnimation(true);
      setStaffAnimationPhase('stacking');

      // After stacking completes (6 cards * 2s each = 12s), spread them out
      setTimeout(() => {
        setStaffAnimationPhase('spreading');

        // Release cards one by one to their final positions AND pulse at the same time
        // Alternating corner order: 0 (top-left), 2 (top-right), 3 (bottom-left), 5 (bottom-right), 1 (middle-left), 4 (middle-right)
        const cornerOrder = [0, 2, 3, 5, 1, 4];

        cornerOrder.forEach((cardIndex, orderIndex) => {
          setTimeout(() => {
            // Release card to final position
            setReleasedCards((prev) => new Set([...prev, cardIndex]));

            // Pulse at the same time the card spreads
            setPulsingCard(cardIndex);

            // Clear pulse after animation completes
            setTimeout(() => {
              setPulsingCard(null);
            }, 600); // Duration of pulse animation
          }, orderIndex * 300); // 300ms delay between each card release
        });
      }, 12000);
    }
  }, [staffVisible, startStaffAnimation]);

  const teamMembers = [
  {
    name: "Founding Visionary Lead",
    role: "Visionary Leadership",
    image: "https://od.lk/d/NzNfMTEwMDI4NDE3Xw/20250713_161156.jpg",
    description: "Former LDI graduate with lived experience in addiction recovery and criminal justice system. Leads ministry vision and strategic direction.",
    badges: ["8 Years Biblical Experience", "Peer Equal"]
  },
  {
    name: "Spiritual Formation Director",
    role: "Biblical Integration",
    image: "https://od.lk/d/NzNfMTEwOTg5MTEzXw/bh3zmtbh3zmtbhd.png",
    description: "Seminary-trained theologian providing spiritual direction, biblical counseling, and systematic theology education throughout all programs.",
    badges: ["M.Div. Theology", "Biblical Counselor"]
  },
  {
    name: "Clinical Director",
    role: "Mental Health & Clinical Excellence",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    description: "Licensed clinical psychologist specializing in addiction recovery and trauma treatment, integrating evidence-based practices with faith-based principles.",
    badges: ["Clinical Psychology", "Trauma-Informed Care"]
  },
  {
    name: "Ministry Programs Multiplication Director",
    role: "Leadership Development",
    image: "https://od.lk/d/NzNfMTEwMDI4NDE1Xw/1753625802155.jpg",
    description: "Oversees multiplication of ministry programs across all tiers, ensuring program quality, participant transformation success, and scalable impact.",
    badges: ["LDI Graduate", "10+ Years Ministry"]
  },
  {
    name: "Outreach Coordinator",
    role: "Community Engagement",
    image: "https://od.lk/d/NzNfMTEwMDI4NDE0Xw/Screenshot_20251029_062837_Gallery.jpg",
    description: "Leads Track 3 outreach initiatives, coordinating volunteers and ensuring immediate crisis response to community needs 24/7.",
    badges: ["Social Work", "Community Organizer"]
  },
  {
    name: "Brand Ambassador",
    role: "Strategic Communications",
    image: "https://od.lk/d/NzNfMTEwOTg5MTEzXw/bh3zmtbh3zmtbhd.png",
    description: "Champions ministry vision and brand identity, building strategic partnerships and amplifying the transformative impact of UCon Ministries.",
    badges: ["Marketing", "Partnership Development"]
  }];

  // Calculate positions for stacking animation
  const getCardPosition = (index: number, phase: 'idle' | 'stacking' | 'spreading' | 'pulsing') => {
    if (phase === 'idle') {
      // Start off-screen: alternating left and right
      const isEven = index % 2 === 0;
      return {
        x: isEven ? -800 : 800,
        y: 0,
        rotate: 0,
        opacity: 0
      };
    } else if (phase === 'stacking') {
      // Stack in center
      return { x: 0, y: 0, rotate: 0, opacity: 1 };
    } else if (phase === 'spreading') {
      // Check if this card has been released
      if (releasedCards.has(index)) {
        // Calculate grid position for released cards - use smaller dimensions
        const row = Math.floor(index / 3);
        const col = index % 3;
        const cardWidth = 300; // Reduced for safer fit
        const gap = 20; // Reduced gap

        // Calculate offset from center - constrained spread
        const totalWidth = 3 * cardWidth + 2 * gap;
        const startX = -totalWidth / 2 + cardWidth / 2;
        const x = startX + col * (cardWidth + gap);

        const cardHeight = 280; // Approximate card height
        const totalHeight = 2 * cardHeight + gap;
        const startY = -totalHeight / 2 + cardHeight / 2;
        const y = startY + row * (cardHeight + gap);

        return { x, y, rotate: 0, opacity: 1 };
      } else {
        // Stay stacked in center
        return { x: 0, y: 0, rotate: 0, opacity: 1 };
      }
    } else {
      // Pulsing phase - maintain grid positions
      if (releasedCards.has(index)) {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const cardWidth = 300;
        const gap = 20;

        const totalWidth = 3 * cardWidth + 2 * gap;
        const startX = -totalWidth / 2 + cardWidth / 2;
        const x = startX + col * (cardWidth + gap);

        const cardHeight = 280;
        const totalHeight = 2 * cardHeight + gap;
        const startY = -totalHeight / 2 + cardHeight / 2;
        const y = startY + row * (cardHeight + gap);

        return { x, y, rotate: 0, opacity: 1 };
      }
      return { x: 0, y: 0, rotate: 0, opacity: 1 };
    }
  };

  // Calculate delay for staggered entrance
  const getCardDelay = (index: number, phase: 'idle' | 'stacking' | 'spreading' | 'pulsing') => {
    if (phase === 'stacking') {
      // Each card enters AFTER the previous one completes (2s per card)
      return index * 2;
    }
    // No delay for spreading/pulsing - timing controlled by state updates
    return 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* SECTION 1: HERO - 12 Containers */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden mb-16">

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/generated_images/warm-and-inviting-hero-image-for-christi-81884a25-20251024154212.jpg"
            alt="Community in prayer"
            fill
            className="object-cover opacity-20"
            priority />

          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Container 1: Main Headline */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className={`inline-flex items-center gap-2 bg-[#A92FFA] transition-all duration-700 !tracking-[10px] !whitespace-pre-line ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <Sparkles className="w-4 h-4" />Welcome to United Convict Ministers
              </Badge>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`
              }>
                <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent !text-[35px] !text-center">{`WORTHLESSNESS?
NO PURPOSE? BROKEN?
ADDICTED? GUILT? HELP? 
`}</span>
              </h1>
              
              {/* Container 2: Subheadline */}
              <p className={`text-muted-foreground max-w-2xl transition-all duration-700 delay-200 !text-[40px] !text-left ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>Please come in.
              </p>
              
              {/* Container 3-4: CTA Buttons */}
              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 !text-center ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <Button size="lg" className="text-lg px-8 bg-[#F28C28] hover:bg-[#F28C28]/90" asChild>
                  <Link href="/contact" className="!text-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-[#A92FFA] hover:bg-[#A92FFA] hover:text-white" asChild>
                  <Link href="/ldi" className="!whitespace-pre-line">The Leadership Development Institute</Link>
                </Button>
              </div>
            </div>
            
            {/* Container 5-8: Hero Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Card className={`bg-[#A92FFA] text-white hover-lift transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text font-bold !text-center !text-[28px]">Projected 500+</CardTitle>
                  <CardDescription className="text-white/80 !text-center">Lives Transformed</CardDescription>
                </CardHeader>
              </Card>
              <Card className={`bg-[#F28C28] text-white hover-lift transition-all duration-700 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold !text-center">64</CardTitle>
                  <CardDescription className="text-white/80 !text-center">Week Program</CardDescription>
                </CardHeader>
              </Card>
              <Card className={`bg-gradient-to-br from-[#A92FFA] to-[#F28C28] text-white hover-lift transition-all duration-700 delay-400 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold !text-center">4</CardTitle>
                  <CardDescription className="text-white/80 !text-center">Leadership Tiers</CardDescription>
                </CardHeader>
              </Card>
              <Card className={`hover-lift transition-all duration-700 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold !text-center">24/7</CardTitle>
                  <CardDescription className="!text-center">Support Available</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          {/* Container 9-12: Feature Badges */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-600 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover-lift">
              <Heart className="w-8 h-8 text-[#A92FFA]" />
              <div>
                <p className="font-semibold">Unconditional Love</p>
                <p className="text-sm text-muted-foreground">Christ-Centered</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover-lift">
              <Users className="w-8 h-8 text-[#F28C28]" />
              <div>
                <p className="font-semibold">Community</p>
                <p className="text-sm text-muted-foreground">Support System</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover-lift">
              <Target className="w-8 h-8 text-[#A92FFA]" />
              <div>
                <p className="font-semibold">Purpose-Driven</p>
                <p className="text-sm text-muted-foreground">Goal Oriented</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover-lift">
              <Award className="w-8 h-8 text-[#F28C28]" />
              <div>
                <p className="font-semibold">Evidence-Based</p>
                <p className="text-sm text-muted-foreground">Proven Methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION STATEMENT - 12 Containers */}
      <section
        ref={missionRef}
        className={`px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 mb-16 !py-0 ${
        missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }>

        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90 !whitespace-pre-line !tracking-[10px]">ABOUT US</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 !whitespace-pre-line !tracking-[50px]">UCON</h2>
          </div>
          
          {/* Container 3-4: Main Mission Statement */}
          <Card className="mb-8 border-2 border-[#A92FFA]/20 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Mission Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground !whitespace-pre-line">Ucon Ministries exists to meet individuals at their point of need, offering immediate practical assistance and guiding them through a comprehensive journey of healing and transformation. Our mission is to  for those deeply impacted by the justice system, addiction, homelessness, and personal brokenness.
                <span className="font-semibold text-[#A92FFA]">transform feelings of worthlessness and mental health struggles into enduring purpose and dignity</span>
              </p>
            </CardContent>
          </Card>
          
          {/* Container 5-6: Vision & Approach */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="w-6 h-6 text-[#A92FFA]" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Through unconditional connection, consistent presence, and the redemptive love of Christ, we empower individuals to discover their inherent dignity and God-given purpose.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-[#F28C28]" />
                  Our Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cultivating authentic servant leaders who drive systemic change and build a legacy of hope in their communities through evidence-based practices and biblical integration.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 7-12: Impact Promise Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-card rounded-lg border border-border !border-indigo-500 !shadow-[0_2px_4px_0_rgba(241,245,249,0.15)] !shadow-[0_16px_24px_-4px_rgba(241,245,249,0.25),0_8px_16px_-4px_rgba(241,245,249,0.15)]">
              <CheckCircle2 className="w-8 h-8 text-[#A92FFA] mb-3" />
              <h3 className="font-semibold mb-2">Immediate Support</h3>
              <p className="text-sm text-muted-foreground">24/7 crisis intervention and practical assistance</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border !border-violet-600">
              <CheckCircle2 className="w-8 h-8 text-[#F28C28] mb-3" />
              <h3 className="font-semibold mb-2">Long-term Healing</h3>
              <p className="text-sm text-muted-foreground">Comprehensive 64-week transformation program</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border !border-violet-600">
              <CheckCircle2 className="w-8 h-8 text-[#A92FFA] mb-3" />
              <h3 className="font-semibold mb-2">Leadership Development</h3>
              <p className="text-sm text-muted-foreground">Training next-generation servant leaders</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border !border-violet-600">
              <CheckCircle2 className="w-8 h-8 text-[#A92FFA] mb-3" />
              <h3 className="font-semibold mb-2">Community Integration</h3>
              <p className="text-sm text-muted-foreground">Building lasting connections and support networks</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border !border-violet-600">
              <CheckCircle2 className="w-8 h-8 text-[#F28C28] mb-3" />
              <h3 className="font-semibold mb-2">Systemic Change</h3>
              <p className="text-sm text-muted-foreground">Advocating for justice and policy reform</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border !border-violet-600">
              <CheckCircle2 className="w-8 h-8 text-[#A92FFA] mb-3" />
              <h3 className="font-semibold mb-2">Generational Impact</h3>
              <p className="text-sm text-muted-foreground">Creating legacy of hope for future generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 animate-fade-in mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !whitespace-pre-line !tracking-[10px] !whitespace-pre-line">OUR CORE VALUES</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What Drives Our Ministry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six foundational principles that guide every aspect of our work and shape our approach to transformation.
            </p>
          </div>
          
          {/* Container 3-8: Six Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle>Inherent Dignity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upholding the intrinsic worth of every individual, irrespective of background or circumstance, is central to our service delivery.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#F28C28]" />
                </div>
                <CardTitle>Purpose-Driven Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We anchor sustainable healing in the discovery and cultivation of individual and communal purpose.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle>Unconditional Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We demonstrate radical empathy and consistent, non-judgmental presence as the foundation of engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle>Community Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We foster systemic change through empowered individuals who serve and inspire their communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#F28C28]" />
                </div>
                <CardTitle>Biblical Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We seamlessly weave spiritual truth and principles with clinically sound, evidence-based practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <HandHeart className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle>Outreach & Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We proactively engage marginalized populations and eliminate barriers to access for essential services.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Value Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <p className="text-4xl font-bold text-[#A92FFA] mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Unconditional Acceptance</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <p className="text-4xl font-bold text-[#F28C28] mb-2">365</p>
              <p className="text-sm text-muted-foreground">Days of Support</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <p className="text-4xl font-bold text-[#A92FFA] mb-2">∞</p>
              <p className="text-sm text-muted-foreground">Potential in Every Person</p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <p className="text-4xl font-bold text-[#A92FFA] mb-2">1</p>
              <p className="text-sm text-muted-foreground">Community United</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THREE-TRACK MODEL - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A92FFA]/5 to-[#F28C28]/5 double-exposure mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !whitespace-pre-line !tracking-[10px] !whitespace-pre-line">MORE THAN MINISTRY</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Three-Track Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting individuals at every stage of their journey—from immediate crisis to long-term leadership development.
            </p>
          </div>
          
          {/* Container 3: Model Overview */}
          <div className="mb-12 p-8 bg-card rounded-xl border-2 border-[#A92FFA]/20">
            <h3 className="text-2xl font-bold mb-4">An Interlocking Ecosystem</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our three tracks are not separate silos—they form an interconnected ecosystem designed to provide comprehensive support from first contact to transformational leadership.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4">Crisis to Stability</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Healing to Growth</Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">Leadership to Legacy</Badge>
            </div>
          </div>
          
          {/* Container 4-6: Three Track Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-[#A92FFA] hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#A92FFA] rounded-xl flex items-center justify-center mb-4">
                  <Crown className="!w-[60.9%] !h-[35px] !text-white" />
                </div>
                <Badge className="w-fit mb-2 !tracking-[10px] !whitespace-pre-line">TRACK 1</Badge>
                <CardTitle className="text-2xl !whitespace-pre-line">The Leadership Development Institute</CardTitle>
                <CardDescription className="text-base !whitespace-pre-line">Our Commitment-Based Program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 !whitespace-pre-line !whitespace-pre-line">The LDI is an Intensive 64-week, four-tier program in development for transforming lives through deep personal healing and leadership development.

                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Requires signed commitment agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm !whitespace-pre-line">Four progressive tiers: Ascension, Pinnacle, Apex, Ucon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clinical psychology + Systematic theology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Develops authentic servant leaders</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/ldi" className="!whitespace-pre-line">Explore The LDI

                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#F28C28] hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F28C28] rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 !text-white" />
                </div>
                <Badge className="w-fit mb-2 bg-[#F28C28] !text-lg !tracking-[10px]" />
                <CardTitle className="text-2xl">Open Ministry Services</CardTitle>
                <CardDescription className="text-base">No Commitment Required</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Accessible pathway for spiritual formation and community connection—the front door to our ministry.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Workshops: Financial literacy, communication skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bible Studies: Fellowship and theological exploration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Pastoral Services: Counseling and prayer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mentoring: Peer support and guidance</span>
                  </li>
                </ul>
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="/services">
                    View All Services
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#A92FFA] hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#A92FFA] rounded-xl flex items-center justify-center mb-4">
                  <HandHeart className="w-8 h-8 !text-white" />
                </div>
                <Badge className="w-fit mb-2 bg-[#A92FFA] !whitespace-pre-line !text-white !tracking-[10px] !whitespace-pre-line">TRACK 3</Badge>
                <CardTitle className="text-2xl">Outreach & Advocacy</CardTitle>
                <CardDescription className="text-base">First Responders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Direct engagement with immediate community needs—the heartbeat of our ministry's compassion.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transportation: Access to essential services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Food Distribution: Addressing food insecurity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Shelter & Housing: Immediate and transitional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advocacy: Voice for the voiceless</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/outreach" className="!whitespace-pre-line">Learn About our Outreach

                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 7-12: Journey Flow */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#A92FFA]/10 flex items-center justify-center text-[#A92FFA] font-bold">1</div>
                <h4 className="font-semibold !tracking-[10px]">First Contact</h4>
              </div>
              <p className="text-sm text-muted-foreground">Outreach provides immediate help—food, shelter, crisis support</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28] font-bold">2</div>
                <h4 className="font-semibold !tracking-[10px]">Building Trust</h4>
              </div>
              <p className="text-sm text-muted-foreground">Open Services offer workshops, Bible studies, pastoral care</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#A92FFA]/10 flex items-center justify-center text-[#A92FFA] font-bold">3</div>
                <h4 className="font-semibold !tracking-[10px]">Deep Transformation</h4>
              </div>
              <p className="text-sm text-muted-foreground">LDI commitment leads to leadership and systemic change</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#A92FFA]/10 flex items-center justify-center text-[#A92FFA] font-bold">4</div>
                <h4 className="font-semibold !tracking-[10px]">Mentorship</h4>
              </div>
              <p className="text-sm text-muted-foreground">Graduates mentor new members, giving back to community</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#F28C28]/10 flex items-center justify-center text-[#F28C28] font-bold">5</div>
                <h4 className="font-semibold !tracking-[10px]">Systemic Impact</h4>
              </div>
              <p className="text-sm text-muted-foreground">Leaders influence organizations, policy, and culture</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#A92FFA]/10 flex items-center justify-center text-[#A92FFA] font-bold">6</div>
                <h4 className="font-semibold !tracking-[10px]">Legacy Building</h4>
              </div>
              <p className="text-sm text-muted-foreground">Generational change through movement-building</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LDI OVERVIEW - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 animate-slide-in-up mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !whitespace-pre-line !tracking-[10px] !whitespace-pre-line !whitespace-pre-line">OUR ANTICIPATED TRACK</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Leadership Development Institute</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto !whitespace-pre-line !whitespace-pre-line">The LDI will be a  rigorous 64-week, four-tier program that transforms profound brokenness into authentic, purpose-driven leadership.

            </p>
          </div>
          
          {/* Container 3-4: LDI Introduction */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl !text-center">The Engine of Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 !whitespace-pre-line">The LDI is our intensive, commitment-based program designed to dismantle a lifetime, or  immediate sense of worthlessness and trauma through a safe, challenging, fun environment.

                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Requires signed commitment agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Therapeutic community model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clinical psychology + systematic theology</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#A92FFA] text-white">
              <CardHeader>
                <CardTitle className="text-2xl !text-center">Program Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 !text-white">
                  Graduates emerge as authentic servant leaders equipped to serve their communities and drive systemic change.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mental health restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Leadership and mentoring skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Systemic change capacity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 5-8: Four Tiers */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-[#A92FFA]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 !tracking-[10px]">Tier 1</Badge>
                    <CardTitle className="text-2xl flex items-center gap-3 !tracking-[10px]">
                      <Sparkles className="w-6 h-6 text-[#A92FFA]" />
                      Ascension
                    </CardTitle>
                    <CardDescription className="!whitespace-pre-line">Foundation & Deconstruction | The Rise</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 !whitespace-pre-line">We use intensive mental health restoration, sobriety skills mastery, and foundational life skills with biblical systematic theolog that goes moving from identity disorder to sacred worth affirmation.

                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Mental Health Restoration</Badge>
                  <Badge variant="outline">Sobriety Skills</Badge>
                  <Badge variant="outline">Life Skills Foundation</Badge>
                  <Badge variant="outline">Identity Rebuilding</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-[#F28C28]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-[#F28C28] !tracking-[10px]">Tier 2</Badge>
                    <CardTitle className="text-2xl flex items-center gap-3 !tracking-[10px]">
                      <Mountain className="w-6 h-6 text-[#F28C28]" />
                      Pinnacle
                    </CardTitle>
                    <CardDescription className="!whitespace-pre-line">Mentorship Development | The Climb</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Moving from personal transformation to mentoring others. Training in advanced mental health principles, peer counseling mastery, and group facilitation. Transition from follower to mentor.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Advanced Mental Health</Badge>
                  <Badge variant="outline">Peer Counseling</Badge>
                  <Badge variant="outline">Group Facilitation</Badge>
                  <Badge variant="outline">Mentorship Skills</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-[#A92FFA]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-[#A92FFA] !tracking-[11px] !text-white">Tier 3</Badge>
                    <CardTitle className="text-2xl flex items-center gap-3 !tracking-[10px]">
                      <Building2 className="w-6 h-6 text-[#A92FFA]" />
                      Apex
                    </CardTitle>
                    <CardDescription className=" !whitespace-pre-line">Systemic Leadership | Pathway</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Beyond mentoring to influencing entire systems. Learning to design and manage organizational systems, community mobilization, advocacy, and executive administration. Becoming catalysts for systemic change.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">System Design</Badge>
                  <Badge variant="outline">Community Mobilization</Badge>
                  <Badge variant="outline">Advocacy Training</Badge>
                  <Badge variant="outline">Executive Skills</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-[#A92FFA] bg-gradient-to-br from-[#A92FFA]/5 to-[#F28C28]/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 !tracking-[10px]">Tier 4</Badge>
                    <CardTitle className="text-2xl flex items-center gap-3 !whitespace-pre-line !tracking-[10px] !whitespace-pre-line">
                      <Rocket className="w-6 h-6 text-[#A92FFA]" />UCON

                    </CardTitle>
                    <CardDescription className="!whitespace-pre-line !whitespace-pre-line">Visionary Leadership | Finding Purpose</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Becoming visionaries operating on national and international scale. Focus on movement-building, policy development, and cultural transformation. Prepared for executive roles with board governance, stakeholder relations, and succession planning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Movement Building</Badge>
                  <Badge variant="outline">Policy Development</Badge>
                  <Badge variant="outline">Board Governance</Badge>
                  <Badge variant="outline">Legacy Creation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Application Process */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-[#A92FFA]" />
              </div>
              <h4 className="font-semibold mb-2">1. Initial Contact</h4>
              <p className="text-sm text-muted-foreground">Reach out through outreach or open services</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-[#F28C28]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[#F28C28]" />
              </div>
              <h4 className="font-semibold mb-2">2. Assessment</h4>
              <p className="text-sm text-muted-foreground">Comprehensive evaluation of needs and readiness</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-[#A92FFA]" />
              </div>
              <h4 className="font-semibold mb-2">3. Commitment</h4>
              <p className="text-sm text-muted-foreground !whitespace-pre-line">Complete intake and begin Tier 1</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-[#A92FFA]" />
              </div>
              <h4 className="font-semibold mb-2">4. Journey</h4>
              <p className="text-sm text-muted-foreground">Progress through 64-week transformation</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link href="/ldi">
                Learn More About LDI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRACK 2 SERVICES - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 bg-muted/50 overlay-gradient mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F28C28]" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Open Ministry Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto !whitespace-pre-line">Accessible programs for spiritual formation and community connection—no commitment required

            </p>
          </div>
          
          {/* Container 3-6: Four Service Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#F28C28]" />
                </div>
                <CardTitle className="text-xl !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON EQUIP</CardTitle>
                <CardDescription className="!whitespace-pre-line">Workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !text-justify">Our ministry workshops are an educational outreach initiative designed to provide comprehensive support and holistic development, much like programs found in community-focused organizations and recovery centers. We offer a diverse range of interactive sessions covering vital areas such as spiritual foundations and personal growth, practical life skills, sobriety and recovery support, art and skill development (including creative workshops and various trades), and career development (including job readiness and financial literacy). Through this broad and inclusive approach, we empower participants to achieve personal stability, develop vital skills, find purpose, and become contributing members of our community.

                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Financial literacy and budgeting</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Communication and conflict resolution</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Creative expression and arts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Job readiness and career development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#F28C28]" />
                </div>
                <CardTitle className="text-xl !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON AWAKEN</CardTitle>
                <CardDescription>Spiritual Growth</CardDescription>
              </CardHeader>
              <CardContent className="!py-0">
                <p className="text-muted-foreground mb-4 !w-[100.1%] !h-[294px] !text-justify !py-0">Our ministry provides a robust schedule of engaging Bible studies and faith-strengthening courses designed to deepen your relationship with God and foster meaningful connections within our community. We offer everything from intensive scriptural explorations and foundational theology courses to practical workshops on prayer, spiritual disciplines, and relationship-building seminars. Through these interactive sessions, individuals can grow in their understanding of the Bible, enrich their personal faith journey, and strengthen supportive bonds with others, all within a welcoming and nurturing environment

                </p>
                <ul className="space-y-2 !py-[90px]">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Weekly Bible study groups</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Topical scripture exploration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Fellowship and community building</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Theological discussions and Q&A</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#F28C28]" />
                </div>
                <CardTitle className="text-xl !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON SHEPHERD</CardTitle>
                <CardDescription>Spiritual Care & Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 !whitespace-pre-line !w-[100.1%] !h-3/4 !no-underline !text-justify">We provide compassionate spiritual care and personalized guidance for individuals navigating life's challenges, transitions, and moments of crisis.  Our pastoral team is committed to walking alongside you with empathy, biblical insight, and practical care. Through these deeply personal connections, we help individuals find hope, experience God's presence in tangible ways, and discover renewed strength to move forward with faith and resilience.

                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Individual pastoral counseling</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>24/7 prayer support hotline</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Crisis intervention and support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Spiritual guidance and direction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F28C28]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#F28C28]" />
                </div>
                <CardTitle className="text-xl !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON BRIDGE</CardTitle>
                <CardDescription>Mentorship and Peer Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 !whitespace-pre-line !w-[100.1%] !h-[293px] !text-justify">We connect individuals with experienced guides and supportive community members who understand the unique challenges of transformation and recovery. Our mentoring program fosters meaningful one-on-one relationships, group accountability circles, and peer-led support sessions where participants can share experiences and navigate challenges together in a safe environment. Through consistent connection, shared wisdom, and compassionate accountability, participants develop the resilience, confidence, and community bonds essential for sustaining positive life transformation.

                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>One-on-one mentorship matching</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Peer support groups</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Accountability partnerships</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Bridge to deeper engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 7-12: Schedule & Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Calendar className="w-8 h-8 text-[#F28C28] mb-2" />
                <CardTitle className="!whitespace-pre-line !whitespace-pre-line">Ucon Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday</span>
                    <span className="font-medium">Bible Study 7PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Wednesday</span>
                    <span className="font-medium">Workshops 6PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Friday</span>
                    <span className="font-medium">Fellowship 7PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Worship 10AM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-[#F28C28] mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">UCon Ministries Center</p>
                <p className="mb-2 !whitespace-pre-line">2000 S Colorado Blvd T1 </p>
                <p className="mb-4 !whitespace-pre-line">Denver, CO 80210</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-[#F28C28] mb-2" />
                <CardTitle>Get Connected</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div>
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium">(555) 555-1234</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p className="font-medium !whitespace-pre-line">services@uconministries.org</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3 bg-[#F28C28] text-[#F28C28]/90">
              <CardContent className="pt-6 !text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ready to Join Our Community?</h3>
                    <p className="!text-white">No commitment required—come as you are and find your place.</p>
                  </div>
                  <Button size="lg" variant="outline" className="bg-white text-[#F28C28] hover:bg-white/90" asChild>
                    <Link href="/services" className="!text-white !text-center">
                      View All Services
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7: TRACK 3 OUTREACH - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 animate-fade-in mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA] !tracking-[10.5px] !text-white !whitespace-pre-line">TRACK 3</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Outreach & Community Advocacy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The heartbeat of our ministry's compassion—extending practical help to those experiencing immediate crisis and systemic hardship.
            </p>
          </div>
          
          {/* Container 3-8: Six Outreach Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON TRANSIT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Removing barriers to stability by providing transportation to essential services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Job interviews</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Medical appointments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Court dates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Housing connections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !whitespace-pre-line !text-center">UCON NOURISH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Addressing food insecurity as a primary step toward stability and recovery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Weekly food drives</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Community pantry</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="!whitespace-pre-line">upcoming Hot meal service</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Food bank partnerships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON NEIGHBORS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Active presence building trust and creating organic relationship opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Community clean-ups</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Non-profit collaborations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Community festivals</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Partnership initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle className="!whitespace-pre-line !whitespace-pre-line !tracking-[10px] !whitespace-pre-line !text-center">UCON VOICE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Giving voice to the voiceless and addressing root causes of brokenness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Fair housing advocacy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Criminal justice reform</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Policy engagement</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Systemic justice work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle className="!whitespace-pre-line !tracking-[10px] !text-center">UCON HAVEN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Providing safe, stable environments as foundation for recovery journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Emergency shelter</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Transitional housing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Housing vouchers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Long-term solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A92FFA]/10 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-[#A92FFA]" />
                </div>
                <CardTitle className="!whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON STEPS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  First point of contact for addiction support with professional medical care access.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Crisis support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Detox referrals</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Rehab connections</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Post-rehab support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Emergency Contact & CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#A92FFA] text-[#A92FFA]/90">
              <CardHeader>
                <CardTitle className="text-2xl !text-white">Need Immediate Help?</CardTitle>
                <CardDescription className="!text-white">We're here 24/7 for crisis support</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 !text-white">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold text-lg !text-white">(555) 555-1234</p>
                      <p className="text-sm !text-white">Crisis Hotline</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">outreach@ucon.org</p>
                      <p className="text-sm !text-white">Emergency Email</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-white text-[#A92FFA] hover:bg-white/90">
                    Request Immediate Assistance
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl !whitespace-pre-line !whitespace-pre-line !tracking-[10px] !text-center">UCON FRONTLINE</CardTitle>
                <CardDescription>Volunteer in our outreach. Join us in serving the community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Be part of our first responder team. Whether you can give a few hours a week or want to make a deeper commitment, there's a place for you.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Food distribution volunteers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Transportation drivers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Shelter support staff</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/outreach">Learn More About Outreach</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A92FFA]/5 to-[#F28C28]/5 double-exposure mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !tracking-[10px]">Stories of Hope</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Lives Being Transformed</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real people experiencing hope, community, and the beginning of transformation through UCon Ministries.
            </p>
          </div>
          
          {/* Container 3-8: Six Testimonial Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/visual-edit-uploads/1762834483420-v9zvsw6ymh.png"
                      alt="Marcus T."
                      fill
                      className="object-cover" />

                  </div>
                  <div>
                    <CardTitle className="text-lg">Marcus T.</CardTitle>
                    <CardDescription>Outreach Recipient</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3 !whitespace-pre-line">"When I was living on the streets, Ucon's outreach team found me. They didn't just give me a meal—they sat with me, listened to my story, and treated me like I mattered. Now I'm on the waitlist for the LDI program, and for the first time in years, I have real hope."

                </p>
                <Badge variant="outline" className="!whitespace-pre-line">Seen. Heard. Valued.</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/visual-edit-uploads/1762834895212-1rziiuwy9se.jpg"
                      alt="Sarah L."
                      fill
                      className="object-cover" />

                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah L.</CardTitle>
                    <CardDescription>Services Participant</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3 !whitespace-pre-line">"I started attending the UCON Awaken and Equip just looking for community after rehab. The workshops on financial literacy and the pastoral support have been life-changing. I'm excited about what Ucon is building—I've never seen a ministry approach recovery this comprehensively."

                </p>
                <Badge variant="outline" className="!whitespace-pre-line">Supporting Every Step Forward</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/visual-edit-uploads/1762835614164-pdcorjjmyp.png"
                      alt="James K."
                      fill
                      className="object-cover" />

                  </div>
                  <div>
                    <CardTitle className="text-lg">James K.</CardTitle>
                    <CardDescription>Volunteer</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                  <Star className="w-4 h-4 fill-[#A92FFA] text-[#A92FFA]" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3 !whitespace-pre-line">"As someone who went through addiction myself years ago, I'm blown away by Ucon's vision. The three-track model and the LDI program design are exactly what this community needs. I volunteer every week because I believe in this mission completely."

                </p>
                <Badge variant="outline" className="!whitespace-pre-line">Been There. Serving Here</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/visual-edit-uploads/1762836294042-v39uhxc78x.png"
                    alt="Diana R."
                    fill
                    className="object-cover" />

                </div>
                <CardTitle className="text-lg">Diana R.</CardTitle>
                <CardDescription>Services Participant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3 !whitespace-pre-line">"This community gave me more than church attendance—it gave me a faith that's actually mine. The teachers here don't see me as broken; they see me as someone God is transforming. I'm learning theology, practicing spiritual disciplines, and for the first time, I feel rooted in something real and lasting."

                </p>
                <Badge variant="outline" className="!whitespace-pre-line !whitespace-pre-line">Where Scripture Meets Life</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/visual-edit-uploads/1762836623683-hhrhnmrg93.jpg"
                    alt="Thomas P."
                    fill
                    className="object-cover" />

                </div>
                <CardTitle className="text-lg">Thomas P.</CardTitle>
                <CardDescription>Early LDI Candidate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I've been clean for 6 months and working with UCon's pastoral team. When they told me about the 64-week LDI program, I knew that's what I need. Not just recovery, but real transformation and purpose. I've completed my application and can't wait to start."
                </p>
                <Badge variant="outline" className="!whitespace-pre-line">Committed to Complete Change</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/generated_images/professional-headshot-portrait-photograp-82743e11-20251105190506.jpg"
                    alt="Linda M."
                    fill
                    className="object-cover" />

                </div>
                <CardTitle className="text-lg">Linda M.</CardTitle>
                <CardDescription>Community Partner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "As a local business owner, I've partnered with UCon to provide employment opportunities. What impresses me most is their holistic vision—they're not just helping people survive, they're building leaders who will transform this entire community. I'm excited to see what's ahead."
                </p>
                <Badge variant="outline" className="!whitespace-pre-line">Leaders Who Give Back</Badge>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg">
              <p className="text-4xl font-bold text-[#A92FFA] mb-2">150+</p>
              <p className="text-sm text-muted-foreground">People Served Monthly</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <p className="text-4xl font-bold text-[#F28C28] mb-2">200+</p>
              <p className="text-sm text-muted-foreground">Meals Distributed Weekly</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <p className="text-4xl font-bold text-[#A92FFA] mb-2">45</p>
              <p className="text-sm text-muted-foreground">LDI Applicants</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <p className="text-4xl font-bold text-[#A92FFA] mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Commitment to Transform</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: FOUNDER STORY - 12 Containers */}
      <section
        ref={founderRef}
        className={`px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-1000 mb-16 !py-0 ${
        founderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }>

        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA] !tracking-[10px] !whitespace-pre-line">OUR STORY</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Founded on Transformation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From rock bottom to redemptive purpose—the journey that built Ucon Ministries.
            </p>
          </div>
          
          {/* Container 3-4: Founder Story with Image */}
          <div className="mb-12">
            <Card className="border-2 border-[#A92FFA]/30 hover-lift">
              <CardHeader>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="md:w-48 flex-shrink-0 relative rounded-lg overflow-hidden !w-48 !h-48">
                    <Image
                      src="https://od.lk/d/NzNfMTEwMDI2OTkyXw/Founder.jpg"
                      alt="Ministry Founder"
                      fill
                      className="object-cover !w-full !h-[190px] !max-w-full !text-center !mx-0 !px-0" />

                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2 !text-justify">What If Your Darkest Moment Became Your Greatest Purpose</CardTitle>
                    <CardDescription className="text-lg !text-justify">The Journey Nobody Expected to Change Everything</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p className="text-muted-foreground leading-relaxed !text-justify">
                  Ucon Ministries was founded in 2024 by one man and other individuals who never imagined their darkest moments would become their greatest mission. Our founder spent years trapped in a cycle of worthlessness—broken by the justice system, consumed by addiction, crushed by homelessness, and drowning in mental health struggles that seemed impossible to overcome.
                </p>
                <p className="text-muted-foreground leading-relaxed !text-justify">
                  Rock bottom felt permanent. Hope felt like a cruel joke. Purpose felt like something meant for other people.
                </p>
                <p className="text-muted-foreground leading-relaxed !text-justify">
                  But then came the choice nobody saw coming—the decision to do the work. Not just any work, but the brutal, honest work of facing the truth. Our founder recognized they couldn't do it alone, but also couldn't be saved by someone else's effort. They chose to show up. Chose the right people who wouldn't enable but would empower. Chose therapy that demanded honesty. Chose to open the Bible and actually wrestle with God. Chose to let Jesus into the mess. Chose community even when isolation felt safer.
                </p>
                <p className="text-muted-foreground leading-relaxed !text-justify">
                  Through Christ's redemptive power—accepted and pursued—combined with professional therapy, biblical truth, personal accountability, and a community that walked alongside without carrying the load, transformation became possible. Not handed down from above. Not magically fixed. But fought for. Chosen. Built one hard decision at a time.
                </p>
                <p className="text-muted-foreground leading-relaxed !text-justify">
                  This hard-won journey revealed a profound truth: real transformation requires more than temporary fixes. It demands comprehensive support, biblical integration, clinical excellence, personal commitment to do the work, and most importantly—choosing the right people who believe in your potential while you build your own.
                </p>
                <p className="text-muted-foreground leading-relaxed !text-justify">
                  Ucon Ministries was born from that revelation. We became the ministry our founder desperately needed but couldn't find—one that meets people at their point of deepest need and provides the tools, truth, and support while they do the transformative work themselves. We walk with them through every step: from crisis stabilization to discovering dignity, from learning practical skills to finding lasting purpose, from being served to becoming servant leaders who transform entire communities.
                </p>
                <p className="text-muted-foreground leading-relaxed font-semibold !text-justify">
                  What started as one person's choice to fight for their own life has become a movement of restoration. That's the journey nobody expected to change everything—but it did.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 5-8: Mission Evolution */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle className="!tracking-[10px] !text-left">The Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground !text-left">
                  To create a ministry that doesn't just offer services, but builds a comprehensive ecosystem of transformation 
                  from immediate crisis response to international leadership development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Heart className="w-10 h-10 text-[#F28C28] mb-3" fill="currentColor" />
                <CardTitle className="!tracking-[10px]">The Heart</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every person carries infinite worth and God-given purpose. Our calling is to help people discover their 
                  sacred dignity and become the servant leaders they were created to be.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <Target className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle className="!tracking-[10px]">The Method</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Combining clinical psychology, systematic theology, and lived experience into a proven model that produces 
                  authentic transformation and equips leaders for systemic change.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Key Principles */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 border-2 border-[#A92FFA]/20">
              <CardHeader>
                <CardTitle className="text-2xl !text-center">What Sets Us Apart</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Lived Experience Leadership</p>
                    <p className="text-sm text-muted-foreground">Led by those who've walked the journey from brokenness to purpose</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Comprehensive Care Ecosystem</p>
                    <p className="text-sm text-muted-foreground">Three tracks meeting every need from crisis to leadership</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Clinical Excellence + Biblical Integration</p>
                    <p className="text-sm text-muted-foreground">Evidence-based practices infused with Christ's transforming love</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#F28C28]/10 to-[#F28C28]/5 border-2 border-[#F28C28]/20">
              <CardHeader>
                <CardTitle className="text-2xl !text-center">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Unconditional Acceptance</p>
                    <p className="text-sm text-muted-foreground">Meeting people exactly where they are, no prerequisites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Long-term Partnership</p>
                    <p className="text-sm text-muted-foreground">Walking with individuals for years, not just weeks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F28C28] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Generational Impact</p>
                    <p className="text-sm text-muted-foreground">Building leaders who transform families and communities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW SECTION: STAFF TEAM - 12 Containers */}
      <section
        ref={staffRef}
        className={`px-4 sm:px-6 lg:px-8 bg-white dark:bg-background transition-all duration-1000 mb-16 overflow-hidden !py-0 ${
        staffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
        }>

        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F28C28] text-white">Our Team</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse team united by personal transformation stories and a shared calling to serve those seeking hope and purpose.
            </p>
          </div>
          
          {/* Container 3-8: Staff Members with Stacking Animation */}
          <div
            className={`relative mx-auto ${staffAnimationPhase === 'pulsing' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : ''}`}
            style={{
              minHeight: staffAnimationPhase === 'pulsing' ? 'auto' : '700px',
              maxWidth: staffAnimationPhase === 'pulsing' ? '100%' : '1200px',
              display: staffAnimationPhase === 'pulsing' ? 'grid' : 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            {teamMembers.map((member, index) => {
              const position = getCardPosition(index, staffAnimationPhase);
              const delay = getCardDelay(index, staffAnimationPhase);
              const isAbsolutePositioned = staffAnimationPhase !== 'pulsing';

              // Z-index logic:
              // - Stacking: newer cards on top (index + 10)
              // - Spreading: unreleased cards (in center) on top (index + 20), released cards behind (index)
              const zIndex = staffAnimationPhase === 'stacking' ?
              index + 10 :
              releasedCards.has(index) ? index : index + 20;

              return (
                <div
                  key={member.name}
                  style={isAbsolutePositioned ? {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '100%',
                    maxWidth: '340px',
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg)`,
                    opacity: position.opacity,
                    transition: `all 2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
                    zIndex: zIndex,
                    animation: pulsingCard === index ? 'cardPulse 0.6s ease-out' : 'none'
                  } : {
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`,
                    animation: pulsingCard === index ? 'cardPulse 0.6s ease-out' : 'none'
                  }}>

                  <Card className="hover-lift hover-glow h-full">
                    <CardHeader>
                      <div className="w-full h-48 rounded-lg overflow-hidden mb-4 relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover" />

                      </div>
                      <CardTitle className="text-center text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-center">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-3">{member.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.badges.map((badge) =>
                        <Badge key={badge} variant="outline">
                            {badge}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>);

            })}
          </div>
          
          {/* Container 9-12: Team Values & Volunteer CTA */}
          <div className="grid md:grid-cols-2 gap-8 mt-32">
            <Card className="border-2 border-[#A92FFA]/30">
              <CardHeader>
                <CardTitle className="text-2xl !text-center">Our Team Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#A92FFA] mt-1 flex-shrink-0" fill="currentColor" />
                  <div>
                    <p className="font-semibold mb-1">Lived Experience</p>
                    <p className="text-sm text-muted-foreground">
                      Many team members are LDI graduates who understand the journey from brokenness to purpose
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#A92FFA] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Diverse Expertise</p>
                    <p className="text-sm text-muted-foreground">
                      Clinical psychology, theology, social work, and community organizing unified in mission
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#A92FFA] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Continuous Learning</p>
                    <p className="text-sm text-muted-foreground">
                      Conmited to ongoing professional development and evidence-based practice excellence
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#F28C28]/10 to-[#A92FFA]/10 border-2 border-[#F28C28]/30">
              <CardHeader>
                <CardTitle className="text-2xl !text-center">Join Our Team</CardTitle>
                <CardDescription className="!text-center">Make a Difference Through Service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Whether you're seeking employment, internship opportunities, or volunteer positions, 
                  there's a place for you at UCon Ministries.
                </p>
                <div className="space-y-2">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/careers">View Career Opportunities</Link>
                  </Button>
                  <Button className="w-full" size="lg" variant="outline" asChild>
                    <Link href="/volunteer">Become a Volunteer</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center pt-2">
                  Join a team that's transforming lives and communities through unconditional love and purpose-driven service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 9: IMPACT STATS - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 overlay-gradient animate-grow mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !tracking-[10px]">Our Impact</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Measuring Transformation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto !whitespace-pre-line">We have live milestones so you can follow or impact and transformational journey

            </p>
          </div>
          
          {/* Container 3-8: Major Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 border-2 border-[#A92FFA]/20">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#A92FFA] mx-auto mb-4" />
                <CardTitle className="text-5xl font-bold text-[#A92FFA] mb-2">500+</CardTitle>
                <CardDescription className="text-lg !whitespace-pre-line">Lives Transformed Since 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From crisis to stability to leadership—each person represents a ripple of hope in their community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-[#F28C28]/10 to-[#F28C28]/5 border-2 border-[#F28C28]/20">
              <CardHeader>
                <Users className="w-12 h-12 text-[#F28C28] mx-auto mb-4" />
                <CardTitle className="text-5xl font-bold text-[#F28C28] mb-2">150</CardTitle>
                <CardDescription className="text-lg !whitespace-pre-line">LDI Applicants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground !whitespace-pre-line">Future servant leaders equipped to mentor others, manage programs, and advocate for systemic change.

                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 border-2 border-[#A92FFA]/20">
              <CardHeader>
                <HandHeart className="w-12 h-12 text-[#A92FFA] mx-auto mb-4" />
                <CardTitle className="text-5xl font-bold text-[#A92FFA] mb-2">25K+</CardTitle>
                <CardDescription className="text-lg">Community Touch Points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Meals served, rides provided, counseling sessions, and moments of unconditional connection.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Detailed Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-[#A92FFA] mb-2" />
                <CardTitle className="text-3xl font-bold">94%</CardTitle>
                <CardDescription className="!whitespace-pre-line">PService and Workshop Completion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Industry-leading retention through unconditional support and purpose discovery.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-[#F28C28] mb-2" />
                <CardTitle className="text-3xl font-bold">87%</CardTitle>
                <CardDescription>Long-term Sobriety</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sustained recovery rates at 12+ months post-program graduation.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-[#A92FFA] mb-2" />
                <CardTitle className="text-3xl font-bold">78%</CardTitle>
                <CardDescription>Employment Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Graduates securing meaningful employment within 90 days.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Home className="w-8 h-8 text-[#A92FFA] mb-2" />
                <CardTitle className="text-3xl font-bold">92%</CardTitle>
                <CardDescription>Stable Housing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Permanent housing secured and maintained for 6+ months.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-[#F28C28] mb-2" />
                <CardTitle className="text-3xl font-bold">65</CardTitle>
                <CardDescription>Active Mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  LDI graduates currently mentoring Tier 1 and 2 participants.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 text-[#A92FFA] mb-2" />
                <CardTitle className="text-3xl font-bold">98%</CardTitle>
                <CardDescription>Satisfaction Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Participants reporting positive experience and growth.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Target className="w-8 h-8 text-[#A92FFA] mb-2" />
                <CardTitle className="text-3xl font-bold">15</CardTitle>
                <CardDescription>Partner Organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Collaborative relationships amplifying community impact.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Sparkles className="w-8 h-8 text-[#F28C28] mb-2" />
                <CardTitle className="text-3xl font-bold">∞</CardTitle>
                <CardDescription>Potential Unlocked</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every person carries infinite worth and purpose waiting to be discovered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 10: COMMUNITY & PARTNERSHIP - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 bg-muted/50 double-exposure mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !tracking-[10px]">Together We Rise</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Community & Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformation happens in community. We're grateful for our partners, volunteers, and supporters who make this work possible.
            </p>
          </div>
          
          {/* Container 3-4: Community Impact */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl !text-center">Building Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We believe lasting change happens when individuals are connected to a supportive community. Through partnerships with local organizations, businesses, and faith communities, we create a network of hope.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Faith community partnerships for spiritual support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Business collaborations for employment opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Non-profit networks for comprehensive services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#A92FFA] text-[#A92FFA]/90">
              <CardHeader>
                <CardTitle className="text-2xl !text-white !text-center">Volunteer Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 !text-white">
                  Whether you have an hour a week or want to make a deeper commitment, there's a place for you in our ministry.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 !text-white">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm !text-white">Outreach team volunteers</span>
                  </li>
                  <li className="flex items-start gap-2 !text-white">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm !text-white">Workshop facilitators</span>
                  </li>
                  <li className="flex items-start gap-2 !text-white">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Administrative support</span>
                  </li>
                  <li className="flex items-start gap-2 !text-white">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prayer partners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 5-10: Partner Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle>Faith Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Local churches and faith communities providing spiritual support, volunteers, and resources.
                </p>
                <Badge variant="outline" className="!whitespace-pre-line">12 Religious Partners</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 text-[#F28C28] mb-3" />
                <CardTitle>Social Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Non-profit organizations collaborating to provide comprehensive wraparound services.
                </p>
                <Badge variant="outline">8 Service Partners</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle>Business Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Local businesses offering employment opportunities and skills training for graduates.
                </p>
                <Badge variant="outline">15 Employers</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Stethoscope className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle>Healthcare Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Medical and mental health professionals providing clinical support and referrals.
                </p>
                <Badge variant="outline">6 Healthcare Providers</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-10 h-10 text-[#F28C28] mb-3" />
                <CardTitle>Justice Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Legal aid organizations and reentry programs supporting those impacted by the justice system.
                </p>
                <Badge variant="outline">4 Legal Partners</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle>Educational Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Schools and training programs offering education and vocational development.
                </p>
                <Badge variant="outline">5 Education Partners</Badge>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 11-12: Partnership CTA */}
          <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#F28C28]/10 border-2 border-[#A92FFA]/20">
            <CardContent className="pt-8">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 !whitespace-pre-line">Become a Convict</h3>
                <p className="text-muted-foreground mb-6">
                  Together, we can multiply our impact and reach more people who need hope, healing, and purpose. Let's explore how your organization can join this transformational work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/get-involved">Partner With Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/volunteer">Volunteer Today</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 11: CALL-TO-ACTION - 12 Containers */}
      <section className="px-4 sm:px-6 lg:px-8 animate-fade-in mb-16 !py-0">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 !whitespace-pre-line !tracking-[10px] !whitespace-pre-line">CONVICTD </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Be Part of the Transformation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every person has a role to play in building a community of hope. Choose your path to get involved.
            </p>
          </div>
          
          {/* Container 3-8: Six Action Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#A92FFA]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#A92FFA] rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 !text-white" />
                </div>
                <CardTitle className="text-xl">Apply to LDI</CardTitle>
                <CardDescription>Begin Your Journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to commit to transformation? Apply for our intensive 64-week Leadership Development Institute.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Free program</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Housing provided</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Full support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/ldi">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#F28C28]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F28C28] rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 !text-white" />
                </div>
                <CardTitle className="text-xl">Donate</CardTitle>
                <CardDescription>Fuel Transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Your financial support directly impacts lives, providing housing, meals, and resources for healing.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-sm">One-time gifts</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-sm">Monthly giving</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-sm">Legacy gifts</span>
                  </li>
                </ul>
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="/donate">Donate Today</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#A92FFA]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#A92FFA] rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 !text-white" />
                </div>
                <CardTitle className="text-xl">Volunteer</CardTitle>
                <CardDescription>Give Your Time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our team of volunteers serving in outreach, workshops, administrative support, and more.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Flexible hours</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Training provided</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Make a difference</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/volunteer">Sign Up</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#A92FFA]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#A92FFA]/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-[#A92FFA]" fill="currentColor" />
                </div>
                <CardTitle className="text-xl">Prayer Wall</CardTitle>
                <CardDescription>Pray Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our community in prayer. Submit your prayer requests and pray for others on our interactive prayer wall.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Share requests</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Pray for others</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Track answers</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/prayer-wall">Visit Prayer Wall</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#F28C28]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F28C28]/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-[#F28C28]" />
                </div>
                <CardTitle className="text-xl">Attend Services</CardTitle>
                <CardDescription>Join Community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience our open ministry services—workshops, Bible studies, and fellowship gatherings. No commitment needed.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-sm">Open to all</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-sm">Weekly events</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span className="text-sm">Free admission</span>
                  </li>
                </ul>
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="/services">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-[#A92FFA]">
              <CardHeader>
                <div className="w-16 h-16 bg-[#A92FFA]/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-[#A92FFA]" />
                </div>
                <CardTitle className="text-xl">Get Help Now</CardTitle>
                <CardDescription>Crisis Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  In crisis? Need immediate assistance? Our outreach team is available 24/7 to help with food, shelter, and support.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">24/7 hotline</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">Immediate help</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA]" />
                    <span className="text-sm">No judgment</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/help">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Emergency Banner */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-[#A92FFA] to-[#A92FFA]/80 text-[#A92FFA]/90">
              <CardHeader>
                <Phone className="w-10 h-10 mb-3 !text-white" />
                <CardTitle className="text-2xl !text-white">Need Help Now?</CardTitle>
                <CardDescription className="text-base !text-white">24/7 Crisis Support Available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-1 !text-white">Crisis Hotline</p>
                    <p className="text-3xl font-bold !text-white !whitespace-pre-line">720.663.9243</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1 !text-white">Emergency Email</p>
                    <p className="text-lg font-semibold !text-white">crisis@uconministries.org</p>
                  </div>
                  <p className="text-sm pt-2 !text-white">
                    You're not alone. We're here to help, no matter what you're facing.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#F28C28] to-[#F28C28]/80 text-[#F28C28]/90">
              <CardHeader>
                <Mail className="w-10 h-10 mb-3 !text-white" />
                <CardTitle className="text-2xl !text-white">Stay Connected</CardTitle>
                <CardDescription className="text-base !text-white">Get Updates & Stories of Hope</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 !text-white">
                  Subscribe to our newsletter for inspiring stories, upcoming events, and ways to get involved.
                </p>
                <div className="flex flex-col gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-[#F28C28]" />

                  <Button className="w-full bg-white text-[#F28C28] hover:bg-white/90">
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 12: FOOTER - 12 Containers */}
      <Footer />
    </div>);

}