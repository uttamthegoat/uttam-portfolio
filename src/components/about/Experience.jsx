import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../../data/experienceData";
import expimg from "../../assets/svg/experience/expBlack.svg";

const Experience = () => {
  return (
    <div className="experience px-2 md:px-0">
      <div className="flex md:flex-row flex-col items-center md:justify-around">
        <div className="experience-image w-6/12 md:w-3/12">
          <LazyLoadImage
            effect="opacity"
            src={expimg}
            alt="experienceImage"
            className="mx-auto"
          />
        </div>
        <div className="w-full md:w-7/12">
          <h1 className="text-center md:text-end w-full font-bold text-5xl mb-6 md:mb-3">
            Experience
          </h1>
          <div className="w-full">
            {experienceData.map((exp) => (
              <LazyLoadComponent key={exp.id}>
                <ExperienceCard
                  id={exp.id}
                  jobtitle={exp.jobtitle}
                  company={exp.company}
                  duration={exp.duration}
                />
              </LazyLoadComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
