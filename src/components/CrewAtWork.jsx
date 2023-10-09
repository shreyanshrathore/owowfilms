import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const img3 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Crew+At+Work/WhatsApp-Image-2022-09-07-at-4.12.54-PM.jpeg";
const img2 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Crew+At+Work/WhatsApp-Image-2022-09-07-at-4.12.54-PM-2.jpeg";
const img1 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Crew+At+Work/WhatsApp-Image-2022-09-07-at-4.12.54-PM-1.jpeg"
const CrewAtWork = () => {
  return (
    <div className="w-full bg-black flex flex-col md:flex-row justify-between p-8 lg:px-24 mt-12">
      <div className="md:w-[40%] lg:ml-32 mt-8">
        <h1 className="text-white text-3xl font-semibold tracking-wider ">
          Crew At Work
        </h1>
        <div className="w-full h-1 bg-white mt-1 rounded-full"></div>
        <div className="text-white mt-12 tracking-wider ">
          We will transform your speech, research, or idea into a powerful video
          story that will help your audience understand it at both an intuitive
          and rational level. Whether it is a campaign, new scientific research,
          organization, or product, we will bring it to life with a story that
          will resonate with the hearts and minds of your desired audience.
        </div>
        <div></div>
      </div>
      <div className="md:w-[40%] w-full rounded-xl bg-black mt-8 ">
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            arrows: false,
            pagination: false,
          }}
        >
          <SplideSlide>
            <Imagecontainer img={img1} />
          </SplideSlide>
          <SplideSlide>
            <Imagecontainer img={img2} />
          </SplideSlide>
          <SplideSlide>
            <Imagecontainer img={img3} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

const Imagecontainer = ({ img }) => {
  return (
    <div className="bg-black">
      <img
        className="object-cover object-center w-[530px] h-96 rounded-xl overflow-hidden"
        src={img}
        alt=""
      />
    </div>
  );
};
export default CrewAtWork;
