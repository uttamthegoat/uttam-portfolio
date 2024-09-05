/* eslint-disable react/prop-types */
import { IoSchoolOutline } from "react-icons/io5";
import RevealText from "../../utils/RevealText";
import { ScrollRevealUpFade } from "../../utils/ScrollReveal";
import { motion } from "framer-motion";

const EducationCard = ({ duration, institution, course }) => {
  return (
    <ScrollRevealUpFade>
      <div className="education-card flex ps-2 sm:ps-10">
        <div className="education-card-left flex flex-col">
          <div className="education-card-icon border-2 border-black rounded-full h-11 w-11 flex justify-center items-center z-[1]">
            <IoSchoolOutline className="text-white text-3xl" />
          </div>
          <div className="education-card-line relative flex justify-center items-center flex-grow">
            <div className="absolute bottom-0 left-1/2 w-1 h-full  bg-black"></div>
          </div>
        </div>
        <div className="education-card-right p-1 sm:p-3">
          <div className="education-card-duration bg-blue-800 w-fit rounded-full font-semibold ">
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
            <div className="education-card-institution font-bold text-2xl sm:text-3xl text-blue-950 my-5 uppercase">
              {institution}
            </div>
          </RevealText>
          <RevealText delay={0.4}>
            <div className="education-card-course font-semibold text-xl text-gray-700 mb-5">
              {course}
            </div>
          </RevealText>
        </div>
      </div>
    </ScrollRevealUpFade>
  );
};

export default EducationCard;
