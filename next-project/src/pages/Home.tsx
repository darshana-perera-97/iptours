import { HeroSlider } from "../components/home/HeroSlider";
import { FeaturedTours } from "../components/home/FeaturedTours";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Testimonials } from "../components/home/Testimonials";
import { Newsletter } from "../components/home/Newsletter";

export function Home() {
  return (
    <div>
      <HeroSlider />
      
      {/* Introduction Section */}
      <section className="py-12 bg-[#132640] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-4">
            <span className="text-[#fbbf24] text-4xl">✦</span>
          </div>
          <h2 className="text-3xl mb-4 text-[#e8edf5]">
            Welcome to iptours.lk
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            We are Sri Lanka's premier luxury tour operator, dedicated to crafting personalized journeys 
            that unveil the island's rich tapestry of culture, nature, and adventure. With decades of 
            expertise and a passion for excellence, we transform your travel dreams into unforgettable 
            memories. Every itinerary is thoughtfully designed to showcase the authentic beauty and 
            warmth of Sri Lanka, ensuring you experience the extraordinary.
          </p>
        </div>
      </section>

      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
