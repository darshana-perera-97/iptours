import { Award, Target, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const team = [
  {
    name: "Rajesh Fernando",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "25+ years of experience in luxury tourism",
  },
  {
    name: "Amara Silva",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    bio: "Expert in customer experience and tour logistics",
  },
  {
    name: "Kumar Perera",
    role: "Chief Guide",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    bio: "Certified wildlife and cultural heritage specialist",
  },
  {
    name: "Nisha Jayawardena",
    role: "Travel Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    bio: "Creates bespoke itineraries tailored to your dreams",
  },
];

const awards = [
  {
    icon: Award,
    title: "Best Tour Operator 2024",
    description: "Sri Lanka Tourism Awards",
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "Asia Travel Association",
  },
  {
    icon: Heart,
    title: "Sustainable Tourism",
    description: "Green Travel Initiative",
  },
];

export function AboutUs() {
  return (
    <div className="bg-[#0a1628]">
      {/* Banner */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1643883276945-ca185200c7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjI5NjEzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 to-[#1e3a8a]/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl mb-2">About Us</h1>
            <p className="text-lg text-gray-200">Crafting unforgettable journeys since 1999</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-12 bg-[#132640] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-[#fbbf24] text-4xl">✦</span>
            </div>
            <h2 className="text-3xl mb-4 text-[#e8edf5]">Our Mission</h2>
            <p className="text-base text-gray-400 leading-relaxed">
              To reveal the soul of Sri Lanka through exceptional, personalized experiences that honor 
              local culture, protect natural heritage, and create lasting memories for discerning travelers 
              worldwide. We believe in responsible tourism that enriches both our guests and the communities 
              we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl mb-4 text-[#e8edf5]">Our Story</h2>
              <div className="space-y-3 text-gray-400 leading-relaxed text-sm">
                <p>
                  Founded in 1999 by Rajesh Fernando, iptours.lk began with a simple vision: to share 
                  the extraordinary beauty of Sri Lanka with the world in a way that respects both nature 
                  and culture.
                </p>
                <p>
                  What started as a small family operation has grown into one of Sri Lanka's most 
                  respected luxury tour operators. Our success is built on genuine passion, deep local 
                  knowledge, and an unwavering commitment to excellence.
                </p>
                <p>
                  Today, we're proud to have welcomed guests from over 60 countries, earning recognition 
                  for our innovative itineraries, exceptional service, and dedication to sustainable 
                  tourism practices.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYyOTE0NTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-[#132640] relative overflow-hidden">
        <div className="absolute inset-0 pattern-circuit opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl mb-3 text-[#e8edf5]">Meet Our Team</h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Passionate experts dedicated to making your Sri Lankan journey extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-[#0a1628] border-[#3b82f6]/20">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg mb-1 text-[#e8edf5]">{member.name}</h3>
                  <p className="text-[#fbbf24] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-12 bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl mb-3 text-white">Awards & Recognition</h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Honored for our commitment to excellence and sustainable tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card key={index} className="p-6 text-center bg-[#132640]/80 backdrop-blur-sm border-[#3b82f6]/30">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fbbf24] mb-4">
                    <Icon size={28} className="text-[#0a1628]" />
                  </div>
                  <h3 className="text-lg mb-2 text-white">{award.title}</h3>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl mb-4 text-[#e8edf5]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base text-gray-400 mb-6 max-w-2xl mx-auto">
            Let our team of experts craft a personalized Sri Lankan adventure that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a1628] px-8"
              onClick={() => window.location.href = "/tours"}
            >
              View Tour Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#3b82f6] text-[#e8edf5] hover:bg-[#1e3a8a] px-8"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
