import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

const Industry = () => {
  const slider = useRef(null);
  const title = useRef(null);
  const description = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      img: "/images/1.png",
      title: "Business",
      desc: "Business is a set of disciplines and technologies for solving business problems using data analysis, statistical models and other quantitative methods. It involves an iterative, methodical exploration of an organization's ",
    },
    {
      img: "/images/2.png",
      title: "Technology",
      desc: "Technology is the sum of any techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, a",
    },
    {
      img: "/images/3.png",
      title: "Automotive",
      desc: "The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, and selling of motor vehicles. It is one of the world's largest industries by revenue. The automotiv",
    },
    {
      img: "/images/4.png",
      title: "Real Estate",
      desc: "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings",
    },
    {
      img: "/images/5.png",
      title: "Crypto",
      desc: "A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it I",
    },
    {
      img: "/images/6.png",
      title: "Digital",
      desc: "Internet culture, or cyberculture, is a culture that describes the many manifestations of the use of computer networks for communication, entertainment, business, and recreation. Some features of Internet culture include online communiti",
    },
  ];

  useEffect(() => {
    let anim = null;
    if (window.innerWidth > 1024) {
      gsap.registerPlugin(ScrollTrigger);
      anim = gsap.from(".slider-btn", {
        scrollTrigger: {
          trigger: ".industries-content",
          once: true,
        },
        duration: 0.25,
        opacity: 0,
        ease: "power3.out",
        x: 80,
        stagger: 0.1,
      });
    }

    return () => {
      if (anim) anim.kill();
    };
  });

  useEffect(() => {
    let i = 0;

    const sliderPlayer = i => {
      gsap.to([description.current, title.current], {
        opacity: 0,
        translateY: 20,
        duration: 0.3,
        stagger: 0.2,
        ease: "power4.out",

        onComplete() {
          title.current.innerHTML = data[i].title;
          description.current.innerHTML = data[i].desc;

          gsap.to([title.current, description.current], {
            opacity: 1,
            translateY: 0,
            duration: 0.3,
            stagger: 0.2,
            ease: "power4.out",
          });
        },
      });

      slider.current.slickGoTo(i);
    };

    const sliderAutoPlayer = () => {
      i++;
      if (i > data.length - 1) {
        i = 0;
      }
      sliderPlayer(i);
    };

    let id = setInterval(sliderAutoPlayer, 3000);

    const btns = document.querySelectorAll(".slider-btn");
    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        sliderPlayer(index);
        i = index;

        if (window.innerWidth < 1024) {
          btn.scrollTo(0, 0);
        }

        // Abort the interval when the user clicks on a button . Then restart it
        clearInterval(id);
        id = setInterval(sliderAutoPlayer, 4000);
      });
    });

    return () => {
      btns.forEach(btn => btn.removeEventListener("click", sliderPlayer));
      clearInterval(id);
    };
  }, [data, data.length]);
  return (
    <section className="relative z-[5] h-[500px] lg:h-screen overflow-hidden">
      {/*  Background slider */}
      <Slider {...settings} ref={slider} className="slider">
        {data.map(a => (
          <div key={a} className="w-full h-screen relative">
            <div
              style={{
                background: "url(" + a.img + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              className="full absolute"
            ></div>
          </div>
        ))}
      </Slider>

      <div className="industries-content">
        <div className="industries-card">
          <h1 className="text-4xl lg:text-5xl font-black z-10" ref={title}>
            {data[0].title}
          </h1>
          <p className="text-base lg:text-lg z-10" ref={description}>
            {data[0].desc}
          </p>
          <Link href={"#contact"} passHref>
            <a className="z-10 flex justify-center items-center py-4 px-8 w-fit rounded-full bg-white text-xl text-black hover-gradient hover:text-white">
              Get in touch
            </a>
          </Link>
        </div>

        <div className="industries-navigation">
          <h1 className="industries-title">Industries</h1>
          <div className="industries-btn-ctn">
            {data.map((a, index) => {
              return (
                <button key={index} className="slider-btn">
                  {a.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
