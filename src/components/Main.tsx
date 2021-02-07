import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "../core/loader";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Gallery = React.lazy(() => import("./Gallery"));

const Main: React.FC = () => {
  return (
    <div className="main">
      <React.Suspense fallback={<Loader className="main-load" />}>
        <Router>
          <Route path={"/"}>
            <Sidebar />
            <Gallery />
          </Route>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default Main;
