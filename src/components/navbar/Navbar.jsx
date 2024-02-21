import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarItems } from "../../assets/constants";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-[100vw] md:w-[336px] h-[100vh] flex flex-col md:rounded-e-3xl hidden">
      <div className="close-navbar py-10 flex justify-end px-6">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-white bg-green-200 text-3xl px-3 py-2 cursor-pointer rounded-md"
        />
      </div>
      <div className="nav-Items flex flex-col items-center space-y-9">
        {navbarItems.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group hover:cursor-pointer border-2 font-medium border-green-200 text-white w-7/12"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-green-200 transition duration-300 group-hover:text-black ease text-center block cursor-pointer">
              {link.navItem}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
