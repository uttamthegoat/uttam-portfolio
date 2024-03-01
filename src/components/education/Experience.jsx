import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../data/experienceData";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience md:w-1/2" id="experience">
      <div>
        <h1 className="font-bold text-5xl text-center text-purple-700 mb-20 mt-20 md:mt-0">Experience</h1>
      </div>
      <div className="flex flex-col gap-12">
        {experienceData.map((education) => (
          <ExperienceCard
            key={education.id}
            duration={education.duration}
            jobtitle={education.jobtitle}
            company={education.company}
            description={education.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
