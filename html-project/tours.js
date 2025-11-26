// Tours page specific JavaScript

document.addEventListener('DOMContentLoaded', function () {
    const allTours = [
        {
            id: 1,
            image: "./Assets/culture-tour.jpg",
            title: "Cultural Heritage Tour",
            description: "Explore ancient temples, historical sites, and UNESCO World Heritage locations across Sri Lanka's cultural triangle. This comprehensive journey takes you through the ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya, where you'll witness magnificent Buddhist stupas, intricate stone carvings, and the legendary Lion Rock fortress. Visit the sacred Temple of the Tooth Relic in Kandy, experience traditional Kandyan dance performances, and immerse yourself in the rich cultural heritage that spans over 2,500 years. Your journey includes guided tours by expert historians, comfortable accommodations in heritage properties, and authentic Sri Lankan cuisine experiences.",
            price: "$1,299",
            duration: "7 Days",
            rating: 4.9,
            category: "Culture",
        },
        {
            id: 2,
            image: "./Assets/wild-tour.jpg",
            title: "Wildlife Safari Adventure",
            description: "Encounter majestic elephants, leopards, and diverse wildlife in Sri Lanka's pristine national parks. Experience thrilling jeep safaris through Yala National Park, home to the highest density of leopards in the world, and Udawalawe National Park, where you'll witness large herds of Asian elephants in their natural habitat. Spot exotic bird species, sloth bears, crocodiles, and monitor lizards as you explore diverse ecosystems ranging from dry forests to grasslands. Your adventure includes early morning and evening game drives with experienced naturalist guides, comfortable safari lodges, and opportunities for wildlife photography. Learn about conservation efforts and the unique biodiversity that makes Sri Lanka one of the world's top wildlife destinations.",
            price: "$1,499",
            duration: "6 Days",
            rating: 5.0,
            category: "Adventure",
        },
        {
            id: 3,
            image: "./Assets/beach-tour.jpg",
            title: "Beach Paradise Retreat",
            description: "Relax on pristine beaches with luxury accommodations, water sports, and spa experiences. Indulge in the ultimate beach getaway along Sri Lanka's stunning southern coastline, featuring golden sandy beaches, crystal-clear turquoise waters, and world-class resorts. Enjoy a variety of water activities including snorkeling, scuba diving, surfing, and whale watching. Pamper yourself with rejuvenating spa treatments using traditional Ayurvedic techniques, savor exquisite seafood cuisine at beachfront restaurants, and unwind with sunset cocktails. Your stay includes luxurious beachfront villas or five-star resorts with private pools, personalized service, and access to exclusive beach clubs. Experience the perfect blend of relaxation and adventure in this tropical paradise.",
            price: "$1,799",
            duration: "5 Days",
            rating: 4.8,
            category: "Beach",
        },
        {
            id: 4,
            image: "./Assets/hike-tour.jpg",
            title: "Highland Adventure Trek",
            description: "Trek through misty mountains, tea plantations, and scenic hiking trails in the hill country. Embark on an exhilarating adventure through Sri Lanka's central highlands, where you'll hike through emerald tea estates, cloud forests, and mountain peaks offering breathtaking panoramic views. Explore famous trails including Adam's Peak pilgrimage route, Horton Plains National Park with its World's End viewpoint, and Knuckles Mountain Range. Visit working tea factories to learn about the tea-making process, interact with local tea pluckers, and enjoy freshly brewed Ceylon tea. Your journey includes comfortable mountain lodges, experienced trekking guides, and opportunities to spot unique highland wildlife. Experience the cool mountain climate, stunning waterfalls, and the peaceful serenity of the hill country.",
            price: "$1,199",
            duration: "8 Days",
            rating: 4.7,
            category: "Adventure",
        },
        {
            id: 5,
            image: "./Assets/ancient-tour.jpg",
            title: "Ancient Kingdoms Discovery",
            description: "Journey through time visiting ancient ruins, royal palaces, and archaeological wonders. Discover the fascinating history of Sri Lanka's ancient kingdoms through visits to magnificent archaeological sites and well-preserved ruins. Explore the ancient capital of Anuradhapura with its massive dagobas and sacred Bodhi tree, the medieval city of Polonnaruwa featuring impressive stone sculptures and royal palaces, and the rock fortress of Sigiriya with its famous frescoes and water gardens. Visit the cave temples of Dambulla, a UNESCO World Heritage site with over 150 Buddha statues and intricate ceiling paintings. Your journey includes expert archaeological guides, visits to museums showcasing ancient artifacts, and opportunities to learn about the sophisticated irrigation systems and architectural marvels of ancient Sri Lankan civilizations.",
            price: "$1,399",
            duration: "7 Days",
            rating: 4.9,
            category: "Culture",
        },
        {
            id: 6,
            image: "./Assets/waterfall-tour.jpg",
            title: "Waterfall & Nature Escape",
            description: "Discover hidden waterfalls, lush rainforests, and breathtaking natural landscapes. Immerse yourself in Sri Lanka's pristine natural beauty as you explore cascading waterfalls, dense tropical rainforests, and diverse ecosystems teeming with exotic flora and fauna. Visit stunning waterfalls including Diyaluma Falls, one of the tallest in the country, and Bambarakanda Falls surrounded by lush greenery. Trek through Sinharaja Rainforest, a UNESCO World Heritage site and biodiversity hotspot, where you'll encounter rare endemic species of birds, butterflies, and plants. Experience the tranquility of nature reserves, enjoy refreshing dips in natural pools, and capture stunning photographs of untouched wilderness. Your adventure includes knowledgeable nature guides, comfortable eco-lodges, and opportunities for bird watching, wildlife spotting, and learning about conservation efforts.",
            price: "$999",
            duration: "4 Days",
            rating: 4.6,
            category: "Adventure",
        }
    ];

    const toursGrid = document.getElementById('tours-grid');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const durationFilter = document.getElementById('duration-filter');

    // Create modal structure
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'tour-modal';
        modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                <button id="close-modal" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10">
                    <i data-lucide="x" class="w-5 h-5 text-gray-600"></i>
                </button>
                <div class="p-6">
                    <img id="modal-image" src="" alt="" class="w-full h-64 object-cover rounded-lg mb-4">
                    <div class="flex items-center gap-4 mb-3">
                        <span id="modal-duration" class="bg-[#fbbf24] text-[#0a1628] px-3 py-1 rounded-full text-xs"></span>
                        <span id="modal-category" class="bg-[#1e3a8a] text-white px-3 py-1 rounded-full text-xs"></span>
                    </div>
                    <h2 id="modal-title" class="text-2xl mb-4 text-[#1e40af] font-semibold"></h2>
                    <p id="modal-description" class="text-gray-600 text-sm leading-relaxed"></p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        lucide.createIcons();
        return modal;
    }

    // Initialize modal
    const modal = createModal();
    const closeModalBtn = document.getElementById('close-modal');

    // Add event listener for card clicks using event delegation (only once)
    if (toursGrid) {
        toursGrid.addEventListener('click', function (e) {
            // Find the card that was clicked
            const card = e.target.closest('.card-hover');
            if (card) {
                e.preventDefault();
                e.stopPropagation();
                const tourId = card.getAttribute('data-tour-id');
                const tour = allTours.find(t => t.id == tourId);

                if (tour) {
                    // Populate modal with tour data
                    document.getElementById('modal-image').src = tour.image;
                    document.getElementById('modal-image').alt = tour.title;
                    document.getElementById('modal-title').textContent = tour.title;
                    document.getElementById('modal-description').textContent = tour.description;
                    document.getElementById('modal-duration').textContent = tour.duration;
                    document.getElementById('modal-category').textContent = tour.category;

                    // Show modal
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    }

    // Close modal functionality
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking backdrop
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    function getDurationCategory(duration) {
        const days = parseInt(duration);
        if (days <= 5) return 'short';
        if (days <= 10) return 'medium';
        return 'long';
    }

    function filterTours() {
        const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value : 'all';
        const duration = durationFilter ? durationFilter.value : 'all';

        const filteredTours = allTours.filter(tour => {
            const matchesSearch = !searchQuery || tour.title.toLowerCase().includes(searchQuery) ||
                tour.description.toLowerCase().includes(searchQuery);
            const matchesCategory = category === 'all' || tour.category === category;
            const matchesDuration = duration === 'all' || getDurationCategory(tour.duration) === duration;
            return matchesSearch && matchesCategory && matchesDuration;
        });

        renderTours(filteredTours.slice(0, 6));
    }

    function renderTours(tours) {
        toursGrid.innerHTML = '';
        tours.forEach(tour => {
            const tourCard = document.createElement('div');
            tourCard.className = 'overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 rounded-lg card-hover cursor-pointer';
            tourCard.setAttribute('data-tour-id', tour.id);
            tourCard.innerHTML = `
                <div class="relative h-52 overflow-hidden">
                    <img src="${tour.image}" alt="${tour.title}" class="w-full h-full object-cover img-hover">
                    <div class="absolute top-3 right-3 bg-[#fbbf24] text-[#0a1628] px-2 py-1 rounded-full text-xs">
                        ${tour.duration}
                    </div>
                    <div class="absolute top-3 left-3 bg-[#1e3a8a] text-white px-2 py-1 rounded-full text-xs">
                        ${tour.category}
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="text-lg mb-3 text-[#1e40af] font-semibold">${tour.title}</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-4 leading-relaxed">${tour.description}</p>
                    <div class="flex items-center justify-start">
                        <span class="text-[#1e3a8a] hover:text-[#3b82f6] text-xs font-medium transition-colors cursor-pointer view-more-btn" data-tour-id="${tour.id}">View More</span>
                    </div>
                </div>
            `;
            toursGrid.appendChild(tourCard);
        });
        lucide.createIcons();
    }

    // Initial render - show only 6 tours
    renderTours(allTours.slice(0, 6));

    // Event listeners (only if filter elements exist)
    if (searchInput) {
        searchInput.addEventListener('input', filterTours);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterTours);
    }
    if (durationFilter) {
        durationFilter.addEventListener('change', filterTours);
    }
});

