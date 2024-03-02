/* eslint-disable react/prop-types */
import { IoSchoolOutline } from "react-icons/io5";
import RevealText from "../../utils/RevealText";
import { motion } from "framer-motion";
import { ScrollRevealUpFade } from "../../utils/ScrollReveal";

const ExperienceCard = ({ company, duration, jobtitle, description }) => {
  return (
    <ScrollRevealUpFade>
      <div className="experience-card flex ps-2 sm:ps-10">
        <div className="experience-card-left flex flex-col">
          <div className="experience-card-icon border-2 border-black rounded-full h-11 w-11 flex justify-center items-center z-[1]">
            <IoSchoolOutline className="text-white text-3xl" />
          </div>
          <div className="experience-card-line relative flex justify-center items-center flex-grow">
            <div className="absolute bottom-0 left-1/2 w-1 h-full  bg-black"></div>
          </div>
        </div>
        <div className="experience-card-right p-1 sm:p-3">
          <div className="experience-card-duration bg-purple-700 w-fit rounded-full font-semibold">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-white w-full rounded-full px-3 py-2">
                {duration}
              </p>
            </motion.div>
          </div>
          <RevealText delay={0.4}>
            <div className="experience-card-institution font-bold text-2xl sm:text-3xl text-blue-950 mt-3 uppercase">
              {jobtitle}
            </div>
          </RevealText>
          <RevealText delay={0.4}>
            <div className="experience-card-course font-semibold text-xl sm:text-2xl text-black mt-2 mb-3">
              {company}
            </div>
          </RevealText>
          <RevealText delay={0.4}>
            <div className="experience-card-course font-semibold text-lg sm:text-xl text-gray-700 mb-5">
              {description}
            </div>
          </RevealText>
        </div>
      </div>
    </ScrollRevealUpFade>
  );
};

export default ExperienceCard;
