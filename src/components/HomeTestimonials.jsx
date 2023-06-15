import { SportsEsportsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import star from "../assets/images/star.webp";
const HomeTestimonials = () => {
  const swiperRef = useRef(null);
  const lg = useMediaQuery("(min-width:1024px)");
  const { users } = useSelector((store) => store.user);
  return (
    <div className="w-full p-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 xs:flex-row xs:items-center xs:justify-between">
          <h2 className=" text-3xl font-semibold text-black  md:w-full md:max-w-[20rem] md:text-4xl ml:text-5xl">
            Testimonials
          </h2>
          <p className="hidden w-[23rem] text-xs text-gray-500 md:block">
            A video game console is an electronic device that outputs a video
            signal or image to display a video game that can be played with a
            game controller.
          </p>
          <Link
            to="collections/all"
            className="border-ellipse flex h-10 w-36 items-center justify-center gap-2 border-[1px] border-gray-500 p-2 text-xs text-gray-500 transition-all hover:border-none hover:bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white  xs:h-12 xs:w-44"
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
            autoplay={{
              delay: 5000,
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="h-full w-full py-10 "
          >
            {users.map((item, index) => {
              return (
                <SwiperSlide
                  key={`testimonal-comments-${item.comment.id}-${index}`}
                >
                  <div className="border-ellipse flex  h-[25rem] flex-col border-[1px] border-second-color bg-gradient-to-br from-sky-200 via-white to-white p-5 px-5 xxs:h-[27rem] xxs:px-10 xs:h-64 xs:flex-row xs:items-center">
                    <img
                      src={`./assets/products/${item.comment.productImage}`}
                      alt=""
                      className="block h-28 w-full object-contain drop-shadow-2xl xxs:h-36 xs:w-60"
                    />
                    <div className="mt-10 flex flex-col gap-3 xs:mt-0 ">
                      <p className="text-2xl font-semibold">
                        {item.comment.title}
                      </p>
                      <p className="line-clamp-5  text-sm ">
                        {item.comment.caption}
                      </p>
                      <div className=" flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img
                            src={`./assets/users/${item.image}`}
                            alt=""
                            className="block h-11 w-11 rounded-md bg-gradient-to-l from-blue to-second-color object-cover"
                          />
                          <div>
                            <p className="text-lg font-semibold">{item.name}</p>
                            <p className="-mt-1 text-xs">{item.membership}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 xs:flex-row">
                          <img
                            src={star}
                            alt=""
                            className="hidden w-20 object-contain xxs:block"
                          />
                          <p className="hidden text-xs font-bold text-blue xs:block">
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
            className="absolute -left-2 bottom-2 top-0 z-20 my-auto flex h-5 w-5 items-center justify-center border-2  border-white bg-white text-blue"
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
          >
            <ArrowCircleLeftRoundedIcon style={{ fontSize: "2.5rem" }} />
          </button>
          <button
            className="absolute -right-2 bottom-0 top-0 z-20 my-auto flex h-5 w-5 items-center justify-center border-2  border-white bg-white text-second-color"
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
