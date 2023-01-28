import Link from "next/link";
import React, { ReactNode } from "react";

import { NavbarEntries } from "./services/navbar.entries";

import type { NavbarEntryType } from "./services/navbar.entries";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white px-2 sm:px-4 py-2.5 fixed z-20">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="font-bold text-2xl text-black">
          Damien<span className="text-orange">.</span>
        </h1>
        <div className="flex md:order-2">
          <button
            type="button"
            className="border-solid invisible sm:visible border border-orange bg-orange text-white transition-all duration-500 hover:bg-white hover:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Discutons !
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm border-orange text-orange-500 rounded-lg md:hidden hover:bg-orange focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {NavbarEntries.map(({ label, link }: NavbarEntryType) => (
              <Link
                href={link}
                key={label}
                className="block py-2 pl-3 pr-4 text-base text-black bg-blue-700 transition-all duration-200 hover:text-orange rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
