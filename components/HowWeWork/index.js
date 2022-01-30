import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#svg-line", {
      duration: 3,
      scrollTrigger: "#svg-line",
      strokeDashoffset: 600,
    });

    return () => {};
  });
  return (
    <section className="flex justify-center items-center">
      <svg
        id="svg-line"
        style={{ strokeDasharray: 600 }}
        width="386"
        height="205"
        viewBox="0 0 386 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 203.999C35 -58.9997 345.5 -67.9999 383 203.999"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
    </section>
  );
};

export default Index;
