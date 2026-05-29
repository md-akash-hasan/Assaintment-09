"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { FaArrowDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export function UserInformation() {
  const { data } = authClient.useSession();
  const router = useRouter();

  const hendelOut = async () => {
    await authClient.signOut();
    redirect("/login");
  };

  const user = data?.user;

  // JSX ফাইলের জন্য সাধারণ প্যারামিটার (কোনো : string | number থাকবে না)
  const handleMenuAction = async (key) => {
    if (key === "add-car") {
      router.push("/addcar");
    } else if (key === "my-booking") {
      router.push("/booking");
    } else if (key === "listing") {
      router.push("/listing");
    } else if (key === "logout") {
      await hendelOut();
    }
  };

  return (
    <Dropdown>
      <Button
        aria-label="Menu"
        variant="outline"
        className="flex items-center gap-2"
      >
        {user?.name || "User"}
        <FaArrowDown />
      </Button>
      <Dropdown.Popover>
        {/* onAction এর কারণে ক্লিকের সাথে সাথে ড্রপডাউনটি বন্ধ হয়ে যাবে */}
        <Dropdown.Menu onAction={handleMenuAction}>
          <Dropdown.Item id="add-car" textValue="Add Car">
            <div className="flex items-center justify-between w-full pointer-events-none">
              <Label>Add Car</Label>
              <Kbd slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>N</Kbd.Content>
              </Kbd>
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="my-booking" textValue="My Booking">
            <div className="flex items-center justify-between w-full pointer-events-none">
              <Label>My Booking</Label>
              <Kbd slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>O</Kbd.Content>
              </Kbd>
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="listing" textValue="Listing">
            <div className="flex items-center justify-between w-full pointer-events-none">
              <Label>Listing</Label>
              <Kbd slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>S</Kbd.Content>
              </Kbd>
            </div>
          </Dropdown.Item>

          <Dropdown.Item id="logout" variant="danger" textValue="Log Out">
            <div className="flex items-center justify-between w-full pointer-events-none text-danger">
              <Label>Log Out</Label>
              <MdLogout />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
