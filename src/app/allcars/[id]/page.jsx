import Details from "@/components/details";
import React from "react";

const idPage = async ({ params }) => {
  let { id } = await params;
  let res = await fetch(`http://localhost:8000/allcar/${id}`);
  let car = await res.json();

  return (
    <div>
      <Details car={car} />
    </div>
  );
};

export default idPage;
