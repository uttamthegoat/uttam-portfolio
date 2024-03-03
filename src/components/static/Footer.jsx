import { NavHashLink } from "react-router-hash-link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { socialsData } from "../../data/socialsData";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer mt-auto">
      <div className="flex flex-col md:flex-row my-16">
        <div className="footer-left md:w-8/12">
          <div className="mx-auto w-10/12">
            <NavHashLink
              to={"/#home"}
              smooth={true}
              spy="true"
              duration={2000}
              className="footer-name mb-4"
            >
              Uttam
            </NavHashLink>
            <p className="text-2xl text-gray-900 font-semibold mb-10">
              Web Developer | Passionate Coder
            </p>
            <h2 className="text-4xl text-black">
              Living, Learning, and Leveling up,
            </h2>
            <h2 className="text-4xl text-black">One day at a time.</h2>
          </div>
        </div>
        <div className="footer-right w-10/12 md:w-4/12 flex flex-col mx-auto md:mx-0 md:items-start justify-center mt-20 md:mt-0">
          <p className="text-xl font-semibold mb-5">Connect with me at:</p>
          <div className="flex gap-4 ps-5">
            <a
              href={socialsData.github}
              target="_blank"
              rel="noreferrer"
              className="footer-connect"
            >
              <FaGithub />
            </a>
            <a
              href={socialsData.instagram}
              target="_blank"
              rel="noreferrer"
              className="footer-connect"
            >
              <FaInstagram />
            </a>
            <a
              href={socialsData.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="footer-connect"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialsData.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="footer-connect"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="text-md w-11/12 mx-auto ps-6 mb-4">
          Copyright©2024. All Rights Rreserved.
        </p>
      </div>

      <div className="border-t-2 border-t-black text-center py-2 font-semibold">
        <p className="text-2xl font-bold">Made with 😎</p>
        <span className="text-xl font-semibold text-black">By Uttam</span>{" "}
        <span className="font-normal text-xl text-gray-700">
          aka uttamthegoat
        </span>
      </div>
    </div>
  );
};

export default Footer;
