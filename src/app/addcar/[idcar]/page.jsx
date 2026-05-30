import Details from "@/components/details";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const idCarPage = async ({ params }) => {
  let { token } = await auth.api.getToken({
    headers: await headers(),
  });
  let { idcar } = await params;
  console.log(idcar);

  const response = await fetch(
    `http://localhost:8000/allcars/last?email=${idcar}`,
    {
      headers: { authorization: `Bearer ${token}` },
    },
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
