import "./About.css";
import abtimg from "../../assets/svg/about/blueTheme-boy.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skills from "./Skills";
import Experience from "./Experience";
import RevealText from "../../utils/RevealText";
import { ScrollRevealUpFade } from "../../utils/ScrollReveal";

const AboutPage = () => {
  return (
    <div className="About pt-5 pb-10">
      <ScrollRevealUpFade>
        <div className="background w-full flex md:flex-row flex-col-reverse items-center md:justify-around py-10">
          <div className="background-text w-11/12 md:w-6/12">
            <RevealText delay={0.4}>
              <h1 className="text-5xl font-bold pt-4 mb-5 md:w-8/12 md:mx-auto text-center md:text-start">
                About
              </h1>
            </RevealText>
            <RevealText delay={0.4}>
              <p className="text-2xl font-semibold md:w-8/12 mx-auto">
                My name is Uttam, an enthusiastic engineering student with a
                passion for web development. Constantly driven by the desire to
                explore new horizons, I find joy in unraveling the intricacies
                of technology. When not immersed in coding, I embark on
                thrilling trekking adventures, seeking the perfect blend of
                challenge and serenity. Eager to merge my love for innovation
                with the vast possibilities of the web, I am on a journey to
                carve my niche in the ever-evolving world of technology.
              </p>
            </RevealText>
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
        <Skills />
      </ScrollRevealUpFade>

      <ScrollRevealUpFade>
        <Experience />
      </ScrollRevealUpFade>
    </div>
  );
};

export default AboutPage;
