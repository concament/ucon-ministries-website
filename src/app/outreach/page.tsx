"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "next/image";
import { 
  Truck, Utensils, Home, Users, MessageSquare, Stethoscope,
  HandHeart, Phone, Mail, MapPin, Clock, Calendar, CheckCircle2,
  ArrowRight, Heart, Shield, TrendingUp, Package, Briefcase,
  ChevronRight, AlertCircle, Send, Star, Target, Award
} from "lucide-react";

export default function OutreachPage() {
  const [emergencyForm, setEmergencyForm] = useState({
    name: "",
    phone: "",
    need: "food",
    location: "",
    details: ""
  });

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Emergency request received! Our outreach team will contact you within 30 minutes.");
    setEmergencyForm({
      name: "",
      phone: "",
      need: "food",
      location: "",
      details: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden double-exposure">
        <div className="max-w-7xl mx-auto">
          {/* Add Hero Image */}
          <div className="mb-12 relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/generated_images/professional-photograph-of-volunteers-lo-3ad6ed8e-20251025022559.jpg"
              alt="Volunteers loading supplies for outreach"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Container 1-2: Main Content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className="inline-flex items-center gap-2 bg-accent text-accent-foreground">
                <HandHeart className="w-4 h-4" />
                Track 3 - First Responders
              </Badge>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 glow-text">
                Outreach & Community <span className="text-accent">Advocacy</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The heartbeat of our ministry's compassion—extending practical help to those experiencing immediate crisis and systemic hardship. We're here 24/7.
              </p>
              
              {/* Container 3-4: Key Features */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm py-2 px-4">24/7 Available</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">No Questions Asked</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Immediate Help</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Dignity-Centered</Badge>
              </div>
              
              {/* Container 5-6: CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 bg-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Help Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Volunteer With Us
                </Button>
              </div>
            </div>
            
            {/* Container 7-12: Emergency Contact Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Card className="col-span-2 bg-accent text-accent-foreground">
                <CardHeader>
                  <AlertCircle className="w-8 h-8 mb-2" />
                  <CardTitle className="text-2xl">24/7 Crisis Hotline</CardTitle>
                  <CardDescription className="text-accent-foreground/80 text-lg">(555) 555-HELP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-foreground/90">
                    Immediate assistance available for food, shelter, transportation, and crisis support.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">25K+</CardTitle>
                  <CardDescription>People Served Annually</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">6</CardTitle>
                  <CardDescription className="text-secondary-foreground/80">Service Types</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" fill="currentColor" />
                    Unconditional Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No paperwork, no judgment, no barriers. If you need help, we're here to provide it—period.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">
              Six Essential Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting immediate needs with dignity and compassion. Every service removes barriers and creates pathways to stability.
            </p>
          </div>
          
          {/* Container 3-8: Six Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Transportation Services</CardTitle>
                <CardDescription className="text-base">Removing Mobility Barriers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide transportation to remove a common barrier to stability and self-sufficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Job interviews and work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Medical appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Court dates and legal services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Housing connections</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#transportation">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Utensils className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Food Distribution</CardTitle>
                <CardDescription className="text-base">Addressing Food Insecurity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Food security is fundamental. We ensure no one in our community goes hungry.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly food drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community pantry access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hot meal service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Food bank partnerships</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#food">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Shelter & Housing</CardTitle>
                <CardDescription className="text-base">Safe & Stable Environment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A safe place to sleep is the foundation for recovery and transformation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Emergency shelter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transitional housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Housing vouchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Long-term housing connections</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#housing">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Community Involvement</CardTitle>
                <CardDescription className="text-base">Building Trust & Presence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Active presence in the community, creating organic relationship opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community clean-up events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Non-profit collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Partnership initiatives</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#community">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Advocacy</CardTitle>
                <CardDescription className="text-base">Voice for the Voiceless</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Addressing root causes of brokenness through systemic advocacy and policy change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fair housing advocacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Criminal justice reform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Policy engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Systemic justice work</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#advocacy">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Rehabilitation Support</CardTitle>
                <CardDescription className="text-base">Addiction & Recovery Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  First point of contact for addiction support with professional medical care access.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Crisis intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Detox center referrals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Rehab facility connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Post-rehab support</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#rehabilitation">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Utensils className="w-10 h-10 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">15K+</CardTitle>
                <CardDescription>Meals Served Annually</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <Truck className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">2,500</CardTitle>
                <CardDescription>Rides Provided</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader>
                <Home className="w-10 h-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">450</CardTitle>
                <CardDescription>Shelter Nights</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Heart className="w-10 h-10 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">100%</CardTitle>
                <CardDescription>With Dignity</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSPORTATION DETAIL - 12 Containers */}
      <section id="transportation" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Transportation Services</h2>
                <p className="text-lg text-muted-foreground">Breaking Down Mobility Barriers</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Transportation Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Lack of transportation is one of the most common barriers preventing people from moving forward. Missing a job interview, medical appointment, or court date can derail someone's entire path to stability.
                </p>
                <p className="text-muted-foreground">
                  We remove this barrier by providing reliable transportation to essential services, ensuring that lack of a ride never prevents someone from taking the next step toward self-sufficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Services We Provide</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Job-Related Transport</p>
                      <p className="text-sm text-accent-foreground/80">Interviews, first day, and ongoing employment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Medical Appointments</p>
                      <p className="text-sm text-accent-foreground/80">Doctor visits, therapy, prescriptions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Legal Services</p>
                      <p className="text-sm text-accent-foreground/80">Court dates, probation, legal aid</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Housing Connections</p>
                      <p className="text-sm text-accent-foreground/80">Viewings, applications, move-in support</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How to Request Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">1</div>
                  <div>
                    <p className="font-semibold mb-1">Call Ahead</p>
                    <p className="text-sm text-muted-foreground">Request rides 24-48 hours in advance when possible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">2</div>
                  <div>
                    <p className="font-semibold mb-1">Provide Details</p>
                    <p className="text-sm text-muted-foreground">Pickup location, destination, appointment time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">3</div>
                  <div>
                    <p className="font-semibold mb-1">We'll Be There</p>
                    <p className="text-sm text-muted-foreground">Reliable pickup and return service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 4: FOOD DISTRIBUTION - 12 Containers */}
      <section id="food" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Food Distribution</h2>
                <p className="text-lg text-muted-foreground">No One Goes Hungry</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Food Pantry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Walk-in access to groceries and essential food items. Take what you need for your family.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Mon-Sat: 9AM-5PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>123 Hope Street</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Hot Meal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Fresh, hot meals served daily. Eat on-site in a welcoming environment with dignity and respect.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Lunch: 12-2PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Dinner: 6-8PM Daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Mobile Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We bring food to where people are—homeless encampments, underserved neighborhoods, and communities in need.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Weekly Routes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Multiple Locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Our Food Partners</CardTitle>
              <CardDescription>Working Together to End Hunger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">8</p>
                  <p className="text-sm text-muted-foreground">Partner Food Banks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">25</p>
                  <p className="text-sm text-muted-foreground">Restaurant Donors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">12</p>
                  <p className="text-sm text-muted-foreground">Grocery Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Volunteer Drivers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 5: HOUSING & SHELTER - 12 Containers */}
      <section id="housing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Shelter & Housing Assistance</h2>
                <p className="text-lg text-muted-foreground">A Safe Place for Everyone</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-secondary">
              <CardHeader>
                <CardTitle className="text-2xl">Emergency Shelter</CardTitle>
                <CardDescription>Immediate Safe Haven</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  No one should sleep on the streets. Our emergency shelter provides immediate safety with no barriers to entry.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Same-Day Access</p>
                      <p className="text-sm text-muted-foreground">Walk-ins welcome, no appointment needed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Safe Environment</p>
                      <p className="text-sm text-muted-foreground">Clean beds, security, dignity-centered care</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Basic Needs</p>
                      <p className="text-sm text-muted-foreground">Meals, showers, laundry facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Case Management</p>
                      <p className="text-sm text-muted-foreground">Path to permanent housing</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Shelter Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Transitional Housing</CardTitle>
                <CardDescription>Bridge to Stability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Longer-term supportive housing for individuals working toward permanent stability and independence.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">3-12 Month Stay</p>
                      <p className="text-sm text-muted-foreground">Time to build foundation for success</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Private Rooms</p>
                      <p className="text-sm text-muted-foreground">Personal space and dignity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Support Services</p>
                      <p className="text-sm text-muted-foreground">Job placement, counseling, life skills</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Housing Navigation</p>
                      <p className="text-sm text-muted-foreground">Assistance finding permanent home</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Learn About Eligibility
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Housing Vouchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Financial assistance for first month's rent and security deposits to help individuals secure housing.
                </p>
                <Badge variant="outline">Need-Based</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Landlord Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Relationships with landlords who understand second chances and accept participants with challenging backgrounds.
                </p>
                <Badge variant="outline">50+ Properties</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Housing Follow-Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Ongoing support after move-in to ensure housing stability and prevent return to homelessness.
                </p>
                <Badge variant="outline">6-12 Months</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: EMERGENCY REQUEST FORM - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Need Help Now?</Badge>
            <h2 className="text-4xl font-bold mb-6 glow-text">Emergency Assistance Request</h2>
            <p className="text-xl text-muted-foreground">
              Submit this form for immediate help or call our 24/7 hotline at <strong>(555) 555-HELP</strong>
            </p>
          </div>
          
          <Card className="border-2 border-accent">
            <CardContent className="pt-8">
              <form onSubmit={handleEmergencySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name *</label>
                    <Input
                      type="text"
                      placeholder="First and last name"
                      value={emergencyForm.name}
                      onChange={(e) => setEmergencyForm({...emergencyForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="Best number to reach you"
                      value={emergencyForm.phone}
                      onChange={(e) => setEmergencyForm({...emergencyForm, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Immediate Need *</label>
                    <select
                      value={emergencyForm.need}
                      onChange={(e) => setEmergencyForm({...emergencyForm, need: e.target.value})}
                      className="w-full p-2 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="food">Food</option>
                      <option value="shelter">Shelter</option>
                      <option value="transportation">Transportation</option>
                      <option value="medical">Medical</option>
                      <option value="crisis">Crisis Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Location</label>
                    <Input
                      type="text"
                      placeholder="Where can we find you?"
                      value={emergencyForm.location}
                      onChange={(e) => setEmergencyForm({...emergencyForm, location: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Details</label>
                  <Textarea
                    placeholder="Please describe your situation and what you need..."
                    value={emergencyForm.details}
                    onChange={(e) => setEmergencyForm({...emergencyForm, details: e.target.value})}
                    rows={4}
                  />
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Our outreach team will contact you within 30 minutes during business hours, or first thing the next morning. For immediate crisis support, please call <strong>(555) 555-HELP</strong>.
                  </p>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Emergency Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 7: VOLUNTEER - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Join Our Team</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Volunteer With Outreach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of our first responder team. Whether you can give a few hours a week or want to make a deeper commitment, there's a place for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Food Service Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Help prepare and serve meals, stock the pantry, or drive mobile distribution routes.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Meal preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Food distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Pantry organization</span>
                  </li>
                </ul>
                <Badge variant="outline">4-6 Hours/Week</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>Transportation Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Drive individuals to appointments, job interviews, and essential services.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Valid driver's license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Flexible schedule</span>
                  </li>
                </ul>
                <Badge variant="outline">Flexible Hours</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Shelter Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Assist with shelter operations, intake, and providing dignity-centered care.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Guest services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Facility maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Case management support</span>
                  </li>
                </ul>
                <Badge variant="outline">Evening/Weekend</Badge>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
            <CardContent className="pt-8">
              <div className="text-center max-w-2xl mx-auto">
                <HandHeart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of volunteers who are changing lives through compassionate service. Training provided for all positions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <Users className="w-5 h-5 mr-2" />
                    Sign Up to Volunteer
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Volunteer Coordinator
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Truck, Utensils, Home, Users, MessageSquare, Stethoscope,
  HandHeart, Phone, Mail, MapPin, Clock, Calendar, CheckCircle2,
  ArrowRight, Heart, Shield, TrendingUp, Package, Briefcase,
  ChevronRight, AlertCircle, Send, Star, Target, Award
} from "lucide-react";
import Image from "next/image";

export default function OutreachPage() {
  const [emergencyForm, setEmergencyForm] = useState({
    name: "",
    phone: "",
    need: "food",
    location: "",
    details: ""
  });

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Emergency request received! Our outreach team will contact you within 30 minutes.");
    setEmergencyForm({
      name: "",
      phone: "",
      need: "food",
      location: "",
      details: ""
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
              <Badge className="inline-flex items-center gap-2 bg-accent text-accent-foreground">
                <HandHeart className="w-4 h-4" />
                Track 3 - First Responders
              </Badge>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 glow-text">
                Outreach & Community <span className="text-accent">Advocacy</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The heartbeat of our ministry's compassion—extending practical help to those experiencing immediate crisis and systemic hardship. We're here 24/7.
              </p>
              
              {/* Container 3-4: Key Features */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm py-2 px-4">24/7 Available</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">No Questions Asked</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Immediate Help</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Dignity-Centered</Badge>
              </div>
              
              {/* Container 5-6: CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 bg-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Help Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Volunteer With Us
                </Button>
              </div>
            </div>
            
            {/* Container 7-12: Emergency Contact Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Card className="col-span-2 bg-accent text-accent-foreground">
                <CardHeader>
                  <AlertCircle className="w-8 h-8 mb-2" />
                  <CardTitle className="text-2xl">24/7 Crisis Hotline</CardTitle>
                  <CardDescription className="text-accent-foreground/80 text-lg">(555) 555-HELP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-foreground/90">
                    Immediate assistance available for food, shelter, transportation, and crisis support.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">25K+</CardTitle>
                  <CardDescription>People Served Annually</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">6</CardTitle>
                  <CardDescription className="text-secondary-foreground/80">Service Types</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" fill="currentColor" />
                    Unconditional Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No paperwork, no judgment, no barriers. If you need help, we're here to provide it—period.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">
              Six Essential Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting immediate needs with dignity and compassion. Every service removes barriers and creates pathways to stability.
            </p>
          </div>
          
          {/* Container 3-8: Six Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Transportation Services</CardTitle>
                <CardDescription className="text-base">Removing Mobility Barriers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide transportation to remove a common barrier to stability and self-sufficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Job interviews and work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Medical appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Court dates and legal services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Housing connections</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#transportation">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Utensils className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Food Distribution</CardTitle>
                <CardDescription className="text-base">Addressing Food Insecurity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Food security is fundamental. We ensure no one in our community goes hungry.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly food drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community pantry access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hot meal service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Food bank partnerships</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#food">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Shelter & Housing</CardTitle>
                <CardDescription className="text-base">Safe & Stable Environment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A safe place to sleep is the foundation for recovery and transformation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Emergency shelter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transitional housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Housing vouchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Long-term housing connections</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#housing">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Community Involvement</CardTitle>
                <CardDescription className="text-base">Building Trust & Presence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Active presence in the community, creating organic relationship opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community clean-up events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Non-profit collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Partnership initiatives</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#community">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Advocacy</CardTitle>
                <CardDescription className="text-base">Voice for the Voiceless</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Addressing root causes of brokenness through systemic advocacy and policy change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fair housing advocacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Criminal justice reform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Policy engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Systemic justice work</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#advocacy">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Rehabilitation Support</CardTitle>
                <CardDescription className="text-base">Addiction & Recovery Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  First point of contact for addiction support with professional medical care access.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Crisis intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Detox center referrals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Rehab facility connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Post-rehab support</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#rehabilitation">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Utensils className="w-10 h-10 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">15K+</CardTitle>
                <CardDescription>Meals Served Annually</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <Truck className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">2,500</CardTitle>
                <CardDescription>Rides Provided</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader>
                <Home className="w-10 h-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">450</CardTitle>
                <CardDescription>Shelter Nights</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Heart className="w-10 h-10 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">100%</CardTitle>
                <CardDescription>With Dignity</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSPORTATION DETAIL - 12 Containers */}
      <section id="transportation" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Transportation Services</h2>
                <p className="text-lg text-muted-foreground">Breaking Down Mobility Barriers</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12 relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/generated_images/professional-photograph-of-volunteers-lo-3ad6ed8e-20251025022559.jpg"
              alt="Transportation and outreach services"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Transportation Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Lack of transportation is one of the most common barriers preventing people from moving forward. Missing a job interview, medical appointment, or court date can derail someone's entire path to stability.
                </p>
                <p className="text-muted-foreground">
                  We remove this barrier by providing reliable transportation to essential services, ensuring that lack of a ride never prevents someone from taking the next step toward self-sufficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Services We Provide</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Job-Related Transport</p>
                      <p className="text-sm text-accent-foreground/80">Interviews, first day, and ongoing employment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Medical Appointments</p>
                      <p className="text-sm text-accent-foreground/80">Doctor visits, therapy, prescriptions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Legal Services</p>
                      <p className="text-sm text-accent-foreground/80">Court dates, probation, legal aid</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Housing Connections</p>
                      <p className="text-sm text-accent-foreground/80">Viewings, applications, move-in support</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How to Request Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">1</div>
                  <div>
                    <p className="font-semibold mb-1">Call Ahead</p>
                    <p className="text-sm text-muted-foreground">Request rides 24-48 hours in advance when possible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">2</div>
                  <div>
                    <p className="font-semibold mb-1">Provide Details</p>
                    <p className="text-sm text-muted-foreground">Pickup location, destination, appointment time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">3</div>
                  <div>
                    <p className="font-semibold mb-1">We'll Be There</p>
                    <p className="text-sm text-muted-foreground">Reliable pickup and return service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 4: FOOD DISTRIBUTION - 12 Containers */}
      <section id="food" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Food Distribution</h2>
                <p className="text-lg text-muted-foreground">No One Goes Hungry</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Food Pantry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Walk-in access to groceries and essential food items. Take what you need for your family.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Mon-Sat: 9AM-5PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>123 Hope Street</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Hot Meal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Fresh, hot meals served daily. Eat on-site in a welcoming environment with dignity and respect.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Lunch: 12-2PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Dinner: 6-8PM Daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Mobile Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We bring food to where people are—homeless encampments, underserved neighborhoods, and communities in need.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Weekly Routes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Multiple Locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Our Food Partners</CardTitle>
              <CardDescription>Working Together to End Hunger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">8</p>
                  <p className="text-sm text-muted-foreground">Partner Food Banks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">25</p>
                  <p className="text-sm text-muted-foreground">Restaurant Donors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">12</p>
                  <p className="text-sm text-muted-foreground">Grocery Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Volunteer Drivers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 5: HOUSING & SHELTER - 12 Containers */}
      <section id="housing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Shelter & Housing Assistance</h2>
                <p className="text-lg text-muted-foreground">A Safe Place for Everyone</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-secondary">
              <CardHeader>
                <CardTitle className="text-2xl">Emergency Shelter</CardTitle>
                <CardDescription>Immediate Safe Haven</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  No one should sleep on the streets. Our emergency shelter provides immediate safety with no barriers to entry.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Same-Day Access</p>
                      <p className="text-sm text-muted-foreground">Walk-ins welcome, no appointment needed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Safe Environment</p>
                      <p className="text-sm text-muted-foreground">Clean beds, security, dignity-centered care</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Basic Needs</p>
                      <p className="text-sm text-muted-foreground">Meals, showers, laundry facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Case Management</p>
                      <p className="text-sm text-muted-foreground">Path to permanent housing</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Shelter Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Transitional Housing</CardTitle>
                <CardDescription>Bridge to Stability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Longer-term supportive housing for individuals working toward permanent stability and independence.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">3-12 Month Stay</p>
                      <p className="text-sm text-muted-foreground">Time to build foundation for success</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Private Rooms</p>
                      <p className="text-sm text-muted-foreground">Personal space and dignity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Support Services</p>
                      <p className="text-sm text-muted-foreground">Job placement, counseling, life skills</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Housing Navigation</p>
                      <p className="text-sm text-muted-foreground">Assistance finding permanent home</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Learn About Eligibility
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Housing Vouchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Financial assistance for first month's rent and security deposits to help individuals secure housing.
                </p>
                <Badge variant="outline">Need-Based</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Landlord Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Relationships with landlords who understand second chances and accept participants with challenging backgrounds.
                </p>
                <Badge variant="outline">50+ Properties</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Housing Follow-Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Ongoing support after move-in to ensure housing stability and prevent return to homelessness.
                </p>
                <Badge variant="outline">6-12 Months</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: EMERGENCY REQUEST FORM - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Need Help Now?</Badge>
            <h2 className="text-4xl font-bold mb-6 glow-text">Emergency Assistance Request</h2>
            <p className="text-xl text-muted-foreground">
              Submit this form for immediate help or call our 24/7 hotline at <strong>(555) 555-HELP</strong>
            </p>
          </div>
          
          <Card className="border-2 border-accent">
            <CardContent className="pt-8">
              <form onSubmit={handleEmergencySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name *</label>
                    <Input
                      type="text"
                      placeholder="First and last name"
                      value={emergencyForm.name}
                      onChange={(e) => setEmergencyForm({...emergencyForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="Best number to reach you"
                      value={emergencyForm.phone}
                      onChange={(e) => setEmergencyForm({...emergencyForm, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Immediate Need *</label>
                    <select
                      value={emergencyForm.need}
                      onChange={(e) => setEmergencyForm({...emergencyForm, need: e.target.value})}
                      className="w-full p-2 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="food">Food</option>
                      <option value="shelter">Shelter</option>
                      <option value="transportation">Transportation</option>
                      <option value="medical">Medical</option>
                      <option value="crisis">Crisis Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Location</label>
                    <Input
                      type="text"
                      placeholder="Where can we find you?"
                      value={emergencyForm.location}
                      onChange={(e) => setEmergencyForm({...emergencyForm, location: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Details</label>
                  <Textarea
                    placeholder="Please describe your situation and what you need..."
                    value={emergencyForm.details}
                    onChange={(e) => setEmergencyForm({...emergencyForm, details: e.target.value})}
                    rows={4}
                  />
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Our outreach team will contact you within 30 minutes during business hours, or first thing the next morning. For immediate crisis support, please call <strong>(555) 555-HELP</strong>.
                  </p>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Emergency Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 7: VOLUNTEER - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Join Our Team</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Volunteer With Outreach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of our first responder team. Whether you can give a few hours a week or want to make a deeper commitment, there's a place for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Food Service Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Help prepare and serve meals, stock the pantry, or drive mobile distribution routes.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Meal preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Food distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Pantry organization</span>
                  </li>
                </ul>
                <Badge variant="outline">4-6 Hours/Week</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>Transportation Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Drive individuals to appointments, job interviews, and essential services.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Valid driver's license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Flexible schedule</span>
                  </li>
                </ul>
                <Badge variant="outline">Flexible Hours</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Shelter Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Assist with shelter operations, intake, and providing dignity-centered care.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Guest services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Facility maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Case management support</span>
                  </li>
                </ul>
                <Badge variant="outline">Evening/Weekend</Badge>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
            <CardContent className="pt-8">
              <div className="text-center max-w-2xl mx-auto">
                <HandHeart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of volunteers who are changing lives through compassionate service. Training provided for all positions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <Users className="w-5 h-5 mr-2" />
                    Sign Up to Volunteer
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Volunteer Coordinator
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Truck, Utensils, Home, Users, MessageSquare, Stethoscope,
  HandHeart, Phone, Mail, MapPin, Clock, Calendar, CheckCircle2,
  ArrowRight, Heart, Shield, TrendingUp, Package, Briefcase,
  ChevronRight, AlertCircle, Send, Star, Target, Award
} from "lucide-react";
import Image from "next/image";

export default function OutreachPage() {
  const [emergencyForm, setEmergencyForm] = useState({
    name: "",
    phone: "",
    need: "food",
    location: "",
    details: ""
  });

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Emergency request received! Our outreach team will contact you within 30 minutes.");
    setEmergencyForm({
      name: "",
      phone: "",
      need: "food",
      location: "",
      details: ""
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
              <Badge className="inline-flex items-center gap-2 bg-accent text-accent-foreground">
                <HandHeart className="w-4 h-4" />
                Track 3 - First Responders
              </Badge>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 glow-text">
                Outreach & Community <span className="text-accent">Advocacy</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The heartbeat of our ministry's compassion—extending practical help to those experiencing immediate crisis and systemic hardship. We're here 24/7.
              </p>
              
              {/* Container 3-4: Key Features */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-sm py-2 px-4">24/7 Available</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">No Questions Asked</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Immediate Help</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">Dignity-Centered</Badge>
              </div>
              
              {/* Container 5-6: CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 bg-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Help Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Volunteer With Us
                </Button>
              </div>
            </div>
            
            {/* Container 7-12: Emergency Contact Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Card className="col-span-2 bg-accent text-accent-foreground">
                <CardHeader>
                  <AlertCircle className="w-8 h-8 mb-2" />
                  <CardTitle className="text-2xl">24/7 Crisis Hotline</CardTitle>
                  <CardDescription className="text-accent-foreground/80 text-lg">(555) 555-HELP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-foreground/90">
                    Immediate assistance available for food, shelter, transportation, and crisis support.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">25K+</CardTitle>
                  <CardDescription>People Served Annually</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">6</CardTitle>
                  <CardDescription className="text-secondary-foreground/80">Service Types</CardDescription>
                </CardHeader>
              </Card>
              <Card className="col-span-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" fill="currentColor" />
                    Unconditional Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    No paperwork, no judgment, no barriers. If you need help, we're here to provide it—period.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Container 1-2: Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">
              Six Essential Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meeting immediate needs with dignity and compassion. Every service removes barriers and creates pathways to stability.
            </p>
          </div>
          
          {/* Container 3-8: Six Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Transportation Services</CardTitle>
                <CardDescription className="text-base">Removing Mobility Barriers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We provide transportation to remove a common barrier to stability and self-sufficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Job interviews and work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Medical appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Court dates and legal services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Housing connections</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#transportation">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Utensils className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Food Distribution</CardTitle>
                <CardDescription className="text-base">Addressing Food Insecurity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Food security is fundamental. We ensure no one in our community goes hungry.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly food drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community pantry access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hot meal service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Food bank partnerships</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#food">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Shelter & Housing</CardTitle>
                <CardDescription className="text-base">Safe & Stable Environment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A safe place to sleep is the foundation for recovery and transformation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Emergency shelter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transitional housing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Housing vouchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Long-term housing connections</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#housing">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-accent hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Community Involvement</CardTitle>
                <CardDescription className="text-base">Building Trust & Presence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Active presence in the community, creating organic relationship opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community clean-up events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Non-profit collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Partnership initiatives</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#community">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Advocacy</CardTitle>
                <CardDescription className="text-base">Voice for the Voiceless</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Addressing root causes of brokenness through systemic advocacy and policy change.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fair housing advocacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Criminal justice reform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Policy engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Systemic justice work</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#advocacy">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-secondary hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Rehabilitation Support</CardTitle>
                <CardDescription className="text-base">Addiction & Recovery Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  First point of contact for addiction support with professional medical care access.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Crisis intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Detox center referrals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Rehab facility connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Post-rehab support</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary" asChild>
                  <a href="#rehabilitation">
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Container 9-12: Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Utensils className="w-10 h-10 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">15K+</CardTitle>
                <CardDescription>Meals Served Annually</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <Truck className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">2,500</CardTitle>
                <CardDescription>Rides Provided</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader>
                <Home className="w-10 h-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">450</CardTitle>
                <CardDescription>Shelter Nights</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <Heart className="w-10 h-10 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">100%</CardTitle>
                <CardDescription>With Dignity</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSPORTATION DETAIL - 12 Containers */}
      <section id="transportation" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Transportation Services</h2>
                <p className="text-lg text-muted-foreground">Breaking Down Mobility Barriers</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Transportation Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Lack of transportation is one of the most common barriers preventing people from moving forward. Missing a job interview, medical appointment, or court date can derail someone's entire path to stability.
                </p>
                <p className="text-muted-foreground">
                  We remove this barrier by providing reliable transportation to essential services, ensuring that lack of a ride never prevents someone from taking the next step toward self-sufficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Services We Provide</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Job-Related Transport</p>
                      <p className="text-sm text-accent-foreground/80">Interviews, first day, and ongoing employment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Medical Appointments</p>
                      <p className="text-sm text-accent-foreground/80">Doctor visits, therapy, prescriptions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Legal Services</p>
                      <p className="text-sm text-accent-foreground/80">Court dates, probation, legal aid</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Housing Connections</p>
                      <p className="text-sm text-accent-foreground/80">Viewings, applications, move-in support</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How to Request Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">1</div>
                  <div>
                    <p className="font-semibold mb-1">Call Ahead</p>
                    <p className="text-sm text-muted-foreground">Request rides 24-48 hours in advance when possible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">2</div>
                  <div>
                    <p className="font-semibold mb-1">Provide Details</p>
                    <p className="text-sm text-muted-foreground">Pickup location, destination, appointment time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">3</div>
                  <div>
                    <p className="font-semibold mb-1">We'll Be There</p>
                    <p className="text-sm text-muted-foreground">Reliable pickup and return service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 4: FOOD DISTRIBUTION - 12 Containers */}
      <section id="food" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Food Distribution</h2>
                <p className="text-lg text-muted-foreground">No One Goes Hungry</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12 relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3b399b69-78b1-47ea-a46d-f78b0232d98b/generated_images/professional-photograph-of-diverse-commu-99a990e9-20251025022558.jpg"
              alt="Food distribution and community service"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Food Pantry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Walk-in access to groceries and essential food items. Take what you need for your family.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Mon-Sat: 9AM-5PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>123 Hope Street</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Hot Meal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Fresh, hot meals served daily. Eat on-site in a welcoming environment with dignity and respect.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Lunch: 12-2PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Dinner: 6-8PM Daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">Mobile Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We bring food to where people are—homeless encampments, underserved neighborhoods, and communities in need.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Weekly Routes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Multiple Locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Our Food Partners</CardTitle>
              <CardDescription>Working Together to End Hunger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">8</p>
                  <p className="text-sm text-muted-foreground">Partner Food Banks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">25</p>
                  <p className="text-sm text-muted-foreground">Restaurant Donors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">12</p>
                  <p className="text-sm text-muted-foreground">Grocery Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Volunteer Drivers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 5: HOUSING & SHELTER - 12 Containers */}
      <section id="housing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-4xl font-bold glow-text">Shelter & Housing Assistance</h2>
                <p className="text-lg text-muted-foreground">A Safe Place for Everyone</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-secondary">
              <CardHeader>
                <CardTitle className="text-2xl">Emergency Shelter</CardTitle>
                <CardDescription>Immediate Safe Haven</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  No one should sleep on the streets. Our emergency shelter provides immediate safety with no barriers to entry.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Same-Day Access</p>
                      <p className="text-sm text-muted-foreground">Walk-ins welcome, no appointment needed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Safe Environment</p>
                      <p className="text-sm text-muted-foreground">Clean beds, security, dignity-centered care</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Basic Needs</p>
                      <p className="text-sm text-muted-foreground">Meals, showers, laundry facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Case Management</p>
                      <p className="text-sm text-muted-foreground">Path to permanent housing</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Shelter Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Transitional Housing</CardTitle>
                <CardDescription>Bridge to Stability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Longer-term supportive housing for individuals working toward permanent stability and independence.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">3-12 Month Stay</p>
                      <p className="text-sm text-muted-foreground">Time to build foundation for success</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Private Rooms</p>
                      <p className="text-sm text-muted-foreground">Personal space and dignity</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Support Services</p>
                      <p className="text-sm text-muted-foreground">Job placement, counseling, life skills</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Housing Navigation</p>
                      <p className="text-sm text-muted-foreground">Assistance finding permanent home</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Learn About Eligibility
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Housing Vouchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Financial assistance for first month's rent and security deposits to help individuals secure housing.
                </p>
                <Badge variant="outline">Need-Based</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Landlord Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Relationships with landlords who understand second chances and accept participants with challenging backgrounds.
                </p>
                <Badge variant="outline">50+ Properties</Badge>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Housing Follow-Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Ongoing support after move-in to ensure housing stability and prevent return to homelessness.
                </p>
                <Badge variant="outline">6-12 Months</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: EMERGENCY REQUEST FORM - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Need Help Now?</Badge>
            <h2 className="text-4xl font-bold mb-6 glow-text">Emergency Assistance Request</h2>
            <p className="text-xl text-muted-foreground">
              Submit this form for immediate help or call our 24/7 hotline at <strong>(555) 555-HELP</strong>
            </p>
          </div>
          
          <Card className="border-2 border-accent">
            <CardContent className="pt-8">
              <form onSubmit={handleEmergencySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name *</label>
                    <Input
                      type="text"
                      placeholder="First and last name"
                      value={emergencyForm.name}
                      onChange={(e) => setEmergencyForm({...emergencyForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="Best number to reach you"
                      value={emergencyForm.phone}
                      onChange={(e) => setEmergencyForm({...emergencyForm, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Immediate Need *</label>
                    <select
                      value={emergencyForm.need}
                      onChange={(e) => setEmergencyForm({...emergencyForm, need: e.target.value})}
                      className="w-full p-2 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="food">Food</option>
                      <option value="shelter">Shelter</option>
                      <option value="transportation">Transportation</option>
                      <option value="medical">Medical</option>
                      <option value="crisis">Crisis Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Location</label>
                    <Input
                      type="text"
                      placeholder="Where can we find you?"
                      value={emergencyForm.location}
                      onChange={(e) => setEmergencyForm({...emergencyForm, location: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Details</label>
                  <Textarea
                    placeholder="Please describe your situation and what you need..."
                    value={emergencyForm.details}
                    onChange={(e) => setEmergencyForm({...emergencyForm, details: e.target.value})}
                    rows={4}
                  />
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Our outreach team will contact you within 30 minutes during business hours, or first thing the next morning. For immediate crisis support, please call <strong>(555) 555-HELP</strong>.
                  </p>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Emergency Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECTION 7: VOLUNTEER - 12 Containers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Join Our Team</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Volunteer With Outreach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of our first responder team. Whether you can give a few hours a week or want to make a deeper commitment, there's a place for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Utensils className="w-10 h-10 text-primary mb-3" />
                <CardTitle>Food Service Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Help prepare and serve meals, stock the pantry, or drive mobile distribution routes.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Meal preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Food distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Pantry organization</span>
                  </li>
                </ul>
                <Badge variant="outline">4-6 Hours/Week</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-10 h-10 text-secondary mb-3" />
                <CardTitle>Transportation Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Drive individuals to appointments, job interviews, and essential services.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Valid driver's license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Flexible schedule</span>
                  </li>
                </ul>
                <Badge variant="outline">Flexible Hours</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Shelter Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Assist with shelter operations, intake, and providing dignity-centered care.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Guest services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Facility maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Case management support</span>
                  </li>
                </ul>
                <Badge variant="outline">Evening/Weekend</Badge>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
            <CardContent className="pt-8">
              <div className="text-center max-w-2xl mx-auto">
                <HandHeart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of volunteers who are changing lives through compassionate service. Training provided for all positions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <Users className="w-5 h-5 mr-2" />
                    Sign Up to Volunteer
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Volunteer Coordinator
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}