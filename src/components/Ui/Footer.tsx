"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "../../assets/logo.png";
import { TwitterIcon } from "../icons";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="">
      <footer className="py-16 bg-gradient-to-r from-customColor1 to-customColor2 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-200">
        {/* <!-- Footer Flex Container --> */}
        <div className="container flex flex-col  items-center justify-between mx-auto space-y-16 px-16 md:flex-row md:space-y-0">
          {/* <!-- Logo/Menu Container --> */}
          <div className="flex flex-col items-center justify-between space-y-8 text-lg  md:flex-row md:space-y-0 md:space-x-8 text-grayishBlue">
            <Link href={"/"}>
              <div className="flex justify-center items-center gap-2">
                <Image
                  alt="NextUI hero Image"
                  className="size-12"
                  height={300}
                  src={logo}
                  width={300}
                />
                <p className="text-xl font-bold uppercase text-customColor2">
                  {" "}
                  Forkify
                </p>
              </div>
            </Link>

            <Link className="uppercase hover:text-strongCyan" href={"/recipe"}>
              All Recipes
            </Link>
            <Link className="uppercase hover:text-strongCyan" href={"/about"}>
              About Us
            </Link>
            <Link className="uppercase hover:text-strongCyan" href={"/contact"}>
              Contact Us
            </Link>
          </div>

          {/* <!-- Social Container --> */}
          <div className="flex space-x-6 ">
            <div className="flex space-x-10">
              <div className="border p-1 text-orange-200 hover:text-white rounded-md"></div>
              <div className="border p-1 text-orange-200 hover:text-white rounded-md">
                <TwitterIcon className="text-orange-200 hover:text-white cursor-pointer transition duration-500" />
              </div>
              <div className="border p-1 text-orange-200 hover:text-white rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="container  mx-auto text-sm  text-slate-600 dark:text-slate-400 mt-12 mb-8">
          <p className="text-center text-grayishBlue">
            Copyright ©{new Date().getFullYear()} All rights reserved by{" "}
            <span className="uppercase text-strongCyan">Md Imon Hossain</span>.
          </p>
          <p className="text-center text-grayishBlue">
            Information refreshed on:{" "}
            <span className="text-lightBlue">{today}</span>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
