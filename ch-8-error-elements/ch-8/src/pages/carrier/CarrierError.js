import React from "react";
import { useRouteError, NavLink } from "react-router-dom";
function CarrierError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <NavLink to="/">Go to HomePage</NavLink>
    </div>
  );
}

export default CarrierError;
