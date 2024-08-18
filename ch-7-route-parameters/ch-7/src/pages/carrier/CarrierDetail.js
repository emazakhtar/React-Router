import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function CarrierDetail() {
  const { id } = useParams();
  const carrier = useLoaderData();

  return (
    <div>
      <h1>{carrier.title}</h1>
      <p>Based in {carrier.location}</p>
      <span>Starting Salary {carrier.salary}</span>
    </div>
  );
}

const carrierDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  return res.json();
};
export default CarrierDetail;
export { carrierDetailLoader };
