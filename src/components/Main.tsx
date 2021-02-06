import React from "react";
// import Gallery from "./Gallery";
// import Sidebar from "./Sidebar";

const Sidebar = React.lazy(() => import("./Sidebar"));
const Gallery = React.lazy(() => import("./Gallery"));

const Main: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="main">
        <Sidebar />
        <Gallery />
      </div>
    </React.Suspense>
  );
};

export default Main;
