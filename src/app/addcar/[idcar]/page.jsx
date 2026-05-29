import Details from "@/components/details";
import React from "react";

const idCarPage = async ({ params }) => {
  let { idcar } = await params;
  console.log(idcar);

  const response = await fetch(
    `http://localhost:8000/allcars/last?email=${idcar}`,
  );
  const lastCar = await response.json();
  let car = lastCar;

  return (
    <div>
      <Details car={car} />
    </div>
  );
};

export default idCarPage;
