import React from "react";
import img3 from "../assets/joinUs/Post production.svg";
import img1 from "../assets/joinUs/Pre production.svg";
import img2 from "../assets/joinUs/Production.svg";

const join = [
  {
    img: img1,
    heading: "PRE PRODUCTION",
    content: "WRITER, ART DIRECTOR, PRODUCTION MANAGER",
  },
  {
    img: img2,
    heading: "PRODUCTION",
    content:
      "DIRECTOR, CINEMATOGRAPHER, DRONE OPERATOR, 3D ARTIST, PHOTOGRAPHER",
  },
  {
    img: img3,
    heading: "POST PRODUCTION",
    content:
      "EDITOR, MUSIC PRODUCER, GRAPHIC DESIGNER/ILLUSTRATOR, VFX, MOTION GRAPHICS",
  },
];

const JoinUs = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-3xl font-bold">JOIN US</h1>
        <p className="md:text-xl text-xs  text-gray-400 mt-4 text-center ">
          We've been killing it in the content creation business since 2019
        </p>
        <p className="md:text-lg text-xs text-gray-500  font-semibold text-center">
          Wish to join us? Apply for the position that suits you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:gap-8">
        {join.map((item) => (
          <div>
            <Divbox
              icon={item.img}
              heading={item.heading}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Divbox = ({ icon, heading, content }) => {
  return (
    <div className="w-96 relative flex justify-center items-center flex-col h-96 space-y-4">
      <img className="h-20 w-min" src={icon} alt="" />
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="font-semibold text-center w-[98%]">{content}</p>
      <button className="absolute bottom-0 tracking-widest bg-white hover:black border-2 border-black  font-bold py-3 px-12 mt-12 transition duration-300 transform hover:scale-105 hover:bg-black hover:text-white hover:after:bg-white after:absolute after:inset-x-0 after:bottom-0 after:w-full after:h-1 after:bg-black after:opacity-0 hover:after:opacity-100">
        APPLY NOW
      </button>
    </div>
  );
};

export default JoinUs;
