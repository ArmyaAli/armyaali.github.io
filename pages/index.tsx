import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar";
import Particles from "react-tsparticles";
import { config } from "../util/ts-particles-config";
import LandingPageContent from "../components/LandingPageContent";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Personal Website</title>
      </Head>
      <Particles id="tsparticles" className="particles" options={config} />
      <LandingPageContent />
    </div>
  );
};

export default Home;
