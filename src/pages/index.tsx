import Head from "next/head";
import React from "react";
import LandingPageContent from "../components/LandingPageContent";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Personal Website</title>
      </Head>
      <LandingPageContent />
    </div>
  );
};

export default Home;
