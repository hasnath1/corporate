const Item = ({ title, body }) => {
  return (
    <article className="flex-grow flex flex-col items-center p-2 group">
      <span className="block relative pb-[50%] w-full h-full overflow-hidden">
        <svg
          style={{ strokeDasharray: 2000 }}
          viewBox="0 0 500 500"
          fill="none"
          className="absolute h-[200%] w-full left-0 right-0 top-0 bottom-0 svg-line"
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

      <div className="flex items-center flex-col text-white lg:-translate-y-8 group-hover:lg:-translate-y-14 transition-all duration-300 max-w-[345px]">
        <h1 className="font-black text-[38px]">{title}</h1>
        <p className="text-center text-[17px] px-4 pt-4 lg:opacity-0 lg:translate-y-2 group-hover:lg:translate-y-0 group-hover:lg:opacity-100 transition-all duration-500 break-words">
          {body.length > 180 ? body.slice(0, 180) + "..." : body}
        </p>
      </div>
    </article>
  );
};

export default Item;
