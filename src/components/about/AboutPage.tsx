"use client"

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Heart, Target, Users, Compass, BookOpen, Church,
  Award, TrendingUp, Shield, Sparkles, ArrowRight,
  CheckCircle2, Star, Globe, Building2, HandHeart, Mail, Linkedin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

// Staff Member Data
const staffMembers = [
  {
    id: 1,
    name: "Rev. Michael Thompson",
    role: "Executive Director & Founder",
    bio: "Rev. Thompson founded UCon Ministries after his own transformative journey through recovery and redemption. With over 15 years of experience in ministry and community development, he leads with vision, compassion, and unwavering commitment to those society has forgotten.",
    expertise: ["Leadership Development", "Trauma-Informed Care", "Spiritual Formation"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    email: "mthompson@uconministries.org",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Dr. Sarah Martinez",
    role: "Clinical Director",
    bio: "Dr. Martinez brings 12 years of clinical psychology experience specializing in addiction recovery and trauma treatment. She integrates evidence-based practices with faith-based principles to create holistic healing pathways.",
    expertise: ["Clinical Psychology", "Addiction Treatment", "Group Therapy"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    email: "smartinez@uconministries.org",
    linkedin: "#"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Program Coordinator",
    bio: "James is an LDI graduate who now serves as Program Coordinator. His lived experience combined with formal training in social work makes him uniquely qualified to support participants through their transformation journey.",
    expertise: ["Peer Support", "Case Management", "Community Outreach"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    email: "jwilson@uconministries.org",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Pastor Maria Rodriguez",
    role: "Spiritual Care Director",
    bio: "Pastor Maria oversees all spiritual formation programs and pastoral care services. With a heart for the marginalized and a gift for teaching, she creates safe spaces for spiritual growth and biblical exploration.",
    expertise: ["Pastoral Counseling", "Biblical Studies", "Spiritual Direction"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    email: "mrodriguez@uconministries.org",
    linkedin: "#"
  }
];

export default function AboutPage() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [valuesRef, valuesVisible] = useIntersectionObserver();
  const [ldiRef, ldiVisible] = useIntersectionObserver();
  const [differentiatorRef, differentiatorVisible] = useIntersectionObserver();
  const [visionRef, visionVisible] = useIntersectionObserver();
  const [staffRef, staffVisible] = useIntersectionObserver();
  const [impactRef, impactVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();
  
  const [selectedStaff, setSelectedStaff] = useState<typeof staffMembers[0] | null>(null);
  const [staffDialogOpen, setStaffDialogOpen] = useState(false);

  const handleStaffClick = (staff: typeof staffMembers[0]) => {
    setSelectedStaff(staff);
    setStaffDialogOpen(true);
  };

  const coreValues = [
    {
      icon: Heart,
      title: "Inherent Dignity",
      description: "Upholding the intrinsic worth of every individual, irrespective of background or circumstance.",
      color: "from-[#A92FFA] to-[#F28C28]"
    },
    {
      icon: Target,
      title: "Purpose-Driven Recovery",
      description: "We anchor sustainable healing in the discovery and cultivation of individual and communal purpose.",
      color: "from-[#F28C28] to-[#A92FFA]"
    },
    {
      icon: Users,
      title: "Unconditional Connection",
      description: "We demonstrate radical empathy and consistent, non-judgmental presence as the foundation of engagement.",
      color: "from-[#A92FFA] to-purple-600"
    },
    {
      icon: Globe,
      title: "Community Transformation",
      description: "We foster systemic change through empowered individuals who serve and inspire their communities.",
      color: "from-orange-500 to-[#F28C28]"
    },
    {
      icon: BookOpen,
      title: "Biblical Integration",
      description: "We seamlessly weave spiritual truth with clinically sound, evidence-based practices.",
      color: "from-purple-600 to-[#A92FFA]"
    },
    {
      icon: HandHeart,
      title: "Outreach & Accessibility",
      description: "We proactively engage marginalized populations and eliminate barriers to essential services.",
      color: "from-[#F28C28] to-orange-600"
    }
  ];

  const ldiDifferentiators = [
    {
      icon: Award,
      title: "Comprehensive Four-Tier System",
      description: "Unlike traditional programs, our 64-week LDI program progressively develops participants from personal healing to national leadership through four distinct tiers.",
      stats: "4 Tiers, 64 Weeks"
    },
    {
      icon: TrendingUp,
      title: "From Client to Change-Maker",
      description: "Participants don't just recover—they become certified peer mentors, organizational leaders, and movement builders who transform systems.",
      stats: "100% Leadership Track"
    },
    {
      icon: Shield,
      title: "Therapeutic Community Model",
      description: "We fuse clinical psychology, systematic theology, and lived re-entry experience into a holistic healing environment.",
      stats: "Evidence-Based + Faith-Integrated"
    },
    {
      icon: Building2,
      title: "Systemic Impact Focus",
      description: "Graduates don't just change their lives—they design programs, advocate for policy reform, and build movements that transform entire communities.",
      stats: "Community-Wide Transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden double-exposure"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-6 bg-[#A92FFA] hover:bg-[#A92FFA]/90 text-lg px-6 py-2">
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              About UCon Ministries
            </Badge>
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              Transforming Lives
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Through Purpose
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              We exist to meet individuals at their point of need, offering immediate practical assistance and guiding them through a comprehensive journey of healing and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section 
        ref={missionRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 ${
          missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-[#A92FFA]/10 via-card to-[#F28C28]/10 border-[#A92FFA]/20 hover-lift">
            <CardContent className="p-10 sm:p-16">
              <div className="text-center mb-8">
                <Church className="w-16 h-16 text-[#A92FFA] mx-auto mb-6" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                UCon Ministries exists to <span className="text-[#A92FFA] font-semibold">transform feelings of worthlessness and mental health struggles into enduring purpose and dignity</span> for those deeply impacted by the justice system, addiction, homelessness, and personal brokenness.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Through unconditional connection, consistent presence, and the redemptive love of Christ, we empower individuals to discover their inherent dignity and God-given purpose, cultivating them into <span className="text-[#F28C28] font-semibold">authentic servant leaders</span> who drive systemic change and build a legacy of hope in their communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section 
        ref={valuesRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Foundation
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every aspect of our ministry and shape our approach to transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LDI Overview */}
      <section 
        ref={ldiRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 ${
          ldiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90">
              <Star className="w-4 h-4 mr-2" />
              Our Flagship Program
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              The Leadership Development
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Institute (LDI)
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Currently in development, the LDI will be our intensive, commitment-based program designed to transform lives and develop authentic leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-[#A92FFA] to-purple-700 text-white hover-glow">
              <CardHeader>
                <CardTitle className="text-3xl">64-Week Journey</CardTitle>
                <CardDescription className="text-white/80 text-lg">Four Progressive Tiers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Tier 1: Ascension - Foundation Building</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Tier 2: Pinnacle - Mentorship Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Tier 3: Apex - Systemic Leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Tier 4: UCon - Visionary Impact</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F28C28] to-orange-700 text-white hover-glow">
              <CardHeader>
                <CardTitle className="text-3xl">Commitment-Based</CardTitle>
                <CardDescription className="text-white/80 text-lg">Intensive Transformation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Signed commitment agreement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Therapeutic community model</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Clinical + spiritual integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Leadership development focus</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#A92FFA] hover:bg-[#A92FFA]/90 text-lg">
              <Link href="/ldi">
                Explore the LDI Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section 
        ref={differentiatorRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            differentiatorRef ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Award className="w-4 h-4 mr-2" />
              Our Unique Approach
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              What Sets the
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                LDI Apart
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The LDI isn't just another recovery program—it's a comprehensive leadership development institute that transforms participants into change-makers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ldiDifferentiators.map((diff, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  differentiatorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#A92FFA] to-[#F28C28] flex items-center justify-center">
                      <diff.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge className="bg-[#F28C28] hover:bg-[#F28C28]/90">{diff.stats}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{diff.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">{diff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section 
        ref={visionRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 ${
          visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90">
                <Compass className="w-4 h-4 mr-2" />
                Looking Forward
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                Our Vision for
                <br />
                <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                  Lasting Impact
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We envision a future where individuals impacted by the justice system, addiction, and homelessness are not defined by their past, but empowered by their purpose.
              </p>
              <p className="text-lg text-muted-foreground">
                Through the LDI and our comprehensive three-track model, we're building a movement of transformed leaders who will create systemic change in communities across Colorado and beyond.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#A92FFA] to-purple-700 text-white hover-lift">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold mb-2">1000+</div>
                  <div className="text-white/80">Lives Transformed</div>
                  <div className="text-sm text-white/60 mt-2">Target Impact</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#F28C28] to-orange-700 text-white hover-lift">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-white/80">Leaders Developed</div>
                  <div className="text-sm text-white/60 mt-2">Annual Goal</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-[#A92FFA] text-white hover-lift">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Partner Organizations</div>
                  <div className="text-sm text-white/60 mt-2">Community Network</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-600 to-[#F28C28] text-white hover-lift">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Support Available</div>
                  <div className="text-sm text-white/60 mt-2">Always Here</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Track Model Overview */}
      <section 
        ref={impactRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Users className="w-4 h-4 mr-2" />
              Comprehensive Care
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Three-Track Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting individuals at every stage of their journey—from immediate crisis to long-term leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-purple-500/10 border-[#A92FFA]/20 hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#A92FFA] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-2xl">Leadership Development Institute</CardTitle>
                <CardDescription className="text-base">Commitment-Based Program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intensive 64-week program developing authentic leaders through four progressive tiers.
                </p>
                <Button asChild variant="outline" className="w-full border-[#A92FFA] hover:bg-[#A92FFA] hover:text-white">
                  <Link href="/ldi">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F28C28]/10 to-orange-500/10 border-[#F28C28]/20 hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#F28C28] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-2xl">Open Ministry Services</CardTitle>
                <CardDescription className="text-base">No Commitment Required</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Workshops, Bible studies, pastoral services, and peer support for spiritual formation.
                </p>
                <Button asChild variant="outline" className="w-full border-[#F28C28] hover:bg-[#F28C28] hover:text-white">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-[#A92FFA]/10 border-purple-500/20 hover-lift">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#A92FFA] to-[#F28C28] flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-2xl">Outreach & Advocacy</CardTitle>
                <CardDescription className="text-base">First Responders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Direct engagement with immediate needs: food, shelter, transportation, and advocacy.
                </p>
                <Button asChild variant="outline" className="w-full border-purple-500 hover:bg-purple-500 hover:text-white">
                  <Link href="/outreach">See Outreach</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff Team Section */}
      <section 
        ref={staffRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          staffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Meet Our Staff</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated leaders committed to transforming lives and building community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((staff, index) => (
              <Card 
                key={staff.id}
                className="hover-lift cursor-pointer transition-all duration-700"
                onClick={() => handleStaffClick(staff)}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: staffVisible ? 1 : 0,
                  transform: staffVisible ? 'translateY(0)' : 'translateY(2rem)'
                }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{staff.name}</CardTitle>
                  <CardDescription>{staff.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Profile
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-[#A92FFA] to-[#F28C28] text-white hover-glow">
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 mx-auto mb-6" fill="currentColor" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you're seeking transformation, want to volunteer, or support our mission—there's a place for you at UCon Ministries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="bg-white text-[#A92FFA] hover:bg-white/90 border-white text-lg">
                  <Link href="/contact">
                    Get Involved
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-[#F28C28] hover:bg-white/90 border-white text-lg">
                  <Link href="/prayer-wall">
                    Prayer Wall
                    <Heart className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Staff Detail Dialog */}
      <Dialog open={staffDialogOpen} onOpenChange={setStaffDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          {selectedStaff && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-6 mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={selectedStaff.image}
                      alt={selectedStaff.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-3xl mb-2">{selectedStaff.name}</DialogTitle>
                    <DialogDescription className="text-lg">
                      {selectedStaff.role}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedStaff.bio}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStaff.expertise.map((item, index) => (
                      <Badge key={index} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4 border-t">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={`mailto:${selectedStaff.email}`}>
                      <Mail className="mr-2 w-4 h-4" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={selectedStaff.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}