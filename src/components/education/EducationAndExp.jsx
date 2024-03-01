import Experience from "./Experience";
import Education from "./Education";

const EducationAndExp = () => {
  return (
    <div className="educationandexp my-40">
      <div className="flex flex-col md:flex-row">
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default EducationAndExp;
