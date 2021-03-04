import React from "react";

export const LandingPageContent = () => {
  return (
    <div className="text-white flex flex-col justify-between m-8 sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row">
      <div className="m-auto">
        <div className="text-4xl md:text-6xl xl:text-4xl 2xl:text-9xl">Ali Umar</div>
        <div className="text-4xl md:text-6xl xl:text-4xl 2xl:text-9xl">Jr Developer</div>
      </div>
      <button className="text-white bg-red-50"></button>
      <img
        className="demo mt-12"
        src="mushroom_fighter_demo.gif"
        height={644}
        width={1024}
        alt=""
      />
    </div>
  );
};

export default LandingPageContent;
