"use client"

import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Heart, DollarSign, Users, Home, Utensils, 
  GraduationCap, CheckCircle2, ArrowRight, Sparkles,
  HandHeart, Truck, BookOpen, Target, Building2,
  Shield, Phone, Mail
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

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

export default function DonationsPage() {
  const [donationType, setDonationType] = useState<"outreach" | "pastoral" | "monetary" | "get-involved">("monetary");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    anonymous: false
  });

  const [heroRef, heroVisible] = useIntersectionObserver();
  const [categoriesRef, categoriesVisible] = useIntersectionObserver();
  const [formRef, formVisible] = useIntersectionObserver();
  const [impactRef, impactVisible] = useIntersectionObserver();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thank you for your support! We'll contact you soon about your ${donationType} contribution.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden overlay-gradient"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-8 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Support Our Mission
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 glow-text">
              Transform Lives Through Giving
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your generosity helps restore hope, dignity, and purpose to individuals impacted by addiction, homelessness, and personal brokenness. Every contribution makes an eternal impact.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section 
        ref={categoriesRef}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold mb-4">Ways to Give</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to support our mission of transformation
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 ${
            categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Outreach Donations */}
            <button
              onClick={() => setDonationType("outreach")}
              className="text-left"
            >
              <Card className={`h-full hover-lift ${
                donationType === "outreach" ? 'border-[#A92FFA] ring-2 ring-[#A92FFA]/20' : ''
              }`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#A92FFA]/10 flex items-center justify-center mb-4">
                    <HandHeart className="w-6 h-6 text-[#A92FFA]" />
                  </div>
                  <CardTitle>Outreach Support</CardTitle>
                  <CardDescription>Direct Community Impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Food distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Transportation services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Emergency shelter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Crisis intervention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </button>

            {/* Pastoral Care Donations */}
            <button
              onClick={() => setDonationType("pastoral")}
              className="text-left"
            >
              <Card className={`h-full hover-lift ${
                donationType === "pastoral" ? 'border-[#F28C28] ring-2 ring-[#F28C28]/20' : ''
              }`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#F28C28]/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#F28C28]" />
                  </div>
                  <CardTitle>Pastoral Care</CardTitle>
                  <CardDescription>Spiritual Support Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Counseling sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Bible studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Prayer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Spiritual guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </button>

            {/* General Monetary Donations */}
            <button
              onClick={() => setDonationType("monetary")}
              className="text-left"
            >
              <Card className={`h-full hover-lift ${
                donationType === "monetary" ? 'border-[#A92FFA] ring-2 ring-[#A92FFA]/20' : ''
              }`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#A92FFA]/10 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-[#A92FFA]" />
                  </div>
                  <CardTitle>General Fund</CardTitle>
                  <CardDescription>Where Needed Most</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>LDI program support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Facility maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Staff support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                      <span>Program expansion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </button>

            {/* Get Involved - Other Ways */}
            <button
              onClick={() => setDonationType("get-involved")}
              className="text-left"
            >
              <Card className={`h-full hover-lift ${
                donationType === "get-involved" ? 'border-[#F28C28] ring-2 ring-[#F28C28]/20' : ''
              }`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#F28C28]/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#F28C28]" />
                  </div>
                  <CardTitle>Get Involved</CardTitle>
                  <CardDescription>Beyond Financial Giving</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Volunteer your time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Donate goods/supplies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Become a mentor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Partner with us</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </button>
          </div>
        </div>
      </section>

      {/* Donation Form or Get Involved Options */}
      <section 
        ref={formRef}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {donationType !== "get-involved" ? (
            <Card className="border-2 border-[#A92FFA]/20">
              <CardHeader>
                <CardTitle className="text-3xl">
                  {donationType === "outreach" && "Support Outreach Initiatives"}
                  {donationType === "pastoral" && "Support Pastoral Care"}
                  {donationType === "monetary" && "Make a Donation"}
                </CardTitle>
                <CardDescription className="text-base">
                  {donationType === "outreach" && "Help us provide immediate assistance to those in crisis"}
                  {donationType === "pastoral" && "Enable spiritual care and counseling services"}
                  {donationType === "monetary" && "Support all aspects of our transformational ministry"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donor Information */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        disabled={formData.anonymous}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="amount">Donation Amount *</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount"
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                          className="pl-10"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Share why you're giving or any special instructions..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={formData.anonymous}
                        onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
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
                          UCon Ministries is a 501(c)(3) nonprofit organization. Your donation is tax-deductible. You will receive a receipt via email.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Security Notice:</strong> This form currently collects donation intentions. In production, all payments will be processed through Stripe with bank-level encryption and PCI compliance to ensure your financial data is completely secure.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#A92FFA] to-[#F28C28] hover:opacity-90 text-lg"
                  >
                    Submit Donation Intent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardHeader>
                  <Users className="w-12 h-12 text-[#A92FFA] mb-4" />
                  <CardTitle className="text-2xl">Volunteer Your Time</CardTitle>
                  <CardDescription>Join Our Team Making a Difference</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Your time and skills are incredibly valuable. Serve in outreach, workshops, administrative support, mentoring, or other areas.
                  </p>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/volunteer">
                      Become a Volunteer
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Utensils className="w-12 h-12 text-[#F28C28] mb-4" />
                  <CardTitle className="text-2xl">In-Kind Donations</CardTitle>
                  <CardDescription>Donate Goods and Supplies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">We accept donations of:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Non-perishable food items</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Clothing and household items</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Personal care products</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                      <span>Office and program supplies</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      Contact Us About Donations
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#A92FFA] mb-4" />
                  <CardTitle className="text-2xl">Become a Mentor</CardTitle>
                  <CardDescription>Share Your Transformation Story</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Use your story and experience to guide others on their journey from brokenness to purpose.
                  </p>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      Apply to Mentor
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-[#F28C28] mb-4" />
                  <CardTitle className="text-2xl">Partner With Us</CardTitle>
                  <CardDescription>Organizational Partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Is your church, business, or organization interested in partnering with UCon Ministries for greater community impact?
                  </p>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      Explore Partnerships
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section 
        ref={impactRef}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A92FFA]/5 to-[#F28C28]/5"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Impact in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how donations transform lives and create lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 hover-lift">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-[#A92FFA]">500+</CardTitle>
                <CardDescription>Lives Transformed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-[#F28C28]/10 to-[#F28C28]/5 hover-lift">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-[#F28C28]">10K+</CardTitle>
                <CardDescription>Meals Served</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 hover-lift">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-[#A92FFA]">2,500+</CardTitle>
                <CardDescription>Counseling Sessions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-[#F28C28]/10 to-[#F28C28]/5 hover-lift">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-[#F28C28]">94%</CardTitle>
                <CardDescription>Program Success Rate</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">$25/month</CardTitle>
                <CardDescription>Provides Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>5 meals for someone in need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Transportation to job interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Workshop materials for participants</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-[#A92FFA]/30">
              <CardHeader>
                <Badge className="mb-2 bg-[#A92FFA]">Most Impact</Badge>
                <CardTitle className="text-xl">$100/month</CardTitle>
                <CardDescription>Sponsors Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>1 week of housing for LDI participant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>5 counseling sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A92FFA] mt-0.5 flex-shrink-0" />
                    <span>Emergency crisis interventions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">$250/month</CardTitle>
                <CardDescription>Champion Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Full LDI curriculum materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>1 month partial housing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28] mt-0.5 flex-shrink-0" />
                    <span>Multiple workshop programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#A92FFA] to-[#A92FFA]/80 text-white">
              <CardHeader>
                <Phone className="w-10 h-10 mb-3" />
                <CardTitle className="text-2xl">Questions About Giving?</CardTitle>
                <CardDescription className="text-white/80">We're Here to Help</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/80 mb-1">Phone</p>
                    <p className="text-2xl font-bold">(555) 555-1234</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Email</p>
                    <p className="text-lg font-semibold">info@uconministries.org</p>
                  </div>
                  <p className="text-sm text-white/90 pt-2">
                    Call or email us to discuss donation options, legacy giving, or how your contribution makes an impact.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#F28C28] to-[#F28C28]/80 text-white">
              <CardHeader>
                <Heart className="w-10 h-10 mb-3" fill="currentColor" />
                <CardTitle className="text-2xl">Every Gift Matters</CardTitle>
                <CardDescription className="text-white/80">Together We Transform Lives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-6">
                  Whether you give $10 or $1,000, your generosity directly impacts individuals discovering their worth, purpose, and calling. Thank you for partnering with us to bring hope and transformation to our community.
                </p>
                <div className="flex gap-2">
                  <Shield className="w-6 h-6 flex-shrink-0" />
                  <p className="text-sm text-white/90">
                    All donations are handled with the highest security standards and financial accountability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}