"use client"

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, DollarSign, Users, Home, Utensils, 
  GraduationCap, CheckCircle2, ArrowRight, Sparkles
} from "lucide-react";

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

const donationTiers = [
  {
    id: "supporter",
    name: "Supporter",
    amount: 25,
    color: "from-blue-500 to-blue-600",
    icon: Heart,
    description: "Help provide meals and basic necessities",
    impact: [
      "Provides 5 meals for someone in need",
      "Supports outreach transportation",
      "Helps stock our food pantry"
    ]
  },
  {
    id: "partner",
    name: "Partner",
    amount: 50,
    color: "from-[#A92FFA] to-purple-600",
    icon: Users,
    popular: true,
    description: "Support counseling and mentorship programs",
    impact: [
      "Funds 2 counseling sessions",
      "Supports mentorship programs",
      "Provides workshop materials"
    ]
  },
  {
    id: "advocate",
    name: "Advocate",
    amount: 100,
    color: "from-[#F28C28] to-orange-600",
    icon: Home,
    description: "Help provide housing support",
    impact: [
      "Covers housing costs for 1 week",
      "Provides emergency shelter assistance",
      "Supports facility maintenance"
    ]
  },
  {
    id: "champion",
    name: "Champion",
    amount: 250,
    color: "from-green-500 to-green-600",
    icon: GraduationCap,
    description: "Invest in leadership development",
    impact: [
      "Supports LDI program curriculum",
      "Funds educational materials",
      "Enables skill-building workshops"
    ]
  }
];

export default function Donations() {
  const [selectedTier, setSelectedTier] = useState<string | null>("partner");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("monthly");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    anonymous: false
  });

  const [heroRef, heroVisible] = useIntersectionObserver();
  const [tiersRef, tiersVisible] = useIntersectionObserver();
  const [impactRef, impactVisible] = useIntersectionObserver();
  const [formRef, formVisible] = useIntersectionObserver();

  const selectedTierData = donationTiers.find(t => t.id === selectedTier);
  const donationAmount = customAmount ? parseFloat(customAmount) : (selectedTierData?.amount || 0);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would integrate with Stripe or another payment processor
    alert(`Thank you for your ${donationType} donation of $${donationAmount}! Payment integration coming soon.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden overlay-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-8 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Make a Difference
            </Badge>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              Transform Lives Today
            </h1>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Your generosity helps restore hope, dignity, and purpose to individuals impacted by addiction, homelessness, and personal brokenness. Every donation makes a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div 
          ref={impactRef}
          className={`max-w-7xl mx-auto grid md:grid-cols-4 gap-6 transition-all duration-1000 ${
            impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 hover-lift">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-[#A92FFA]">250+</CardTitle>
              <CardDescription>Lives Transformed</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-[#F28C28]/10 to-[#F28C28]/5 hover-lift">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-[#F28C28]">10K+</CardTitle>
              <CardDescription>Meals Served</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 hover-lift">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-green-500">500+</CardTitle>
              <CardDescription>Counseling Sessions</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover-lift">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-blue-500">95%</CardTitle>
              <CardDescription>Program Success Rate</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={tiersRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              tiersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Impact Level</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a donation tier or enter a custom amount. Every dollar goes directly to transforming lives.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
            tiersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon;
              const isFromLeft = index % 2 === 0;
              return (
                <button
                  key={tier.id}
                  onClick={() => {
                    setSelectedTier(tier.id);
                    setCustomAmount("");
                  }}
                  className={`text-left transition-all duration-700 ${
                    isFromLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'
                  }`}
                  style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <Card className={`h-full relative overflow-hidden hover-lift ${
                    selectedTier === tier.id ? 'border-[#A92FFA] ring-2 ring-[#A92FFA]/20' : ''
                  }`}>
                    {tier.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#F28C28]">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">${tier.amount}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tier.impact.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
          </div>

          {/* Custom Amount */}
          <div className="mt-8">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Custom Amount</CardTitle>
                <CardDescription>Enter any amount you'd like to donate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier(null);
                    }}
                    className="pl-10"
                    min="1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div 
          ref={formRef}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Complete Your Donation</CardTitle>
              <CardDescription>
                {donationType === "monthly" 
                  ? `Your ${donationType} donation of $${donationAmount} will provide ongoing support.`
                  : `Your ${donationType} donation of $${donationAmount} makes an immediate impact.`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDonate} className="space-y-6">
                {/* Donation Type Toggle */}
                <div className="flex gap-4 p-1 bg-muted rounded-lg">
                  <button
                    type="button"
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                      donationType === "monthly"
                        ? "bg-[#A92FFA] text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Monthly Donation
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                      donationType === "one-time"
                        ? "bg-[#F28C28] text-white"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    One-Time Gift
                  </button>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Your Information</h3>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                      required
                      disabled={donorInfo.anonymous}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={donorInfo.anonymous}
                      onChange={(e) => setDonorInfo({...donorInfo, anonymous: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <label htmlFor="anonymous" className="text-sm">Make this donation anonymous</label>
                  </div>
                </div>

                {/* Tax Deductible Notice */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#A92FFA] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Tax Deductible</p>
                      <p className="text-sm text-muted-foreground">
                        UCon Ministries is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the fullest extent permitted by law. You will receive a receipt via email.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Note */}
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> Payment integration is currently being set up. This form demonstrates the donation flow. In production, this will integrate with Stripe for secure payment processing.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#A92FFA] to-[#F28C28] hover:opacity-90 text-lg"
                >
                  Donate ${donationAmount} {donationType === "monthly" ? "/month" : ""}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Other Ways to Give</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <Utensils className="w-10 h-10 text-[#F28C28] mb-3" />
                <CardTitle>In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Donate food, clothing, household items, and other supplies that directly support our programs and participants.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Users className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle>Volunteer Your Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Your time and skills are valuable. Join our team of volunteers making a hands-on difference in our community.
                </p>
                <Button variant="outline" className="w-full">
                  Get Involved
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Heart className="w-10 h-10 text-green-500 mb-3" />
                <CardTitle>Legacy Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a lasting impact through planned giving, estate gifts, or by naming UCon Ministries in your will.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
