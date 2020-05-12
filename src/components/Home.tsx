import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Home = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <Helmet>
        <title>TITLE</title>
        <meta name="description" content="" />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">TITLE</h2>
                <h3 className="subtitle has-text-centered">SUBTITLE</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img className="is-rounded" src="https://via.placeholder.com/640" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Home;
