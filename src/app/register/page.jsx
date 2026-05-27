"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { redirect } from "next/navigation";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const datas = Object.fromEntries(formData.entries());
    console.log(datas);

    const { data, error } = await authClient.signUp.email({ ...datas });
    console.log(data, error);
    console.log(data, error);

    if (error) {
      toast.error(`Register Failed: ${error.message}`);
      return;
    }
    if (data?.user) {
      toast.success("Register Successful");
      redirect("/login");
    }
  };

  return (
    <div className="relative flex flex-col py-8 items-center">
      {/* bg image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/7xRLyTQ3/cr-ai-tive-ai-generated-8233101.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />

      {/* black overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="shadow p-5 rounded-2xl">
          <div>
            <h1 className="font-bold text-3xl text-center text-red-700">
              Register Page
            </h1>
            <p className="font-bold text-center mt-1">Join as free</p>
          </div>
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input placeholder="Enter your Name" />
              <FieldError />
            </TextField>
            <TextField isRequired name="image" type="url">
              <Label>Image Url</Label>
              <Input placeholder="Enter your Image Url" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8)
                  return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(value))
                  return "Password must contain at least one uppercase letter";
                if (!/[0-9]/.test(value))
                  return "Password must contain at least one number";
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
            <div className="w-full">
              <Button
                type="submit"
                className="w-full primarybackground font-bold"
              >
                <FaLock />
                Register
              </Button>
            </div>
          </Form>

          <div>
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="w-full">
              <Button className="w-full bg-black/40 font-bold primaryColor">
                <FcGoogle />
                Google
              </Button>
            </div>
            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0000EE] font-black">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
