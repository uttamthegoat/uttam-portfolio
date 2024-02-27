import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Skills = () => {
  const skillBoxStyle = {
    backgroundColor: "black",
    boxShadow: `0px 0px 30px black`,
  };
  return (
    <div className="skills my-10 mb-20">
      <h1 className="text-center font-bold text-5xl pb-10">Skills</h1>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {skillsData.map((skill, id) => (
          <div className="skill--box" key={id} style={skillBoxStyle}>
            <LazyLoadImage
              effect="opacity"
              src={skillsImage(skill)}
              alt={skill}
              className="mb-2 h-[50px] w-auto"
            />
            <h3 className="text-white font-semibold">{skill}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
