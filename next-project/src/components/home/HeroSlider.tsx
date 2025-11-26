import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const slides = [
  {
    image: "./Assets/page-hero-section-background.jpg",
    title: "Explore Sri Lanka's Wonders",
    subtitle: "Discover ancient temples, pristine beaches, and lush landscapes",
  },
  {
    image: "https://images.unsplash.com/photo-1729708790927-d14be7384d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjI4OTI3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Beach Escapes",
    subtitle: "Experience world-class resorts along golden shores",
  },
  {
    image: "https://images.unsplash.com/photo-1553337787-17961c0990db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwxfHx8fDE3NjI5NjEzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Highland Tea Trails",
    subtitle: "Journey through emerald tea plantations and misty hills",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#1e3a8a]/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl mb-4 tracking-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a1628] px-8"
                  >
                    View Tours
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1e3a8a]/80 backdrop-blur-sm hover:bg-[#fbbf24] transition-all flex items-center justify-center text-white hover:text-[#0a1628]"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1e3a8a]/80 backdrop-blur-sm hover:bg-[#fbbf24] transition-all flex items-center justify-center text-white hover:text-[#0a1628]"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-[#fbbf24] w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}