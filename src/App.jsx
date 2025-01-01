import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header";

const App = () => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "16% 84%"}}>
      <Sidebar />
      <div style={{width: "100%"}}>
        <Header />
        <main style={{padding: "24px"}}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
