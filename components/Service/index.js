import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const anim = gsap.from(".service-item", {
      scrollTrigger: {
        trigger: ".service-item",
        once: true,
      },
      x: 250,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    return () => {
      anim.kill();
    };
  });

  return (
    <div className="text-white py-[50px] lg:py-[100px] overflow-hidden">
      <section className="max-w-7xl mx-auto" id="service">
        <div className="service-ctn px-4 xl:px-0">
          <p className="gradient text-lg md:text-2xl uppercase">services</p>
          <div className="px-4 lg:px-0 flex flex-col items-end services">
            {/* -------------------------- */}
            <article className="service-item group">
              <p className="gradient service-item-num">01</p>
              <div>
                <h1 className="service-item-title">Website Development</h1>
                <p className="service-item-desc">
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network). WWeb development can range from developing.eb
                  development can range from developing.
                </p>
              </div>
            </article>
            {/* -------------------------- */}

            {/* -------------------------- */}
            <article className="service-item mt-6 md:mt-10 group">
              <p className="gradient service-item-num">02</p>
              <div>
                <h1 className="service-item-title">Website Design</h1>
                <p className="service-item-desc">
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network). Web development can range from developing.Web
                  development can range from developing.
                </p>
              </div>
            </article>
            {/* -------------------------- */}

            {/* -------------------------- */}
            <article className="service-item mt-6 md:mt-10 group">
              <p className="gradient service-item-num">03</p>
              <div>
                <h1 className="service-item-title">Hosting Service</h1>
                <p className="service-item-desc">
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a privateWeb
                  development can range from developing. network). Web
                  development can range from developing.
                </p>
              </div>
            </article>
            {/* -------------------------- */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
