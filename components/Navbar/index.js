import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const header = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        gsap.to(".nav-btn", {
          duration: 0.3,
          width: "24px",
          height: "24px",
        });

        gsap.to(header.current, {
          duration: 0.5,
          background: "#222222",
          height: 72,
        });
      } else {
        gsap.to(header.current, {
          duration: 0.5,
          background: "transparent",
          height: 80,
        });
      }
    };

    const data = window.addEventListener("scroll", scrollHandler);
    console.log("DDDDDDDDDDDDDDDD", data);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <>
      <header className="header" ref={header}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <Link href={"/"} passHref>
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 0L37.9737 11.9737L26 23.9474L14.0263 11.9737L26 0Z"
                  fill="#6B71FF"
                  fillOpacity="0.49"
                />
                <path
                  d="M11.9737 14.0263L23.9474 26L11.9737 37.9737L0 26L11.9737 14.0263Z"
                  fill="#6B71FF"
                  fillOpacity="0.49"
                />
                <path
                  d="M40.0263 14.0263L52 26L40.0263 37.9737L28.0526 26L40.0263 14.0263Z"
                  fill="#6B71FF"
                  fillOpacity="0.49"
                />
                <path
                  d="M26 28.0526L37.9737 40.0263L26 52L14.0263 40.0263L26 28.0526Z"
                  fill="#6B71FF"
                  fillOpacity="0.49"
                />
                <path
                  d="M26 8.89473L43.1053 26L26 43.1053L8.89472 26L26 8.89473Z"
                  fill="#6B71FF"
                />
              </svg>
            </Link>
          </div>

          <nav className="nav-horizontal">
            <Link href={"#service"} passHref>
              <a className="nav-horizontal-link">Services</a>
            </Link>

            <Link href={"#industries"} passHref>
              <a className="nav-horizontal-link">Industries</a>
            </Link>

            <Link href={"#how"} passHref>
              <a className="nav-horizontal-link">How we work</a>
            </Link>

            <Link href={"#projects"} passHref>
              <a className="nav-horizontal-link">Projects</a>
            </Link>

            <Link href={"#contact"} passHref>
              <a className="nav-horizontal-link">Contact</a>
            </Link>
          </nav>

          <div
            className={`nav-btn ${isClick && "nav-btn-cross"}`}
            onClick={() => setIsClick(state => !state)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      {isClick && (
        <main className="nav-full">
          <nav className="nav-vertical">
            <Link href={"#service"} passHref>
              <a className="nav-horizontal-link">Services</a>
            </Link>

            <Link href={"#industries"} passHref>
              <a className="nav-horizontal-link">Industries</a>
            </Link>

            <Link href={"#how"} passHref>
              <a className="nav-horizontal-link">How we work</a>
            </Link>

            <Link href={"#projects"} passHref>
              <a className="nav-horizontal-link">Projects</a>
            </Link>

            <Link href={"#contact"} passHref>
              <a className="nav-horizontal-link">Contact</a>
            </Link>
          </nav>
        </main>
      )}
    </>
  );
};

export default Navbar;
