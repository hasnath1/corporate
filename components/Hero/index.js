import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.from(".hero-fade-up", {
      scrollTrigger: {
        trigger: ".hero-fade-up",
        once: true,
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
    });

    return () => {
      anim.kill();
    };
  });

  return (
    <section
      className="relative text-white px-3 lg:px-0 pb-[100px] pt-[140px] md:py-[130px] md:pt-[150px]"
      id="hero-trigger"
    >
      <svg
        className="absolute right-0 hidden lg:block"
        width="944"
        height="455"
        viewBox="0 0 944 455"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.882619 455L0.882619 -3.09944e-05H112.683L112.683 174.85H299.883V-3.09944e-05H411.683L411.683 455H299.883L299.883 276.9H112.683V455H0.882619ZM444.863 455L631.413 -3.09944e-05L759.463 -3.09944e-05L943.413 455H822.513L780.913 345.15H603.463L561.213 455H444.863ZM637.263 256.1H747.763L693.163 110.5L637.263 256.1Z"
          fill="black"
        />
      </svg>

      <section className="max-w-7xl mx-auto">
        <div className="z-10 flex flex-col gap-y-5 md:gap-y-7">
          <p className="gradient text-lg md:text-[20px] uppercase hero-fade-up">
            Your idea, our expertise, perfect solution
          </p>
          <h1 className="max-w-[930px] font-black leading-[36px] text-3xl md:text-4xl md:leading-[40px] md:text-[40px] lg:text-[56px] lg:leading-[65px] hero-fade-up">
            Digital products design, custom software development, and technical
            consulting
          </h1>
          <p className="text-lg md:text-[22px] hero-fade-up">
            All you need in one place
          </p>
        </div>
        <Link href={"#contact"} passHref>
          <a className="z-10 mt-8 md:mt-8 flex justify-center items-center py-4 px-8 w-fit rounded-full bg-white text-xl text-black hover-gradient hover:text-white hero-fade-up">
            Get in touch
          </a>
        </Link>
      </section>
    </section>
  );
};

export default Hero;
