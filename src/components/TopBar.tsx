import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops-universal.cjs";

export const TopBar = (): JSX.Element => {
  const [menuActive, toggleMenu] = useState(false);

  const menuClick = (): void => {
    toggleMenu(!menuActive);
  };

  return (
    <div className="header-wrapper" id="home">
      <section className="hero">
        <nav className="navbar is-transparent is-hidden-tablet">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1>TITLE</h1>
            </Link>
            <a
              data-target="mobile-nav"
              role="button"
              className={"navbar-burger burger navbar" + (menuActive ? " is-active" : "")}
              aria-label="menu"
              aria-expanded={menuActive ? "true" : "false"}
              onClick={menuClick}
            >
              <span />
              <span />
              <span />
            </a>
          </div>
          {menuActive ? (
            <Spring
              from={{
                opacity: 0,
                marginTop: 51
              }}
              to={{
                opacity: 1,
                marginTop: 0
              }}
            >
              {(props): JSX.Element => (
                <div id="mobile-nav" className={"navbar-menu" + (menuActive ? " is-active" : "")} style={props}>
                  <div className="navbar-end">
                    <div className="navbar-item">
                      <Link to="/" className="navbar-item" onClick={(): void => toggleMenu(false)}>
                        Home
                      </Link>
                    </div>
                    <div className="navbar-item">
                      <Link to="/gallery" className="navbar-item" onClick={(): void => toggleMenu(false)}>
                        Gallery
                      </Link>
                    </div>
                    <div className="navbar-item">
                      <Link to="/contact" className="navbar-item" onClick={(): void => toggleMenu(false)}>
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          ) : (
            null
          )}
        </nav>
        <div className="hero-foot is-hidden-mobile">
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
