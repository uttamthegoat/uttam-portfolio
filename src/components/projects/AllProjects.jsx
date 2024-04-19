import { IoHomeOutline } from "react-icons/io5";
import "./AllProjects.css";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { ProjectCard } from "./project-card/ProjectCard";

const AllProjects = () => {
  return (
    <div className="all-projects">
      <div className="all-projects-header bg-black md:h-[250px] flex sm:flex-col items-center md:block pb-0 sm:pb-8 md:pb-0">
        <div className="px-8 py-5 flex justify-center sm:justify-start">
          <Link
            to={"/"}
            className="all-projects-home flex w-fit rounded-full shadow-xl shadow-gray-500 px-3 py-3 bg-gray-300"
          >
            <IoHomeOutline className="text-2xl md:text-4xl text-white" />
          </Link>
        </div>
        <div className="all-projects-heading">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-gray-300">
            Projects
          </h1>
        </div>
      </div>
      <div className="all-projects-body py-20">
        <div className="grid grid-cols-1 gap-y-7 sm:grid-cols-1 sm:gap-y-10 md:grid-cols-4 md:gap-y-8">
          {projectsData.map((project) => (
            <div key={project.id}>
              <ProjectCard
                id={project.id}
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
      </div>
    </div>
  );
};

export default AllProjects;
