import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const tours = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1762828982592-83f49c77e4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZSUyMGFzaWF8ZW58MXx8fHwxNzYyOTQzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cultural Heritage Tour",
    description: "Explore ancient temples and UNESCO World Heritage sites across the cultural triangle.",
    price: "$1,299",
    duration: "7 Days",
    rating: 4.9,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMHNhZmFyaSUyMGVsZXBoYW50fGVufDF8fHx8MTc2Mjk2MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Wildlife Safari Adventure",
    description: "Encounter majestic elephants and leopards in their natural habitat at national parks.",
    price: "$1,499",
    duration: "6 Days",
    rating: 5.0,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1729708790927-d14be7384d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjI4OTI3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Beach Paradise Retreat",
    description: "Relax on pristine beaches with luxury accommodations and water sports activities.",
    price: "$1,799",
    duration: "5 Days",
    rating: 4.8,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjI5NTgzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Highland Adventure Trek",
    description: "Trek through misty mountains, tea plantations, and scenic hiking trails.",
    price: "$1,199",
    duration: "8 Days",
    rating: 4.7,
  },
];

export function FeaturedTours() {
  return (
    <section className="py-12 bg-[#0a1628] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots"></div>
      
      {/* Decorative Blob */}
      <div className="decorative-blob w-96 h-96 bg-[#1e3a8a] top-0 right-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl mb-3 text-[#e8edf5]">Featured Tours</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Discover our handpicked collection of extraordinary journeys through Sri Lanka's most captivating destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-[#132640] border-[#3b82f6]/20">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#fbbf24] text-[#0a1628] px-2 py-1 rounded-full text-xs">
                  {tour.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Star size={14} className="fill-[#fbbf24] text-[#fbbf24]" />
                  <span className="ml-1 text-xs text-gray-400">{tour.rating}</span>
                </div>
                <h3 className="text-lg mb-2 text-[#e8edf5]">{tour.title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl text-[#fbbf24]">{tour.price}</span>
                  <Button size="sm" className="bg-[#1e3a8a] hover:bg-[#3b82f6] text-white text-xs">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
