import { SportsEsportsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Navigation } from "swiper";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import star from "../assets/images/star.png";
const HomeTestimonials = () => {
  const swiperRef = useRef(null);
  const lg = useMediaQuery("(min-width:1024px)");
  const { users } = useSelector((store) => store.user);
  return (
    <div className="w-full py-10 p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 xs:flex-row xs:justify-between xs:items-center">
          <h2 className="font-first-font text-black font-semibold text-3xl  md:w-full md:max-w-[20rem] md:text-4xl ml:text-5xl">
            Testimonials
          </h2>
          <p className="text-gray-500 md:block hidden text-xs w-[23rem]">
            A video game console is an electronic device that outputs a video
            signal or image to display a video game that can be played with a
            game controller.
          </p>
          <Link
            to="#"
            className="flex h-10 xs:h-12 w-36 xs:w-44 justify-center items-center p-2 gap-2 border-[1px] search-bar border-gray-500 text-xs font-first-font text-gray-500 transition-all"
          >
            Show More
            <SportsEsportsOutlined />
          </Link>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={lg ? "2" : "1"}
            spaceBetween={30}
            ref={swiperRef}
            modules={[Navigation]}
            loop={true}
            className="w-full py-10 h-full "
          >
            {users.map((item, index) => {
              return (
                <SwiperSlide
                  key={`testimonal-comments-${item.comment.id}-${index}`}
                >
                  <div className="border-[1px] flex flex-col xs:flex-row xs:items-center xs:h-64 px-10 border-second-color search-bar p-5 h-[26.5rem] bg-gradient-to-br from-sky-200 via-white to-white">
                    <img
                      src={`./assets/products/${item.comment.productImage}`}
                      alt=""
                      className="w-full block object-contain h-36 xs:w-60 drop-shadow-2xl"
                    />
                    <div className="flex flex-col mt-10 xs:mt-0 gap-3 font-first-font">
                      <p className="text-2xl font-semibold">
                        {item.comment.title}
                      </p>
                      <p className="text-sm ">{item.comment.caption}</p>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-4">
                          <img
                            src={`./assets/users/${item.image}`}
                            alt=""
                            className="w-11 h-11 bg-gradient-to-l from-blue to-second-color rounded-md object-cover block"
                          />
                          <div>
                            <p className="text-lg font-semibold">{item.name}</p>
                            <p className="text-xs -mt-1">{item.membership}</p>
                          </div>
                        </div>
                        <div className="flex gap-3 flex-col items-center xs:flex-row">
                          <img
                            src={star}
                            alt=""
                            className="object-contain w-20"
                          />
                          <p className="text-xs text-blue font-bold hidden xs:block">
                            4.5 <span className="text-black">/ 5.0</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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
    </div>
  );
};

export default HomeTestimonials;
