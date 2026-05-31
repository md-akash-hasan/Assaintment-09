import {
  ArrowsOppositeToDots,
  Bookmark,
  CircleInfo,
  CircleInfoFill,
} from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaGasPump,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { GiGearStickPattern, GiSteeringWheel } from "react-icons/gi";

const CarCart = ({ car }) => {
  const {
    image_url,
    car_name,
    car_type,
    pickup_location,
    daily_rent_price,
    seat_capacity,
    total_booking,
    mileage,
    fuelType,
    steering,
    year,
    seats,

    transmission,
    _id,
    userImageUrl,
    userName,
  } = car;

  return (
    <div className="relative  rounded-2xl overflow-hidden bg-white shadow-md  hover:shadow-xl transition-all duration-300">
      {/* Image Section */}
      <Link href={`/allcars/${_id}`}>
        <div className="relative w-full h-48">
          <Image
            src={image_url || car.imageUrl || "/placeholder-car.jpg"}
            alt={car_name || "Car"}
            fill
            className="w-full h-full object-cover hover:scale-110 duration-800"
          />
        </div>
      </Link>
      <div className="absolute text-[14px] font-bold top-3 py-1 rounded-xl px-3 left-3 z-30 text-red-50 bg-[#ff3600]">
        <h1>{car_type} </h1>
      </div>
      <div className="absolute right-5 top-43">
        <div>
          <Avatar>
            <Avatar.Image
              referrerPolicy="no-referrer"
              alt={userName || "Oner"}
              src={userImageUrl || car.imageUrl || "/placeholder-car.jpg"}
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pt-8 pb-4">
        {/* Car Name */}
        <h2 className="text-xl font-bold text-teal-600 mb-4">{car_name}</h2>

        {/* Specs Grid */}
        <div className="flex justify-between gap-2.5 mb-4">
          <div className="flex items-center  gap-1.5 text-sm text-gray-500">
            <ArrowsOppositeToDots className="text-gray-400 text-base shrink-0" />
            <span>
              {seat_capacity > 9
                ? " " + seat_capacity
                : " " + "0" + seat_capacity}
            </span>
          </div>
          <div className="flex items-center  gap-1.5 text-sm text-gray-500">
            <Bookmark />
            <h1>Total Bookin: </h1>
            <span>
              {total_booking > 9
                ? " " + total_booking
                : " " + "0" + total_booking}
            </span>
          </div>
        </div>

        {/* Price & Location Row */}
        <div className="flex justify-between items-center bg-gray-100 rounded-xl px-4 py-2.5 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>{pickup_location}</span>
          </div>
          <div>
            Starting From{" "}
            <strong className="text-red-500 text-lg font-extrabold mx-1">
              ${daily_rent_price}
            </strong>{" "}
            Day
          </div>
        </div>

        {/* Rent Now Button */}
        <Link
          href={`/allcars/${_id}`}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#ff3600] hover:scale-105 text-white text-base font-semibold rounded-xl transition-all duration-300"
        >
          <CircleInfoFill />
          Car Details
        </Link>
      </div>
    </div>
  );
};

export default CarCart;
