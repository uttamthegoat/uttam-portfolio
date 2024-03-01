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
              <h1 className="text-5xl font-extrabold pt-4 mb-5 md:w-8/12 md:mx-auto text-center md:text-start">
                About <span style={{ color: "#7a7a7a" }}>Me</span>
              </h1>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-4xl font-bold md:w-8/12 mb-4">I'm Uttam.</p>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-2xl font-semibold mb-3">
                Full Stack Developer and Aspiring Software Engineer
              </p>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-xl sm:text-2xl italic">
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
            <p className="text-2xl">
              Hi! I am Uttam, an enthusiastic engineering student with a passion
              for web development. Constantly driven by the desire to explore
              new horizons, I find joy in unraveling the intricacies of
              technology. When not immersed in coding, I embark on thrilling
              trekking adventures, seeking the perfect blend of challenge and
              serenity. Eager to merge my love for innovation with the vast
              possibilities of the web, I am on a journey to carve my niche in
              the ever-evolving world of technology.
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
