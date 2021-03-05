import React from "react";
import Link from "next/link";

export const LandingPageContent = () => {
  return (
    <div className="p-4 text-white flex h-screen flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
      <div className="m-auto xl:w-3/6 2xl:w-3/6 3xl:w-3/6 relative">
        <div className="text-5xl md:text-7xl xl:text-6xl 2xl:text-8xl 3xl:text-9xl">
          Ali Umar
        </div>
        <div className="text-5xl md:text-7xl xl:text-6xl 2xl:text-8xl 3xl:text-9xl">
          Jr Developer
        </div>
        <p className="w-full my-8 breakwords">
          Hi, my name is Ali. I'm 23 and I live in Toronto, Ontario. I love
          programming and learning different kinds of technologies. Currently a
          student at Seneca College studying Computer Engineering Technology. I
          am not much of an artist but I tried to make this website look cool.
          It's built using Nextjs, TailwindCSS and hosted on Github Pages!
          
          Interests: Video Game programming, Rust programming language,
          Distributed Systems, Linux, Operating Systems, Compiler Design...
        </p>

        <Link href="/aboutme">
          <button className="bg-red-800 w-full xl:w-96 h-16 opacity-50 rounded hover:opacity-100 mb-8 mt-8">
            Explore
          </button>
        </Link>
      </div>
      <a
        className="demo m-auto xl:w-2/5"
        href="https://github.com/ArmyaAli/Mushroom_Fighter"
      >
        <img
          className="hover:opacity-75"
          src="mushroom_fighter_demo.gif"
          height={512}
          width={1024}
          alt=""
        />
      </a>
    </div>
  );
};

export default LandingPageContent;
