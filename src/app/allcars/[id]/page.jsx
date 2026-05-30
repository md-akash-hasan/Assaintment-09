import Details from "@/components/details";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const idPage = async ({ params }) => {
  let { token } = await auth.api.getToken({
    headers: await headers(),
  });
  let { id } = await params;
  let res = await fetch(`http://localhost:8000/allcar/${id}`, {
    headers: { authorization: ` Bearer ${token}` },
  });
  let car = await res.json();

  return (
    <div>
      <Details car={car} />
    </div>
  );
};

export default idPage;
