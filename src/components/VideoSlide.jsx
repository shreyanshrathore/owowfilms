





import FsLightbox from "fslightbox-react";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const img1 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/pre-wedding.jpeg";
const img2 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/zevo-infant.jpeg";
const img3 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/sakar-real-life.jpeg";
const img4 = "https://owowfilmsbucket.s3.ap-south-1.amazonaws.com/Thumbnails/pre-wedding-2.jpeg";

const VideoSlide = () => {

  const slides = [img1, img2, img3, img4];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [toggler, setToggler] = useState(false)

  const handleSlideChange = (splide) => {
    setCurrentSlideIndex(splide.index);
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-[85%] overflow-hidden ml-[5%] mt-12 text-white flex flex-col justify-center items-center mb-8"></div>
        {/* <div className="justify-center items-center sm:w-[90%] sm:ml-[5%] overflow-hidden hidden md:flex">
          <Splide
            options={{
              type: "loop",
              padding: "22rem",
              rewind: true,
              width: "auto",
              height: "auto",
              gap: "14rem",
              autoplay: true,
              interval: 2000,
              arrows: false,
            }}
            onMoved={handleSlideChange}
          >
            {slides.map((item, index) => (
              <Xsplideslides
                key={index}
                img={item}
                index={index}
                currentSlideIndex={currentSlideIndex}
                setToggler = {setToggler}
                toggler = {toggler}
              />
            ))}
          </Splide>
        </div> */}

        <div className="justify-center items-center sm:w-[90%] sm:ml-[5%] overflow-hidden hidden md:flex ">
          <Splide
            options={{
              type: "loop",
              padding: "28rem",
              perMove:1,
              rewind: true,
              width: 1420,
              height: "auto",
              gap: "3rem",
              autoplay: true,
              interval: 3000,
              arrows: true,
            }}
            onMoved={handleSlideChange}
          >
            {slides.map((item, index) => (
              <Xsplideslides
                key={index}
                img={item}
                index={index}
                currentSlideIndex={currentSlideIndex}
                setToggler = {setToggler}
                toggler = {toggler}
              />
            ))}
          </Splide>
        </div>
        <div className="justify-center items-center sm:w-[90%] sm:ml-[5%] overflow-hidden flex md:hidden ">
          <Splide
            options={{
              type: "loop",
              padding: "28rem",
              perMove:1,
              rewind: true,
              width: 1220,
              height: "auto",
              gap: "3rem",
              autoplay: true,
              interval: 3000,
              arrows: true,
            }}
            onMoved={handleSlideChange}
          >
            {slides.map((item, index) => (
              <Xsplideslides
                key={index}
                img={item}
                index={index}
                currentSlideIndex={currentSlideIndex}
                setToggler = {setToggler}
                toggler = {toggler}
              />
            ))}
          </Splide>
        </div>


        <FsLightbox
            toggler={toggler}
            sources={[
              "https://www.youtube.com/watch?v=SiC1epZBVFo",
              "https://www.youtube.com/watch?v=NvFUjNi35Yg",
              "https://www.youtube.com/watch?v=AocSwEiz2PQ",
              "https://www.youtube.com/watch?v=z6evdEyMMOA"
            ]}
            sourceIndex={currentSlideIndex}
          />
      </div>
    </div>
  );
};

const Xsplideslides = ({ img, index, currentSlideIndex, setToggler, toggler }) => {
  const isCentered = index === currentSlideIndex;
  return (
    <SplideSlide>
      <div className="sm:w-[540px] sm:h-[300px] w-80 h-56 overflow-hidden rounded-xl">
        <div className="bg-white">
          <img
            className="w-full h-72 md:object-cover md:object-top object-fill"
            src={img}
            alt=""
          />
          <div className="absolute bottom-[5%] md:bottom-[20%] right-[40%]  text-2xl h-32 text-gray-200" onClick={()=> setToggler(toggler? false: true)}>
            <PlayArrowOutlinedIcon
              style={{
                fontSize: 72,
                cursor: "pointer",
                visibility: isCentered ? "visible" : "hidden",
              }}
            />
          </div>
        </div>
      </div>
    </SplideSlide>
  );
};

export default VideoSlide;
