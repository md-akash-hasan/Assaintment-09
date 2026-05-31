import Details from "@/components/details";

import React from "react";

const idPage = async ({ params }) => {
  let { id } = await params;
  console.log(
    "Fetching:",
    `${process.env.NEXT_PUBLIC_BAKEND_URL}/allcar/${id}`,
  );
  let res = await fetch(`${process.env.NEXT_PUBLIC_BAKEND_URL}/allcar/${id}`);
  let car = await res.json();

  console.log(car);

  return (
    <div>
      <Details car={car} />
    </div>
  );
};

export default idPage;
