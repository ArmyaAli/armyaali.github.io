import React from "react";
import Card from "../components/card";
import { Navbar } from "../components/navbar";
import { fivews, shorts } from "../../util/about_data";
export const About = () => {
  return (
    <div>
        <Navbar />
      <div className="flex flex-wrap">
        {fivews.map((w) => (
          <Card
            title={w}
            shortlist={shorts[w as "Who" | "What" | "Where" | "When" | "Why"]}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
