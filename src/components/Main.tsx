import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Gallery from "./Gallery";
// import Sidebar from "./Sidebar";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Gallery = React.lazy(() => import("./Gallery"));

const Main: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Route path={'/'}>
          <div className="main">
            <Sidebar />
            <Gallery />
          </div>
        </Route>
      </Router>
    </React.Suspense>
  );
};

export default Main;
