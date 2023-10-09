import React from "react";
import logo1 from "../assets/Webseries.svg";
import logo2 from "../assets/Educational videos.svg";
import logo3 from "../assets/Explainer video.svg";
import logo4 from "../assets/Realty video.svg";
import logo5 from "../assets/Pre weddings.svg";
import logo6 from "../assets/Corporate videos.svg";

const Services = () => {
  const services = [
    {
      logo: logo1, 
      heading: "WEBSERIES/FILMS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      logo: logo2, 
      heading: "EDUCATIONAL VIDEOS", 
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      logo: logo3, 
      heading: "EXPLAINER VIDEOS", 
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      logo: logo4, 
      heading: "REALTY VIDEOS", 
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      logo: logo5, 
      heading: "PRE WEDDINGS", 
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      logo: logo6, 
      heading: "CORPORATE VIDEOS", 
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
  ];
  return (
    <div className="flex items-center flex-col justify-center mt-16">
      <div className="text-sm text-gray-400 font-semibold">SERVICES</div>
      <div className="text-3xl font-semibold mt-6">OUR PRODUCTION</div>
      <div className="flex flex-wrap gap-16 w-[70vw] items-center justify-center mt-16 space-y-8">
        {services.map((item, index) => (
          <Production key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Production = ({ item }) => {
  return (
    <div className="w-72 ">
      <div className="flex items-center justify-center">
        <img className="h-16" src={item.logo} alt="" /> {/* Updated */}
      </div>
      <div className="text-lg font-bold text-center mt-4">{item.heading}</div>
      <div className="text-center mt-6">{item.content}</div>
    </div>
  );
};

export default Services;
