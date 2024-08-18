import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadScrumb from "../components/BreadScrumb";

function RootLayout() {
  return (
    <div className="root-layout">
      <h1>React Router</h1>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contacts</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/carrier">Carrier</NavLink>
        </nav>
        <BreadScrumb></BreadScrumb>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
