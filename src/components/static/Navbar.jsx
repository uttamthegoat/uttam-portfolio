import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { navbarItems } from "../../assets/constants";

const Navbar = () => {
  console.log(navbarItems);
  return (
    <nav className="nav">
      <div className="brand">
        <Link to={"/"}>Uttam</Link>
      </div>
      <div className="nav-links">
        {navbarItems.map((link) => (
          <Link to={link.to} key={link.id}>
            {link.navItem}
          </Link>
        ))}
        Hello
      </div>
    </nav>
  );
};

export default Navbar;
