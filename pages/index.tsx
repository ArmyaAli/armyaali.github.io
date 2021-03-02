import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar";
import Particles from "react-tsparticles";
import { config } from "../util/ts-particles-config";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Personal Website</title>
      </Head>
      <Particles id="tsparticles" className="particles" options={config} />
      <Navbar />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
