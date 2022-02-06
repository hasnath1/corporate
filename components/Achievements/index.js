import Works from "./Works";

import img1 from "../../public/achievements/1.png";
import img2 from "../../public/achievements/2.png";
import img3 from "../../public/achievements/4.png";

const Divider = () => {
  return (
    <div className="my-14 h-[1px] bg-gradient-to-r from-[#999dff] to-[#9865ff] opacity-60"></div>
  );
};

const Index = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <header className="text-white flex flex-col lg:flex-row px-4 lg:px-0 lg:justify-between lg:items-end pb-12 lg:pb-[85px]">
        <h1 className="font-black leading-[36px] text-3xl md:leading-[40px] md:text-[40px] lg:text-[48px] lg:leading-[65px]">
          We are proud of{" "}
          <span className="gradient">
            our <br />
            achievements
          </span>
        </h1>
        <p className="gradient text-lg md:text-[20px] uppercase hidden lg:block">
          Best solutions for your <br /> problems
        </p>
      </header>

      <div>
        <Works
          title={"Crypto-Currency is the next currency of  future"}
          subject={"Crypto currency"}
          desc={
            "A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it"
          }
          img={img1}
          uniqueID={"a-1"}
        />

        <Divider />

        <Works
          title={"Crypto-Currency is the next currency of  future"}
          subject={"Digital Marketing"}
          desc={
            "A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it"
          }
          img={img2}
          uniqueID={"a-2"}
        />

        <Divider />

        <Works
          title={"Crypto-Currency is the next currency of  future"}
          subject={"Online Banking"}
          desc={
            "A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it"
          }
          img={img3}
          uniqueID={"a-3"}
        />
      </div>
    </section>
  );
};

export default Index;
