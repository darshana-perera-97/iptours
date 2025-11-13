import { useState } from "react";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Sri Lanka You Must Visit",
    excerpt: "Discover the lesser-known treasures of Sri Lanka that offer authentic experiences away from the tourist crowds. From secluded beaches to ancient caves...",
    author: "Amara Silva",
    date: "November 8, 2024",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1643883276945-ca185200c7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjI5NjEzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sri Lankan Cuisine",
    excerpt: "Embark on a culinary journey through Sri Lanka's diverse flavors, from fiery curries to sweet treats. Learn about traditional dishes and where to find...",
    author: "Kumar Perera",
    date: "November 5, 2024",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1080&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Best Time to Visit Sri Lanka: A Seasonal Guide",
    excerpt: "Planning your Sri Lankan adventure? Understand the island's seasons, monsoons, and ideal travel times for different regions to make the most of your visit...",
    author: "Nisha Jayawardena",
    date: "November 1, 2024",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1553337787-17961c0990db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9uJTIwZ3JlZW4lMjBoaWxsc3xlbnwxfHx8fDE3NjI5NjEzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Wildlife Encounters: Safari Tips for Sri Lanka",
    excerpt: "Get the most out of your wildlife safari with expert tips on spotting leopards, elephants, and exotic birds in Sri Lanka's stunning national parks...",
    author: "Kumar Perera",
    date: "October 28, 2024",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMHNhZmFyaSUyMGVsZXBoYW50fGVufDF8fHx8MTc2Mjk2MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Ancient Temples and Sacred Sites of Sri Lanka",
    excerpt: "Explore the spiritual heart of Sri Lanka through its magnificent temples, ancient stupas, and sacred sites that have inspired pilgrims for millennia...",
    author: "Rajesh Fernando",
    date: "October 25, 2024",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1762828982592-83f49c77e4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZSUyMGFzaWF8ZW58MXx8fHwxNzYyOTQzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Sustainable Travel: Our Commitment to Sri Lanka",
    excerpt: "Learn about our sustainable tourism practices and how you can travel responsibly while experiencing the best of Sri Lanka's natural and cultural heritage...",
    author: "Amara Silva",
    date: "October 20, 2024",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1611005912395-9101190c0b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHdhdGVyZmFsbCUyMG5hdHVyZXxlbnwxfHx8fDE3NjI4NTU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    readTime: "6 min read",
  },
];

const categories = ["All", "Travel Tips", "Culture", "Planning", "Wildlife", "Sustainability"];
const recentPosts = blogPosts.slice(0, 3);

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Page Header */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1643883276945-ca185200c7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHNjZW5pYyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjI5NjEzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">Travel Blog</h1>
            <p className="text-xl text-gray-200">Stories, tips, and insights from Sri Lanka</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge className="bg-[#c9a961] text-white hover:bg-[#b89750]">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl mb-3 text-[#1a4d2e] group-hover:text-[#c9a961] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-[#1a4d2e] hover:text-[#c9a961]"
                          onClick={() => window.location.href = `/blog/${post.id}`}
                        >
                          Read More
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" className="w-10 h-10">1</Button>
                <Button variant="outline" className="w-10 h-10">2</Button>
                <Button variant="outline" className="w-10 h-10">3</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="p-6">
              <h3 className="text-xl mb-4 text-[#1a4d2e]">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors ${
                      selectedCategory === category
                        ? "bg-[#1a4d2e] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Recent Posts */}
            <Card className="p-6">
              <h3 className="text-xl mb-4 text-[#1a4d2e]">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <h4 className="text-sm mb-1 group-hover:text-[#c9a961] transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6 bg-[#1a4d2e] text-white">
              <h3 className="text-xl mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get the latest travel tips and stories delivered to your inbox.
              </p>
              <Input
                type="email"
                placeholder="Your email"
                className="mb-3 bg-white/10 border-white/30 text-white placeholder:text-gray-300"
              />
              <Button className="w-full bg-[#c9a961] hover:bg-[#b89750] text-white">
                Subscribe
              </Button>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="text-xl mb-4 text-[#1a4d2e]">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Adventure", "Beaches", "Culture", "Food", "Wildlife", "Temples", "Tea", "Safari"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-[#1a4d2e] hover:text-white transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
