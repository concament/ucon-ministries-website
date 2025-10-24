"use client"

import AboutPage from "@/components/about/AboutPage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden double-exposure">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-[#A92FFA] hover:bg-[#A92FFA]/90 text-lg px-6 py-2">
              <Heart className="w-5 h-5 mr-2" />
              About Us
            </Badge>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 glow-text">
              Our
              <br />
              <span className="bg-gradient-to-r from-[#A92FFA] to-[#F28C28] bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a passionate team dedicated to creating meaningful experiences through innovative design and purpose-driven solutions. 
              Our journey began with a simple belief: technology should serve humanity, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overlay-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA]">Our Mission</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Transforming Lives Through Purpose</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in creating products and services that not only solve problems but also enrich people's lives. 
              Our mission is to build technology that empowers individuals, fosters community, and makes a positive impact on society.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA]">Our Vision</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Creating a World of Possibilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We envision a future where technology seamlessly integrates with human experience, 
              creating opportunities for growth, connection, and self-actualization for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overlay-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#A92FFA]">Our Values</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 glow-text">Integrity, Innovation, and Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At our core, we believe in three fundamental principles: 
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Integrity - We do what's right, even when it's difficult</li>
                <li>Innovation - We push boundaries to create better solutions</li>
                <li>Impact - We measure success by the positive difference we make</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}