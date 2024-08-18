import React from "react";
import "./Carrier.css";
import { useLoaderData, NavLink } from "react-router-dom";
function Carrier() {
  const carriers = useLoaderData();
  return (
    <div>
      {carriers.map((carrier) => {
        return (
          <NavLink to={carrier.id.toString()} key={carrier.id}>
            <div className="carrier_item">
              <h2>{carrier.title}</h2>
              <p>{carrier.location}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

const carriersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  return res.json();
};
export default Carrier;
export { carriersLoader };
