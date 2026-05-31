"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Magnifier, Funnel } from "@gravity-ui/icons";

const CAR_TYPES = [
  "All",
  "Luxury",
  "SUV",
  "Sedan",
  "Sports",
  "Electric",
  "Hybrid",
  "Truck",
];

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentType = searchParams.get("type") || "All";

  const createQueryString = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== "All") {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });
      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    const query = createQueryString({ search: value });
    router.push(`${pathname}?${query}`, { scroll: false });
  };

  const handleTypeFilter = (type) => {
    const query = createQueryString({ type });
    router.push(`${pathname}?${query}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
          <Magnifier width={18} height={18} />
        </span>
        <input
          type="text"
          defaultValue={currentSearch}
          onChange={handleSearch}
          placeholder="Search by car name..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Car Type Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-muted text-sm flex items-center gap-1">
          <Funnel width={14} height={14} />
        </span>
        {CAR_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeFilter(type)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer
              ${
                currentType === type ||
                (type === "All" && currentType === "All")
                  ? "bg-[#ff3600] text-black shadow-sm"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
