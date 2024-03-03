import { headerData } from "../../data/headerData";
import "./Home.css";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { socialsData } from "../../data/socialsData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UpFadeWithDelay } from "../../utils/ScrollReveal";
import RevealText from "../../utils/RevealText";
import { motion } from "framer-motion";
import HomeScroll from "./HomeScroll";
import { NavHashLink } from "react-router-hash-link";

const HomeComponent = () => {
  return (
    <div className="home relative w-full flex flex-col md:flex-row border-b-2 border-black">
      {/* image */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="home-image hidden md:block md:w-[400px] md:h-[400px] absolute rounded-full"
      >
        <LazyLoadImage
          effect="opacity"
          src={headerData.image}
          alt="profileImage"
          className="rounded-full"
        />
      </motion.div>
      {/* left */}
      <div className="w-full h-[85vh] md:w-[40%] flex items-end relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="home-image md:hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] absolute rounded-full"
          style={{ translateX: "-50%", translateY: "-50%" }}
        >
          <LazyLoadImage
            effect="opacity"
            src={headerData.image}
            alt="profileImage"
            className="rounded-full"
          />
        </motion.div>
        <div className="social-media w-full flex justify-center md:space-x-8 pb-7 mb-7">
          <UpFadeWithDelay id={0}>
            <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin className="landing--social" aria-label="LinkedIn" />
            </a>
          </UpFadeWithDelay>
          <UpFadeWithDelay id={1}>
            <a href={socialsData.github} target="_blank" rel="noreferrer">
              <FaGithub className="landing--social" aria-label="GitHub" />
            </a>
          </UpFadeWithDelay>
          <UpFadeWithDelay id={2}>
            <a href={socialsData.twitter} target="_blank" rel="noreferrer">
              <FaTwitter className="landing--social" aria-label="Twitter" />
            </a>
          </UpFadeWithDelay>
          <UpFadeWithDelay id={3}>
            <a href={socialsData.youtube} target="_blank" rel="noreferrer">
              <FaYoutube className="landing--social" aria-label="YouTube" />
            </a>
          </UpFadeWithDelay>
          <UpFadeWithDelay id={4}>
            <a href={socialsData.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="landing--social" aria-label="Instagram" />
            </a>
          </UpFadeWithDelay>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-[60%] bg-black md:h-[85vh] flex flex-col justify-center items-center text-white py-8">
        <div className="text-white w-11/12 sm:8/12 md:w-6/12 px-2 md:px-0">
          <RevealText delay={0.3} color={"#c6d5c6"}>
            <HomeScroll />
          </RevealText>
          <RevealText delay={0.3} color={"#c6d5c6"}>
            <p className="text-white text-4xl sm:text-6xl font-bold mb-5">
              {headerData.name}
            </p>
          </RevealText>
          <RevealText delay={0.3} color={"#c6d5c6"}>
            <p
              className="text-gray-300 font-bold"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >
              {headerData.desciption}
            </p>
          </RevealText>
          <div className="flex flex-col items-center gap-y-3 sm:gap-y-0 sm:space-y-0 sm:flex-row sm:justify-around md:justify-between mt-7 w-6/12 sm:w-full mx-auto">
            <UpFadeWithDelay id={1}>
              <a
                href={headerData.resumePdf}
                download="resume"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-white border-4 rounded-full border-green-200 px-2 py-2 font-semibold inline-block w-[125px] md:w-[160px] hover:bg-green-200 hover:text-black text-center"
              >
                Download CV
              </a>
            </UpFadeWithDelay>
            <UpFadeWithDelay id={2}>
              <NavHashLink
                to={"/#contact"}
                smooth={true}
                spy="true"
                duration={2000}
                className="cursor-pointer text-black border-4 rounded-full border-green-200 bg-green-200 px-2 py-2 font-semibold text:lg sm:text-xl w-[125px] inline-block md:w-[160px] text-center hover:bg-black hover:text-green-200"
              >
                Contact
              </NavHashLink>
            </UpFadeWithDelay>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
