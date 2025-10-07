"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-8">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="mb-4 mx-auto d-block"
        />
        <p>{project.details}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
