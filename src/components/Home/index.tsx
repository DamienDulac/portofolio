import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const Home = () => {
  const title = "Salut ! Moi c'est Damien";
  return (
    <div className="w-full flex h-screen bg-white justify-items-center items-center">
      <div
        className={clsx(
          "container flex items-center basis-full gap-5 flex-col px-3 ",
          "sm:justify-start sm:basis-7/12 sm:gap-10 md:px-56"
        )}
      >
        <Image
          className="sm:hidden"
          src="/profil.png"
          alt="Picture of the author"
          width={400}
          height={400}
        />
        <p className="text-2xl sm:text-6xl font-bold text-black">{title}</p>
        <p className="text-xl font-medium text-center text-black sm:text-left">
          Passioné par le web, je suis développeur front-end React depuis 4 ans,
          et depuis peu développeur mobile !
        </p>
        <div
          className={clsx(
            "container flex flex-row gap-16 items-center justify-center",
            "sm:justify-start"
          )}
        >
          <button
            type="button"
            className="border-solid border border-orange bg-orange text-white transition-all duration-500 hover:bg-white hover:text-orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Linkedin
          </button>
          <div>
            <Link href="/" className="flex flex-row items-center gap-2">
              <p className="text-2xl sm:text-lg font-medium transition-all duration-200 hover:font-bold text-black">
                Projets
              </p>
              <ArrowUpRightIcon className="h-7 w-7 text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "container bg-gray hidden items-center justify-center",
          "sm:inline-flex sm:basis-5/12"
        )}
      >
        <Image
          className="rounded-full absolute bottom-50 right-58"
          src="/profil.png"
          alt="Picture of the author"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
