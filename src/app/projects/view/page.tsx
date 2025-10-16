"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCalendar, FaExternalLinkAlt, FaMap, FaUser } from "react-icons/fa";
import projects from "../../../../config/projects.json";

const ProjectDetails = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectId) {
      const selectedProject = projects.find((p) => p.id === projectId);
      setProject(selectedProject);
    }
  }, [projectId]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <section className="min-h-screen py-12 md:py-24 font-inter">
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Breadcrumb / Back Button (Placeholder) */}
      <div className="mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <a href="/" className="flex items-center text-primary hover:text-primary transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Portfolio
        </a>
      </div>

      {/* Project Header and Image */}
      <div className="bg-theme-ligh dark:bg-darkmode-theme-light rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        
        {/* Hero Image */}
        <div className="relative h-96 lg:h-[500px]">
          {/* NOTE: Use Next.js <Image> component here in production */}
          <img 
            src={project.image} 
            alt={`Hero image for ${project.title}`} 
            className="w-full h-full object-cover"
          />
          {/* Overlay for gradient/text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

          {/* Title and Client Logo */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                {project.title}
              </h1>
              <div className="flex items-center space-x-4">
                  <img 
                      src={project.client_logo} 
                      alt={project.client} 
                      className="w-24 h-10 object-contain p-1 bg-theme-ligh dark:bg-darkmode-theme-light rounded shadow-md"
                  />
                  <p className="text-xl font-medium text-gray-200">{project.client}</p>
              </div>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Description & Details */}
        <div className="lg:col-span-2 space-y-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <article className="bg-theme-ligh dark:bg-darkmode-theme-light p-8 md:p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-indigo-100">Project Summary</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
          </article>

          <article className="bg-theme-ligh dark:bg-darkmode-theme-light p-8 md:p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-indigo-100">The Solution & Execution</h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{project.details}</p>
          </article>
        </div>

        {/* Right Column: Meta Info & CTA */}
        <div className="lg:col-span-1 space-y-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          
          {/* Key Information Card */}
          <div className="bg-theme-ligh dark:bg-darkmode-theme-light p-8 rounded-2xl shadow-lg border-t-4 border-primary">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Key Project Facts</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <FaUser className="w-5 h-5 mr-3 text-primary" />
                <span className="font-semibold">Client:</span> {project.client.split(':')[0].trim()}
              </li>
              <li className="flex items-center">
                <FaMap className="w-5 h-5 mr-3 text-primary" />
                <span className="font-semibold">Location:</span> {project.client_location}
              </li>
              <li className="flex items-center">
                <FaCalendar className="w-5 h-5 mr-3 text-primary" />
                <span className="font-semibold">Date:</span> {project.project_date}
              </li>
            </ul>
          </div>

          {/* Technologies Used Card */}
          <div className="bg-theme-ligh dark:bg-darkmode-theme-light p-8 rounded-2xl shadow-lg border-t-4 border-primary">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full shadow-md transition-all hover:bg-primary hover:shadow-xl">
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
                       text-white bg-primary shadow-xl 
                       hover:bg-indigo-700 transform hover:scale-[1.01] transition-all duration-300"
          >
            See Live Case Study
            <FaExternalLinkAlt className="w-6 h-6 ml-3" />
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
