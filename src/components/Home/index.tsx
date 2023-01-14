import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const Home = () => {
  return (
    <div className="flex h-screen bg-lime-200 ">
      <div className="flex items-center justify-start gap-10 px-56 flex-col justify-center text-black basis-7/12">
        <p className="text-6xl tablet:text-sm font-bold">
          Salut ! Moi c'est Damien Dulac
        </p>
        <p className="text-xl font-medium ">
          Je suis développeur front-end depuis 4 ans, et depuis peu développeur
          mobile !
        </p>
        <div className="flex flex-row justify-start gap-16 items-center">
          <button
            type="button"
            className="border-solid border border-orange bg-orange text-white transition-all duration-500 hover:bg-white hover:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Linkedin
          </button>
          <div>
            <Link href="/" className="flex flex-row items-center gap-2">
              <p className="text-2xl sm:text-sm font-medium transition-all duration-200 hover:font-bold">
                Projets
              </p>
              <ArrowUpRightIcon className="h-7 w-7 text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray basis-5/12 tablet:invisible ">right</div>
    </div>
  );
};
