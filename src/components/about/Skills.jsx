import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RevealText from "../../utils/RevealText";
import { ScrollRevealZoomIn } from "../../utils/ScrollReveal";

const Skills = () => {
  const skillBoxStyle = {
    backgroundColor: "black",
    boxShadow: `0px 0px 30px black`,
  };
  return (
    <div className="skills my-10 mb-20">
      <div className="flex justify-center">
        <RevealText delay={0.4}>
          <h1 className="mx-auto inline-block font-bold text-5xl pb-10">
            Skills
          </h1>
        </RevealText>
      </div>
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
          <ScrollRevealZoomIn key={id}>
            <div className="skill--box" key={id} style={skillBoxStyle}>
              <LazyLoadImage
                effect="opacity"
                src={skillsImage(skill)}
                alt={skill}
                className="mb-2 h-[50px] w-auto"
              />
              <RevealText delay={0.4}>
                <h3 className="text-white font-semibold">{skill}</h3>
              </RevealText>
            </div>
          </ScrollRevealZoomIn>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
