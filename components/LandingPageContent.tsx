import React from "react";

export const LandingPageContent = () => {
  return (
    <div className="text-white flex h-screen flex-col justify-between sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
      <div className="m-auto relative">
        <div className="text-5xl md:text-7xl xl:text-4xl 2xl:text-9xl">
          Ali Umar
        </div>
        <div className="text-5xl md:text-7xl xl:text-4xl 2xl:text-9xl">
          Jr Developer
        </div>
        <button className="bg-red-800 w-full xl:w-96 h-16 opacity-50 rounded hover:opacity-100 mt-8">Explore</button>
      </div>
      <a className="demo xl:m-auto mt-8" href="https://github.com/ArmyaAli/Mushroom_Fighter">
        <img
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