import { educationData } from "../../data/educationData";
import EducationCard from "./EducationCard";
import RevealText from "../../utils/RevealText";

const Education = () => {
  return (
    <div className="Education md:w-1/2" id="education">
      <div className="mb-20">
        <RevealText delay={0.4}>
          <h1 className="font-bold text-5xl text-center w-fit mx-auto">
            Education
          </h1>
        </RevealText>
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
