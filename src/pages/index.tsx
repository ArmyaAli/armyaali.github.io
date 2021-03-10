import Head from "next/head";
import React from "react";
import LandingPageContent from "../components/LandingPageContent";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Personal Website</title>
        <script data-ad-client="ca-pub-4302156368235527" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <LandingPageContent />
    </div>
  );
};

export default Home;
