"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  BookOpen, GraduationCap, Heart, Users, Calendar, Clock, MapPin,
  Phone, Mail, CheckCircle2, ArrowRight, Star, MessageSquare,
  DollarSign, Briefcase, PenTool, Music, Utensils, Home,
  ChevronRight, Send, User, Sparkles, Target, Award
} from "lucide-react";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "workshop",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert("Thank you for your interest! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "workshop",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden double-exposure">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Container 1-2: Main Content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className="inline-flex items-center gap-2 bg-secondary">
                <BookOpen className="w-4 h-4" />
                Track 2 - No Commitment Required
              </Badge>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 glow-text">
                Open Ministry <span className="text-secondary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Accessible programs for spiritual formation and community connection. Come as you are, stay as long as you need—no long-term commitment required.
              </p>
              
              {/* Container 3-4: Key Features */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm py-2 px-4">Free Access</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">All Welcome</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">No Commitment</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Weekly Events</Badge>
              </div>
              
              {/* Container 5-6: CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 bg-secondary">
                  View Schedule
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Contact Us
                </Button>
              </div>
            </div>
            
            {/* Container 7-12: Quick Info Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">20+</CardTitle>
                  <CardDescription className="text-secondary-foreground/80">Weekly Events</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">Free</CardTitle>
                  <CardDescription>All Services</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">4</CardTitle>
                  <CardDescription>Service Types</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">∞</CardTitle>
                  <CardDescription className="text-accent-foreground/80">All Welcome</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-2 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    The Front Door to UCon Ministries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track 2 services provide a welcoming entry point to our community. Experience our programs risk-free and discover the support you need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICE CATEGORIES - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">
              Our Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the path that fits your current needs. All services are free, open to everyone, and designed to support your journey.
            </p>
          </div>
          
          {/* Container 3-6: Four Main Service Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Workshops</CardTitle>
                <CardDescription className="text-base">Skill-Based Learning & Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Short-term seminars designed to build practical life skills and empower you for success. No prerequisites, just come ready to learn.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Financial literacy and budgeting</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Communication skills</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Job readiness training</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Creative expression</span>
                  </div>
                </div>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#workshops">
                    Explore Workshops
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Bible Studies</CardTitle>
                <CardDescription className="text-base">Spiritual Growth & Fellowship</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Open-access gatherings for biblical literacy, fellowship, and theological exploration. All backgrounds and knowledge levels welcome.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Weekly Bible study groups</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Topical scripture exploration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Community worship</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Theological discussions</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="#bible-studies">
                    Join Bible Study
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Pastoral Services</CardTitle>
                <CardDescription className="text-base">Spiritual Care & Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  One-on-one pastoral counseling, prayer support, and crisis intervention available to the wider community.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Individual pastoral counseling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>24/7 prayer support hotline</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Crisis intervention</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Spiritual direction</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#pastoral">
                    Contact Pastor
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Mentoring & Peer Support</CardTitle>
                <CardDescription className="text-base">Community Connection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Informal connections matching LDI graduates with community members seeking guidance and support.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>One-on-one mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Peer support groups</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Accountability partnerships</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Bridge to deeper engagement</span>
                  </div>
                </div>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#mentoring">
                    Find a Mentor
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 7-12: Benefits & Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader>
                <Target className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>No Barriers to Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All services are completely free and open to anyone. No application, no prerequisites, no financial burden—just show up.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Safe & Welcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Experience unconditional acceptance and non-judgmental presence. Our community welcomes you exactly as you are.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Award className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Pathway to More</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track 2 serves as the front door to UCon Ministries. Discover if deeper engagement like the LDI program is right for you.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Calendar className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Attend as many or as few events as you like. Come weekly or drop in occasionally—whatever works for your life.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Real Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Build genuine relationships with people who understand struggle and celebrate growth. Find your support network.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Sparkles className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Practical Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gain real skills, spiritual depth, and personal connections that make a tangible difference in your daily life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKSHOPS DETAIL - 12 Containers */}
      <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Workshops</h2>
                <p className="text-lg text-muted-foreground">Building Practical Life Skills</p>
              </div>
            </div>
          </div>
          
          {/* Container 3-10: Workshop Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Financial Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Budgeting basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Debt management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Savings strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Credit building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Communication Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Active listening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Conflict resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Public speaking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Assertiveness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Job Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Resume writing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Interview skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Career planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Workplace etiquette</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <PenTool className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Creative Expression</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Art therapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Creative writing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Music and rhythm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Drama and storytelling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Life Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Time management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Household management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Cooking basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Organization skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Healthy boundaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Family dynamics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Parenting skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Building trust</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Personal Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Goal setting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Self-esteem building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Stress management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Mindfulness practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Community Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Volunteering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Civic engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Networking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Social responsibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 11-12: Workshop Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-secondary text-secondary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Workshop Format</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Duration:</p>
                      <p className="text-secondary-foreground/80">2-4 weeks per workshop series</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Schedule:</p>
                      <p className="text-secondary-foreground/80">Wednesdays 6:00 PM - 8:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Group Size:</p>
                      <p className="text-secondary-foreground/80">15-20 participants for interactive learning</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hands-on, practical exercises and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Small group discussions and peer learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Take-home materials and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Certificate of completion (optional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Light refreshments provided</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: BIBLE STUDIES - 12 Containers */}
      <section id="bible-studies" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Bible Studies</h2>
                <p className="text-lg text-muted-foreground">Growing Together in Faith</p>
              </div>
            </div>
          </div>
          
          {/* Container 3-8: Study Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Monday Evening Study</CardTitle>
                <CardDescription>Foundational Christianity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Perfect for beginners or those returning to faith. Explore core Christian beliefs and biblical foundations.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>All levels welcome</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tuesday Morning Group</CardTitle>
                <CardDescription>Women's Bible Study</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A supportive space for women to study scripture, share experiences, and build authentic community.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>10:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Women only</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Thursday Men's Study</CardTitle>
                <CardDescription>Men of Purpose</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Men supporting men in faith, leadership, and life challenges. Honest discussion in a safe environment.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>6:30 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Men only</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Friday Fellowship</CardTitle>
                <CardDescription>Topical Studies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Deep dives into specific biblical topics, themes, and books. Engaging theological discussions.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>7:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Intermediate+</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Sunday Morning</CardTitle>
                <CardDescription>Community Worship & Study</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Weekly worship service followed by small group discussion. Experience community and spiritual growth.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Families welcome</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Saturday Youth Study</CardTitle>
                <CardDescription>Young Adults (18-30)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Relevant biblical teaching for young adults navigating faith, career, and life transitions.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>5:00 PM - 6:30 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Ages 18-30</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Study Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-primary mb-3" />
                <CardTitle>What We Study</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Biblical books and passages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Christian life and discipleship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Theology and doctrine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Contemporary faith issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader>
                <Users className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>Study Format</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Open discussion encouraged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Questions always welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>No prior knowledge needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Free study materials provided</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Heart className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Why Join?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Deepen your faith journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Build authentic community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Find spiritual guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Experience God's love</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: PASTORAL SERVICES - 12 Containers */}
      <section id="pastoral" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Pastoral Services</h2>
                <p className="text-lg text-muted-foreground">Spiritual Care When You Need It</p>
              </div>
            </div>
          </div>
          
          {/* Container 3-8: Service Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <User className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Individual Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  One-on-one pastoral counseling sessions for personal spiritual guidance, life challenges, and faith questions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Confidential sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Faith-integrated care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">24/7 Prayer Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Round-the-clock prayer support for urgent spiritual needs, crises, or when you just need someone to pray with you.
                </p>
                <div className="p-4 bg-accent/10 rounded-lg mt-4">
                  <p className="font-semibold text-lg mb-1">(555) 555-PRAY</p>
                  <p className="text-sm text-muted-foreground">Available 24/7/365</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Crisis Intervention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Immediate spiritual and emotional support during life crises, emergencies, and overwhelming situations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Immediate response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Compassionate care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Resource connections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Spiritual Direction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ongoing guidance for deepening your spiritual life, discerning God's call, and growing in Christian maturity.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Regular meetings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Prayer practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Discernment support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Family Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Faith-based family counseling to address relationship issues, parenting challenges, and family dynamics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Couple sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Family meetings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Restoration focus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">Life Transitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Support during major life changes: grief, career shifts, relationship changes, health challenges, and more.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Grief support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Change navigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Hope restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: How to Access */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">How to Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call or Email</p>
                      <p className="text-sm text-accent-foreground/80">Contact our pastoral care team to request a session</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Brief Screening</p>
                      <p className="text-sm text-accent-foreground/80">Quick conversation to understand your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Meet Your Pastor</p>
                      <p className="text-sm text-accent-foreground/80">First session typically within 48 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Pastoral Care</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-semibold">Office Phone</p>
                      <p className="text-muted-foreground">(555) 555-1234</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-5PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-semibold">24/7 Prayer Hotline</p>
                      <p className="text-muted-foreground">(555) 555-PRAY</p>
                      <p className="text-sm text-muted-foreground">Always available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">pastoral@uconministries.org</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT FORM - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary">Get Connected</Badge>
            <h2 className="text-4xl font-bold mb-6 glow-text">Ready to Join Us?</h2>
            <p className="text-xl text-muted-foreground">
              Fill out this form and we'll help you find the right service for your needs.
            </p>
          </div>
          
          <Card className="border-2">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="(555) 555-5555"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interest *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full p-2 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="workshop">Workshops</option>
                      <option value="bible-study">Bible Studies</option>
                      <option value="pastoral">Pastoral Services</option>
                      <option value="mentoring">Mentoring/Peer Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us a bit about yourself and what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </Button>
                  <Button type="button" size="lg" variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 7: SCHEDULE & LOCATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-text">Visit Us</h2>
            <p className="text-xl text-muted-foreground">All are welcome at UCon Ministries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">UCon Ministries Center</p>
                <p className="mb-1">123 Hope Street</p>
                <p className="mb-4">Community Center, CA 90210</p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Clock className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Services Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Phone className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Main Office</p>
                    <p className="font-medium">(555) 555-1234</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">services@ucon.org</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">24/7 Prayer</p>
                    <p className="font-medium">(555) 555-PRAY</p>
                  </div>
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