import { Quote } from "lucide-react";
import { Card } from "../ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "United Kingdom",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "An absolutely magical experience! The attention to detail and personalized service exceeded all expectations. Every moment was carefully curated.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "The wildlife safari was extraordinary. Our guide's knowledge and passion brought the experience to life. Highly recommend iptours.lk!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Spain",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    quote: "From ancient temples to pristine beaches, this tour showcased the best of Sri Lanka. Professional, friendly, and unforgettable.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-[#1e3a8a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-waves"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl mb-3 text-white">What Our Guests Say</h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Real experiences from travelers who've discovered Sri Lanka with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 bg-[#132640]/80 backdrop-blur-sm border-[#3b82f6]/30 hover:bg-[#132640] transition-colors duration-300">
              <Quote size={36} className="text-[#fbbf24] mb-4" />
              <p className="text-white mb-4 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-300">{testimonial.location}</p>
                  <p className="text-xs text-[#fbbf24]">{testimonial.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
