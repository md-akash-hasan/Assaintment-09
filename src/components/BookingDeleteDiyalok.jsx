"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteBookinDiyalok({ car }) {
  let id = car?._id;

  let hendelDelate = async () => {
    let { data: tokenData } = await authClient.token();
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BAKEND_URL}/booking/${id}`,
      {
        method: "DELETE",
        headers: { authorization: `Bearer ${tokenData.token}` },
      },
    );
    let data = await res.json();
    console.log(data);

    if (data.deletedCount > 0) {
      toast.error("Delete Car Success");
      redirect(`/booking`);
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {car?.car_name} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{car?.car_name}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={hendelDelate}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
