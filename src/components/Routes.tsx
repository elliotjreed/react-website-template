import { Suspense, lazy } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Spinner } from "./Spinner";
import { TopBar } from "./TopBar";

const Home = lazy((): Promise<any> => import(/* webpackChunkName: "home" */ "./Home"));
const Contact = lazy((): Promise<any> => import(/* webpackChunkName: "contact" */ "./Contact"));
const Sitemap = lazy((): Promise<any> => import(/* webpackChunkName: "sitemap" */ "./Sitemap"));
const PageNotFound = lazy((): Promise<any> => import(/* webpackChunkName: "pagenotfound" */ "./PageNotFound"));

const Routes = (): Router => {
  return (
    <Router>
      <Link to="#main-content" className="skip-link">
        Skip to content
      </Link>
      <TopBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/sitemap" component={Sitemap} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
