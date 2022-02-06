import Form from "./Form";

const Index = () => {
  return (
    <section className="relative z-[5] py-28" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-0 lg:flex-row gap-x-[180px]">
        <div className="text-white flex flex-col gap-y-8">
          <h1 className="font-black text-5xl">Contact us</h1>

          <div>
            <div className="flex items-center gap-x-4">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 0L37.9737 11.9737L26 23.9474L14.0263 11.9737L26 0Z"
                  fill="#474A91"
                />
                <path
                  d="M11.9737 14.0263L23.9474 26L11.9737 37.9737L0 26L11.9737 14.0263Z"
                  fill="#474A91"
                />
                <path
                  d="M40.0263 14.0263L52 26L40.0263 37.9737L28.0526 26L40.0263 14.0263Z"
                  fill="#474A91"
                />
                <path
                  d="M26 28.0526L37.9737 40.0263L26 52L14.0263 40.0263L26 28.0526Z"
                  fill="#474A91"
                />
                <path
                  d="M26 8.89473L43.1053 26L26 43.1053L8.89472 26L26 8.89473Z"
                  fill="#6B71FF"
                />
              </svg>
              <p className="text-xl uppercase">COMPANY NAME LLC.</p>
            </div>
            <p className="text-xl">Rakuail-gaital road, Kishoreganj, BD</p>
          </div>

          <div>
            <p className="text-lg">Become a client</p>
            <a
              className="text-base md:text-xl lg:text-2xl font-black contact-email w-fit block"
              href="mailto:abdullahaknd297@gmail.com"
            >
              YOUREMAIL@EXAMPLE.COM
            </a>
          </div>
        </div>

        <div className="bg-white mt-8 lg:mt-0 flex-grow">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Index;
