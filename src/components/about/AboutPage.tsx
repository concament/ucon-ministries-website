
"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Heart, Target, Users, Compass, BookOpen, Church,
  Award, TrendingUp, Shield, Sparkles, ArrowRight,
  CheckCircle2, Star, Globe, Building2, HandHeart, Mail, Linkedin,
  ClipboardList, Cross, Guitar, Gift // New Icons
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

    return () => {
      if(ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
}

// Staff & Team Member Data
const coreLeadership = [
  {
    id: 1,
    name: "Rev. Troy Salazar",
    role: "Operations & Visionary Ministry Lead",
    bio: "Rev. Salazar founded UCon Ministries after his own transformative journey... With over 15 years of experience, he leads with vision, compassion, and unwavering commitment.",
    expertise: ["Leadership Development", "Trauma-Informed Care", "Spiritual Formation"],
    image: "https://od.lk/d/NzNfMTEwMDI4NDE3Xw/20250713_161156.jpgw=400&h=400&fit=crop",
    email: "tsalazar@uconministries.org",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Dr. Sarah Martinez",
    role: "Clinical Director",
    bio: "Dr. Martinez brings 12 years of clinical psychology experience... She integrates evidence-based practices with faith-based principles for holistic healing.",
    expertise: ["Clinical Psychology", "Addiction Treatment", "Group Therapy"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    email: "smartinez@uconministries.org",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Brittany 'Twin' Joseph",
    role: "Ministry Programs & Multiplication Director",
    bio: "Brittany is an LDI graduate who now serves as Program Coordinator... His lived experience makes him uniquely qualified to support participants.",
    expertise: ["Peer Support", "Case Management", "Community Outreach"],
    image: "https://od.lk/d/NzNfMTEwMDI4NDE1Xw/1753625802155.jpgw=400&h=400&fit=crop",
    email: "bjoseph@uconministries.org",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Pastor Cassie Adams",
    role: "Spiritual Care Director",
    bio: "Pastor Cassie oversees all spiritual formation programs... With a heart for the marginalized, she creates safe spaces for spiritual growth.",
    expertise: ["Pastoral Counseling", "Biblical Studies", "Spiritual Direction"],
    image: "https://od.lk/d/NzNfMTEwMDI2OTg4Xw/XJ62-7qN_1761716441989_raw.jpg?w=400&h=400&fit=crop",
    email: "cadams@uconministries.org",
    linkedin: "#"
  }
];

const ldiTeam = [
  { id: 5, name: "John Carter", role: "LDI Program Director", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop" },
  { id: 6, name: "Maria Rodriguez", role: "Lead LDI Facilitator", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop" },
];

const pastoralTeam = [
  { id: 7, name: "Rev. David Chen", role: "Pastoral Care Coordinator", image: "https://images.unsplash.com/photo-1595290278259-9d99a49d6323?w=400&h=400&fit=crop" },
  { id: 8, name: "Chaplain Grace Lee", role: "Chaplaincy Services", image: "https://images.unsplash.com/photo-1544717297-fa95b9ee9643?w=400&h=400&fit=crop" },
];

const outreachTeam = [
  { id: 9, name: "Michael 'Big Mike' Davis", role: "Outreach Coordinator", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
  { id: 10, name: "Jessica Williams", role: "Street Team Leader", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { id: 11, name: "Chris Thompson", role: "Community Partnerships", image: "https://images.unsplash.com/photo-1624298357597-ae9432f8a82d?w=400&h=400&fit=crop" },
];

const worshipTeam = [
  { id: 12, name: "Alex 'AJ' Johnson", role: "Worship Leader", image: "https://images.unsplash.com/photo-1583692348083-ae53d71597c4?w=400&h=400&fit=crop" },
  { id: 13, name: "Samantha Ray", role: "Lead Vocalist", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop" },
  { id: 14, name: "Ben Carter", role: "Lead Guitarist", image: "https://images.unsplash.com/photo-1517483646968-d34c15243c3f?w=400&h=400&fit=crop" },
];

const volunteers = [
    { id: 15, name: "Emily White", contribution: "Weekly Mentorship & Admin Support"},
    { id: 16, name: "James Green", contribution: "Event Setup & Logistics"},
    { id: 17, name: "Linda Brown", contribution: "Meal Preparation & Service"},
    { id: 18, name: "Robert Taylor", contribution: "Donation Sorting & Organization"},
];

// A generic member type for dialog
type TeamMember = typeof coreLeadership[0] & { team?: string };

export default function AboutPage() {
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [valuesRef, valuesVisible] = useIntersectionObserver();
  const [ldiRef, ldiVisible] = useIntersectionObserver();
  const [differentiatorRef, differentiatorVisible] = useIntersectionObserver();
  const [visionRef, visionVisible] = useIntersectionObserver();
  const [coreTeamRef, coreTeamVisible] = useIntersectionObserver();
  const [ldiTeamRef, ldiTeamVisible] = useIntersectionObserver();
  const [pastoralTeamRef, pastoralTeamVisible] = useIntersectionObserver();
  const [outreachTeamRef, outreachTeamVisible] = useIntersectionObserver();
  const [worshipTeamRef, worshipTeamVisible] = useIntersectionObserver();
  const [volunteerRef, volunteerVisible] = useIntersectionObserver();
  const [impactRef, impactVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();
  
  const [selectedStaff, setSelectedStaff] = useState<TeamMember | null>(null);
  const [staffDialogOpen, setStaffDialogOpen] = useState(false);

  const handleStaffClick = (staff: TeamMember) => {
    setSelectedStaff(staff);
    setStaffDialogOpen(true);
  };

  const AnimatedSection = ({ children, hookResult }: { children: ReactNode, hookResult: readonly [React.RefObject<HTMLDivElement>, boolean] }) => {
    const [ref, isVisible] = hookResult;
    return (
      <section ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {children}
      </section>
    );
  };

  const TeamSection = ({ title, description, team, icon, hookResult }: { title: string, description: string, team: any[], icon: ReactNode, hookResult: readonly [React.RefObject<HTMLDivElement>, boolean] }) => (
    <AnimatedSection hookResult={hookResult}>
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90">
                        {icon}
                        {title}
                    </Badge>
                    <h2 className="text-5xl sm:text-6xl font-bold mb-6">{title}</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <Card key={member.id} className="hover-lift cursor-pointer" onClick={() => handleStaffClick({...member, team: title, bio: member.bio || `A dedicated member of the ${title}.`, expertise: member.expertise || ['Community Service']})}>
                            <div className="relative w-full h-64">
                                <Image src={member.image} alt={member.name} layout="fill" className="object-cover rounded-t-lg" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl">{member.name}</CardTitle>
                                <CardDescription>{member.role}</CardDescription>
                            </CardHeader>
                             <CardContent>
                               <Button variant="outline" className="w-full">View Profile</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero />

      <AnimatedSection hookResult={[missionRef, missionVisible]}>
        <div className="py-20 px-4 sm:px-6 lg:px-8 overlay-gradient">
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
        </div>
      </AnimatedSection>

    <TeamSection title="Core Leadership" description="The visionary leaders guiding our mission and operations." team={coreLeadership} icon={<Users className="w-4 h-4 mr-2" />} hookResult={[coreTeamRef, coreTeamVisible]} />
    <TeamSection title="Leadership Team (LDI)" description="Guiding the next generation of leaders through our intensive development program." team={ldiTeam} icon={<ClipboardList className="w-4 h-4 mr-2" />} hookResult={[ldiTeamRef, ldiTeamVisible]} />
    <TeamSection title="Pastoral Team" description="Providing spiritual guidance, care, and support to our community." team={pastoralTeam} icon={<Cross className="w-4 h-4 mr-2" />} hookResult={[pastoralTeamRef, pastoralTeamVisible]} />
    <TeamSection title="Outreach Team" description="Our boots on the ground, connecting with and serving the community directly." team={outreachTeam} icon={<HandHeart className="w-4 h-4 mr-2" />} hookResult={[outreachTeamRef, outreachTeamVisible]} />
    <TeamSection title="Worship Team" description="Leading our community in praise and worship." team={worshipTeam} icon={<Guitar className="w-4 h-4 mr-2" />} hookResult={[worshipTeamRef, worshipTeamVisible]} />

      <AnimatedSection hookResult={[volunteerRef, volunteerVisible]}>
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-[#F28C28] hover:bg-[#F28C28]/90">
                        <Gift className="w-4 h-4 mr-2" />
                        Our Honored Volunteers
                    </Badge>
                    <h2 className="text-5xl sm:text-6xl font-bold mb-6">The Heart of Our Ministry</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We are incredibly grateful for the dedicated volunteers who generously give their time and talent. Their selfless service is the backbone of our ministry.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {volunteers.map(v => (
                         <Card key={v.id} className="text-center hover-lift">
                            <CardHeader>
                                <CardTitle>{v.name}</CardTitle>
                                <CardDescription>{v.contribution}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild size="lg" className="bg-[#F28C28] hover:bg-[#F28C28]/90 text-lg">
                        <Link href="/volunteer">Become a Volunteer <Heart className="ml-2 w-4 h-4"/></Link>
                    </Button>
                </div>
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection hookResult={[ctaRef, ctaVisible]}>
        <div className="py-20 px-4 sm:px-6 lg:px-8">
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
                      <Link href="/donations">
                        Donate Now
                        <Heart className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </AnimatedSection>

      {/* Staff Detail Dialog */}
      <Dialog open={staffDialogOpen} onOpenChange={setStaffDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          {selectedStaff && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-6 mb-4">
                   <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={selectedStaff.image || '/public/file.svg'} alt={selectedStaff.name} layout="fill" className="object-cover" />
                    </div>
                  <div>
                    <DialogTitle className="text-3xl mb-2">{selectedStaff.name}</DialogTitle>
                    <DialogDescription className="text-lg">
                      {selectedStaff.role} - <span className="font-semibold text-[#A92FFA]">{selectedStaff.team || 'Core Leadership'}</span>
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
