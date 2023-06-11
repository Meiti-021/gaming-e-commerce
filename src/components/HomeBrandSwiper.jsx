import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import logo from "../assets/images/client-logo.png";
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
    <div className="w-full h-44 bg-black flex justify-center items-center">
      <div className="h-full w-full max-w-7xl relative">
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
          className="w-full py-10 h-full "
        >
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full p-8 h-full object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52  h-full ">
            <img
              src={logo}
              alt=""
              className="w-full  h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52  h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52 h-full ">
            <img
              src={logo}
              alt=""
              className="w-full h-full p-8 object-contain object-center"
            />
          </SwiperSlide>
        </Swiper>
        <button
          className="absolute left-2 z-20 top-0 bottom-0 my-auto text-blue border-2 border-white w-5 h-5 bg-white  flex justify-center items-center"
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
        >
          <ArrowCircleLeftRoundedIcon style={{ fontSize: "2.5rem" }} />
        </button>
        <button
          className="absolute right-2 z-20 top-0 bottom-0 my-auto text-second-color border-2 border-white w-5 h-5 bg-white  flex justify-center items-center"
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
        >
          <ArrowCircleRightRoundedIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
    </div>
  );
};

export default HomeBrandSwiper;
