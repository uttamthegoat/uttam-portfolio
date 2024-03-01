/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import abtimg from "../../assets/svg/about/blueTheme-boy.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skills from "./Skills";
import Experience from "./Experience";
import RevealText from "../../utils/RevealText";
import { ScrollRevealUpFade } from "../../utils/ScrollReveal";
import { contactsData } from "../../data/contactsData";

const AboutPage = () => {
  return (
    <div className="About pt-5 pb-10">
      <ScrollRevealUpFade>
        <div className="background w-full flex md:flex-row flex-col-reverse items-center md:justify-around py-10">
          <div className="background-text w-11/12 md:w-6/12">
            <RevealText delay={0.4}>
              <h1 className="text-5xl font-extrabold pt-4 mb-5 md:w-8/12 text-center md:text-start">
                About <span style={{ color: "#7a7a7a" }}>Me</span>
              </h1>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-4xl font-bold md:w-8/12 text-center md:text-start mb-4">
                I'm Uttam.
              </p>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-2xl font-semibold mb-3 md:text-start text-center">
                Full Stack Developer and Aspiring Software Engineer
              </p>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-xl sm:text-2xl italic text-center md:text-start">
                "In the dance of life, every step is a lesson, and every pause,
                a reflection."
              </p>
            </RevealText>
            <div className="grid sm:grid-cols-2 text-lg md:text-xl mt-16 space-y-2 sm:space-x-0">
              <RevealText delay={0.4}>
                <p className="about-age">
                  <span className="font-bold">Age</span>: {contactsData.age}
                </p>
              </RevealText>
              <RevealText delay={0.4}>
                <p className="about-email">
                  <span className="font-bold">Email</span>:{contactsData.email}
                </p>
              </RevealText>
              <RevealText delay={0.4}>
                <p className="about-phone">
                  <span className="font-bold">Phone</span>: {contactsData.phone}
                </p>
              </RevealText>
              <RevealText delay={0.4}>
                <p className="about-place">
                  <span className="font-bold">Place</span> : Udupi, Karnataka -
                  576107
                </p>
              </RevealText>
            </div>
          </div>
          <div className="experience-image w-3/12">
            <LazyLoadImage
              effect="opacity"
              src={abtimg}
              alt="experienceImage"
              className="mx-auto"
            />
          </div>
        </div>
      </ScrollRevealUpFade>

      <ScrollRevealUpFade>
        <div className="w-11/12 mx-auto">
          <RevealText delay={0.4}>
            <p className="text-2xl text-justify">
              <span className="text-transparent hidden sm:inline">
                empty space here
              </span>
              <span className="text-transparent sm:hidden inline">
                empty
              </span>
              Greetings,{" "}
              <span className="text-blue-800 font-semibold">I am Uttam</span>, a
              third-year Computer Science & Engineering student at{" "}
              <span className="text-blue-800 font-semibold">
                Mangalore Institute of Technology & Engineering, Mangalore
              </span>
              . Proficient in core programming languages such as C, Java, and
              Python, I excel in Full Stack Development. Possessing a robust
              foundation in mathematics and adept problem-solving skills, I
              continually enhance my capabilities through internships and
              projects. My passion lies in Software Engineering and Full Stack
              Development, where I actively pursue challenges, set ambitious
              learning goals, and remain attuned to emerging technologies.
            </p>
          </RevealText>
        </div>
      </ScrollRevealUpFade>

      <ScrollRevealUpFade>
        <Skills />
      </ScrollRevealUpFade>

      <ScrollRevealUpFade>
        <Experience />
      </ScrollRevealUpFade>
    </div>
  );
};

export default AboutPage;
