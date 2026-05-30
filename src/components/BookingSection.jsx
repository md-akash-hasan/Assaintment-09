import React from "react";
import { Search, CalendarCheck, Key } from "lucide-react";

const BookingSection = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Browse & Choose",
      description:
        "Explore our extensive fleet of modern vehicles to find the perfect ride that matches your destination and style.",
    },
    {
      id: 2,
      icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
      title: "Book Safely",
      description:
        "Select your dates, specify if you need a professional driver, and securely confirm your booking within seconds.",
    },
    {
      id: 3,
      icon: <Key className="w-8 h-8 text-blue-600" />,
      title: "Collect & Drive",
      description:
        "Pick up the keys from your designated location or have it delivered, and kickstart your smooth journey.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Drive in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Renting a premium vehicle has never been this seamless. Follow these
            three quick steps to hit the road.
          </p>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Badge / Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md border-4 border-white group-hover:scale-110 transition-transform duration-300">
                {step.id}
              </div>

              {/* Icon Box */}
              <div className="p-6 bg-blue-50 rounded-full border border-blue-100/50 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-blue-200">
                {React.cloneElement(step.icon, {
                  className:
                    "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300",
                })}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
