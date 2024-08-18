import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <header>
        <nav>
          <NavLink to="faq">Faq</NavLink>
          <NavLink to="contactus">Contact us</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HelpLayout;
