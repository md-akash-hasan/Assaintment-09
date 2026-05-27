"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Kbd, Label } from "@heroui/react";
import { FaAngleDoubleDown, FaArrowDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export function UserInformation() {
  const { data } = authClient.useSession();
  let hendelOut = async () => {
    await authClient.signOut();
  };

  let user = data?.user;

  return (
    <Dropdown>
      <Button aria-label="Menu" variant="outline">
        {user.name}
        <FaArrowDown />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new" textValue="New">
            <Label>Add Car</Label>
            <Kbd className="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item id="open" textValue="Open">
            <Label>My Booking</Label>
            <Kbd className="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>O</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item id="save" textValue="Save">
            <Label>Listing</Label>
            <Kbd className="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>S</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item
            variant="danger"
            className="flex justify-between"
            onClick={hendelOut}
          >
            <Label>Log Out</Label>
            <MdLogout />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
