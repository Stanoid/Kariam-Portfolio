import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import projects from "../../../config/projects.json";
import Link from "next/link";

const Projects = () => {

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-center mb-8">Projects</h2>
        <div className="row">
          {projects.map((project,index) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <Link href={`/projects/view?projectId=${project.id}`} key={index} passHref> 
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;