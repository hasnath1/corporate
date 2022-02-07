import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Works = ({ img, subject, title, desc, uniqueID }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anim = gsap.from(`#${uniqueID}-img`, {
      x: -150,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: `#${uniqueID}-ctn`,
        start: "-100px center",
        immediateRender: false,
      },
      ease: "power3.out",
    });

    const anim2 = gsap.from(
      `#${uniqueID}-sub,#${uniqueID}-tit,#${uniqueID}-des`,
      {
        x: 150,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: `#${uniqueID}-sub`,
          start: "-100px center",
        },
        ease: "power3.out",
      }
    );

    return () => {
      anim.kill();
      anim2.kill();
    };
  });

  return (
    <div
      className="flex flex-col p-4 lg:p-0 lg:flex-row justify-between gap-x-16 text-white overflow-hidden"
      id={`${uniqueID}-ctn`}
    >
      <div
        className="flex-grow lg:min-w-[700px] opacity-100 translate-x-0"
        id={`${uniqueID}-img`}
      >
        <Image
          src={img}
          width={746}
          height={525}
          priority
          alt={title}
          layout={"responsive"}
        />
      </div>

      <div className="flex flex-col mt-4 gap-y-6 lg:mt-0 lg:gap-y-16 lg:max-w-[440px]">
        <h2 className="gradient uppercase text-xl" id={`${uniqueID}-sub`}>
          {subject}
        </h2>

        <div className="flex flex-col gap-y-4 lg:gap-y-[18px]">
          <h1
            className="font-black text-4xl leading-[52px]"
            id={`${uniqueID}-tit`}
          >
            {title}
          </h1>
          <p className="text-[17px] leading-7" id={`${uniqueID}-des`}>
            {desc}
          </p>

          <a
            href={"#contact"}
            className="border border-white text-[17px] rounded-full px-2 py-4 max-w-[170px] flex justify-center items-center hover:text-black hover:bg-white transition-all duration-200 mt-2"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
