"use client";
import React, { useEffect, useState } from "react";
// Removed: import { useSearchParams } from "next/navigation";
// Removed: import { FaCalendar, FaExternalLinkAlt, FaMap, FaUser } from "react-icons/fa";

// --- MOCK DATA INCLUSION ---
// Since the environment cannot resolve "../../../../config/projects.json", 
// we include mock data here to make the component runnable.
const MOCK_PROJECTS = [
    {
        "id": "project-001",
        "title": "EcoMaster SaaS Platform",
        "client": "GreenPath Solutions: Regional Energy Provider",
        "client_logo": "placeholder.png",
        "client_location": "California, USA",
        "project_date": "Q4 2024",
        "link": "https://www.example.com/ecomaster",
        "technologies": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
        "description": "Development of a large-scale enterprise SaaS platform for monitoring and optimizing industrial energy consumption and carbon footprint.",
        "details": "The project involved building a real-time data ingestion pipeline for IoT sensors, coupled with an AI-driven predictive analytics engine. The front-end delivers highly customizable dashboards for managers to view consumption trends, identify anomalies, and generate compliance reports automatically. The architecture is fully microservices-based, ensuring high availability and scalability.",
        "image": "https://placehold.co/1200x500/A3A0F5/FFFFFF/png?text=EcoMaster+Dashboard"
    },
    {
        "id": "project-002",
        "title": "Global Logistics Tracker",
        "client": "RapidShip Freight: International Shipping",
        "client_logo": "placeholder2.png",
        "client_location": "Singapore",
        "project_date": "Q1 2025",
        "link": "https://www.example.com/rapidship",
        "technologies": ["Angular", "RxJS", "Node.js", "Google Maps API", "MongoDB"],
        "description": "A real-time container tracking application providing end-to-end visibility for global shipments across sea and land routes.",
        "details": "Implemented geospatial querying and mapping integration to display vessel and truck positions dynamically. Features include predictive delay alerts, automated customs document generation, and a customer portal for order management.",
        "image": "https://placehold.co/1200x500/00C4A7/FFFFFF/png?text=Logistics+Tracker"
    }
];

// Replaced Fa icons with Lucide icons (using an inline SVG as a fallback for FaExternalLinkAlt)
const icons = {
    Calendar: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    Map: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>,
    User: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    ExternalLink: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
    ),
};


// --- CUSTOM useSearchParams REPLACEMENT ---
// Simulates next/navigation useSearchParams by reading URL for the "projectId" query parameter
const useUrlSearchParams = () => {
    // Only runs client-side, making it functionally similar to the hook
    if (typeof window === 'undefined') {
        return { get: () => null };
    }
    const params = new URLSearchParams(window.location.search);
    return {
        get: (key) => params.get(key)
    };
};
// --- END CUSTOM HOOKS ---


const ProjectDetails = () => {
  // Replacement for next/navigation useSearchParams
  const searchParams = useUrlSearchParams();
  const projectId = searchParams.get("projectId") || 'project-001'; // Default to 'project-001' if no param is found for self-contained testing
  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since we are now loading from a local mock array, this runs immediately.
    // We add a slight delay to simulate network fetching.
    setTimeout(() => {
        const selectedProject = MOCK_PROJECTS.find((p) => p.id === projectId);
        setProject(selectedProject || MOCK_PROJECTS[0]); // Fallback to first project if ID is bad
        setLoading(false);
    }, 100);
  }, [projectId]);

  if (loading || !project) {
    // Return a simple loading state while data is being fetched/resolved
    return (
        <section className="min-h-screen py-24 flex items-center justify-center bg-gray-50 font-inter">
            <div className="flex items-center space-x-3 text-indigo-600">
                <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-xl font-medium">Loading project details...</p>
            </div>
        </section>
    );
  }

  // Once the project data is available, render the details
  return (
    <section className="min-h-screen py-12 md:py-24 bg-gray-50 font-inter">
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Breadcrumb / Back Button (Placeholder) */}
      <div className="mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        {/* Adjusted href to be a placeholder link */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Portfolio
        </a>
      </div>

      {/* Project Header and Image */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        
        {/* Hero Image */}
        <div className="relative h-96 lg:h-[500px]">
          <img 
            src={project.image}
            alt={`Hero image for ${project.title}`} 
            className="w-full h-full object-cover"
            // Fallback for image loading
            onError={(e) => { e.currentTarget.src = `https://placehold.co/1200x500/A3A0F5/FFFFFF/png?text=${encodeURIComponent(project.title)}` }}
          />
          {/* Overlay for gradient/text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

          {/* Title and Client Logo */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                {project.title}
              </h1>
              <div className="flex items-center space-x-4">
                  {/* Client Logo Placeholder */}
                  <div className="w-24 h-10 flex items-center justify-center p-1 bg-white rounded shadow-md">
                      <icons.User className="w-6 h-6 text-indigo-600" />
                  </div>
                  <p className="text-xl font-medium text-gray-200">{project.client}</p>
              </div>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Description & Details */}
        <div className="lg:col-span-2 space-y-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <article className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-indigo-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-indigo-100">Project Summary</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
          </article>

          <article className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-indigo-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-indigo-100">The Solution & Execution</h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{project.details}</p>
          </article>
        </div>

        {/* Right Column: Meta Info & CTA */}
        <div className="lg:col-span-1 space-y-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          
          {/* Key Information Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Key Project Facts</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <icons.User className="w-5 h-5 mr-3 text-indigo-600" />
                <span className="font-semibold">Client:</span> {project.client.split(':')[0].trim()}
              </li>
              <li className="flex items-center">
                <icons.Map className="w-5 h-5 mr-3 text-indigo-600" />
                <span className="font-semibold">Location:</span> {project.client_location}
              </li>
              <li className="flex items-center">
                <icons.Calendar className="w-5 h-5 mr-3 text-indigo-600" />
                <span className="font-semibold">Date:</span> {project.project_date}
              </li>
            </ul>
          </div>

          {/* Technologies Used Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full shadow-sm transition-all hover:bg-indigo-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center 
                       px-6 py-4 border border-transparent text-lg font-semibold rounded-xl 
                       text-white bg-indigo-600 shadow-xl 
                       hover:bg-indigo-700 transform hover:scale-[1.01] transition-all duration-300"
          >
            See Live Case Study
            <icons.ExternalLink className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </div>
    
    {/* Simple CSS for fade-in animation */}
    <style>
      {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}
    </style>
  </section>
  );
  
};

export default ProjectDetails;
