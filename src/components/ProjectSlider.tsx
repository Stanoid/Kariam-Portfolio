import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "../../config/projects.json";

const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image"; // Fallback image URL

const ProjectGrid = () => {
    return (
        <div className="flex  w-fullflex-wrap gap-x-2 p-4"> {/* Use flexbox for layout */}
            {projects.map((project, index) => (
            <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
                <Link href={`/projects/view?projectId=${project.id}`} passHref>
                <div className="p-4">
                    <h3 className="project-title text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="project-description text-sm text-gray-600">{project.description}</p>
                </div>
                </Link>
            </div>
            ))}
        </div>
    );
};

export default ProjectGrid;
