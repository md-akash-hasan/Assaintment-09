import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";
import Image from "next/image";
import { UpdateModal } from "./UpdateModal";
import { DeleteDalalok } from "./DeleteDiyalok";

export function MyCar({ car }) {
  const { image_url, car_name, description } = car;

  return (
    <Card className="flex flex-row gap-7 items-center p-4 w-full">
      {/* Image Container: এটি ইমেজকে সবসময় ৩00px চওড়া এবং ১৭৫px লম্বা রাখবে */}
      <div className="relative w-[300px] h-[175px] flex-shrink-0 overflow-hidden rounded-xl bg-accent">
        <Image
          src={image_url || car.imageUrl || "/placeholder-car.jpg"}
          alt={car_name || "Car"}
          fill
          sizes="300px"
          className="object-cover transition-transform duration-700 hover:scale-110"
          priority={false}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col  h-full flex-grow py-2">
        <div>
          {car_name && (
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              {car_name}
            </h3>
          )}
          <p className="text-sm text-gray-600 line-clamp-3">
            {description || "No Description "}
          </p>
        </div>

        <div className=" flex flex-col gap-2 items-start mt-5 -ml-4">
          <div>
            <UpdateModal car={car} />
            <DeleteDalalok car={car} />
          </div>
        </div>
      </div>
    </Card>
  );
}
