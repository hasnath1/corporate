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
    <section className="max-w-7xl mx-auto flex flex-col py-32" id="how">
      <header className="text-white flex justify-between items-start">
        <p className="gradient text-lg md:text-[20px] uppercase">How We Work</p>
        <h1 className="max-w-[930px] font-black leading-[36px] text-3xl md:leading-[40px] md:text-[40px] lg:text-[52px] lg:leading-[65px]">
          We are a team of talented website{" "}
          <span className="gradient">developers &#38; designers </span> who help
          people to grow
        </h1>
      </header>

      <div className="flex mt-24 gap-8">
        <Item
          body={
            "A prototype is an early sample, model, or release of a product built to test a concept or process. It is a term used in a variety of contexts, including semantics, design, electronics etc"
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
