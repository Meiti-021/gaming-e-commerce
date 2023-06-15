import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import logo from "../assets/images/client-logo.webp";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";

const HomeBrandSwiper = () => {
  const swiperRef = useRef(null);
  const xs = useMediaQuery("(min-width:575px)");
  const md = useMediaQuery("(min-width:768px)");
  const lg = useMediaQuery("(min-width:1024px)");
  return (
    <div className="flex h-44 w-full items-center justify-center bg-black">
      <div className="relative h-full w-full max-w-7xl">
        <Swiper
          slidesPerView={lg ? "4" : md ? "3" : xs ? "2" : "1"}
          spaceBetween={30}
          freeMode={true}
          ref={swiperRef}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          modules={[Autoplay]}
          loop={true}
          className="h-full w-full py-10 "
        >
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full  w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full  w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full  w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-52 ">
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain object-center p-8"
            />
          </SwiperSlide>
        </Swiper>
        <button
          className="absolute bottom-0 left-2 top-0 z-20 my-auto flex h-5 w-5 items-center justify-center border-2  border-white bg-white text-blue"
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          aria-label="swipes the slider to next slide"
        >
          <ArrowCircleLeftRoundedIcon style={{ fontSize: "2.5rem" }} />
        </button>
        <button
          className="absolute bottom-0 right-2 top-0 z-20 my-auto flex h-5 w-5 items-center justify-center border-2  border-white bg-white text-second-color"
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          aria-label="swipes the slider to previous slide"
        >
          <ArrowCircleRightRoundedIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
    </div>
  );
};

export default HomeBrandSwiper;
