// Shared JavaScript for IPTours.lk

// Set active nav link based on current page
function setActiveNavLink() {
    // Get current page filename
    let currentPage = window.location.pathname.split('/').pop();
    if (!currentPage || currentPage === '') {
        currentPage = 'index.html';
    }

    const navLinks = document.querySelectorAll('nav a[href]');

    navLinks.forEach(link => {
        if (link.classList.contains('nav-logo')) {
            link.classList.remove('active-nav-link');
            return;
        }
        const linkHref = link.getAttribute('href');
        let linkPage = linkHref.split('/').pop();

        // Handle root/home links
        if (linkHref === '/' || linkHref === 'index.html' || linkHref === './index.html') {
            linkPage = 'index.html';
        }

        // Remove active class from all links
        link.classList.remove('active-nav-link');

        // Add active class to current page link
        if (linkPage === currentPage) {
            link.classList.add('active-nav-link');
        }
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    // Set active nav link
    setActiveNavLink();

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('data-lucide', 'menu');
                } else {
                    icon.setAttribute('data-lucide', 'x');
                }
                lucide.createIcons();
            }
        });
    }

    // Hero Slider
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        let currentSlide = 0;
        const slides = heroSlider.querySelectorAll('[data-slide]');
        const dots = heroSlider.querySelectorAll('[data-dot]');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
            });
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-white/50', 'w-2');
                    dot.classList.add('bg-[#fbbf24]', 'w-8');
                } else {
                    dot.classList.remove('bg-[#fbbf24]', 'w-8');
                    dot.classList.add('bg-white/50', 'w-2');
                }
            });
            slides[index].classList.remove('opacity-0');
            slides[index].classList.add('opacity-100');
            currentSlide = index;
        }

        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide((currentSlide - 1 + totalSlides) % totalSlides);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide((currentSlide + 1) % totalSlides);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto-advance slides
        setInterval(() => {
            showSlide((currentSlide + 1) % totalSlides);
        }, 5000);
    }

    // Featured Tours Data
    const featuredTours = [
        {
            id: 1,
            image: "./Assets/culture-tour.jpg",
            title: "Cultural Heritage Tour",
            description: "Explore ancient temples and UNESCO World Heritage sites across the cultural triangle.",
            price: "$1,299",
            duration: "7 Days",
            rating: 4.9,
        },
        {
            id: 2,
            image: "./Assets/wild-tour.jpg",
            title: "Wildlife Safari Adventure",
            description: "Encounter majestic elephants and leopards in their natural habitat at national parks.",
            price: "$1,499",
            duration: "6 Days",
            rating: 5.0,
        },
        {
            id: 3,
            image: "./Assets/beach-tour.jpg",
            title: "Beach Paradise Retreat",
            description: "Relax on pristine beaches with luxury accommodations and water sports activities.",
            price: "$1,799",
            duration: "5 Days",
            rating: 4.8,
        },
        {
            id: 4,
            image: "./Assets/hike-tour.jpg",
            title: "Highland Adventure Trek",
            description: "Trek through misty mountains, tea plantations, and scenic hiking trails.",
            price: "$1,199",
            duration: "8 Days",
            rating: 4.7,
        },
    ];

    const featuredToursContainer = document.getElementById('featured-tours');
    if (featuredToursContainer) {
        featuredTours.slice(0, 6).forEach(tour => {
            const tourCard = document.createElement('div');
            tourCard.className = 'overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-lg card-hover';
            const cardId = `tour-card-${tour.id}`;
            tourCard.innerHTML = `
                <div class="relative h-48 overflow-hidden">
                    <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover img-hover">
                    <div class="absolute top-3 right-3 bg-[#fbbf24] text-[#0a1628] px-2 py-1 rounded-full text-xs">
                        ${tour.duration}
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center mb-2">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]"></i>
                        <span class="ml-1 text-xs text-gray-600">${tour.rating}</span>
                    </div>
                    <h3 class="text-lg mb-3 text-[#1e40af] font-semibold">${tour.title}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-12 leading-relaxed">${tour.description}</p>
                    <div class="flex items-center justify-end">
                        <a href="tours.html" class="bg-[#1e3a8a] hover:bg-[#3b82f6] text-white text-xs px-4 py-2 rounded-lg transition-colors inline-block">Learn More</a>
                    </div>
                </div>
            `;
            featuredToursContainer.appendChild(tourCard);
        });
        lucide.createIcons();
    }

    // Why Choose Us Features
    const features = [
        {
            icon: "award",
            title: "Experienced Guides",
            description: "Certified professionals with deep local knowledge and passion for Sri Lankan culture.",
        },
        {
            icon: "clock",
            title: "24/7 Support",
            description: "Round-the-clock assistance to ensure your journey is smooth and worry-free.",
        },
        {
            icon: "users",
            title: "Customizable Tours",
            description: "Tailor every aspect of your trip to match your preferences and interests.",
        },
        {
            icon: "shield",
            title: "Safe & Secure",
            description: "Your safety is our priority with comprehensive insurance and emergency protocols.",
        },
    ];

    const whyChooseUsContainer = document.getElementById('why-choose-us');
    if (whyChooseUsContainer) {
        features.forEach(feature => {
            const featureCard = document.createElement('div');
            featureCard.className = 'text-center p-6 rounded-lg bg-[#1e3a8a]/30 border-2 border-[#3b82f6]/40 hover:border-[#fbbf24] hover:bg-[#1e3a8a]/50 transition-all duration-300 hover:shadow-lg';
            featureCard.innerHTML = `
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fbbf24] mb-4 shadow-md">
                    <i data-lucide="${feature.icon}" class="w-7 h-7 text-[#0a1628]"></i>
                </div>
                <h3 class="text-lg mb-2 text-[#e8edf5] font-semibold">${feature.title}</h3>
                <p class="text-gray-300 text-sm leading-relaxed">${feature.description}</p>
            `;
            whyChooseUsContainer.appendChild(featureCard);
        });
        lucide.createIcons();
    }

    // Testimonials
    const testimonials = [
        {
            id: 1,
            name: "Sarah Thompson",
            location: "United Kingdom",
            date: "October 2024",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            quote: "An absolutely magical experience! The attention to detail and personalized service exceeded all expectations. Every moment was carefully curated.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Chen",
            location: "Singapore",
            date: "September 2024",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            quote: "The wildlife safari was extraordinary. Our guide's knowledge and passion brought the experience to life. Highly recommend IPTours.lk!",
            rating: 5,
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            location: "Spain",
            date: "November 2024",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            quote: "From ancient temples to pristine beaches, this tour showcased the best of Sri Lanka. Professional, friendly, and unforgettable.",
            rating: 5,
        },
    ];

    const testimonialsContainer = document.getElementById('testimonials');
    if (testimonialsContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'p-6 bg-white border border-gray-200 hover:border-[#1e3a8a] transition-colors duration-300 rounded-lg shadow-sm hover:shadow-md';
            testimonialCard.innerHTML = `
                <i data-lucide="quote" class="w-9 h-9 text-[#fbbf24] mb-4"></i>
                <p class="text-gray-700 mb-4 leading-relaxed text-sm">"${testimonial.quote}"</p>
                <div class="flex items-center">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-3">
                    <div>
                        <h4 class="text-[#0a1628] text-sm font-medium">${testimonial.name}</h4>
                        <p class="text-xs text-gray-600">${testimonial.location}</p>
                        <p class="text-xs text-[#fbbf24]">${testimonial.date}</p>
                    </div>
                </div>
            `;
            testimonialsContainer.appendChild(testimonialCard);
        });
        lucide.createIcons();
    }

    // WhatsApp Chat Bubble Typing Effect with Loop
    const whatsappBubble = document.getElementById('whatsapp-bubble');
    const whatsappText = document.getElementById('whatsapp-text');
    
    if (whatsappBubble && whatsappText) {
        const text = "Chat with me";
        let typingTimeout;
        
        function showBubble() {
            // Show the bubble
            whatsappBubble.classList.add('show');
            whatsappText.textContent = ''; // Reset text
            
            // Start typing effect
            let index = 0;
            function typeText() {
                if (index < text.length) {
                    whatsappText.textContent += text.charAt(index);
                    index++;
                    typingTimeout = setTimeout(typeText, 100); // Typing speed (100ms per character)
                } else {
                    // Hide bubble after showing for a while (e.g., 5 seconds after typing completes)
                    setTimeout(() => {
                        whatsappBubble.classList.remove('show');
                    }, 5000);
                }
            }
            
            // Start typing after bubble appears
            setTimeout(typeText, 300);
        }
        
        // Show bubble initially after 30 seconds
        setTimeout(showBubble, 30000);
        
        // Loop every 2 minutes (120000ms)
        setInterval(showBubble, 120000);
    }

});

