import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

/* eslint-disable react/prop-types */
const ExperienceCard = ({ id, company, jobtitle, duration }) => {
  return (
    <div key={id} className={`experience-card shadow-xl shadow-gray-400 sm:p-6 p-2`}>
      <div className="expcard-img">
        <LazyLoadImage
          effect="opacity"
          src={expImgBlack}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="experience-details">
        <h6 className="font-semibold">{duration}</h6>
        <h4 className="font-bold text-3xl">{jobtitle}</h4>
        <h5 className="font-bold text-3xl">{company}</h5>
      </div>
    </div>
  );
};

export default ExperienceCard;
