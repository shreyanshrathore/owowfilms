import React, { useEffect, useRef, useState } from "react";
// import footerbackground from "../assets/Landing-page-bg-image.jpg";
import Navbar from "./Navbar";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const parallaxValue = -scrollY * -0.5; // Adjust the multiplier for the desired parallax effect

  return (
    <div className="h-[100vh] bg-black">
      <div className="absolute h-full w-auto flex items-center justify-center overflow-hidden">
        <Navbar/>
        <img
          className="w-auto h-full object-cover object-center"
          src= "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Landing-page-bg-image.jpg"
          alt=""
          style={{ transform: `translateY(${parallaxValue}px)` }}
          ref={headerRef}
        />
        <div className="absolute z-20 text-white space-y-4 mt-12">
            <h1 className="tracking-widest text-2xl md:text-3xl font-semibold text-center">WELCOME TO</h1>
            <h1 className="tracking-widest text-[40px] md:text-7xl font-bold">OWOW FILMS</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
