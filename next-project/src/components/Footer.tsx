import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white border-t border-[#3b82f6]/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-circuit opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl text-[#fbbf24]">✦</span>
              <span className="text-xl tracking-wide">iptours.lk</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Discover Sri Lanka's finest destinations with personalized luxury tours designed for unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-[#fbbf24]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/tours" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#fbbf24] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 text-[#fbbf24]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-[#fbbf24] flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#fbbf24] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#fbbf24] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@iptours.lk</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg mb-4 text-[#fbbf24]">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0a1628] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0a1628] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center hover:bg-[#fbbf24] hover:text-[#0a1628] transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3b82f6]/20 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 iptours.lk. All rights reserved. Crafted with excellence.</p>
        </div>
      </div>
    </footer>
  );
}