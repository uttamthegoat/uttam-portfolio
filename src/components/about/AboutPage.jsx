import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import "./About.css";
import expimg from "../../assets/svg/experience/expBlack.svg";
import abtimg from "../../assets/svg/about/blueTheme-boy.svg";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const AboutPage = () => {
  const skillBoxStyle = {
    backgroundColor: "black",
    boxShadow: `0px 0px 30px black`,
  };
  return (
    <div className="About pt-5 pb-10">
      <div className="background w-full flex justify-around py-10">
        <div className="background-text w-6/12">
          <h1 className="text-5xl font-bold pt-4 mb-5 w-8/12 mx-auto">About</h1>
          <p className="text-2xl font-semibold w-8/12 mx-auto">
            My name is Uttam, an enthusiastic engineering student with a passion
            for web development. Constantly driven by the desire to explore new
            horizons, I find joy in unraveling the intricacies of technology.
            When not immersed in coding, I embark on thrilling trekking
            adventures, seeking the perfect blend of challenge and serenity.
            Eager to merge my love for innovation with the vast possibilities of
            the web, I am on a journey to carve my niche in the ever-evolving
            world of technology.
          </p>
        </div>
        <div className="experience-image w-3/12">
          <img src={abtimg} alt="experienceImage" className="mx-auto" />
        </div>
      </div>
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
              <img src={skillsImage(skill)} alt={skill} className="mb-2" />
              <h3 className="text-white font-semibold">{skill}</h3>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="experience">
        <div className="flex justify-around">
          <div className="experience-image w-3/12">
            <img src={expimg} alt="experienceImage" className="mx-auto" />
          </div>
          <div className="w-7/12">
            <h1 className="text-end w-full font-bold text-5xl mb-3">Experience</h1>
            <div className="w-full">
              {experienceData.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  id={exp.id}
                  jobtitle={exp.jobtitle}
                  company={exp.company}
                  duration={exp.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
