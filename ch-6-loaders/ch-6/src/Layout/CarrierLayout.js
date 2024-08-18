import React from "react";
import { Outlet } from "react-router-dom";
function CarrierLayout() {
  return (
    <div className="carrier_layout">
      <h2>Carriers</h2>
      <p>Welcome to ours carriers page </p>

      <Outlet />
    </div>
  );
}

export default CarrierLayout;
