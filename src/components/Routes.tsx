import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { Spinner } from "./Spinner";
import { TopBar } from "./TopBar";
import "./../assets/scss/App.scss";

const Home = React.lazy((): Promise<any> => import(/* webpackChunkName: "home" */ "./Home"));
const Gallery = React.lazy((): Promise<any> => import(/* webpackChunkName: "gallery" */ "./Gallery"));
const Contact = React.lazy((): Promise<any> => import(/* webpackChunkName: "contact" */ "./Contact"));
const Sitemap = React.lazy((): Promise<any> => import(/* webpackChunkName: "sitemap" */ "./Sitemap"));
const PageNotFound = React.lazy((): Promise<any> => import(/* webpackChunkName: "pagenotfound" */ "./PageNotFound"));

const history = createBrowserHistory();

const Routes = (): Router => {
  return (
    <Router history={history}>
      <TopBar />
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/gallery" component={Gallery} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/sitemap" component={Sitemap} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
