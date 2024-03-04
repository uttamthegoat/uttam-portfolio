import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { UpFadeWithDelayProjects } from "../../../utils/ScrollReveal";

/* eslint-disable react/prop-types */
export const ProjectCard = ({
  projectName,
  image,
  projectDesc,
  tags,
  demo,
  code,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHover = () => {
    setIsVisible(!isVisible);
  };
  const childVariants1 = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const childVariants2 = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <UpFadeWithDelayProjects id={id}>
      <div
        key={id}
        className="project-card relative shadow-xl shadow-gray-500 flex flex-col items-center bg-white rounded-xl mx-auto w-[304px] md:w-[304px] sm:w-8/12"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="card-heading py-5">
          <h1 className="text-center text-3xl font-bold">{projectName}</h1>
        </div>
        <div className="card-image w-10/12 h-fit py-3">
          <motion.div
            initial={isVisible ? { opacity: 1 } : { opacity: 0 }}
            animate={isVisible ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={image} alt={projectName} className="w-full h-auto" />
          </motion.div>
        </div>
        <div className="card-links flex justify-start gap-x-1 w-10/12 py-7">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-xl border-2 border-black rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
            >
              <FaExternalLinkAlt className="z-[2]" />
            </a>
          )}
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="text-2xl border-2 border-black rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
          >
            <FaCode className="z-[2]" />
          </a>
        </div>
        <div className="absolute top-[18%] flex flex-col gap-y-3">
          <motion.div
            variants={childVariants1}
            initial={isVisible ? "hidden" : "visible"}
            animate={isVisible ? "visible" : "hidden"}
            className="card-description bg-black w-11/12 rounded-e-xl text-white px-3 py-3 text-md "
            style={{ fontFamily: "Roboto" }}
          >
            {projectDesc}
          </motion.div>

          <motion.div
            variants={childVariants2}
            initial={isVisible ? "hidden" : "visible"}
            animate={isVisible ? "visible" : "hidden"}
            className="card-tags bg-black w-7/12 rounded-s-xl px-3 py-3 text-md self-end"
          >
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-white"
                style={{ fontFamily: "Roboto" }}
              >
                {tag}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </UpFadeWithDelayProjects>
  );
};
