import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Home = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>TITLE</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12">
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
      </main>
    </>
  );
};

export default Home;
