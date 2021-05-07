import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Sitemap = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Sitemap | TITLE</title>
        <meta name="description" content="Sitemap" />
      </Helmet>

      <main id="main-content" className="container">
        <div className="columns is-multiline has-text-centered">
          <div className="column is-12">
            <h2 className="title">Sitemap</h2>
          </div>
          <div className="column is-12">
            <p className="content">Links on this website:</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sitemap;
