"use client"

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, FileText, BookOpen, Video, Headphones,
  Image as ImageIcon, Award, Heart, Building2, Star,
  ExternalLink, Search, Filter, Sparkles, CheckCircle2
} from "lucide-react";
import { Input } from "@/components/ui/input";

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

export default function ResourceHubPage() {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [resourcesRef, resourcesVisible] = useIntersectionObserver();
  const [sponsorsRef, sponsorsVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      title: "LDI Program Overview Guide",
      description: "Complete guide to the Leadership Development Institute's four-tier program structure",
      category: "Program Guides",
      type: "PDF",
      size: "2.4 MB",
      icon: FileText,
      color: "from-[#A92FFA] to-purple-600"
    },
    {
      title: "Recovery Journey Workbook",
      description: "Interactive workbook for individuals beginning their recovery journey",
      category: "Workbooks",
      type: "PDF",
      size: "5.1 MB",
      icon: BookOpen,
      color: "from-[#F28C28] to-orange-600"
    },
    {
      title: "Mental Health Resources Directory",
      description: "Comprehensive directory of mental health services available in Colorado",
      category: "Directories",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
      color: "from-purple-600 to-[#A92FFA]"
    },
    {
      title: "Introduction to UCon Ministries Video",
      description: "Watch our mission and impact story (12 minutes)",
      category: "Videos",
      type: "MP4",
      size: "45 MB",
      icon: Video,
      color: "from-[#F28C28] to-yellow-600"
    },
    {
      title: "Peer Support Training Manual",
      description: "Training materials for individuals interested in becoming peer mentors",
      category: "Training Materials",
      type: "PDF",
      size: "3.7 MB",
      icon: BookOpen,
      color: "from-[#A92FFA] to-pink-600"
    },
    {
      title: "Family Support Guide",
      description: "Resources and guidance for families supporting loved ones in recovery",
      category: "Family Resources",
      type: "PDF",
      size: "2.2 MB",
      icon: FileText,
      color: "from-orange-600 to-[#F28C28]"
    },
    {
      title: "Prayer & Meditation Audio Series",
      description: "Guided prayer and meditation sessions (8 audio files)",
      category: "Audio Resources",
      type: "MP3",
      size: "120 MB",
      icon: Headphones,
      color: "from-purple-500 to-[#A92FFA]"
    },
    {
      title: "Community Outreach Toolkit",
      description: "Tools and templates for organizing community outreach events",
      category: "Toolkits",
      type: "PDF",
      size: "4.3 MB",
      icon: FileText,
      color: "from-[#F28C28] to-red-600"
    },
    {
      title: "Volunteer Training Handbook",
      description: "Complete training guide for new volunteers",
      category: "Training Materials",
      type: "PDF",
      size: "3.1 MB",
      icon: BookOpen,
      color: "from-[#A92FFA] to-purple-700"
    },
    {
      title: "Success Stories Collection",
      description: "Inspiring testimonies from program graduates",
      category: "Testimonies",
      type: "PDF",
      size: "6.2 MB",
      icon: Star,
      color: "from-yellow-500 to-[#F28C28]"
    },
    {
      title: "Housing Resources Guide",
      description: "Guide to housing assistance programs and resources in Colorado",
      category: "Directories",
      type: "PDF",
      size: "2.9 MB",
      icon: FileText,
      color: "from-[#A92FFA] to-indigo-600"
    },
    {
      title: "Employment Readiness Workshop Materials",
      description: "Resume templates, interview guides, and job search resources",
      category: "Workshops",
      type: "PDF",
      size: "4.8 MB",
      icon: BookOpen,
      color: "from-[#F28C28] to-orange-700"
    }
  ];

  const sponsors = [
    {
      name: "Colorado Community Foundation",
      level: "Platinum Sponsor",
      description: "Supporting community transformation initiatives statewide",
      logo: Building2,
      color: "from-[#A92FFA] to-purple-600"
    },
    {
      name: "Hope & Healing Institute",
      level: "Gold Sponsor",
      description: "Partnering in mental health and recovery services",
      logo: Heart,
      color: "from-[#F28C28] to-orange-600"
    },
    {
      name: "Mountain Valley Church Network",
      level: "Gold Sponsor",
      description: "Faith community partnership and support",
      logo: Building2,
      color: "from-purple-600 to-[#A92FFA]"
    },
    {
      name: "Colorado Business Alliance",
      level: "Silver Sponsor",
      description: "Employment and workforce development support",
      logo: Award,
      color: "from-[#F28C28] to-yellow-600"
    },
    {
      name: "Recovery Resources Foundation",
      level: "Silver Sponsor",
      description: "Addiction recovery program funding",
      logo: Heart,
      color: "from-[#A92FFA] to-pink-600"
    },
    {
      name: "Community Health Partners",
      level: "Bronze Sponsor",
      description: "Healthcare and wellness services",
      logo: Building2,
      color: "from-orange-600 to-[#F28C28]"
    }
  ];

  const categories = [
    "all",
    "Program Guides",
    "Workbooks",
    "Directories",
    "Videos",
    "Training Materials",
    "Family Resources",
    "Audio Resources",
    "Toolkits",
    "Testimonies",
    "Workshops"
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Download className="w-5 h-5 mr-2" />
              Resource Hub
            </Badge>
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              Resources &
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Downloads
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Access free resources, training materials, and guides to support your journey. Browse our library of downloadable content.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="mb-8 hover-lift">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-2 border border-border rounded-md bg-background min-w-[200px]"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Grid */}
      <section 
        ref={resourcesRef}
        className="pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  resourcesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${resource.color} mb-4`} />
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-[#A92FFA]">{resource.category}</Badge>
                    <span className="text-sm text-muted-foreground">{resource.size}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#A92FFA] to-[#F28C28] hover:opacity-90">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Sponsors Section */}
      <section 
        ref={sponsorsRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 ${
          sponsorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Star className="w-4 h-4 mr-2" />
              Our Sponsors
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Grateful for Our
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Partner Support
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These organizations make our mission possible through their generous support and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card 
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  sponsorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${sponsor.color} mb-4`} />
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${sponsor.color} flex items-center justify-center mb-4 mx-auto`}>
                    <sponsor.logo className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{sponsor.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge className="mt-2 bg-[#A92FFA]">{sponsor.level}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{sponsor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#F28C28]/10 border-[#A92FFA]/20">
              <CardContent className="p-10">
                <Sparkles className="w-12 h-12 text-[#A92FFA] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Partner with us to make a lasting impact in the lives of individuals and communities across Colorado.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] hover:opacity-90">
                  Become a Sponsor
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
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
              <CheckCircle2 className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need More Help?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you access the resources you need.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-[#A92FFA] hover:bg-white/90 border-white text-lg">
                Contact Us
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
