import BackgroundBall from "../components/BackgroundBall/index.js";
import Navbar from "../components/Navbar/index.js";
import Hero from "../components/Hero/index.js";
import Service from "../components/Service/index.js";
import Industry from "../components/Industries/index.js";

const Index = () => {
  return (
    <div className="bg-[#222222]">
      <BackgroundBall />
      <Navbar />
      <Hero />
      <Service />
      <Industry />
    </div>
  );
};

export default Index;
