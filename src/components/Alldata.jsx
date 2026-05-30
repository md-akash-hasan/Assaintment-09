import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const Alldata = async () => {
  let res = await fetch("http://localhost:8000/allcars");
  let data = await res.json();
  return data;
};

export const Feature = async () => {
  let res = await fetch("http://localhost:8000/feature");
  let data = await res.json();
  return data;
};
export const EmailData = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log(session?.user?.email);
  let res = await fetch(
    `http://localhost:8000/allcars/${session?.user?.email}`,
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  let data = await res.json();
  return data;
};
