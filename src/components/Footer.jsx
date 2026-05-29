import { Car } from "@gravity-ui/icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <Link href={`/`} className="flex gap-3 items-center font-bold mb-2">
            <span>
              <Car className="w-6 h-6 primaryColor " />
            </span>
            <span className={`hidden sm:block`}>
              <span className="primaryColor">Rent </span> Car
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-500">
            Your trusted car rental platform. Book your ride easily and travel
            in comfort anywhere, anytime.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-sm font-medium mb-4 uppercase tracking-widest">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/allcars" className="hover:text-white transition">
                Explore Cars
              </Link>
            </li>
            <li>
              <Link href="/addcar" className="hover:text-white transition">
                Add Car
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-white transition">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href="/listing" className="hover:text-white transition">
                My Added Cars
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-sm font-medium mb-4 uppercase tracking-widest">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              📍 Sagordighi, Ghatail, Tangail
            </li>
            <li className="flex items-center gap-2">📞 +880 1742-212690</li>
            <li className="flex items-center gap-2">
              ✉️ mdfaruk102210@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <Link
              href="https://www.facebook.com/mdakahhasanpartho/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>
            <Link
              href="https://x.com/MdFaruk1022"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/mdfaruk102210/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </Link>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} DriveFleet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
