import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative z-[5] bg-[#222222] mt-12 text-white py-[50px] md:py-[100px]">
      <svg
        className="absolute -right-8 -z-[1]"
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
        <div className="z-10 flex flex-col gap-y-6">
          <p className="gradient text-lg md:text-[20px] uppercase">
            Your idea, our expertise, perfect solution
          </p>
          <h1 className="max-w-[930px] font-black leading-[36px] text-4xl md:leading-[40px] md:text-[40px] lg:text-[60px] lg:leading-[65px]">
            Digital products design, custom software development, and technical
            consulting
          </h1>
          <p className="text-lg md:text-[22px]">All you need in one place</p>
        </div>
        <Link href={"#contact"} passHref>
          <a className="z-10 mt-8 flex justify-center items-center py-4 px-8 w-fit rounded-full bg-white text-xl text-black hover-gradient hover:text-white">
            Get in touch
          </a>
        </Link>
      </section>
    </div>
  );
};

export default Hero;
