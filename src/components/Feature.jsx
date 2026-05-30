import { HandPointRight } from "@gravity-ui/icons";
import AllCarrs from "./uiverse/AllCars";
import { Feature } from "./Alldata";
import CarCart from "./CarCart";

const FeaturePage = async () => {
  let datas = await Feature();

  return (
    <div className="px-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between my-5   p-6 rounded-xl w-full">
        <div className="">
          <h1 className="text-[26px] sm:text-[28px] font-bold ">
            Available <span className="primaryColor"> Cars</span>
          </h1>
          <p className="flex gap-3 items-center text-muted">
            <HandPointRight /> 100% Trusted car rental platform in the World
          </p>
        </div>
        <div className="min-w-50   flex justify-end">
          <AllCarrs />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {datas.map((car) => (
          <CarCart key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;
