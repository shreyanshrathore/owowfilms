import React, { useEffect, useRef, useState } from "react";
import FsLightbox from "fslightbox-react";
// import footerbackground from "../assets/Footer image.jpeg"; // Replace with your image path
import footerbackground from "../assets/Alfa-home-parallax-img.jpg";
import thumbnail2 from '../assets/desire.jpeg';
import thumbnail3 from "../assets/gar-ho-sake-to.jpeg";
const thumbnail1 =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/Bachpan.jpeg";
const thumbnail4 =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/Pankh.jpeg";
const thumbnail5 =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/pre-wedding.jpeg";
const thumbnail6 =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/pre-wedding-2.jpeg";
const thumbnail7 =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/sakar-real-life.jpeg";
const thumbnail8 =
  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/zevo-infant.jpeg";

const ParallaxHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef(null);
  const [toggler, setToggler] = useState(false);
  const services = [
    {
      thum: thumbnail1,
      heading: "WEBSERIES/FILMS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail2,
      heading: "EDUCATIONAL VIDEOS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail3,
      heading: "EXPLAINER VIDEOS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail4,
      heading: "REALTY VIDEOS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail5,
      heading: "PRE WEDDINGS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail6,
      heading: "CORPORATE VIDEOS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail7,
      heading: "CORPORATE VIDEOS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
    {
      thum: thumbnail8,
      heading: "CORPORATE VIDEOS",
      content:
        "Implementation of the creative idea in the course of which a webseries/film is created by shooting in accordance with the script, the filming schedule and the estimate of expenditure.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [num, setNum] = useState(0);

  const parallaxValue = -scrollY * 0.5 + 900; // Adjust the multiplier for the desired parallax effect
  return (
    <div className="flex items-center justify-center bg-red-200">
      <div className="w-full flex flex-col overflow-hidden h-auto py-12 items-center justify-center bg-black relative">
        <div className="text-sm text-gray-300 font-semibold z-10">
          PORTFOLIO
        </div>
        <div className="text-3xl font-semibold mt-6 text-white z-10">
          RECENT WORK
        </div>

        <div className="absolute bottom- h-auto w-full flex items-center justify-center overflow-hidden">
          <img
            className="h-[80rem] object-cover object-center "
            src={footerbackground}
            alt=""
            style={{ transform: `translateY(${parallaxValue}px)` }}
            ref={headerRef}
          />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex flex-wrap gap-16  justify-center items-center p-6 mt-16  z-10"
            onClick={() => setToggler(!toggler)}
          >
            {services.map((item, index) => (
              <Production
                key={index}
                index={index}
                item={item}
                setNum={setNum}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/channel/UC2X4gonZ8fcaFb8MbepuMkQ"
              target="blank"
            >
              <button className="relative tracking-widest bg-black hover:black border-2 border-b-gray-50 text-white font-bold py-3 px-12 mt-12 transition duration-300 transform hover:scale-105 hover:after:bg-white after:absolute after:inset-x-0 after:bottom-0 after:w-full after:h-1 after:bg-black after:opacity-0 hover:after:opacity-100">
                WATCH FULL PORTFOLIO
              </button>
            </a>
          </div>
        </div>
        <>
          <FsLightbox
            toggler={toggler}
            sources={[
              "https://youtu.be/Yxdy-VQ6sg4?si=Rf6qA5dTqwQOFRML",
              "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/desire.jpeg",
              thumbnail3,
              "https://youtu.be/E_nKo_fLFbw?si=wl6GLde5PbDCcZRz",
              "https://youtu.be/SiC1epZBVFo?si=MF7_5Z_Eoy3f-ZiK",
              "https://youtu.be/z6evdEyMMOA?si=VGjSWYa_ChOKvKic",
              "https://youtu.be/AocSwEiz2PQ?si=mSC6kIoEBzVjRNMC",
              "https://youtu.be/NvFUjNi35Yg?si=oHiNkId5v8pyObnP",
            ]}
            sourceIndex={num}
          />
        </>
      </div>
    </div>
  );
};

const Production = ({ item, index, setNum }) => {
  return (
    <div className="w-72 z-10 bg-green-300" onClick={() => setNum(index)}>
      <div className="flex items-center justify-center"></div>
      <img src={item.thum} alt="" />

      {/* <div className="text-center mt-6 text-white">{item.content}</div> */}
    </div>
  );
};

export default ParallaxHeader;
