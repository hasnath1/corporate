const Item = ({ title, body }) => {
  return (
    <article className="flex flex-col justify-self-stretch items-center p-2 group">
      <span className="block relative pb-[50%] w-full h-full overflow-hidden">
        <svg
          style={{ strokeDasharray: 2000 }}
          viewBox="0 0 500 500"
          fill="none"
          className="absolute h-[200%] left-0 right-0 top-0 bottom-0 svg-line"
        >
          <circle
            cx="250"
            cy="250"
            r="245"
            strokeWidth="5"
            stroke={"url(#linear_gradient)"}
          ></circle>
          <defs>
            <linearGradient
              id="linear_gradient"
              x1="500"
              y1="0"
              x2="-43.898"
              y2="53.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C88FFF"></stop>
              <stop offset="1" stopColor="#8EC7FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </span>

      <div className="flex items-center flex-col text-white lg:-translate-y-8 group-hover:lg:-translate-y-14 transition-all duration-300">
        <h1 className="font-black text-[38px]">{title}</h1>
        <p className="text-center text-[17px] px-4 pt-2 lg:opacity-0 lg:translate-y-2 group-hover:lg:translate-y-0 group-hover:lg:opacity-100 transition-all duration-500">
          {body}
        </p>
      </div>
    </article>
  );
};

export default Item;
