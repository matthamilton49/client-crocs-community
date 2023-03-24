import logo from "../images/crocs-logo.png";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <img
        src={logo}
        width="100"
        height="100"
        class="d-inline-block align-top"
        alt="Berlin Crocodile Logo"
      />
      <h3>Crocs Communit</h3>
      <p>HOME</p>
      
    </nav>
  );
};

export default NavBar;
