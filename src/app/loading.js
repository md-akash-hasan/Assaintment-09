import React from "react";
import { Car } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
      <div className="relative flex flex-col items-center">
        {/* Outer Spinning Ring */}
        <div className="w-24 h-24 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Inner Car Icon with Pulse Effect */}
        <div className="absolute top-7 animate-pulse text-blue-600">
          <Car className="w-10 h-10" />
        </div>

        {/* Loading Text & Status */}
        <h3 className="mt-8 text-xl font-bold text-gray-800 tracking-wide animate-pulse">
          Preparing Your Ride...
        </h3>

        <p className="mt-2 text-sm text-gray-500 font-medium">
          Fetching the best fleet for you. Please wait.
        </p>
      </div>
    </div>
  );
};

export default Loading;
