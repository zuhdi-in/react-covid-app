import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <nav className={"footer"}>
        <div className={"footer__left"}>
          <h1 className={"footer__brand"}>covidid</h1>
          <p>Created by daydeyo studio</p>
        </div>
        <div className={"footer__right"}>
          <ul className={"footer__list"}>
            <li className={"footer__item"}>Global</li>
            <li className={"footer__item"}>Indonesia</li>
            <li className={"footer__item"}>Provinsi</li>
            <li className={"footer__item"}>About</li>
          </ul>
        </div>
      </nav>  
    </StyledFooter>
  );
}

export default Footer;
