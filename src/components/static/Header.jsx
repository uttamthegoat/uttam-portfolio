import { Link } from "react-router-dom";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebar";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { toggleSidebar } = useContext(SidebarContext);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="header fixed"
    >
      <motion.div
        initial={{ y: -10, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="brand"
      >
        <Link to={"/"} className="name-link cursor-pointer">
          Uttam
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hamburger"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
      </motion.div>
    </motion.nav>
  );
};

export default Header;
