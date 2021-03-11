import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 w-4/5 mx-auto my-8 flex justify-between items-center text-white bg-opacity-50">
      <ul className="flex justify-between w-full h-full cursor-pointer text-sm md:text-md lg:text-lg xl:text-3xl xl:h-16 3xl:text-4xl text-center rounded">
        <Link href="/">
          <li className="w-full h-full flex justify-center items-center bg-red-800 hover:bg-red-800 hover:bg-opacity-75 bg-opacity-50 m-auto mx-2 rounded">
            Home
          </li>
        </Link>
        <Link href="/projects">
        <li className="w-full h-full flex justify-center items-center bg-red-800 hover:bg-red-800 hover:bg-opacity-75 bg-opacity-50 m-auto mx-2 rounded">
            <span>Projects</span>
          </li>
        </Link>
        <Link href="/resume">
        <li className="w-full h-full flex justify-center items-center bg-red-800 hover:bg-red-800 hover:bg-opacity-75 bg-opacity-50 m-auto mx-2 rounded">
            <span>Resume</span>
          </li>
        </Link>
        <Link href="/contact">
        <li className="w-full h-full flex justify-center items-center bg-red-800 hover:bg-red-800 hover:bg-opacity-75 bg-opacity-50 m-auto mx-2 rounded">
            <span>Contact</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
