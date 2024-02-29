import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RevealText from "../../utils/RevealText";

/* eslint-disable react/prop-types */
const ExperienceCard = ({ id, company, jobtitle, duration }) => {
  return (
    <div
      key={id}
      className={`experience-card shadow-xl shadow-gray-400 sm:p-6 p-2`}
    >
      <div className="expcard-img">
        <LazyLoadImage
          effect="opacity"
          src={expImgBlack}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="experience-details">
        <RevealText delay={0.4}>
          <h6 className="font-semibold">{duration}</h6>
        </RevealText>
        <RevealText delay={0.4}>
          <h4 className="font-semibold text-2xl">{jobtitle}</h4>
        </RevealText>
        <RevealText delay={0.4}>
          <h5 className="font-semibold text-2xl">{company}</h5>
        </RevealText>
      </div>
    </div>
  );
};

export default ExperienceCard;
