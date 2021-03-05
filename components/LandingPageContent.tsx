import React from "react";
import Link from "next/link";

export const LandingPageContent = () => {
  return (
    <div className="text-white flex h-screen flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
      <div className="m-auto relative">
        <div className="text-5xl md:text-7xl xl:text-6xl 2xl:text-8xl 3xl:text-9xl">
          Ali Umar
        </div>
        <div className="text-5xl md:text-7xl xl:text-6xl 2xl:text-8xl 3xl:text-9xl">
          Jr Developer
        </div>
        <Link href="/aboutme">
          <button className="bg-red-800 w-full xl:w-96 h-16 opacity-50 rounded hover:opacity-100 mb-8 mt-8">
            Explore
          </button>
        </Link>
      </div>
      <a
        className="demo m-auto"
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
