import { useState } from "react";
import { Link } from "react-router-dom";

export const TopBar = (): JSX.Element => {
  const [menuActive, toggleMenu] = useState(false);

  const toggleMobileMenu = (): void => {
    toggleMenu(!menuActive);
  };

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand has-text-weight-semibold">
          <Link to="/" className="navbar-item">
            <p className="title green">TITLE</p>
          </Link>
          <a
            role="button"
            className={"navbar-burger navbar" + (menuActive ? " is-active" : "")}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={"navbar-menu" + (menuActive ? " is-active" : "")}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
