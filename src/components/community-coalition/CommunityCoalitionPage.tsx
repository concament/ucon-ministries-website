"use client"

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Heart, Award, Building2, Landmark, 
  Church, BookOpen, Utensils, Home, Briefcase,
  ShieldCheck, GraduationCap, HandHeart, Star,
  MapPin, ArrowRight, Sparkles
} from "lucide-react";
import Link from "next/link";

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

export default function CommunityCoalitionPage() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [individualsRef, individualsVisible] = useIntersectionObserver();
  const [organizationsRef, organizationsVisible] = useIntersectionObserver();
  const [governmentRef, governmentVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  const individuals = [
    {
      name: "Sarah Martinez",
      role: "Community Organizer & Advocate",
      location: "Denver, CO",
      impact: "Led grassroots initiatives serving 500+ families in need",
      icon: Heart
    },
    {
      name: "Rev. James Thompson",
      role: "Faith Leader & Mentor",
      location: "Colorado Springs, CO",
      impact: "Mentored 200+ individuals through recovery journeys",
      icon: Church
    },
    {
      name: "Dr. Michael Chen",
      role: "Mental Health Professional",
      location: "Aurora, CO",
      impact: "Provided pro-bono counseling to 300+ individuals",
      icon: ShieldCheck
    },
    {
      name: "Patricia Rodriguez",
      role: "Education Advocate",
      location: "Pueblo, CO",
      impact: "Created educational programs reaching 1,000+ students",
      icon: GraduationCap
    },
    {
      name: "David Williams",
      role: "Housing Rights Advocate",
      location: "Fort Collins, CO",
      impact: "Helped 150+ families secure stable housing",
      icon: Home
    },
    {
      name: "Maria Gonzalez",
      role: "Food Security Champion",
      location: "Boulder, CO",
      impact: "Distributed meals to 10,000+ community members",
      icon: Utensils
    }
  ];

  const organizations = [
    {
      name: "Colorado Recovery Alliance",
      type: "Non-Profit",
      location: "Statewide",
      focus: "Addiction recovery and peer support services",
      icon: HandHeart,
      color: "from-[#A92FFA] to-purple-600"
    },
    {
      name: "Denver Homeless Coalition",
      type: "Community Organization",
      location: "Denver Metro",
      focus: "Emergency shelter and transitional housing",
      icon: Home,
      color: "from-[#F28C28] to-orange-600"
    },
    {
      name: "Faith in Action Colorado",
      type: "Faith-Based Network",
      location: "Statewide",
      focus: "Interfaith community organizing and advocacy",
      icon: Church,
      color: "from-purple-600 to-[#A92FFA]"
    },
    {
      name: "Colorado Mental Health Institute",
      type: "Healthcare Provider",
      location: "Multiple Locations",
      focus: "Comprehensive mental health services",
      icon: ShieldCheck,
      color: "from-[#F28C28] to-yellow-600"
    },
    {
      name: "Second Chance Colorado",
      type: "Re-entry Services",
      location: "Statewide",
      focus: "Job training and employment for justice-impacted individuals",
      icon: Briefcase,
      color: "from-[#A92FFA] to-pink-600"
    },
    {
      name: "Colorado Food Bank Network",
      type: "Food Security",
      location: "Statewide",
      focus: "Emergency food assistance and nutrition programs",
      icon: Utensils,
      color: "from-orange-600 to-[#F28C28]"
    },
    {
      name: "Education Equity Alliance",
      type: "Educational Organization",
      location: "Denver & Aurora",
      focus: "Educational access for underserved communities",
      icon: GraduationCap,
      color: "from-purple-500 to-[#A92FFA]"
    },
    {
      name: "Community Legal Defense",
      type: "Legal Services",
      location: "Colorado Springs",
      focus: "Pro-bono legal advocacy for vulnerable populations",
      icon: Landmark,
      color: "from-[#F28C28] to-red-600"
    },
    {
      name: "Youth Empowerment Foundation",
      type: "Youth Services",
      location: "Statewide",
      focus: "Leadership development for at-risk youth",
      icon: Star,
      color: "from-yellow-500 to-[#F28C28]"
    }
  ];

  const governmentPartners = [
    {
      name: "Colorado Department of Corrections",
      role: "State Agency",
      collaboration: "Re-entry program coordination and support"
    },
    {
      name: "Denver Human Services",
      role: "Municipal Agency",
      collaboration: "Homeless outreach and case management"
    },
    {
      name: "Colorado Behavioral Health Administration",
      role: "State Agency",
      collaboration: "Mental health and substance abuse services"
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
              <Users className="w-5 h-5 mr-2" />
              Community Coalition
            </Badge>
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              Recognizing Our
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Community Heroes
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Celebrating the individuals and organizations across Colorado making a lasting impact in their communities through service, advocacy, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Individuals Making an Impact */}
      <section 
        ref={individualsRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${
            individualsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Award className="w-4 h-4 mr-2" />
              Individual Champions
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Community Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Honoring individuals across Colorado who dedicate their lives to serving others and creating positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individuals.map((person, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  individualsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A92FFA] to-[#F28C28] flex items-center justify-center">
                      <person.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="border-[#A92FFA]">
                      <MapPin className="w-3 h-3 mr-1" />
                      {person.location}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{person.name}</CardTitle>
                  <CardDescription className="text-base">{person.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-[#F28C28] flex-shrink-0 mt-0.5" fill="currentColor" />
                    <p className="text-muted-foreground">{person.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section 
        ref={organizationsRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 ${
          organizationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90">
              <Building2 className="w-4 h-4 mr-2" />
              Partner Organizations
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Organizations Transforming
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Colorado Communities
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognizing the organizations that work tirelessly to address critical needs and create lasting systemic change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  organizationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${org.color} mb-4`} />
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${org.color} flex items-center justify-center`}>
                      <org.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary">{org.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{org.name}</CardTitle>
                  <CardDescription className="text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {org.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{org.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Partners */}
      <section 
        ref={governmentRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          governmentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Landmark className="w-4 h-4 mr-2" />
              Government Collaboration
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Public Sector Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working alongside government agencies to create comprehensive solutions and systemic change.
            </p>
          </div>

          <div className="space-y-6">
            {governmentPartners.map((partner, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  governmentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Landmark className="w-6 h-6 text-[#A92FFA]" />
                        <h3 className="text-2xl font-bold">{partner.name}</h3>
                      </div>
                      <Badge variant="outline" className="mb-3 border-[#F28C28]">{partner.role}</Badge>
                      <p className="text-muted-foreground">{partner.collaboration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Coalition CTA */}
      <section 
        ref={ctaRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-[#A92FFA] to-[#F28C28] text-white hover-glow">
            <CardContent className="p-12 text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Our Coalition</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Are you or your organization making an impact in Colorado communities? We'd love to recognize your work and explore partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="bg-white text-[#A92FFA] hover:bg-white/90 border-white text-lg">
                  <Link href="/contact">
                    Nominate a Champion
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-[#F28C28] hover:bg-white/90 border-white text-lg">
                  <Link href="/contact">
                    Partner With Us
                    <Users className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
