import { Award, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Guides",
    description: "Certified professionals with deep local knowledge and passion for Sri Lankan culture.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure your journey is smooth and worry-free.",
  },
  {
    icon: Users,
    title: "Customizable Tours",
    description: "Tailor every aspect of your trip to match your preferences and interests.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with comprehensive insurance and emergency protocols.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 bg-[#132640] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid"></div>
      
      {/* Decorative Blob */}
      <div className="decorative-blob w-80 h-80 bg-[#3b82f6] bottom-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl mb-3 text-[#e8edf5]">Why Choose Us</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            We deliver exceptional experiences through our commitment to excellence and attention to every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-[#0a1628]/50 border border-[#3b82f6]/20 hover:border-[#fbbf24]/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1e3a8a] mb-4">
                  <Icon size={28} className="text-[#fbbf24]" />
                </div>
                <h3 className="text-lg mb-2 text-[#e8edf5]">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
