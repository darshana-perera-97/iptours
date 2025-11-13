import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#132640] border-b border-[#3b82f6]/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl text-[#fbbf24]">✦</span>
            <span className="text-xl text-[#e8edf5] tracking-wide">iptours.lk</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
              Home
            </a>
            <a href="/tours" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
              Tour Packages
            </a>
            <a href="/about" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
              About Us
            </a>
            <a href="/blog" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
              Contact
            </a>
            <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a1628] px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#1e3a8a]/30 transition-colors text-[#e8edf5]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#3b82f6]/20">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
                Home
              </a>
              <a href="/tours" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
                Tour Packages
              </a>
              <a href="/about" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
                About Us
              </a>
              <a href="/blog" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-[#e8edf5] hover:text-[#fbbf24] transition-colors">
                Contact
              </a>
              <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0a1628] w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}