"use client";
import { redirect } from "next/navigation";
import { MdDelete, MdDeleteSweep } from "react-icons/md";
import { toast } from "react-toastify";
import { DeleteBookinDiyalok } from "./BookingDeleteDiyalok";
import { authClient } from "@/lib/auth-client";

export function Bookingcar({ car }) {
  const { car_image, car_name, daily_rent_price, booking_date, car_location } =
    car;
  let id = car?._id;

  const formattedDate = new Date(booking_date).toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let hendelDelate = async () => {
    let { data: tokenData } = await authClient.token();
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BAKEND_URL}/booking/${id}`,
      {
        method: "DELETE",
        headers: { authorization: `Bearer ${tokenData}` },
      },
    );
    let data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
      toast.error("Delete Car Success");
      redirect(`/booking`);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl flex items-center gap-4 px-4 py-3 shadow-xl">
      {/* Car Image */}
      <div className="w-[88px] min-w-[88px] h-16 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={car_image || "/placeholder-car.jpg"}
          alt={car_name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 mb-1">{car_name}</p>
        <p className="text-xs text-gray-500 flex items-center gap-1 mb-0.5">
          📍 {car_location || "Uttara, Dhaka"}
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          📅 {formattedDate}
        </p>
        {/* Price */}
        <p className="text-sm font-semibold text-gray-900 mt-1">
          ${daily_rent_price}
        </p>
      </div>

      {/* Delete Button */}
      <div>
        <DeleteBookinDiyalok car={car} />
      </div>
    </div>
  );
}
