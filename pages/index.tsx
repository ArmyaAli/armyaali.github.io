import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar";
import styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Personal Website</title>
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
