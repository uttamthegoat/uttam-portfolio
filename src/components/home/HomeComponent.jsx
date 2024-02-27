import { Link } from "react-router-dom";
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

const HomeComponent = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row">
      {/* image */}
      <div className="home-image hidden md:block md:w-[400px] md:h-[400px] absolute rounded-full">
        <LazyLoadImage
          effect="opacity"
          src={headerData.image}
          alt="profileImage"
          className="rounded-full"
        />
      </div>
      {/* left */}
      <div className="w-full h-[80vh] md:w-[40%] flex items-end relative">
        <div className="home-image md:hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] absolute rounded-full">
          <LazyLoadImage
            effect="opacity"
            src={headerData.image}
            alt="profileImage"
            className="rounded-full"
          />
        </div>
        <div className="social-media w-full flex justify-center md:space-x-8 pb-7">
          <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedin className="landing--social" aria-label="LinkedIn" />
          </a>
          <a href={socialsData.github} target="_blank" rel="noreferrer">
            <FaGithub className="landing--social" aria-label="GitHub" />
          </a>
          <a href={socialsData.twitter} target="_blank" rel="noreferrer">
            <FaTwitter className="landing--social" aria-label="Twitter" />
          </a>
          <a href={socialsData.youtube} target="_blank" rel="noreferrer">
            <FaYoutube className="landing--social" aria-label="YouTube" />
          </a>
          <a href={socialsData.instagram} target="_blank" rel="noreferrer">
            <FaInstagram className="landing--social" aria-label="Instagram" />
          </a>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-[60%] bg-black md:h-[80vh] flex flex-col justify-center items-center text-white py-8">
        <div className="text-white w-11/12 sm:8/12 md:w-6/12 px-2 md:px-0">
          <h1 className="text-gray-400 text-xl sm:text-3xl font-semibold mb-2">
            {headerData.title}
          </h1>
          <p className="text-white text-4xl sm:text-6xl font-bold mb-5">
            {headerData.name}
          </p>
          <p
            className="text-gray-300 font-bold"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            {headerData.desciption}
          </p>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-around md:justify-between mt-7 w-6/12 sm:w-full mx-auto">
            <a
              href={headerData.resumePdf}
              download="resume"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-white border-4 rounded-full border-green-200 px-2 py-2 font-semibold md:w-[160px] hover:bg-green-200 hover:text-black text-center"
            >
              Download CV
            </a>
            <Link
              to={"/contact"}
              className="cursor-pointer text-black border-4 rounded-full border-green-200 bg-green-200 px-2 py-2 font-semibold text:lg sm:text-xl md:w-[160px] text-center hover:bg-black hover:text-green-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
