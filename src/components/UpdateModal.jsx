"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal, Surface } from "@heroui/react";
import UpdateButton from "./uiverse/UpdateButton";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3203]/40 transition bg-gray-50 text-gray-800 placeholder-gray-400";

const labelClass = "block text-sm font-medium text-gray-600 mb-1";

export function UpdateModal({ car }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formDatas = new FormData(e.currentTarget);
    const formData = Object.fromEntries(formDatas.entries());

    const addcar = {
      car_name: formData.carName,
      daily_rent_price: formData.dailyRent,
      car_type: formData.carType,
      image_url: formData.imageUrl,
      seat_capacity: formData.seatCapacity,
      pickup_location: formData.pickupLocation,
      description: formData.description,
      availability_status: formData.availability,
    };

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BAKEND_URL}/allcar/${car._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify(addcar),
        },
      );
      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Update Success");
        setIsOpen(false);
        router.refresh();
      } else {
        toast.info("No changes made");
        setIsOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <UpdateButton />
      </button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-2xl flex flex-col max-h-[90vh]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-lg font-bold text-gray-800">
                  Update Car
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="px-6 py-4 overflow-y-auto max-h-[70vh] flex-1">
                <Surface variant="default">
                  <form className="space-y-4" onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Car Name</label>
                        <input
                          type="text"
                          name="carName"
                          defaultValue={car?.car_name}
                          placeholder="e.g. Toyota Camry"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Daily Rent ($)</label>
                        <input
                          type="number"
                          name="dailyRent"
                          defaultValue={car?.daily_rent_price || 50}
                          placeholder="e.g. 120"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Car Type</label>
                        <select
                          name="carType"
                          defaultValue={car?.car_type || "Luxury"}
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
                          defaultValue={car?.seat_capacity}
                          placeholder="e.g. 5"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Image URL</label>
                      <input
                        type="url"
                        name="imageUrl"
                        defaultValue={car?.image_url}
                        placeholder="https://i.ibb.co/..."
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Pickup Location</label>
                      <input
                        type="text"
                        name="pickupLocation"
                        defaultValue={car?.pickup_location}
                        placeholder="e.g. Dhaka, Mirpur"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Description</label>
                      <textarea
                        name="description"
                        defaultValue={car?.description}
                        placeholder="Short description..."
                        rows={3}
                        className={inputClass + " resize-none"}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Availability</label>
                      <select
                        name="availability"
                        defaultValue={car?.availability_status || "available"}
                        className={inputClass}
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#dd3203] hover:bg-[#ff3700] active:scale-[0.99] text-white font-semibold rounded-lg transition"
                    >
                      Update Car
                    </button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
