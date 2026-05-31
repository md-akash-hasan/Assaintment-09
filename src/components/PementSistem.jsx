import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const PementSistem = () => {
  const items = [
    {
      id: 1,
      text: "bKash Payment",
      carimage:
        "https://i.ibb.co.com/DPZYSps6/bkash-logo-png-seeklogo-382709.png",
    },
    {
      id: 2,
      text: "Nagad Payment",
      carimage:
        "https://i.ibb.co.com/gZdWcw7z/Screenshot-2026-05-30-152225.png",
    },
    {
      id: 3,
      text: "Roket Payment",
      carimage: "https://i.ibb.co.com/0RRg6rk2/images.png",
    },
    {
      id: 4,
      text: "Upay payment",
      carimage: "https://i.ibb.co.com/RpXmN1dw/www.jpg",
    },
    {
      id: 5,
      text: "SureCash",
      carimage: "https://i.ibb.co.com/nqw2Z5dr/qqqqq.png",
    },
    {
      id: 6,
      text: "Visa Payment",
      carimage: "https://i.ibb.co.com/jZHGkGjr/bbbb.png",
    },
  ];
  return (
    <div>
      <h1 className="sm:text-[30px] text-[25px] font-bold uppercase text-center my-6">
        Payment sistem
      </h1>
      <div className="">
        <Marquee
          pauseOnHover
          gradientWidth={200}
          gradientColor="white"
          speed={50}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="mx-4 flex flex-col items-center gap-2"
            >
              {/* fill এর জন্য relative এবং fixed size দরকার */}
              <div className="relative w-[130px] h-[70px] sm:w-[200px] sm:h-[120px]">
                <Image
                  alt={item.text}
                  src={item.carimage}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="text-sm font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PementSistem;
