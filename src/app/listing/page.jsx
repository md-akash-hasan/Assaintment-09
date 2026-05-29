import { HandPointRight } from "@gravity-ui/icons";

import { EmailData } from "@/components/Alldata";
import CarCart from "@/components/CarCart";
import { MyCar } from "@/components/MyCars";
import Link from "next/link";

const listingPage = async () => {
  let datas = await EmailData();

  return (
    <div className="px-6">
      <div>
        {datas && datas.length > 0 ? (
          <div>
            <div className=" my-5">
              <h1 className="text-[26px] sm:text-[28px] font-bold text-gray-800 tracking-tight">
                <span className="primaryColor">My</span> Total Cars
              </h1>
              <p className="flex gap-2 items-center text-sm text-gray-500 mt-1">
                All My Cars
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {datas.map((car) => (
                <MyCar key={car._id} car={car} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center h-[90vh]">
            <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-50 border border-dashed border-gray-200 rounded-2xl max-w-md mx-auto my-8 ">
              <div className="text-5xl mb-4">🚗</div>

              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                No Cars Available
              </h1>

              <p className="text-gray-500 text-sm mb-6 max-w-sm">
                You havent added any cars yet. Please add a car to get started
                with your listing.
              </p>

              <Link
                href="/addcar"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Add Car
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default listingPage;
