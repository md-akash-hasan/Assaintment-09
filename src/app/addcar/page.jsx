"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddCar = () => {
  const { data } = authClient.useSession();
  let user = data?.user;

  const [formData, setFormData] = useState({
    carName: "",
    dailyRent: "",
    carType: "Luxury",
    imageUrl: "",
    seatCapacity: "",
    pickupLocation: "",
    description: "",
    availability: "available",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let addcar = {
    car_name: formData.carName,
    daily_rent_price: formData.dailyRent,
    car_type: formData.carType,
    image_url: formData.imageUrl,
    seat_capacity: formData.seatCapacity,
    pickup_location: formData.pickupLocation,
    description: formData.description,
    availability_status: formData.availability,
    total_booking: 0,
    userName: user?.name,
    userEmail: user?.email,
    userImageUrl: user?.image,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { data: tokenData } = await authClient.token();
    let res = await fetch(`${process.env.NEXT_PUBLIC_BAKEND_URL}/addcar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData.token}`,
      },
      body: JSON.stringify(addcar),
    });
    let data = await res.json();
    if (data.acknowledged) {
      toast.success("Car Add Successful");
      e.target.reset();
      redirect(`/addcar/${user?.email}`);
    }
  };

  const inputClass =
    "w-full border border-divider rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition bg-default-100 text-foreground placeholder:text-default-400";

  const labelClass = "block text-sm font-medium text-default-600 mb-1";

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/x8qNZxkw/li900506-car-4148313.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* Overlay — dark mode-এ আরো গাঢ় */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />

      {/* Form */}
      <div className="relative z-10 w-full max-w-xl mx-auto py-6 px-4 sm:px-6 md:px-0">
        <div className="bg-background/85 dark:bg-default-100/80 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow border border-divider">
          <h1 className="text-xl font-bold text-primary mb-6">Add New Car</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Car Name + Daily Rent */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Car Name</label>
                <input
                  type="text"
                  name="carName"
                  onChange={handleChange}
                  placeholder="e.g. Toyota Camry"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Daily Rent ($)</label>
                <input
                  defaultValue={50}
                  type="number"
                  name="dailyRent"
                  onChange={handleChange}
                  placeholder="e.g. 120"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Car Type + Seat Capacity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Car Type</label>
                <select
                  defaultValue="Luxury"
                  name="carType"
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select Type</option>
                  <option>SUV</option>
                  <option>Sedan</option>
                  <option>Hatchback</option>
                  <option>Luxury</option>
                  <option>Van</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Seat Capacity</label>
                <input
                  type="number"
                  name="seatCapacity"
                  onChange={handleChange}
                  placeholder="e.g. 5"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className={labelClass}>Image URL</label>
              <input
                type="url"
                name="imageUrl"
                onChange={handleChange}
                placeholder="https://i.ibb.co/..."
                className={inputClass}
                required
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className={labelClass}>Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                onChange={handleChange}
                placeholder="e.g. Dhaka, Mirpur"
                className={inputClass}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                placeholder="Short description..."
                rows={3}
                className={inputClass + " resize-none"}
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className={labelClass}>Availability</label>
              <select
                name="availability"
                onChange={handleChange}
                className="w-full border border-divider rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition bg-default-100 text-foreground appearance-none cursor-pointer"
              >
                <option
                  disabled
                  value="available"
                  className="bg-background text-foreground"
                >
                  Select
                </option>
                <option
                  value="available"
                  className="bg-background text-foreground"
                >
                  ✅ Available
                </option>
                <option
                  value="unavailable"
                  className="bg-background text-foreground"
                >
                  ❌ Unavailable
                </option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] text-white font-semibold rounded-lg transition bg-[#ff3600]"
            >
              Add Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
