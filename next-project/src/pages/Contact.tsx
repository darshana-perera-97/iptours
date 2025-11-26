import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/94112345678", "_blank");
  };

  return (
    <div>
      {/* Page Header */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(./Assets/page-hero-section-background.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200">We're here to help plan your perfect journey</p>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about our tours or need help planning your Sri Lankan adventure? Our team of 
            travel experts is ready to assist you. Reach out through any of the channels below, and we'll 
            respond promptly to ensure your journey is perfectly tailored to your dreams.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-3xl mb-6 text-[#2d2d2d]">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-gray-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Tour Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans and preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#c9a961] hover:bg-[#b89750] text-white h-12"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Business Info Card */}
            <Card className="p-6">
              <h3 className="text-xl mb-6 text-[#1a4d2e]">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a4d2e]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#1a4d2e]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Office Address</h4>
                    <p className="text-gray-600 text-sm">
                      123 Galle Road<br />
                      Colombo 03<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a4d2e]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#1a4d2e]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm">+94 11 234 5678</p>
                    <p className="text-gray-600 text-sm">+94 77 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a4d2e]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#1a4d2e]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm">info@iptours.lk</p>
                    <p className="text-gray-600 text-sm">bookings@iptours.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a4d2e]/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#1a4d2e]" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600 text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* WhatsApp Card */}
            <Card className="p-6 bg-[#25D366] text-white">
              <div className="text-center">
                <MessageCircle size={48} className="mx-auto mb-4" />
                <h3 className="text-xl mb-2">Chat with Us</h3>
                <p className="text-sm text-white/90 mb-4">
                  Get instant responses to your questions via WhatsApp
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-[#25D366] hover:bg-gray-100"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Start WhatsApp Chat
                </Button>
              </div>
            </Card>

            {/* Social Media Card */}
            <Card className="p-6 bg-[#1a4d2e] text-white">
              <h3 className="text-xl mb-4">Follow Us</h3>
              <p className="text-gray-300 text-sm mb-4">
                Stay connected for travel inspiration and exclusive offers
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#c9a961] flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#c9a961] flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#c9a961] flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.59277041241!2d79.77380469726563!3d6.927078599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0x9502ecbfdc9db82a!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
