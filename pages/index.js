import BackgroundBall from "../components/BackgroundBall/index.js";
import Navbar from "../components/Navbar/index.js";
import Hero from "../components/Hero/index.js";
import Service from "../components/Service/index.js";
import Industry from "../components/Industries/index.js";
import HowWeWork from "../components/HowWeWork/index.js";
import Achievements from "../components/Achievements/index.js";
import Contact from "../components/Contact/index.js";
import Preloader from "../components/Preloader/index.js";

import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Demo - 3 by Hasnath Abdullah Aknd</title>
      </Head>
      <Preloader />
      <div className="bg-[#222222]">
        <BackgroundBall />
        <Navbar />
        <Hero />
        <Service />
        <Industry />
        <HowWeWork />
        <Achievements />
        <Contact />
        <footer className="text-gray-500 border-t border-gray-500 flex justify-center items-center p-4 tracking-wider font-medium">
          Copyright {new Date().getFullYear()} &copy; All Rights Reserved{" "}
        </footer>
      </div>
    </>
  );
};

export default Index;
