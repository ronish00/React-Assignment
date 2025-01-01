import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar"

const App = () => {
  return (
    <div style={{display: "flex", gap: "24px"}}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default App;
