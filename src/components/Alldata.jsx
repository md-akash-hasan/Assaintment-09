import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// export const Alldata = async () => {
//   let res = await fetch(`${process.env.NEXT_PUBLIC_BAKEND_URL}/allcars`, {
//     cache: "no-store",
//   });
//   let data = await res.json();
//   return data;
// };

export const Alldata = async ({ search = "", type = "" } = {}) => {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (type) params.set("type", type);

  const queryString = params.toString();
  const url = `${process.env.NEXT_PUBLIC_BAKEND_URL}/allcars${queryString ? `?${queryString}` : ""}`;

  let res = await fetch(url, {
    cache: "no-store",
  });

  let data = await res.json();
  return data;
};

export const Feature = async () => {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BAKEND_URL}/feature`);
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
    `${process.env.NEXT_PUBLIC_BAKEND_URL}/allcars/${session?.user?.email}`,
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  let data = await res.json();
  return data;
};
