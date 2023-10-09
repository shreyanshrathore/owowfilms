import React from "react";

const About = () => {
  return (
    <div className="bg-gray-950 w-full flex-col flex md:flex-row ">
      <div className="w-full md:w-[40%]  flex justify-center items-center">
      <h1 className="font-yeseva text-5xl text-white md:ml-32 text-center py-6  w-auto">ABOUT US</h1>
      </div>
      <div className="flex w-full md:w-[60%] justify-center items-center p-8">
        <p className="text-white text-xl w-full md:w-[80%]">
          We at OWOW Films, pride ourselves on creating beautiful and unique
          cinematic videos that are entertaining by pooling the best human
          personnel to give viewers an overwhelming experience. Visualizing
          thoughts, ideas graphics by touching the lives of the ordinary through
          innovative visuals is our passion
        </p>
      </div>
    </div>
  );
};

export default About;
