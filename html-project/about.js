// About page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Team Members Data
    const team = [
        {
            name: "Rajesh Fernando",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
            bio: "25+ years of experience in luxury tourism",
        },
        {
            name: "Amara Silva",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
            bio: "Expert in customer experience and tour logistics",
        },
        {
            name: "Kumar Perera",
            role: "Chief Guide",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
            bio: "Certified wildlife and cultural heritage specialist",
        },
        {
            name: "Nisha Jayawardena",
            role: "Travel Designer",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
            bio: "Creates bespoke itineraries tailored to your dreams",
        },
    ];

    const teamContainer = document.getElementById('team-members');
    if (teamContainer) {
        team.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-lg card-hover';
            memberCard.innerHTML = `
                <div class="relative h-64 overflow-hidden">
                    <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover img-hover">
                </div>
                <div class="p-5 text-center">
                    <h3 class="text-lg mb-1 text-[#1e40af] font-semibold">${member.name}</h3>
                    <p class="text-[#fbbf24] text-sm mb-2">${member.role}</p>
                    <p class="text-gray-600 text-xs">${member.bio}</p>
                </div>
            `;
            teamContainer.appendChild(memberCard);
        });
    }

});

