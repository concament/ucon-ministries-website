
"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Server, Users, Heart, Eye } from "lucide-react";

export default function PrivacyPolicyPage() {
  // In a real app, these would come from a CMS or config
  const effectiveDate = "2024-07-24";
  const lastUpdated = "2024-07-24";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#A92FFA] to-[#F28C28] text-lg px-6 py-2">
            <ShieldCheck className="w-5 h-5 mr-2" />
            Your Trust, Our Commitment
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            At <span className="font-semibold text-[#A92FFA]">Ucon Ministries</span>, we are committed to protecting your privacy and handling your personal information with care and respect.
          </p>
          <div className="mt-4 text-sm text-muted-foreground space-x-4">
            <span>Effective Date: {effectiveDate}</span>
            <span>|</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* 1. Introduction */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#A92FFA]">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Welcome to Ucon Ministries, also known as United Convicts Ministries or UCon ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit any of our websites, use our services, participate in our programs, or interact with us.</p>
              <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
              <div className="p-4 bg-muted rounded-lg border-l-4 border-[#F28C28]">
                <h4 className="font-semibold text-foreground">Our Commitment to You:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>We recognize the <span className="font-semibold">inherent dignity</span> and worth of every individual.</li>
                  <li>We handle all personal information with the utmost <span className="font-semibold">confidentiality and respect</span>.</li>
                  <li>We comply with all applicable federal and state privacy laws, including <span className="font-semibold">HIPAA</span> where applicable.</li>
                  <li>We are <span className="font-semibold">transparent</span> about our data practices.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 2. Information We Collect */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#F28C28]">2. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Personal Information You Provide</h3>
                <p>We collect information you voluntarily provide. This includes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><span className="font-semibold text-[#A92FFA]">Program & Services Data:</span> Name, contact info, emergency contacts, health history (as necessary), justice system involvement, etc.</li>
                  <li><span className="font-semibold text-[#A92FFA]">Volunteer & Employment Data:</span> Resumes, references, background check authorization.</li>
                  <li><span className="font-semibold text-[#A92FFA]">Financial Data:</span> Donation history, payment information (processed by secure third parties).</li>
                  <li><span className="font-semibold text-[#A92FFA]">Communications Data:</span> Inquiry contents, prayer requests, newsletter subscriptions.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Information Automatically Collected</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><span className="font-semibold text-[#F28C28]">Device & Usage Data:</span> IP address, browser type, pages visited, time spent on pages.</li>
                  <li><span className="font-semibold text-[#F28C28]">Cookies & Tracking Tech:</span> To remember preferences and improve user experience.</li>
                </ul>
              </div>
               <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Information from Third Parties</h3>
                <p>We may receive information from partners like churches, healthcare providers (with your consent), and payment processors.</p>
              </div>
            </CardContent>
          </Card>

          {/* 3. How We Use Your Information */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#A92FFA]">3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>We use your information for:</p>
                 <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><span className="font-semibold">Program & Service Delivery:</span> To assess eligibility, provide support, and track progress.</li>
                    <li><span className="font-semibold">Organizational Operations:</span> To manage volunteers, process applications, and evaluate programs.</li>
                    <li><span className="font-semibold">Fundraising & Development:</span> To process donations, communicate with donors, and apply for grants.</li>
                    <li><span className="font-semibold">Communications, Legal & Research:</span> To respond to you, comply with laws, and improve our services.</li>
                </ul>
            </CardContent>
          </Card>

          {/* 4. How We Share Your Information */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#F28C28]">4. How We Share Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>We respect your privacy and limit disclosure. We may share information:</p>
                 <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><span className="font-semibold">With Your Consent:</span> For testimonials or connecting you with partners.</li>
                    <li><span className="font-semibold">With Service Providers:</span> Trusted partners (e.g., payment processors) who assist our operations.</li>
                    <li><span className="font-semibold">For Legal Obligations:</span> To comply with laws, subpoenas, or mandatory reporting.</li>
                    <li><span className="font-semibold">As Aggregate Data:</span> Anonymized information for reports and research.</li>
                </ul>
            </CardContent>
          </Card>
          
          {/* 5. HIPAA Compliance */}
          <Card className="bg-gradient-to-br from-[#A92FFA]/10 via-card to-[#F28C28]/10 border-[#A92FFA]/20 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center"><Lock className="mr-3 text-[#A92FFA]"/>5. Protected Health Information (PHI) & HIPAA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>When our services create Protected Health Information (PHI) as defined under HIPAA, we comply fully with its regulations. You have rights under HIPAA to access, correct, and manage your health records. For these services, you'll receive a separate <span className="font-semibold text-foreground">Notice of Privacy Practices</span>.</p>
            </CardContent>
          </Card>

           {/* 6. Data Security */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#F28C28]">6. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>We take the security of your information seriously, implementing technical, physical, and administrative safeguards like:</p>
                 <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><span className="font-semibold">Encryption</span> of data in transit and at rest.</li>
                    <li><span className="font-semibold">Secure servers</span> with firewalls and intrusion detection.</li>
                    <li><span className="font-semibold">Restricted access</span> to facilities and records.</li>
                    <li>Regular privacy and security <span className="font-semibold">staff training</span>.</li>
                </ul>
                <p>While we strive to protect your information, no method is 100% secure. We will notify you promptly of any breach.</p>
            </CardContent>
          </Card>

          {/* 7. Data Retention */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#A92FFA]">7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We retain your information only as long as necessary. Retention periods vary by data type (e.g., 7 years for program records after completion) to meet legal and operational needs. Once no longer needed, data is securely destroyed.</p>
            </CardContent>
          </Card>

          {/* 8. Your Privacy Rights */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#F28C28]">8. Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You have the right to access, correct, delete, or restrict the use of your information. You can also opt-out of non-essential communications. To exercise these rights, please contact our Privacy Officer.</p>
            </CardContent>
          </Card>

          {/* 9. Children's Privacy */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#A92FFA]">9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from minors without parental consent. If you believe we have done so, please contact us immediately.</p>
            </CardContent>
          </Card>

          {/* 10. Third-Party Links */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#F28C28]">10. Third-Party Links & Services</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Our website may link to third-party sites. This policy does not apply to them, and we encourage you to review their privacy policies.</p>
            </CardContent>
          </Card>
          
          {/* State-Specific Rights */}
          <Card className="bg-muted border-l-4 border-[#A92FFA] hover-lift">
             <CardHeader>
                <CardTitle className="text-xl font-bold">11 & 12. California & Colorado Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Residents of California (under CCPA) and Colorado (under CPA) have additional rights, including the right to know what data is collected and the right to deletion. <span className="font-bold text-foreground">Ucon Ministries does not sell your personal information.</span> To exercise your state-specific rights, please contact our Privacy Officer.</p>
            </CardContent>
          </Card>
          
          {/* 14. AI Chat Assistant */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#A92FFA]">14. AI Chat Assistant ("Hope")</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>Our AI assistant, Hope, is designed for informational support. Please note:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Conversations may be recorded for service improvement.</li>
                    <li>Hope <span className="font-semibold">does not</span> provide professional medical or mental health advice.</li>
                    <li>Do not share highly sensitive personal information through the chat.</li>
                </ul>
            </CardContent>
          </Card>

          {/* 16. Contact Us */}
          <Card className="border-[#F28C28] border-2 hover-lift">
             <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#F28C28]">16. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>If you have questions, concerns, or complaints, please contact our Privacy Officer:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@uconministries.org" className="text-[#A92FFA] hover:underline">privacy@uconministries.org</a><br/>
                <strong>Phone:</strong> [Phone Number]<br/>
                <strong>Address:</strong> [Street Address], [City, State ZIP]
              </p>
              <p>We will respond to all privacy inquiries within 10 business days.</p>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </div>
  );
}
