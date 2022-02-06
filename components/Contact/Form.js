import Input from "./Input";
import gsap from "gsap";
import { useEffect } from "react";

const Form = () => {
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
        background: "black",
        color: "white",
        duration: 0.5,
      });
    };

    const elt = document.getElementById("submit-btn");
    elt.addEventListener("mouseover", mouseOverHandler);
    elt.addEventListener("mouseout", mouseLeaveHandler);

    return () => {
      elt.removeEventListener("mouseover", mouseOverHandler);
      elt.removeEventListener("mouseout", mouseLeaveHandler);
    };
  });

  return (
    <form className=" text-black p-8 md:p-[58px] tracking-wide">
      <h1 className="uppercase text-2xl font-black">
        Let me create a <br />
        website for you
      </h1>

      <div className="mt-4 flex flex-col md:grid md:grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <Input placeholder="Your full name*" id="name" />
        </div>

        <div>
          <Input placeholder="Your phone number*" id="number" />
        </div>

        <div>
          <Input placeholder="Your email*" id="email" />
        </div>

        <div>
          <Input placeholder="Your company" id="company" />
        </div>

        <textarea
          name="info"
          className="outline-none border border-[#777777] block min-w-full min-h-[150px] p-4  text-[#333333] col-span-2 mt-4"
          placeholder="Your message*"
        ></textarea>

        <div className="mt-6 col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-y-4 md:gap-y-0">
          <button
            type="submit"
            className="flex justify-center items-center px-4 py-2 sm:py-4 sm:px-8 w-fit rounded-full bg-black text-lg sm:text-xl text-white"
            id="submit-btn"
          >
            Send Message
          </button>
          <p className="text-[#bcbcbc] tracking-wide">
            We will keep your information private and safe
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
