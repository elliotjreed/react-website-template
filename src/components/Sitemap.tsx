import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Sitemap = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | TITLE</title>
        <meta name="description" content="Sitemap" />
      </Helmet>

      <main className="main-content">
        <div className="section-padded">
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
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sitemap;
