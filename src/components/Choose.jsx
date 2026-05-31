import React from "react";
import { DollarSign, ShieldCheck, CalendarRange } from "lucide-react";

const Choose = () => {
  const features = [
    {
      id: 1,
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Affordable Pricing",
      description:
        "No hidden charges or unexpected fees. What you see is exactly what you pay.",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "24/7 Roadside Assistance",
      description:
        "We've got your back anytime, anywhere. Reliable support whenever an emergency strikes.",
    },
    {
      id: 3,
      icon: <CalendarRange className="w-8 h-8 text-blue-600" />,
      title: "Flexible Bookings",
      description:
        "Plans changed? No worries. Easily cancel or modify your vehicle bookings with zero hassle.",
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Why Choose DriveFleet?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide premium vehicle selection, transparent rates, and
              seamless support to ensure your journey is perfect.
            </p>
            <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-6">
                  {React.cloneElement(feature.icon, {
                    className:
                      "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300",
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
