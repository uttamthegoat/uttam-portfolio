import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RevealText from "../../utils/RevealText";
import {
  ScrollRevealUpFade,
  ScrollRevealZoomIn,
} from "../../utils/ScrollReveal";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skillBoxStyle = {
    backgroundColor: "black",
    boxShadow: `0px 0px 30px black`,
  };
  return (
    <ScrollRevealUpFade>
      <div className="skills mt-40 mb-20" id="skills">
        <div className="flex justify-center mb-16">
          <div>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay:0.3 }}
              viewport={{ once: true }}
              className="mx-auto inline-block font-bold text-5xl pb-10"
            >
              Ski
            </motion.div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay:0.3 }}
              viewport={{ once: true }}
              className="mx-auto inline-block font-bold text-5xl pb-10"
            >
              lls
            </motion.div>
          </div>
        </div>
        <Marquee
          gradient={false}
          speed={80}
          // pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <ScrollRevealZoomIn key={id}>
              <div className="skill--box" key={id} style={skillBoxStyle} title={skill}>
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
    </ScrollRevealUpFade>
  );
};

export default Skills;
