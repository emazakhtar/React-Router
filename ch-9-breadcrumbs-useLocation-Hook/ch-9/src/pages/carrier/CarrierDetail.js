import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function CarrierDetail() {
  const { id } = useParams();
  const carrier = useLoaderData();

  return (
    <div>
      <h1>{carrier.title}</h1>
      <p>Based in: {carrier.location}</p>
      <span>Starting Salary: {carrier.salary}</span>
      <p>gysgdh ghdfuhsjhs hgdfujshdjs yuheriuwhd heuwhdu </p>
    </div>
  );
}

const carrierDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("this carrier is not available");
  }

  return res.json();
};
export default CarrierDetail;
export { carrierDetailLoader };
