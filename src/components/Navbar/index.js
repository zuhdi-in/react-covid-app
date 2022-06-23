// import HamburgerMenu from "../HamburgerMenu";
import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav className={"navbar"}>
        <div className={"navbar__left"}>
          <h1 className={"navbar__brand"}>covidid</h1>
        </div>
        <div className={"navbar__right"}>
          <ul className={"navbar__list"}>
            <li className={"navbar__item"}>
              <Link to="/">Home</Link>
            </li>
            <li className={"navbar__item"}>
              <Link to="/covid/indonesia">Indonesia</Link>
            </li>
            <li className={"navbar__item"}>
              <Link to="/covid/provinsi">Provinsi</Link>
            </li>
            <li className={"navbar__item"}>
              <Link to="/covid/about">About</Link>
            </li>
            
          </ul>
        </div>
        {/* <HamburgerMenu /> */}
      </nav>  
    </StyledNavbar>
  );
}

export default Navbar;
