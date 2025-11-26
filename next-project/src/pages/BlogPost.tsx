import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function BlogPost() {
  return (
    <div>
      {/* Header */}
      <div className="bg-white border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a href="/blog" className="hover:text-[#1a4d2e]">Blog</a>
            <span>/</span>
            <span className="text-[#1a4d2e]">10 Hidden Gems in Sri Lanka</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2d2d2d]">
            10 Hidden Gems in Sri Lanka You Must Visit
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Amara Silva</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>November 8, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-12">
          <img
            src="./Assets/page-hero-section-background.jpg"
            alt="Sri Lanka landscape"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Share Buttons */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-border">
          <span className="text-gray-600">Share this article:</span>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-[#1a4d2e] hover:bg-[#c9a961] text-white flex items-center justify-center transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a4d2e] hover:bg-[#c9a961] text-white flex items-center justify-center transition-colors">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a4d2e] hover:bg-[#c9a961] text-white flex items-center justify-center transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a4d2e] hover:bg-[#c9a961] text-white flex items-center justify-center transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Sri Lanka is renowned for its popular attractions like Sigiriya Rock and the beaches of Mirissa, 
            but the island holds countless hidden treasures waiting to be discovered. These lesser-known 
            destinations offer authentic experiences away from the tourist crowds.
          </p>

          <h2 className="text-3xl mb-4 mt-12 text-[#1a4d2e]">1. Ella Rock: A Hiker's Paradise</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            While Ella has gained popularity in recent years, the trek to Ella Rock remains relatively 
            untouched. This challenging hike rewards adventurers with breathtaking panoramic views of the 
            hill country, tea plantations stretching to the horizon, and pristine wilderness.
          </p>

          <div className="relative h-80 rounded-lg overflow-hidden my-8">
            <img
              src="https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjI5NTgzODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mountain hiking"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl mb-4 mt-12 text-[#1a4d2e]">2. Tangalle: Secluded Beach Bliss</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This southern coastal town offers pristine beaches without the crowds. Tangalle's quiet shores 
            are perfect for those seeking relaxation, with turquoise waters, golden sands, and stunning 
            sunset views. The area is also known for sea turtle conservation efforts.
          </p>

          <blockquote className="border-l-4 border-[#c9a961] pl-6 my-8 italic text-xl text-gray-700">
            "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." 
            - Marcel Proust
          </blockquote>

          <h2 className="text-3xl mb-4 mt-12 text-[#1a4d2e]">3. Dambulla Cave Temple Complex</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Often overshadowed by more famous sites, Dambulla's cave temples house an incredible collection 
            of ancient Buddhist art and statues. The five caves contain over 150 Buddha images, with murals 
            covering an area of 2,100 square meters, creating one of the most impressive religious sites in 
            Asia.
          </p>

          <div className="relative h-80 rounded-lg overflow-hidden my-8">
            <img
              src="https://images.unsplash.com/photo-1762828982592-83f49c77e4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZSUyMGFzaWF8ZW58MXx8fHwxNzYyOTQzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Temple"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl mb-4 mt-12 text-[#1a4d2e]">Planning Your Visit</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The best time to explore these hidden gems is during the shoulder seasons (April-May and 
            September-October) when the weather is pleasant and tourist numbers are lower. Consider hiring 
            a local guide who can provide insights into the cultural and historical significance of each 
            location.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether you're seeking adventure, cultural immersion, or peaceful solitude, Sri Lanka's hidden 
            gems offer experiences that will create lasting memories. At iptours.lk, we specialize in 
            crafting personalized itineraries that include both famous landmarks and these secret treasures.
          </p>
        </article>

        {/* Author Bio */}
        <Card className="p-8 my-12 bg-gray-50">
          <div className="flex items-start gap-6">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
              alt="Amara Silva"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl mb-2 text-[#1a4d2e]">Amara Silva</h3>
              <p className="text-gray-600 mb-4">
                Amara is our Head of Operations with over 15 years of experience in luxury tourism. 
                She's passionate about showcasing Sri Lanka's hidden treasures and creating unforgettable 
                experiences for our guests.
              </p>
              <div className="flex gap-3">
                <button className="text-[#1a4d2e] hover:text-[#c9a961] transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="text-[#1a4d2e] hover:text-[#c9a961] transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-2xl mb-6 text-[#2d2d2d] flex items-center gap-2">
            <MessageCircle size={24} />
            Comments (3)
          </h3>

          {/* Existing Comments */}
          <div className="space-y-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
                  alt="Commenter"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#1a4d2e]">Sarah Thompson</span>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    This is exactly the kind of information I was looking for! Can't wait to explore these 
                    hidden gems on my upcoming trip.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                  alt="Commenter"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#1a4d2e]">Michael Chen</span>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Tangalle is absolutely stunning! I visited last month and it exceeded all expectations. 
                    The beaches are pristine and peaceful.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Comment Form */}
          <Card className="p-6">
            <h4 className="text-xl mb-4 text-[#2d2d2d]">Leave a Comment</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Textarea placeholder="Your Comment" rows={5} />
              <Button className="bg-[#1a4d2e] hover:bg-[#164022] text-white">
                Post Comment
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
