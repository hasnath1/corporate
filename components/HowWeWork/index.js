import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Item from "./Item";

const Index = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.from(".svg-line", {
      duration: 1.5,
      scrollTrigger: ".svg-line",
      stagger: 0.4,
      strokeDashoffset: 2000,
    });

    return () => {
      anim.kill();
    };
  });
  return (
    <section
      className="max-w-7xl mx-auto flex flex-col py-24 lg:py-32"
      id="how"
    >
      <header className="text-white flex flex-col lg:flex-row px-4 lg:px-0 justify-between items-start">
        <p className="gradient text-lg md:text-[20px] uppercase">How We Work</p>
        <h1 className="max-w-[800px] font-black leading-[36px] text-3xl md:leading-[40px] md:text-[40px] lg:text-[48px] lg:leading-[65px]">
          We are a team of talented website{" "}
          <span className="gradient">developers &#38; designers </span> who help
          people to grow
        </h1>
      </header>

      <div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row mt-16 lg:mt-24">
        <Item
          body={
            "A prototype is an early sample, model, or release of a product built to test a concept or process. It is a term used in a variety of contexts, including semantics, design, electronics etc ."
          }
          title={"Problem"}
        />
        <Item
          body={
            "A prototype is an early sample, model, or release of a product built to test a concept or process. It is a term used in a variety of contexts, including semantics, design, electronics etc"
          }
          title={"Prototype"}
        />
        <Item
          body={
            "A prototype is an early sample, model, or release of a product built to test a concept or process. It is a term used in a variety of contexts, including semantics, design, electronics etc"
          }
          title={"Solution"}
        />
      </div>
    </section>
  );
};

export default Index;
