import { useState } from "react";
import { Search, Star, SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const allTours = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1762828982592-83f49c77e4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZSUyMGFzaWF8ZW58MXx8fHwxNzYyOTQzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cultural Heritage Tour",
    description: "Explore ancient temples, historical sites, and UNESCO World Heritage locations across Sri Lanka's cultural triangle.",
    price: "$1,299",
    duration: "7 Days",
    rating: 4.9,
    category: "Culture",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMHNhZmFyaSUyMGVsZXBoYW50fGVufDF8fHx8MTc2Mjk2MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Wildlife Safari Adventure",
    description: "Encounter majestic elephants, leopards, and diverse wildlife in Sri Lanka's pristine national parks.",
    price: "$1,499",
    duration: "6 Days",
    rating: 5.0,
    category: "Adventure",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1729708790927-d14be7384d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjI4OTI3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Beach Paradise Retreat",
    description: "Relax on pristine beaches with luxury accommodations, water sports, and spa experiences.",
    price: "$1,799",
    duration: "5 Days",
    rating: 4.8,
    category: "Beach",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjI5NTgzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Highland Adventure Trek",
    description: "Trek through misty mountains, tea plantations, and scenic hiking trails in the hill country.",
    price: "$1,199",
    duration: "8 Days",
    rating: 4.7,
    category: "Adventure",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1662244461851-d939997f6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbnMlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc2Mjk2MTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Ancient Kingdoms Discovery",
    description: "Journey through time visiting ancient ruins, royal palaces, and archaeological wonders.",
    price: "$1,399",
    duration: "7 Days",
    rating: 4.9,
    category: "Culture",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1611005912395-9101190c0b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHdhdGVyZmFsbCUyMG5hdHVyZXxlbnwxfHx8fDE3NjI4NTU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Waterfall & Nature Escape",
    description: "Discover hidden waterfalls, lush rainforests, and breathtaking natural landscapes.",
    price: "$999",
    duration: "4 Days",
    rating: 4.6,
    category: "Adventure",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1553337787-17961c0990db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwxfHx8fDE3NjI5NjEzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Tea Country Experience",
    description: "Explore emerald tea plantations, colonial heritage, and scenic train journeys.",
    price: "$1,099",
    duration: "5 Days",
    rating: 4.8,
    category: "Culture",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1761590138176-7e2aeeb117c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBjb3VwbGV8ZW58MXx8fHwxNzYyOTU0MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Grand Tour",
    description: "The ultimate Sri Lankan experience with 5-star accommodations and exclusive experiences.",
    price: "$3,499",
    duration: "14 Days",
    rating: 5.0,
    category: "Luxury",
  },
];

export function TourPackages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("all");

  const filteredTours = allTours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || tour.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#0a1628] min-h-screen">
      {/* Page Header */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1643883276945-ca185200c7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjI5NjEzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#1e3a8a]/90 to-[#0a1628]/95" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl mb-2">Tour Packages</h1>
            <p className="text-lg text-gray-200">Discover your perfect Sri Lankan adventure</p>
          </div>
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className="bg-[#132640] shadow-lg border-b border-[#3b82f6]/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 bg-[#0a1628] border-[#3b82f6]/30 text-white placeholder:text-gray-500"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-40 h-10 bg-[#0a1628] border-[#3b82f6]/30 text-white">
                <SlidersHorizontal size={16} className="mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Culture">Culture</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Beach">Beach</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="w-full md:w-40 h-10 bg-[#0a1628] border-[#3b82f6]/30 text-white">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Duration</SelectItem>
                <SelectItem value="short">1-5 Days</SelectItem>
                <SelectItem value="medium">6-10 Days</SelectItem>
                <SelectItem value="long">11+ Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Tour Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-[#132640] border-[#3b82f6]/20">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#fbbf24] text-[#0a1628] px-2 py-1 rounded-full text-xs">
                  {tour.duration}
                </div>
                <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white px-2 py-1 rounded-full text-xs">
                  {tour.category}
                </div>
              </div>
              <div className="p-5">
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
                  <Button size="sm" className="bg-[#1e3a8a] hover:bg-[#3b82f6] text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <div className="flex gap-2">
            <Button variant="outline" className="w-9 h-9 bg-[#132640] border-[#3b82f6]/30 text-white hover:bg-[#1e3a8a]">1</Button>
            <Button variant="outline" className="w-9 h-9 bg-[#132640] border-[#3b82f6]/30 text-white hover:bg-[#1e3a8a]">2</Button>
            <Button variant="outline" className="w-9 h-9 bg-[#132640] border-[#3b82f6]/30 text-white hover:bg-[#1e3a8a]">3</Button>
            <Button variant="outline" className="w-9 h-9 bg-[#132640] border-[#3b82f6]/30 text-white hover:bg-[#1e3a8a]">...</Button>
            <Button variant="outline" className="w-9 h-9 bg-[#132640] border-[#3b82f6]/30 text-white hover:bg-[#1e3a8a]">8</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
