import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import React from "react";
import Particles from "react-tsparticles";
import { config } from "../util/ts-particles-config";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Particles id="tsparticles" className="particles" options={config} />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
