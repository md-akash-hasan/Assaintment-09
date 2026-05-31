// import { HandPointRight } from "@gravity-ui/icons";

// import { Alldata } from "@/components/Alldata";
// import CarCart from "@/components/CarCart";

// const explorePage = async () => {
//   let datas = await Alldata();

//   return (
//     <div className="px-6 mb-6">
//       <div className=" flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between  my-5">
//         <div className="">
//           <h1 className="text-[26px] sm:text-[28px] font-bold">
//             <span className="primaryColor">Explore Car:</span> All Popular Cars
//           </h1>
//           <p className="flex gap-3 items-center text-muted">
//             <HandPointRight /> 100% Trusted car rental platform in the World
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
//         {datas.map((car) => (
//           <CarCart key={car._id} car={car} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default explorePage;

import { HandPointRight } from "@gravity-ui/icons";
import { Alldata } from "@/components/Alldata";
import CarCart from "@/components/CarCart";
import SearchFilter from "@/components/SearchFilter";
import { Suspense } from "react";

// searchParams আসে Next.js App Router থেকে automatically
const explorePage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const search = resolvedParams?.search || "";
  const type = resolvedParams?.type || "";

  // Alldata() কে params দিয়ে call করব — backend query এখানে যাবে
  let datas = await Alldata({ search, type });

  return (
    <div className="px-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between my-5">
        <div>
          <h1 className="text-[26px] sm:text-[28px] font-bold">
            <span className="primaryColor">Explore Car:</span> All Popular Cars
          </h1>
          <p className="flex gap-3 items-center text-muted">
            <HandPointRight /> 100% Trusted car rental platform in the World
          </p>
        </div>
        {/* Result count */}
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-foreground">{datas.length}</span>{" "}
          cars
        </p>
      </div>

      {/* Search & Filter — Suspense দিয়ে wrap করতে হবে কারণ useSearchParams() আছে */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <SearchFilter />
      </Suspense>

      {/* Car Grid */}
      {datas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {datas.map((car) => (
            <CarCart key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted">
          <p className="text-lg font-medium">No cars found</p>
          <p className="text-sm mt-1">Try a different search or filter</p>
        </div>
      )}
    </div>
  );
};

export default explorePage;
