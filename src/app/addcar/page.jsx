"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddCar = () => {
  const [formData, setFormData] = useState({
    carName: "",
    dailyRent: "",
    carType: "",
    imageUrl: "",
    seatCapacity: "",
    pickupLocation: "",
    description: "",
    availability: "available",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let res = await fetch("http://localhost:8000/addcar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    let data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      toast.success("Car Add Successful");
      e.target.reset();
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400";

  return (
    <div className="w-full max-w-xl mx-auto my-6 px-4 sm:px-6 md:px-0">
      <div className="bg-white p-5 sm:p-8 rounded-2xl shadow">
        <h1 className="text-xl font-bold primaryColor mb-6">Add New Car</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Car Name + Daily Rent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Car Name
              </label>
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
              <label className="text-sm font-medium text-gray-600">
                Daily Rent ($)
              </label>
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
              <label className="text-sm font-medium text-gray-600">
                Car Type
              </label>
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
              <label className="text-sm font-medium text-gray-600">
                Seat Capacity
              </label>
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
            <label className="text-sm font-medium text-gray-600">
              Image URL
            </label>
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
            <label className="text-sm font-medium text-gray-600">
              Pickup Location
            </label>
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
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
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
            <label className="text-sm font-medium text-gray-600">
              Availability
            </label>
            <select
              name="availability"
              onChange={handleChange}
              className={inputClass}
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#dd3203] hover:bg-[#ff3700] text-white font-semibold rounded-lg transition"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
