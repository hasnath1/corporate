import { useEffect } from "react";
import gsap from "gsap";

const Preloader = () => {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      const preloader = document.querySelector(".preloader");
      gsap.to(preloader, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          preloader.style.display = "none";
        },
      });
    });
  });
  return (
    <div className="preloader">
      <div className="bg">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
