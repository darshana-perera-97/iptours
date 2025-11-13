// Blog page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
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
    let selectedCategory = "All";
    let searchQuery = "";

    const blogPostsContainer = document.getElementById('blog-posts');
    const categoriesContainer = document.getElementById('categories');
    const recentPostsContainer = document.getElementById('recent-posts');
    const tagsContainer = document.getElementById('tags');
    const blogSearch = document.getElementById('blog-search');
    const blogNewsletterForm = document.getElementById('blog-newsletter-form');

    function filterPosts() {
        const filtered = blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        renderPosts(filtered);
    }

    function renderPosts(posts) {
        blogPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300';
            postCard.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="square-image overflow-hidden">
                        <img src="${post.image}" alt="${post.title}" class="img-hover">
                    </div>
                    <div class="md:col-span-2 p-6">
                        <div class="flex items-center gap-4 mb-3">
                            <span class="bg-[#1e3a8a] text-white px-3 py-1 rounded-full text-xs">${post.category}</span>
                            <span class="text-sm text-gray-500">${post.readTime}</span>
                        </div>
                        <h3 class="text-2xl mb-3 text-[#1e40af] group-hover:text-[#1e3a8a] transition-colors font-semibold">${post.title}</h3>
                        <p class="text-gray-600 mb-4 line-clamp-3">${post.excerpt}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4 text-sm text-gray-500">
                                <div class="flex items-center gap-1">
                                    <i data-lucide="user" class="w-4 h-4"></i>
                                    <span>${post.author}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <i data-lucide="calendar" class="w-4 h-4"></i>
                                    <span>${post.date}</span>
                                </div>
                            </div>
                            <a href="blog-post.html" class="text-[#1e40af] hover:text-[#1e3a8a] flex items-center gap-2 transition-colors font-medium">
                                Read More
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            blogPostsContainer.appendChild(postCard);
        });
        lucide.createIcons();
    }

    // Render categories
    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = `w-full text-left px-4 py-2 rounded transition-colors ${
            selectedCategory === category
                ? "bg-[#1e40af] text-white"
                : "hover:bg-gray-100 text-gray-700"
        }`;
        categoryBtn.textContent = category;
        categoryBtn.addEventListener('click', () => {
            selectedCategory = category;
            filterPosts();
            // Re-render categories to update active state
            categoriesContainer.innerHTML = '';
            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = `w-full text-left px-4 py-2 rounded transition-colors ${
                    selectedCategory === cat
                        ? "bg-[#1e40af] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                }`;
                btn.textContent = cat;
                btn.addEventListener('click', () => {
                    selectedCategory = cat;
                    filterPosts();
                    categoriesContainer.innerHTML = '';
                    categories.forEach(c => {
                        const b = document.createElement('button');
                        b.className = `w-full text-left px-4 py-2 rounded transition-colors ${
                            selectedCategory === c
                                ? "bg-[#1e40af] text-white"
                                : "hover:bg-gray-100 text-gray-700"
                        }`;
                        b.textContent = c;
                        b.addEventListener('click', () => {
                            selectedCategory = c;
                            filterPosts();
                            location.reload();
                        });
                        categoriesContainer.appendChild(b);
                    });
                });
                categoriesContainer.appendChild(btn);
            });
        });
        categoriesContainer.appendChild(categoryBtn);
    });

    // Render recent posts
    const recentPosts = blogPosts.slice(0, 3);
    recentPosts.forEach(post => {
        const recentPost = document.createElement('div');
        recentPost.className = 'group cursor-pointer';
        recentPost.innerHTML = `
            <h4 class="text-sm mb-1 group-hover:text-[#1e40af] transition-colors">${post.title}</h4>
            <p class="text-xs text-gray-500">${post.date}</p>
        `;
        recentPostsContainer.appendChild(recentPost);
    });

    // Render tags
    const tags = ["Adventure", "Beaches", "Culture", "Food", "Wildlife", "Temples", "Tea", "Safari"];
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'px-3 py-1 border border-gray-300 rounded-full text-sm cursor-pointer hover:bg-[#1e40af] hover:text-white hover:border-[#1e40af] transition-colors';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // Search functionality
    blogSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterPosts();
    });

    // Newsletter form
    if (blogNewsletterForm) {
        blogNewsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = blogNewsletterForm.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing!');
            blogNewsletterForm.querySelector('input[type="email"]').value = '';
        });
    }

    // Initial render
    filterPosts();
});

