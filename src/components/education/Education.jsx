import { educationData } from "../../data/educationData";
import EducationCard from "./EducationCard";
import RevealText from "../../utils/RevealText";

const Education = () => {
  return (
    <div className="Education md:w-1/2" id="education">
      <div className="mb-20">
        <h1 className="font-bold text-5xl m-auto w-fit mx-auto pb-3">
          <RevealText delay={0.4}>Education</RevealText>
        </h1>
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
