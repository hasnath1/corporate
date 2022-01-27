import Link from "next/link";

const Hero = () => {
  return (
    <div className="border border-blue-700 relative z-[5] bg-[#222222] text-white py-[50px] md:py-[100px]">
      <section className="max-w-7xl mx-auto">
        <div className="z-10 flex justify-between gap-y-6">
          <p className="gradient text-lg md:text-2xl uppercase">Our services</p>
          <div className="flex flex-col items-end border border-red-600">
            <article className="max-w-[750px] flex justify-between items-start gap-x-6">
              <p className="gradient text-[22px] font-medium">01</p>
              <div>
                <h1 className="text-[48px] font-black">Website Development</h1>
                <p className="text-xl leading-8 mt-4">
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network). Web development can range from developing.
                </p>
              </div>
            </article>

            <article className="mt-8 max-w-[750px] flex justify-between items-start gap-x-6">
              <p className="gradient text-[22px] font-medium">01</p>
              <div>
                <h1 className="text-[48px] font-black">Website Development</h1>
                <p className="text-xl leading-8 mt-4">
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network). Web development can range from developing.
                </p>
              </div>
            </article>

            <article className="mt-8 max-w-[750px] flex justify-between items-start gap-x-6">
              <p className="gradient text-[22px] font-medium">01</p>
              <div>
                <h1 className="text-[48px] font-black">Website Development</h1>
                <p className="text-xl leading-8 mt-4">
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network). Web development can range from developing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
