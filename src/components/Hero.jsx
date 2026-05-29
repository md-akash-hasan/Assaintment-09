// components/home/HeroPage.jsx
import React from "react";
import { Alldata } from "./Alldata";
import Link from "next/link";

const HeroPage = async () => {
  let data = await Alldata();

  return (
    <section className="relative min-h-[560px] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.55), rgba(20,20,20,0.55)), 
            url('https://i.ibb.co.com/bfQzV9v/Avanti-car-hero-result.jpg')`,
        }}
      />

      <div className="relative z-10 max-w-2xl px-6 py-16">
        <p className="text-xs tracking-widest uppercase text-white/70 mb-4">
          Car Rental Platform Our Total Cars:
          {data.length > 9 ? " " + data.length : " " + "0" + data.length}
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
          <span className="md:text-6xl font-black">
            {" "}
            Where <span className="primaryColor"> your journey</span>
          </span>{" "}
          <br /> starts with us
          <span className="primaryColor">.</span>
        </h1>

        <p className="text-white/80 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Find the perfect car for every trip — city drives, road trips, or
          airport runs. Fast booking, great prices.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href={`/allcars`}>
            <button className="bg-[#ff5c35] hover:bg-[#e44d28] text-white font-medium px-7 py-3 rounded-md transition-colors">
              Book a car
            </button>
          </Link>
          <button className="bg-white hover:bg-white/90 text-[#ff5c35] font-medium px-7 py-3 rounded-md border-2 border-white transition-colors">
            Browse fleet
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
