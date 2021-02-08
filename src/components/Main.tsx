import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../core/loader";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Gallery = React.lazy(() => import("./Gallery"));
const EmptyGallery = React.lazy(() => import("./EmptyGallery"));

const Main: React.FC = () => {
  return (
    <div className="main">
      <React.Suspense fallback={<Loader className="main-load" />}>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path={"/"} component={EmptyGallery} />
            <Route path={"/gallery"} component={Gallery} />
          </Switch>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default Main;
