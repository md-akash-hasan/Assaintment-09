import { Card } from "@heroui/react";
import Image from "next/image";
import { UpdateModal } from "./UpdateModal";
import { DeleteDalalok } from "./DeleteDiyalok";

export function MyCar({ car }) {
  const { image_url, car_name, description } = car;

  return (
    <Card
      className="
      flex flex-col sm:flex-row   {/* Mobile: column, SM+: row */}
      gap-4 sm:gap-7
      items-center
      p-4
      w-full
    "
    >
      {/* Image Container */}
      <div
        className="
        relative
        w-full sm:w-[300px]        {/* Mobile: full width, SM+: fixed 300px */}
        h-[200px] sm:h-[175px]    {/* Mobile: একটু বড়, SM+: 175px */}
        flex-shrink-0
        overflow-hidden
        rounded-xl
        bg-accent
      "
      >
        <Image
          src={image_url || car.imageUrl || "/placeholder-car.jpg"}
          alt={car_name || "Car"}
          fill
          sizes="(max-width: 640px) 100vw, 300px"
          className="object-cover transition-transform duration-700 hover:scale-110"
          priority={false}
        />
      </div>

      {/* Content Container */}
      <div
        className="
        flex flex-col
        h-full flex-grow
        py-2
        w-full sm:w-auto          {/* Mobile: full width */}
      "
      >
        <div>
          {car_name && (
            <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">
              {car_name}
            </h3>
          )}
          <p className="text-sm text-gray-600 line-clamp-3">
            {description || "No Description"}
          </p>
        </div>

        <div className="flex gap-3 items-center mt-5 ">
          <UpdateModal car={car} />
          <DeleteDalalok car={car} />
        </div>
      </div>
    </Card>
  );
}
