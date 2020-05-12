import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Sitemap = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <Helmet>
        <title>Sitemap | TITLE</title>
        <meta name="description" content="Sitemap" />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12">
                <h2 className="title has-text-centered section-title">Sitemap</h2>
              </div>
              <div className="column is-12">
                <p className="has-text-centered content">Links on this website:</p>
                <ul className="has-text-centered">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Sitemap;
