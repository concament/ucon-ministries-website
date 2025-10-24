"use client"

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, FileText, BookOpen, Video, Headphones,
  Home, Utensils, Shield, Stethoscope, Heart, Phone,
  MapPin, Clock, ExternalLink, Search, Sparkles, 
  CheckCircle2, Star, Building2, Award, AlertCircle
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
  const [emergencyRef, emergencyVisible] = useIntersectionObserver();
  const [resourcesRef, resourcesVisible] = useIntersectionObserver();
  const [downloadsRef, downloadsVisible] = useIntersectionObserver();
  const [sponsorsRef, sponsorsVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Comprehensive Colorado Resources
  const coloradoResources = [
    // Housing Resources
    {
      name: "Colorado Coalition for the Homeless",
      category: "Housing",
      description: "Emergency shelter, transitional housing, and permanent supportive housing",
      phone: "(303) 293-2217",
      address: "2111 Champa St, Denver, CO 80205",
      hours: "24/7 Crisis Line",
      website: "www.coloradocoalition.org",
      icon: Home,
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "Denver Rescue Mission",
      category: "Housing",
      description: "Emergency shelter, meals, recovery programs, and transitional housing",
      phone: "(303) 297-1815",
      address: "6100 Smith Rd, Denver, CO 80216",
      hours: "24/7",
      website: "www.denverrescuemission.org",
      icon: Home,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Colorado Housing Connects",
      category: "Housing",
      description: "Statewide housing assistance hotline connecting to local resources",
      phone: "1-844-926-6632",
      address: "Statewide Service",
      hours: "Mon-Fri 8am-5pm",
      website: "www.coloradohousingconnects.org",
      icon: Home,
      color: "from-indigo-600 to-blue-500"
    },
    
    // Food Banks
    {
      name: "Food Bank of the Rockies",
      category: "Food Banks",
      description: "Largest hunger-relief organization in Colorado, distributing food statewide",
      phone: "(303) 371-9250",
      address: "10700 E 45th Ave, Denver, CO 80239",
      hours: "Mon-Fri 8am-4:30pm",
      website: "www.foodbankrockies.org",
      icon: Utensils,
      color: "from-green-600 to-emerald-400"
    },
    {
      name: "Care and Share Food Bank",
      category: "Food Banks",
      description: "Serving Southern Colorado with food distribution and mobile pantries",
      phone: "(719) 329-5663",
      address: "2605 Preamble Point, Colorado Springs, CO 80915",
      hours: "Mon-Fri 8am-5pm",
      website: "www.careandshare.org",
      icon: Utensils,
      color: "from-green-500 to-lime-400"
    },
    {
      name: "Community Food Share",
      category: "Food Banks",
      description: "Boulder County's food bank serving 30,000+ people monthly",
      phone: "(303) 652-3663",
      address: "650 S Taylor Ave, Louisville, CO 80027",
      hours: "Mon-Fri 9am-5pm",
      website: "www.communityfoodshare.org",
      icon: Utensils,
      color: "from-emerald-600 to-green-500"
    },
    
    // Domestic Violence Shelters
    {
      name: "SafeHouse Denver",
      category: "DV Shelters",
      description: "24/7 crisis line, emergency shelter, and support services for DV survivors",
      phone: "(303) 318-9989",
      address: "Confidential Location",
      hours: "24/7 Crisis Line",
      website: "www.safehouse-denver.org",
      icon: Shield,
      color: "from-purple-600 to-pink-500"
    },
    {
      name: "Violence Free Colorado",
      category: "DV Shelters",
      description: "Statewide coalition connecting survivors to local DV resources",
      phone: "(303) 831-9632",
      address: "Statewide Service",
      hours: "24/7 Support",
      website: "www.violencefreeco lorado.org",
      icon: Shield,
      color: "from-pink-600 to-rose-400"
    },
    {
      name: "TESSA (Colorado Springs)",
      category: "DV Shelters",
      description: "Emergency shelter, counseling, and legal advocacy for DV/SA survivors",
      phone: "(719) 633-1462",
      address: "Confidential Location",
      hours: "24/7 Crisis Line",
      website: "www.tessacs.org",
      icon: Shield,
      color: "from-purple-500 to-fuchsia-400"
    },
    
    // Mental Health (Medicaid)
    {
      name: "Colorado Crisis Services",
      category: "Mental Health",
      description: "Free 24/7 mental health crisis support - call, text, or walk-in",
      phone: "1-844-493-8255",
      address: "Walk-in Centers Statewide",
      hours: "24/7",
      website: "www.coloradocrisisservices.org",
      icon: Stethoscope,
      color: "from-teal-600 to-cyan-400"
    },
    {
      name: "Health First Colorado (Medicaid)",
      category: "Mental Health",
      description: "Colorado's Medicaid program covering mental health and addiction services",
      phone: "1-800-221-3943",
      address: "Statewide Service",
      hours: "Mon-Fri 8am-5pm",
      website: "www.healthfirstcolorado.com",
      icon: Stethoscope,
      color: "from-cyan-600 to-blue-400"
    },
    {
      name: "Mental Health Colorado",
      category: "Mental Health",
      description: "Mental health advocacy, resources, and referrals statewide",
      phone: "(303) 377-3040",
      address: "1120 Lincoln St #1606, Denver, CO 80203",
      hours: "Mon-Fri 9am-5pm",
      website: "www.mentalhealthcolorado.org",
      icon: Stethoscope,
      color: "from-blue-500 to-indigo-400"
    },
    
    // Recovery/Addiction Services
    {
      name: "Addiction Recovery Care (ARC)",
      category: "Recovery/Addiction",
      description: "Free outpatient addiction treatment accepting Medicaid",
      phone: "(303) 321-0930",
      address: "Multiple Locations Statewide",
      hours: "Mon-Fri 8am-5pm",
      website: "www.coloradoadr.org",
      icon: Heart,
      color: "from-orange-600 to-amber-400"
    },
    {
      name: "Stout Street Foundation",
      category: "Recovery/Addiction",
      description: "Free detox and residential treatment for substance use disorders",
      phone: "(303) 607-8201",
      address: "2317 Stout St, Denver, CO 80205",
      hours: "24/7 Admissions",
      website: "www.stoutstreet.org",
      icon: Heart,
      color: "from-red-600 to-orange-500"
    },
    {
      name: "Colorado Narcotics Anonymous",
      category: "Recovery/Addiction",
      description: "Free peer support meetings for addiction recovery throughout Colorado",
      phone: "(303) 534-1102",
      address: "Meetings Statewide",
      hours: "Daily Meetings Available",
      website: "www.coloradona.org",
      icon: Heart,
      color: "from-amber-600 to-yellow-500"
    }
  ];

  // Emergency Hotlines
  const emergencyHotlines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support for suicidal or emotional distress",
      icon: Phone
    },
    {
      name: "Colorado Crisis Services",
      number: "1-844-493-8255",
      description: "Text 'TALK' to 38255 or walk-in centers available",
      icon: Phone
    },
    {
      name: "Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "24/7 support for domestic violence survivors",
      icon: Shield
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Substance abuse and mental health referrals",
      icon: Heart
    }
  ];

  // Downloadable Resources
  const downloadableResources = [
    {
      title: "LDI Program Overview Guide",
      description: "Complete guide to the Leadership Development Institute",
      category: "Program Guides",
      type: "PDF",
      size: "2.4 MB",
      icon: FileText,
      color: "from-[#A92FFA] to-purple-600"
    },
    {
      title: "Recovery Journey Workbook",
      description: "Interactive workbook for recovery journey",
      category: "Workbooks",
      type: "PDF",
      size: "5.1 MB",
      icon: BookOpen,
      color: "from-[#F28C28] to-orange-600"
    },
    {
      title: "Comprehensive Colorado Resource Directory",
      description: "Complete directory of all services listed on this page (printable)",
      category: "Directories",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
      color: "from-purple-600 to-[#A92FFA]"
    },
    {
      title: "Mental Health Resources Guide",
      description: "Medicaid-accepted mental health services in Colorado",
      category: "Directories",
      type: "PDF",
      size: "2.2 MB",
      icon: Stethoscope,
      color: "from-teal-600 to-cyan-400"
    },
    {
      title: "Family Support Guide",
      description: "Resources for families supporting loved ones in recovery",
      category: "Family Resources",
      type: "PDF",
      size: "2.2 MB",
      icon: FileText,
      color: "from-orange-600 to-[#F28C28]"
    },
    {
      title: "Volunteer Training Handbook",
      description: "Complete training guide for new volunteers",
      category: "Training Materials",
      type: "PDF",
      size: "3.1 MB",
      icon: BookOpen,
      color: "from-[#A92FFA] to-purple-700"
    }
  ];

  const categories = [
    "all",
    "Housing",
    "Food Banks",
    "DV Shelters",
    "Mental Health",
    "Recovery/Addiction"
  ];

  const filteredResources = coloradoResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
              <MapPin className="w-5 h-5 mr-2" />
              Colorado Resource Hub
            </Badge>
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 glow-text transition-all duration-700 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              Comprehensive
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Colorado Resources
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto transition-all duration-700 delay-200 ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Housing, food banks, domestic violence shelters, mental health services, and addiction recovery resources across Colorado
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section 
        ref={emergencyRef}
        className={`py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 transition-all duration-700 ${
          emergencyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-red-600">
              <AlertCircle className="w-4 h-4 mr-2" />
              Emergency Support
            </Badge>
            <h2 className="text-3xl font-bold mb-2 glow-text">24/7 Crisis Hotlines</h2>
            <p className="text-muted-foreground">Immediate help is available - you're not alone</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyHotlines.map((hotline, index) => (
              <Card key={index} className="bg-white dark:bg-card border-2 border-red-200 dark:border-red-900 hover-lift">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-full flex items-center justify-center mb-3">
                    <hotline.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{hotline.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600 mb-2">{hotline.number}</p>
                  <p className="text-sm text-muted-foreground">{hotline.description}</p>
                </CardContent>
              </Card>
            ))}
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
                    placeholder="Search resources by name or description..."
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

      {/* Colorado Resources Grid */}
      <section 
        ref={resourcesRef}
        className="pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Colorado Community Resources</h2>
            <p className="text-xl text-muted-foreground">Comprehensive directory of services across Colorado</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center flex-shrink-0`}>
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary">{resource.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.name}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <Phone className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{resource.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{resource.address}</p>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{resource.hours}</p>
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <a href={`https://${resource.website}`} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
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

      {/* Downloadable Resources */}
      <section 
        ref={downloadsRef}
        className={`py-20 px-4 sm:px-6 lg:px-8 overlay-gradient transition-all duration-700 ${
          downloadsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#A92FFA]">
              <Download className="w-4 h-4 mr-2" />
              Downloads
            </Badge>
            <h2 className="text-4xl font-bold mb-4 glow-text">Downloadable Resources</h2>
            <p className="text-xl text-muted-foreground">Free guides, workbooks, and directories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <Card 
                key={index}
                className="hover-lift"
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${resource.color} mb-4`} />
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{resource.category}</Badge>
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
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Need Immediate Help?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is available 24/7 to help you access the resources you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-[#A92FFA] hover:bg-white/90 border-white text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 555-1234
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-[#F28C28] hover:bg-white/90 border-white text-lg">
                  Contact Us
                  <ExternalLink className="w-5 h-5 ml-2" />
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