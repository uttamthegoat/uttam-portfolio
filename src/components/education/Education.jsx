import { educationData } from "../../data/educationData";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="Education md:w-1/2" id="education">
      <div className="">
        <h1 className="font-bold text-5xl text-center mb-20">Education</h1>
      </div>
      <div className="flex flex-col gap-12">
        {educationData.map((education) => (
          <EducationCard
            key={education.id}
            duration={education.duration}
            institution={education.institution}
            course={education.course}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
