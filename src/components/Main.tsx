import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Main;
