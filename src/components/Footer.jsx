import React from "react";
import bg from "../assets/Footer image (1).jpg";
import icon1 from "../assets/social media icons/facebook (1).svg";
import icon2 from "../assets/social media icons/instagram (1).svg";
import icon3 from "../assets/social media icons/twitter.svg";
import icon4 from "../assets/social media icons/youtube.svg";
import { Link } from "react-scroll";

const logo =  "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/owow-final-logo-white.png";

const Footer = () => {
  const imageContainer = [icon1, icon2, icon3, icon4];
  return (
    <div className="relative h-96">
      <img
        src={bg}
        className=" h-96 w-full object-cover object-center"
        alt=""
      />
      <div className="absolute top-0 md:left-32 flex">
        <div>
          <img className="h-60 object-cover object-center" src={logo} alt="" />
          <div className="flex  gap-6 justify-center">
            {imageContainer.map((item) => (
              <Imgcontainer img={item} />
            ))}
          </div>
          <div className=" mt-6 w-full font-bold ">
            <p className="text-white text-center ">
              ©2022. Owow Films. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="mt-20 hidden md:block ml-72 ">
          <h1 className="text-white font-bold text-3xl">USEFUL LINKS</h1>
          <div className="text-white font-semibold space-y-6 py-6 cursor-pointer">
            <div>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                HOME
              </Link>
            </div>
            <div>
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                ABOUT US
              </Link>
            </div>

            <div>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                PORTFOLIO
              </Link>
            </div>

            <div>
              <Link
                to="careers"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                CAREERS
              </Link>
            </div>

            <div>
              <Link
                to="contact-us"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




const Imgcontainer = ({ img }) => {
  return <img className="h-12" src={img} alt="" />;
};
export default Footer;
