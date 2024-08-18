import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadScrumb() {
  const location = useLocation();
  // console.log(location);
  let currentLink = "";
  const crubmsString = location.pathname;
  const crubmsArray = crubmsString.split("/");
  const crubms = crubmsArray.filter((cr) => {
    return cr !== "";
  });

  crubms.map((c) => {
    currentLink += `/${c}`;
    return (
      <div className="crubm" key={c}>
        <Link to={currentLink}>{c}</Link>
      </div>
    );
  });
  return (
    <div>
      <h2> {crubms}</h2>
    </div>
  );
}

export default BreadScrumb;
