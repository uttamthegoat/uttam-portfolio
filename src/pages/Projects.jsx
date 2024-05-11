import { useEffect } from "react";
import AllProjects from "../components/projects/AllProjects";
import transition from "../utils/transition";

const Projects = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
      <AllProjects />
    </div>
  );
};

export default transition(Projects);
