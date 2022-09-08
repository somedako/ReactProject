import { useState } from "react";
import "./Header.css";
import logo from "../img/logo.svg";

function Header() {
  const nav = {
    main: "/",
    routing: "/routing",
    features: "/features",
    testimonials: "/testimonials",
    contacts: "/contacts",
  };

  const [isActive, setActive] = useState("true");

  const navToggleClick = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img className="img" src={logo} alt="logo" />
          <nav className={isActive ? "nav" : "navShow"}>
            {Object.keys(nav).map((elem) => {
              return (
                <a className="nav__link" key={elem} href={nav[elem]}>
                  {elem}
                </a>
              );
            })}
          </nav>
          <button className="btn header__btn">login</button>
          <button className="burger" onClick={navToggleClick}>
            <img src="../img/burger.svg" alt="icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
