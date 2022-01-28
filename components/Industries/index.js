import Link from "next/link";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

const Industry = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
  ];

  useEffect(() => {
    // slider.current.slickGoTo(2);
  });

  return (
    <section className="relative z-10">
      {/*Background slider  */}
      <div>
        <Slider {...settings} ref={slider}>
          {images.map(image => (
            <div key={image} className="w-full h-screen">
              <div
                style={{
                  background: "url(" + image + ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  width: "100%",
                  height: "100%",
                }}
                className="flex justify-start items-center"
              >
                <div className="flex justify-between flex-col gap-y-6 text-white max-w-xl p-10 backdrop-full">
                  <h1 className="text-5xl font-black z-10">
                    Business Analytics
                  </h1>
                  <p className="font-semibold text-sm z-10">
                    Business analytics (BA) is a set of disciplines and
                    technologies for solving business problems using data
                    analysis, statistical models and other quantitative methods.
                    It involves an iterative, methodical exploration of an
                    organization&#38;s data, with an emphasis on statistical
                    analysis, to drive decision-making.
                  </p>
                  <Link href={"#contact"} passHref>
                    <a className="z-10 flex justify-center items-center py-4 px-8 w-fit rounded-full bg-white text-xl text-black hover-gradient hover:text-white">
                      Get in touch
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <div></div>

        <div></div>
      </div>
    </section>
  );
};

export default Industry;
