import { Link } from "react-router-dom";
import { SportsEsportsOutlined } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import BlogPostItem from "./BlogPostItem";
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import "swiper/css/autoplay";
import { blogs } from "../features/Blogs";
const HomeBlogs = () => {
  const xs = useMediaQuery("(min-width:575px)");
  const md = useMediaQuery("(min-width:768px)");
  const lg = useMediaQuery("(min-width:1024px)");
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);
  return (
    <div className="mt-10 bg-black pb-16">
      <div className="mx-auto mt-8 w-full max-w-7xl p-5">
        <div className="flex flex-col gap-5 xs:flex-row xs:items-center xs:justify-between">
          <h2 className=" text-3xl font-semibold text-white md:w-full md:max-w-[20rem] md:text-4xl md:text-white ml:text-5xl">
            Best
            <span className="mx-2 bg-gradient-to-r from-blue to-second-color bg-clip-text text-transparent md:mx-0 md:block">
              Pro Gaming
            </span>
            Blog
          </h2>
          <p className="hidden w-96 text-xs text-gray-500 md:block">
            Gaming Product means any intangible asset, good or interest that can
            be bought or sold or otherwise is the subject of an activity
            constituting a Gaming Business.
          </p>
          <Link
            to="/blog"
            className="border-ellipse flex h-10 w-36 items-center justify-center gap-2 border-[1px] border-[rgba(255,255,255,0.6)] p-2 text-xs text-[rgba(255,255,255,0.6)] transition-all  hover:border-none hover:bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white xs:h-12 xs:w-44"
          >
            Show More
            <SportsEsportsOutlined />
          </Link>
        </div>
        <div className="relative mt-7">
          <Swiper
            slidesPerView={lg ? "4" : md ? "3" : xs ? "2" : "1"}
            spaceBetween={20}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="h-auto w-full"
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
            className="mt-10 h-auto w-full"
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
