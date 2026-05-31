"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Button, Modal, Surface } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd3203]/40 transition bg-gray-50 text-gray-800 placeholder-gray-400";

const labelClass = "block text-sm font-medium text-gray-600 mb-1";

export function BookingModal({ car }) {
  const { data } = authClient.useSession();
  let user = data?.user;
  console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  let hendelBookingButton = () => {
    if (!user) {
      redirect("/login");
      return;
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    const formDatas = new FormData(e.currentTarget);
    const formData = Object.fromEntries(formDatas.entries());

    const booking = {
      car_image: car.image_url,
      car_id: car._id,
      car_name: car.car_name,
      daily_rent_price: car.daily_rent_price,
      driver_needed: formData.driverNeeded === "yes",
      special_note: formData.specialNote,
      booking_date: new Date(),
      userName: user?.name,
      userEmail: user?.email,
      userImageUrl: user?.image,
    };
    console.log("booking", booking);
    console.log("car", car);

    const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BAKEND_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(booking),
      });
      const data = await res.json();

      if (data.insertedId) {
        toast.success("Booking confirmed!");
        setIsOpen(false);
        router.refresh();
      } else {
        toast.error("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BAKEND_URL}/update/${car?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
      },
    );
    let data = await res.json();
  };

  return (
    <>
      <Button
        onClick={hendelBookingButton}
        onPress={() => setIsOpen(true)}
        className="px-6 md:px-8 py-2.5 md:py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 rounded-none h-[48px]"
      >
        Booking Now
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md flex flex-col max-h-[90vh]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-lg font-bold text-gray-800">
                  Book this car
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="px-6 py-4 overflow-y-auto flex-1">
                <Surface variant="default">
                  <form className="space-y-5" onSubmit={handleBooking}>
                    {/* Driver Needed */}
                    <div>
                      <label className={labelClass}>Driver needed?</label>
                      <div className="flex gap-3 mt-1">
                        <label className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 cursor-pointer text-sm text-gray-700 has-[:checked]:border-[#dd3203] has-[:checked]:ring-1 has-[:checked]:ring-[#dd3203] transition">
                          <input
                            type="radio"
                            name="driverNeeded"
                            value="yes"
                            className="accent-[#dd3203]"
                          />
                          Yes
                        </label>
                        <label className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 cursor-pointer text-sm text-gray-700 has-[:checked]:border-[#dd3203] has-[:checked]:ring-1 has-[:checked]:ring-[#dd3203] transition">
                          <input
                            type="radio"
                            name="driverNeeded"
                            value="no"
                            defaultChecked
                            className="accent-[#dd3203]"
                          />
                          No
                        </label>
                      </div>
                    </div>

                    {/* Special Note */}
                    <div>
                      <label className={labelClass}>Special note</label>
                      <textarea
                        name="specialNote"
                        placeholder="Opsonal: Any special requests or notes..."
                        rows={4}
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#dd3203] hover:bg-[#ff3700] active:scale-[0.99] text-white font-semibold rounded-lg transition"
                    >
                      Book now
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
