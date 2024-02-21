import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarItems } from "../../assets/constants";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-[100vw] md:w-[336px] h-[100vh] flex flex-col md:rounded-e-3xl">
      <div className="close-navbar py-10 flex justify-end px-6">
        <motion.div
          initial={{ x: -30, opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white bg-green-200 text-3xl px-3 py-2 cursor-pointer rounded-md"
          />
        </motion.div>
      </div>
      <div className="nav-Items flex flex-col items-center">
        {navbarItems.map((link) => (
          <motion.div
            key={link.id}
            initial={{ x: -200, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: link.id * 0.17,
              ease: "easeInOut", // Adjust easing as needed
            }}
            className="w-7/12 block mb-10 rounded-lg border-2 border-green-200 py-3 px-4 text-center cursor-pointer hover:bg-green-200 text-green-200 hover:text-black font-bold"
          >
            <Link key={link.id} to={link.to} className="">
              {link.navItem}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
