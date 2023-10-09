import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Carousel = () => {
  const Carouselitem = [
    {
      content:
        "If you teach something, we will create videos that are engaging and visually appealing",
      heading: "Educational Videos",
    },
    {
      content:
        "We Produce finest Quality films for you, be it documentries, Edtech Videos, Short Films, Film Series and many more",
      heading: "Film Production",
    },
    {
      content:
        "We Help Startup and Enterprises like you to increase revenue and generate more traffic by making custom animatedexplainer videos",
      heading: "Explainer Videos",
    },
    {
      content:
        "We do justice with our vision to your groovybeats that makes you enterour cinematic world",
      heading: "Music Videos",
    },
  ];
  return (
    <>

<div className="flex justify-center items-center h-auto bg-white mt-12">
  <div className="w-[70vw] bg-white h-auto">
    <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
      {Carouselitem.map((item) => (
        <SwiperSlide className="flex justify-center items-center h-full w-full">
          <div className=" w-full  h-auto flex flex-col items-center justify-center overflow-hidden ">
            <div className="text-center text-lg md:text-2xl w-full md:w-[60%] italic font-medium ">{item.content}</div>
            <div className="text-center text-lg mt-4">- {item.heading}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
</>



  );
};

export default Carousel;
