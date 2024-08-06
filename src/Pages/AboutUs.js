import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
export const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ASTA Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};


