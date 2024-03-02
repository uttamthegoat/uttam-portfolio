import { projectsData } from "../../data/projectsData";
import { ProjectCard } from "./project-card/ProjectCard";
import { NavHashLink } from "react-router-hash-link";

const Projects = () => {
  return (
    <div className="projects mb-32" id="projects">
      <div className="projects-heading py-5 mb-20">
        <h1 className="text-center text-5xl font-bold">
          My <span className="text-purple-700">Projects</span>
        </h1>
      </div>
      <div className="projects-content grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-4 md:gap-y-0">
        {projectsData.map((project) => (
          <div key={project.id}>
            <ProjectCard
              projectName={project.projectName}
              projectDesc={project.projectDesc}
              tags={project.tags}
              code={project.code}
              demo={project.demo}
              image={project.image}
            />
          </div>
        ))}
      </div>
      <div className="more-projects mt-20">
        <div className="mx-auto w-fit">
          <NavHashLink
            to={"/all-projects"}
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-purple-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              More Projects
            </span>
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
