import { Link } from "react-router-dom";
import { SportsEsportsOutlined } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { useSelector } from "react-redux";
import BlogPostItem from "./BlogPostItem";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import "swiper/css/autoplay";
const HomeBlogs = () => {
  const xs = useMediaQuery("(min-width:575px)");
  const md = useMediaQuery("(min-width:768px)");
  const lg = useMediaQuery("(min-width:1024px)");
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  const { blogs } = useSelector((store) => store.blog);
  return (
    <div className="bg-black mt-10 pb-16">
      <div className="w-full max-w-7xl p-5 mt-8 mx-auto">
        <div className="flex flex-col gap-5 xs:flex-row xs:justify-between xs:items-center">
          <h2 className="font-first-font text-white font-semibold text-3xl md:text-white md:w-full md:max-w-[20rem] md:text-4xl ml:text-5xl">
            Best
            <span className="text-transparent mx-2 md:block md:mx-0 bg-clip-text bg-gradient-to-r from-blue to-second-color">
              Pro Gaming
            </span>
            Blog
          </h2>
          <p className="text-gray-500 md:block hidden text-xs w-96">
            Gaming Product means any intangible asset, good or interest that can
            be bought or sold or otherwise is the subject of an activity
            constituting a Gaming Business.
          </p>
          <Link
            to=""
            className="flex h-10 xs:h-12 w-36 xs:w-44 justify-center items-center p-2 gap-2 border-[1px] search-bar border-[rgba(255,255,255,0.6)] text-xs font-first-font text-[rgba(255,255,255,0.6)] transition-all"
          >
            Show More
            <SportsEsportsOutlined />
          </Link>
        </div>
        <div className="mt-7 relative">
          <Swiper
            slidesPerView={lg ? "4" : md ? "3" : xs ? "2" : "1"}
            spaceBetween={20}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="w-full h-auto"
            ref={swiper1}
            autoplay={{
              delay: 3000,
            }}
          >
            {blogs.slice(0, 5).map((item) => {
              return (
                <SwiperSlide key={`homeblog-${item.id}`} className="h-auto">
                  <BlogPostItem {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            slidesPerView={lg ? "4" : md ? "3" : xs ? "2" : "1"}
            spaceBetween={20}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="w-full h-auto mt-10"
            ref={swiper2}
            autoplay={{
              delay: 3000,
              reverseDirection: true,
            }}
          >
            {blogs.slice(5, 10).map((item) => {
              return (
                <SwiperSlide key={`homeblog-${item.id}`} className="h-auto">
                  <BlogPostItem {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
