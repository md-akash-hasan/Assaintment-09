import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookingModal } from "./BookingModal";

const Details = ({ car }) => {
  console.log(car);
  const {
    car_name,
    daily_rent_price,
    car_type,
    image_url,
    seat_capacity,
    pickup_location,
    description,
    availability_status,
    total_booking,
  } = car || {};

  const specCard =
    "flex flex-col items-center bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm";

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden flex items-center">
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-white opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-gray-400 opacity-20 blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:justify-between">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-5">
          <span className="inline-block w-fit px-3 py-1 text-xs font-bold tracking-widest uppercase bg-black text-white rounded-full">
            {car_type || "Car Type"}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-tight">
            {car_name || "Car Name"}
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            {description || "No description available."}
          </p>

          <div className="flex flex-wrap gap-3 mt-1">
            <div className={specCard}>
              <span className="text-base md:text-lg font-black text-gray-900">
                ${daily_rent_price}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Per Day
              </span>
            </div>
            <div className={specCard}>
              <span className="text-base md:text-lg font-black text-gray-900">
                {seat_capacity}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Seats
              </span>
            </div>
            <div className={specCard}>
              <span className="text-base md:text-lg font-black text-gray-900">
                {total_booking ?? 0}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Bookings
              </span>
            </div>
            <div className={specCard}>
              <span
                className={`text-base md:text-lg font-black ${availability_status ? "text-green-600" : "text-red-500"}`}
              >
                {availability_status ? "Yes" : "No"}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Available
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            <span className="text-gray-800">📍</span>
            {pickup_location || "Location not set"}
          </p>

          <div className="flex gap-3 mt-1 flex-wrap">
            <BookingModal car={car} />

            <Link
              href="/allcars"
              className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Back to Cars
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full lg:flex-1 ">
          <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[480px] lg:h-[480px] rounded-full bg-white opacity-30 blur-3xl" />
          <Image
            src={image_url || "/car-placeholder.png"}
            alt={car_name}
            width={600}
            height={400}
            className="relative z-10 w-full max-h-[270px] sm:max-h-[350px] md:max-h-[400px] object-cover  mx-auto object-contain drop-shadow-2xl shadow-2xl shadow-sky-500 rounded-2xl lg:rounded-tl-[60px] lg:rounded-br-[60px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
