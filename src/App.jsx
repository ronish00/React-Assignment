import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header";
import Hamburger from "./components/Icon/Hamburger";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div style={{display: "flex"}}>
      <Sidebar showNav={showNav} />
      <div className="main-right">
        <div style={{display: "flex", alignItems: "center"}}>
          <Header />
          <div className='menu' style={{marginRight: "24px"}} onClick={() => setShowNav(!showNav)}><Hamburger /></div>
        </div>
        <main style={{padding: "24px"}}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
