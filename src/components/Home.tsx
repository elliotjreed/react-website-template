import * as React from "react";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";

const Home = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>TITLE</title>
        <meta name="description" content="" />
      </Helmet>

      <main className="main-content">
        <div className="container">
          <div className="columns is-multiline has-text-centered">
            <div className="column is-12">
              <h2 className="title">TITLE</h2>
              <h3 className="subtitle">SUBTITLE</h3>
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
      </main>
    </>
  );
};

export default Home;
