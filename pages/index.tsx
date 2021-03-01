import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar";
import Particles from "react-tsparticles";
import { config } from "../util/ts-particles-config";

import styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Personal Website</title>
      </Head>
      <Particles id="tsparticles" options={config} />
      <Navbar />
    </div>
  );
};

export default Home;
