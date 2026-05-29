"use client";
import { Car } from "@gravity-ui/icons";
import { useState } from "react";

import { Firasans } from "./Font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegisterButton from "./uiverse/RegisterButton";
import LoginButtom from "./uiverse/LoginButton";

import { authClient } from "@/lib/auth-client";
import LogoutButton from "./uiverse/LogoutButton";
import { Avatar } from "@heroui/react";
import { UserInformation } from "./UserInformation";

export function Nav() {
  const { data } = authClient.useSession();

  let user = data?.user;

  let path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let Li = (
    <>
      <li className={`${path === "/" ? "primaryColor" : ""}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`${path === "/allcars" ? "primaryColor" : ""}`}>
        <Link href="/allcars">Explore Cars</Link>
      </li>
      <li className={`${path === "/addcar" ? "primaryColor" : ""}`}>
        <Link href="/addcar">Add Car</Link>
      </li>
      <li className={`${path === "/booking" ? "primaryColor" : ""}`}>
        <Link href="/booking"> My Booking </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`${Firasans.className} sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg text-[20px]`}
    >
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Link href={`/`} className="flex gap-3 items-center font-bold">
              <span>
                <Car className="w-6 h-6 primaryColor " />
              </span>
              <span className={`hidden sm:block`}>
                <span className="primaryColor">Rent </span> Car
              </span>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex text-[16px] font-bold">
          {Li}
        </ul>
        <div className="flex gap-10">
          {user ? (
            <div className="flex items-center gap-3 text-[16px] font-bold">
              <div>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user.name}
                    src={user.image}
                  />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
              </div>
              <UserInformation />
            </div>
          ) : (
            <div className="flex gap-3 text-[16px] font-bold">
              <LoginButtom />
              <RegisterButton />
            </div>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4 text-[16px] font-bold">
            {Li}
          </ul>
        </div>
      )}
    </nav>
  );
}
