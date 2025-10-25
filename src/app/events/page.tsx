"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, Clock, Users, CalendarDays, ChevronLeft, ChevronRight, User, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

interface Event {
  id: number;
  title: string;
  description: string;
  eventType: string;
  startDate: string;
  endDate: string;
  location: string;
  maxAttendees: number | null;
  requiresAuth: boolean;
  imageUrl: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [eventDetailOpen, setEventDetailOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    notes: "",
    isMember: false,
  });

  const eventTypes = [
    { value: "all", label: "All Events", color: "bg-gray-100 text-gray-800" },
    { value: "workshop", label: "Workshops", color: "bg-blue-100 text-blue-800" },
    { value: "service", label: "Services", color: "bg-purple-100 text-purple-800" },
    { value: "outreach", label: "Outreach", color: "bg-green-100 text-green-800" },
    { value: "meeting", label: "Meetings", color: "bg-orange-100 text-orange-800" },
  ];

  useEffect(() => {
    fetchEvents();
  }, [selectedType]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedType !== "all") {
        params.append("event_type", selectedType);
      }
      
      const response = await fetch(`/api/events?${params}`);
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const handleDayClick = (day: number) => {
    const dayEvents = getEventsForDay(day);
    if (dayEvents.length === 1) {
      setSelectedEvent(dayEvents[0]);
      setEventDetailOpen(true);
    } else if (dayEvents.length > 1) {
      // Show first event and let user browse
      setSelectedEvent(dayEvents[0]);
      setEventDetailOpen(true);
    }
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setEventDetailOpen(true);
  };

  const handleRegisterClick = () => {
    if (selectedEvent?.requiresAuth) {
      toast.error("This workshop requires authentication. Please log in to register.");
      return;
    }
    setEventDetailOpen(false);
    setRegistrationOpen(true);
  };

  const submitRegistration = async () => {
    if (!selectedEvent) return;

    if (!registrationData.userName || !registrationData.userEmail) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch("/api/event-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: selectedEvent.id,
          userName: registrationData.userName,
          userEmail: registrationData.userEmail,
          userPhone: registrationData.userPhone,
          notes: registrationData.notes,
          isMember: registrationData.isMember,
        }),
      });

      if (response.ok) {
        toast.success(registrationData.isMember 
          ? "Successfully registered as a ministry member!" 
          : "Successfully registered for event!");
        setRegistrationOpen(false);
        setRegistrationData({ userName: "", userEmail: "", userPhone: "", notes: "", isMember: false });
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to register");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Failed to register for event");
    }
  };

  const getEventTypeColor = (type: string) => {
    const typeObj = eventTypes.find(t => t.value === type);
    return typeObj?.color || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.startDate);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentMonth.getMonth() &&
        eventDate.getFullYear() === currentMonth.getFullYear()
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#A92FFA]/10 to-[#F28C28]/10 fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-[#A92FFA]">Events Calendar</Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Upcoming Events & Workshops
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for transformational workshops, worship services, community outreach, and more. Register today to secure your spot!
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 flex-wrap justify-center">
            {eventTypes.map((type) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                onClick={() => setSelectedType(type.value)}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-7xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">
                  {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={previousMonth}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Day headers */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center font-semibold text-sm py-2">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {getDaysInMonth().map((day, index) => {
                  const dayEvents = day ? getEventsForDay(day) : [];
                  return (
                    <div
                      key={index}
                      className={`min-h-24 p-2 border ${
                        day ? "bg-background hover:bg-muted cursor-pointer transition-colors" : "bg-muted/50"
                      }`}
                      onClick={() => day && dayEvents.length > 0 && handleDayClick(day)}
                      style={{ borderRadius: '8px' }}
                    >
                      {day && (
                        <>
                          <div className="font-semibold text-sm mb-1">{day}</div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event) => (
                              <div
                                key={event.id}
                                className={`text-xs p-1 ${getEventTypeColor(event.eventType)}`}
                                style={{ borderRadius: '4px' }}
                              >
                                {event.title.slice(0, 20)}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">All Upcoming Events</h2>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="w-full h-48 bg-muted" style={{ borderRadius: '53px 53px 0 0' }} />
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-1/3 mb-2" />
                    <div className="h-6 bg-muted rounded w-full" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-16">
              <CalendarDays className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No events found</h3>
              <p className="text-muted-foreground">Check back soon for upcoming events</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card 
                  key={event.id} 
                  className="hover-lift overflow-hidden cursor-pointer"
                  onClick={() => handleEventClick(event)}
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getEventTypeColor(event.eventType)}>
                        {event.eventType}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <span>{formatDate(event.startDate)}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                      <span>
                        {formatTime(event.startDate)}
                        {event.endDate && ` - ${formatTime(event.endDate)}`}
                      </span>
                    </div>
                    {event.location && (
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                        <span className="line-clamp-2">{event.location}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Detail Dialog */}
      <Dialog open={eventDetailOpen} onOpenChange={setEventDetailOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedEvent?.title}</DialogTitle>
            <div className="flex gap-2 mt-2">
              <Badge className={getEventTypeColor(selectedEvent?.eventType || "")}>
                {selectedEvent?.eventType}
              </Badge>
            </div>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-4">
              {selectedEvent.imageUrl && (
                <div className="relative w-full h-64">
                  <Image
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              )}
              
              <p className="text-muted-foreground">{selectedEvent.description}</p>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="text-sm text-muted-foreground">{formatDate(selectedEvent.startDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Time</p>
                    <p className="text-sm text-muted-foreground">
                      {formatTime(selectedEvent.startDate)}
                      {selectedEvent.endDate && ` - ${formatTime(selectedEvent.endDate)}`}
                    </p>
                  </div>
                </div>
                
                {selectedEvent.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">{selectedEvent.location}</p>
                    </div>
                  </div>
                )}
                
                {selectedEvent.maxAttendees && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Capacity</p>
                      <p className="text-sm text-muted-foreground">Maximum {selectedEvent.maxAttendees} attendees</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setEventDetailOpen(false)} className="flex-1">
                  Close
                </Button>
                <Button onClick={handleRegisterClick} className="flex-1">
                  {selectedEvent.requiresAuth ? "Login to Register" : "Register Now"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Registration Dialog */}
      <Dialog open={registrationOpen} onOpenChange={setRegistrationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for Event</DialogTitle>
            <DialogDescription>
              {selectedEvent?.title}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="userName">Full Name *</Label>
              <Input
                id="userName"
                value={registrationData.userName}
                onChange={(e) => setRegistrationData({ ...registrationData, userName: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="userEmail">Email *</Label>
              <Input
                id="userEmail"
                type="email"
                value={registrationData.userEmail}
                onChange={(e) => setRegistrationData({ ...registrationData, userEmail: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="userPhone">Phone Number</Label>
              <Input
                id="userPhone"
                type="tel"
                value={registrationData.userPhone}
                onChange={(e) => setRegistrationData({ ...registrationData, userPhone: e.target.value })}
                placeholder="(555) 555-5555"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Input
                id="notes"
                value={registrationData.notes}
                onChange={(e) => setRegistrationData({ ...registrationData, notes: e.target.value })}
                placeholder="Any special requests or questions"
              />
            </div>
            
            <div className="flex items-center space-x-2 p-4 bg-muted/50" style={{ borderRadius: '8px' }}>
              <input
                type="checkbox"
                id="isMember"
                checked={registrationData.isMember}
                onChange={(e) => setRegistrationData({ ...registrationData, isMember: e.target.checked })}
                className="w-4 h-4"
              />
              <Label htmlFor="isMember" className="text-sm font-normal cursor-pointer">
                Register as a UCon Ministries Member (Access to role-specific features like posting testimonials)
              </Label>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setRegistrationOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={submitRegistration} className="flex-1">
              Complete Registration
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}