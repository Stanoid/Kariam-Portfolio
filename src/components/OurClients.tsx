'use client'
import React, { useRef, useEffect } from "react";
// In a Next.js project, you would use: import Image from "next/image";
// For Canvas preview, we use the standard <img> tag.

// NOTE: In a Next.js project, you would replace this constant with:
// import projects from "../../config/projects.json";
const projects = [
  {
    "id": "1",
    "title": "Project One",
    "description": "This is a brief description of Project One.",
    "image": "/public/images/project-one.png",
    "details": "Detailed information about Project One.",
    "link": "/projects/project-one",
    "client": "Client A (Innovators)",
    "client_logo": "https://placehold.co/100x40/0E7490/FFFFFF/png?text=Innovators",
    "client_location": "New York, USA",
    "project_date": "2023-10-15",
    "technologies": ["React", "Node.js", "GraphQL"]
  },
  {
    "id": "2",
    "title": "Project Two",
    "description": "This is a brief description of Project Two.",
    "image": "/public/images/project-two.png",
    "details": "Detailed information about Project Two.",
    "link": "/projects/project-two",
    "client": "Client B (Tech)",
    "client_logo": "https://placehold.co/100x40/15803D/FFFFFF/png?text=Tech+Solutions",
    "client_location": "London, UK",
    "project_date": "2023-11-20",
    "technologies": ["Vue.js", "Django", "PostgreSQL"]
  },
  { client: "Client C (Future)", client_logo: "https://placehold.co/100x40/9333EA/FFFFFF/png?text=Future+Group" },
  { client: "Client D (Aqua)", client_logo: "https://placehold.co/100x40/1D4ED8/FFFFFF/png?text=Aqua" },
  { client: "Client E (Eco)", client_logo: "https://placehold.co/100x40/EAB308/FFFFFF/png?text=Eco" },
  { client: "Client F (Creative)", client_logo: "https://placehold.co/100x40/C026D3/FFFFFF/png?text=Creative" },
  { client: "Client G (Marketing)", client_logo: "https://placehold.co/100x40/EF4444/FFFFFF/png?text=Marketing" },
  { client: "Client H (Health)", client_logo: "https://placehold.co/100x40/059669/FFFFFF/png?text=Health" },
];
// --- END DATA MOCK ---

// Define a placeholder image URL for clients without a logo
const FALLBACK_LOGO_URL = "https://placehold.co/100x40/E5E7EB/6B7280?text=Partner";

const PartnersSlider = () => {
  // Ref for the scrolling container
  const scrollRef = useRef(null);
  
  // --- Client Extraction and Deduplication ---
  const uniqueClients = [];
  const seenClientNames = new Set();

  for (const project of projects) {
    if (project.client && !seenClientNames.has(project.client)) {
      seenClientNames.add(project.client);
      uniqueClients.push({
        name: project.client,
        logo: project.client_logo || FALLBACK_LOGO_URL, 
      });
    }
  }

  // --- Auto-Scrolling Effect (for infinite loop illusion) ---
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    let isHovering = false;

    const scroll = () => {
      if (!isHovering) {
        // Check if we reached the end of the first set of duplicated items
        if (container.scrollLeft >= (container.scrollWidth / 2) - container.clientWidth) {
          // Reset scroll position instantly to the start of the second set
          container.scrollLeft = 0; 
        } else {
          // Increment scroll position (slower for a smoother scroll)
          container.scrollLeft += 0.4; 
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    // Mouse interaction handlers to pause/resume scrolling
    const handleMouseEnter = () => isHovering = true;
    const handleMouseLeave = () => isHovering = false;

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Start scrolling only if there are enough items
    if (uniqueClients.length > 3) { 
      animationFrameId = requestAnimationFrame(scroll);
    }
    
    // Cleanup function to stop animation loop and remove listeners
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [uniqueClients.length]);


  // --- Component JSX ---
  // Duplicate the clients array to ensure a seamless looping effect
  const duplicatedClients = [...uniqueClients, ...uniqueClients];

  return (
    <section className="  py-16 bg-white overflow-hidden font-inter">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16 relative">
          <span className="pb-3 border-b-4 border-indigo-600">Our Trusted Partners</span>
        </h2>
        
        {/* Horizontal Slider Wrapper for seamless loop */}
        <div className="relative">
          {/* Fading overlay at the edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none sm:w-32"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none sm:w-32"></div>

          <div 
            ref={scrollRef}
            // Manual scrolling is still possible
            // Increased space-x for better visual separation during slide
            className="flex space-x-16 p-4 -mx-4 overflow-x-hidden scrollbar-hide will-change-scroll" 
          >
            {/* Map over the duplicated list for seamless looping */}
            {duplicatedClients.map((client, index) => (
              <div 
                key={index} 
                className="partner-card 
                  flex flex-shrink-0 flex-col items-center justify-center 
                  p-6 w-40 sm:w-56 
                  bg-gray-50 rounded-2xl border border-gray-100 
                  transition-all duration-300 transform 
                  hover:shadow-2xl hover:border-indigo-500 hover:bg-white
                  cursor-pointer group"
              >
                {/* Partner Logo Image Container */}
                <div className="w-full h-16 sm:h-20 mb-4 relative flex items-center justify-center">
                  {/* NOTE: Replace <img> with <Image> from 'next/image' for production */}
                  <img
                    src={client.logo}
                    alt={client.name + " logo"}
                    // Mimicking object-fit: contain
                    className="partner-logo 
                      object-contain max-w-full max-h-full
                      grayscale opacity-60 
                      transition-all duration-500 
                      group-hover:opacity-100 group-hover:grayscale-0"
                    
                    // Error Handling for missing/invalid images
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      if (e.currentTarget.src !== FALLBACK_LOGO_URL) {
                          e.currentTarget.src = FALLBACK_LOGO_URL;
                      }
                    }}
                  />
                </div>

                {/* Partner Name */}
                <p className="partner-name text-xs sm:text-sm font-semibold text-gray-600 text-center truncate w-full mt-2 transition-colors">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom style to hide the scrollbar for aesthetics (essential for infinite scroll) */}
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            /* Hide scrollbar for IE, Edge and Firefox */
            .scrollbar-hide {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default PartnersSlider;
