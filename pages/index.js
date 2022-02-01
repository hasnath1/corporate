import BackgroundBall from "../components/BackgroundBall/index.js";
import Navbar from "../components/Navbar/index.js";
import Hero from "../components/Hero/index.js";
import Service from "../components/Service/index.js";
import Industry from "../components/Industries/index.js";
import HowWeWork from "../components/HowWeWork/index.js";
import Achievements from "../components/Achievements/index.js";

import { useEffect } from "react";
import { gsap } from "gsap";

const Index = () => {
  useEffect(() => {
    // Mouse Enter Handler
    const mouseOverHandler = e => {
      gsap.to(e.target, {
        background: "linear-gradient(to right,#a999df,#6290C8)",
        color: "#FFFFFF",
        duration: 0.5,
        ease: "power4.out",
      });
    };

    // Mouse Leave Handler
    const mouseLeaveHandler = e => {
      gsap.to(e.target, {
        background: "white",
        color: "black",
        duration: 0.5,
      });
    };

    // Set Event Listeners
    document.querySelectorAll(".hover-gradient").forEach(elt => {
      elt.addEventListener("mouseover", mouseOverHandler);
      elt.addEventListener("mouseout", mouseLeaveHandler);
    });

    return () => {
      // Remove Event Listeners . This is important to avoid memory leaks
      document.querySelectorAll(".hover-gradient").forEach(elt => {
        elt.removeEventListener("mouseover", mouseOverHandler);
        elt.removeEventListener("mouseout", mouseLeaveHandler);
      });
    };
  });

  return (
    <div className="bg-[#222222]">
      <BackgroundBall />
      <Navbar />
      <Hero />
      <Service />
      <Industry />
      <HowWeWork />
      <Achievements />
    </div>
  );
};

export default Index;
