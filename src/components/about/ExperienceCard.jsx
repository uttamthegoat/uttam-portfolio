import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

/* eslint-disable react/prop-types */
const ExperienceCard = ({ id, company, jobtitle, duration }) => {
  return (
    <div key={id} className={`experience-card`}>
      <div className="expcard-img">
        <img src={expImgBlack} alt="" />
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
