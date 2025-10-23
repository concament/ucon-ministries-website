"use client"

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterModal from "@/components/NewsletterModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, Search, Plus, User, Clock, Users,
  CheckCircle2, Sparkles, MessageCircle, Loader2
} from "lucide-react";

const categories = [
  { value: "all", label: "All Prayers", color: "bg-primary" },
  { value: "Healing", label: "Healing", color: "bg-red-500" },
  { value: "Strength", label: "Strength", color: "bg-blue-500" },
  { value: "Guidance", label: "Guidance", color: "bg-[#A92FFA]" },
  { value: "Family", label: "Family", color: "bg-green-500" },
  { value: "Provision", label: "Provision", color: "bg-yellow-500" },
  { value: "Ministry", label: "Ministry", color: "bg-indigo-500" },
  { value: "Breakthrough", label: "Breakthrough", color: "bg-[#F28C28]" }
];

// Intersection Observer Hook for animations
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

export default function PrayerWall() {
  const [prayers, setPrayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  
  // Animation refs
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();
  const [filtersRef, filtersVisible] = useIntersectionObserver();
  const [infoRef, infoVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    anonymous: false,
    category: "Strength",
    prayerRequest: ""
  });

  // Fetch prayers from API
  useEffect(() => {
    fetchPrayers();
  }, []);

  const fetchPrayers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/prayers?limit=100');
      if (response.ok) {
        const data = await response.json();
        setPrayers(data);
      }
    } catch (error) {
      console.error('Error fetching prayers:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter prayers
  const filteredPrayers = prayers
    .filter(prayer => {
      const matchesCategory = selectedCategory === "all" || prayer.category === selectedCategory;
      const matchesSearch = prayer.prayerRequest.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (prayer.name && prayer.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortBy === "popular") return b.prayerCount - a.prayerCount;
      return 0;
    });

  const handlePrayFor = async (prayerId: number, currentCount: number) => {
    try {
      const response = await fetch(`/api/prayers?id=${prayerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayerCount: currentCount + 1 })
      });
      
      if (response.ok) {
        setPrayers(prayers.map(prayer => 
          prayer.id === prayerId 
            ? { ...prayer, prayerCount: currentCount + 1 }
            : prayer
        ));
      }
    } catch (error) {
      console.error('Error updating prayer count:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/prayers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.anonymous ? null : formData.name,
          prayerRequest: formData.prayerRequest,
          category: formData.category,
          isAnonymous: formData.anonymous
        })
      });
      
      if (response.ok) {
        const newPrayer = await response.json();
        setPrayers([newPrayer, ...prayers]);
        setFormData({
          name: "",
          anonymous: false,
          category: "Strength",
          prayerRequest: ""
        });
        setShowSubmitForm(false);
        // Show newsletter modal after successful submission
        setShowNewsletterModal(true);
      }
    } catch (error) {
      console.error('Error submitting prayer:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Stats
  const totalPrayers = prayers.length;
  const totalPrayerCount = prayers.reduce((sum, p) => sum + p.prayerCount, 0);
  const activeCategories = new Set(prayers.map(p => p.category)).size;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(169, 47, 250, 0.1) 0%, rgba(242, 140, 40, 0.1) 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-8 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Badge className="mb-4 bg-[#A92FFA] hover:bg-[#A92FFA]/90">
              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
              Community Prayer
            </Badge>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              Interactive Prayer Wall
            </h1>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Share your prayer requests, pray for others, and experience the power of unified prayer in our community.
            </p>
            <div className={`transition-all duration-1000 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg" 
                onClick={() => setShowSubmitForm(true)} 
                className="text-lg px-8 bg-[#F28C28] hover:bg-[#F28C28]/90"
              >
                <Plus className="w-5 h-5 mr-2" />
                Submit Prayer Request
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 transition-all duration-1000 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="bg-[#A92FFA] text-white hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold">{totalPrayers}</CardTitle>
                <CardDescription className="text-white/80">Active Prayers</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#F28C28] text-white hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold">{totalPrayerCount.toLocaleString()}</CardTitle>
                <CardDescription className="text-white/80">Times Prayed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-[#A92FFA] to-[#F28C28] text-white hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold">{activeCategories}</CardTitle>
                <CardDescription className="text-white/80">Categories</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="text-3xl font-bold">24/7</CardTitle>
                <CardDescription>Prayer Support</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Submit Form Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Submit Prayer Request</CardTitle>
              <CardDescription>Share your prayer needs with our community</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={formData.anonymous}
                    required={!formData.anonymous}
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
                  <label htmlFor="anonymous" className="text-sm">Submit anonymously</label>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full p-2 border border-border rounded-md bg-background"
                    required
                  >
                    {categories.filter(c => c.value !== "all").map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Prayer Request</label>
                  <Textarea
                    placeholder="Share your prayer request with our community..."
                    value={formData.prayerRequest}
                    onChange={(e) => setFormData({...formData, prayerRequest: e.target.value})}
                    rows={5}
                    required
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 bg-[#F28C28] hover:bg-[#F28C28]/90" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 mr-2" />
                        Submit Prayer
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowSubmitForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <div 
            ref={filtersRef}
            className={`mb-8 transition-all duration-1000 ${
              filtersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search prayers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-border rounded-md bg-background min-w-[150px]"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Prayed For</option>
              </select>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Badge
                  key={cat.value}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${selectedCategory === cat.value ? cat.color : ""}`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                  {cat.value === "all" && ` (${prayers.length})`}
                  {cat.value !== "all" && ` (${prayers.filter(p => p.category === cat.value).length})`}
                </Badge>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <Loader2 className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
              <p className="text-muted-foreground">Loading prayers...</p>
            </div>
          )}

          {/* Prayer Cards Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredPrayers.map((prayer, index) => {
                const category = categories.find(c => c.value === prayer.category);
                const isFromLeft = index % 2 === 0;
                return (
                  <Card 
                    key={prayer.id} 
                    className={`hover:shadow-lg transition-all duration-1000 flex flex-col hover-lift ${
                      isFromLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'
                    }`}
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#A92FFA]/20 to-[#F28C28]/20 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{prayer.isAnonymous ? "Anonymous" : prayer.name || "Anonymous"}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {new Date(prayer.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Badge className={category?.color}>{category?.label}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {prayer.prayerRequest}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Heart className="w-4 h-4" fill="currentColor" />
                          <span>{prayer.prayerCount} prayers</span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handlePrayFor(prayer.id, prayer.prayerCount)}
                          className="gap-2 hover:bg-[#A92FFA] hover:text-white hover:border-[#A92FFA]"
                        >
                          <Heart className="w-4 h-4" />
                          Pray
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* No Results */}
          {!loading && filteredPrayers.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No prayers found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Info Cards */}
          <div 
            ref={infoRef}
            className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 to-[#A92FFA]/5 hover-lift">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-[#A92FFA] mb-3" />
                <CardTitle>The Power of Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven." - Matthew 18:19
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#F28C28]/10 to-[#F28C28]/5 hover-lift">
              <CardHeader>
                <Users className="w-10 h-10 text-[#F28C28] mb-3" />
                <CardTitle>Pray Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join our community in lifting up prayers for those in need. Your prayers make a difference and bring hope to those who are struggling.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#A92FFA]/10 via-[#F28C28]/10 to-accent/5 hover-lift">
              <CardHeader>
                <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
                <CardTitle>Share Testimonies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Have you seen prayers answered? Share your testimony to encourage others and glorify God's faithfulness in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          background: `linear-gradient(135deg, rgba(169, 47, 250, 0.1) 0%, rgba(242, 140, 40, 0.1) 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#A92FFA] to-[#F28C28] text-white hover-glow">
            <CardContent className="pt-8">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4" fill="currentColor" />
                <h2 className="text-3xl font-bold mb-4">Need Prayer Support?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Don't face your challenges alone. Our pastoral team is available 24/7 for confidential prayer support and spiritual guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" className="bg-white text-[#A92FFA] hover:bg-white/90 border-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Pastoral Team
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-[#F28C28] hover:bg-white/90 border-white" onClick={() => setShowSubmitForm(true)}>
                    <Plus className="w-5 h-5 mr-2" />
                    Submit Prayer Request
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      
      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </div>
  );
}