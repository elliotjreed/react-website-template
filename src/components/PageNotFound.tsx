import { ReactElement } from "react";
import { Helmet } from "react-helmet";

const PageNotFound = (): ReactElement => {
  return (
    <>
      <Helmet>
        <title>Not Found | TITLE</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <main id="main-content" className="container">
        <div className="columns is-multiline">
          <div className="column is-12 has-text-centered">
            <h2 className="title">Page Not Found</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
