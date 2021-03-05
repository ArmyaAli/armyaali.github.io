import React from "react";
import Card from "../components/card";
import { fivews, shorts } from "./about_data";
export const About = () => {
  return (
    <div className="flex bg-red-500">
      {fivews.map((w) => (
        <Card
          title={w}
          shortlist={shorts[w as "Who" | "What" | "Where" | "When" | "Why"]}
        />
      ))}
    </div>
  );
};

export default About;
