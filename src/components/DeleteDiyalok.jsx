"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteDalalok({ car }) {
  let hendelDelate = async () => {
    let res = await fetch(`http://localhost:8000/allcars/${car._id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
      toast.error("Delete Car Success");
      redirect(`/listing`);
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger" size="sm">
        Delete Project
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                {car?.car_name} car permanently?
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
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
