import { Bookingcar } from "@/components/Bookingcar";
import NoBooking from "@/components/NoBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const bookingCar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session.user);
  let user = session.user;
  console.log(user.email);
  let res = await fetch(
    `http://localhost:8000/booking/${session?.user?.email}`,
  );
  let datas = await res.json();
  return (
    <div>
      {datas.length > 0 ? (
        <div className="px-6">
          <h1 className="primaryColor font-bold text-[24px] my-3">
            MY Booking Total Car: {datas.length}
          </h1>
          <div className="flex flex-col gap-3">
            {datas.map((car) => (
              <Bookingcar key={car._id} car={car} />
            ))}
          </div>
        </div>
      ) : (
        <NoBooking />
      )}
    </div>
  );
};

export default bookingCar;
