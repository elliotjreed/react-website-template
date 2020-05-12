import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as ReactGA from "react-ga";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const About = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <Helmet>
        <title>About | TITLE</title>
        <meta name="description" content="About" />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Welcome</h2>
              </div>
              <div className="column is-12 content">
                <p className="has-text-centered">About</p>
                <p className="has-text-centered">
                  Contact me here <Link to="/contact">give me a message!</Link>
                </p>
              </div>
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img className="is-rounded" src="https://via.placeholder.com/640" alt="Photograph" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default About;
