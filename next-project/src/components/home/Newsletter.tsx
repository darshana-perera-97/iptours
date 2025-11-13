import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-12 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-circuit opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fbbf24] mb-4">
          <Mail size={28} className="text-[#0a1628]" />
        </div>
        <h2 className="text-3xl mb-3 text-white">Stay Inspired</h2>
        <p className="text-base text-gray-200 mb-6 max-w-2xl mx-auto">
          Subscribe to receive exclusive offers, travel tips, and insider insights about Sri Lanka's hidden gems.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-11 px-4 bg-white/10 border-white/30 text-white placeholder:text-gray-300"
          />
          <Button
            type="submit"
            size="lg"
            className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a1628] px-6 h-11"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-gray-300 mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
