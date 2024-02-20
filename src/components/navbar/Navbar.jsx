import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarItems } from "../../assets/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="close-navbar">
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="nav-Items">
        {navbarItems.map((link) => (
          <Link to={link.to} key={link.id}>
            {link.navItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
