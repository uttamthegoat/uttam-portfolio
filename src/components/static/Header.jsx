import { Link } from "react-router-dom";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="header">
      <div className="brand">
        <Link to={"/"}>Uttam</Link>
      </div>
      <div className="nav-links">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Header;
