import circle6 from "../assets/images/design-circle-3.png";
import SectionHeader from "../components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const HomeBestSellers = () => {
  return (
    <div className="relative bg-black w-full h-auto mt-[27rem] xs:mt-[31rem] md:mt-[35rem] lg:mt-[36rem]">
      <img
        src={circle6}
        alt=""
        className="absolute -top-32 z-0 right-0 left-0 mx-auto"
      />
      <div className="flex-col relative p-5 max-w-7xl w-full mx-auto z-40">
        <SectionHeader title="Bestsellers of the week" address="" />
        <div className="">
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,

              type: "bullets",
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper border-2 border-white h-[30rem] text-white"
          >
            <SwiperSlide className="w-40">Slide 1</SwiperSlide>
            <SwiperSlide className="w-40">Slide 2</SwiperSlide>
            <SwiperSlide className="w-40">Slide 3</SwiperSlide>
            <SwiperSlide className="w-40">Slide 4</SwiperSlide>
            <SwiperSlide className="w-40">Slide 1</SwiperSlide>
            <SwiperSlide className="w-40">Slide 2</SwiperSlide>
            <SwiperSlide className="w-40">Slide 3</SwiperSlide>
            <SwiperSlide className="w-40">Slide 4</SwiperSlide>
            <SwiperSlide className="w-40">Slide 1</SwiperSlide>
            <SwiperSlide className="w-40">Slide 2</SwiperSlide>
            <SwiperSlide className="w-40">Slide 3</SwiperSlide>
            <SwiperSlide className="w-40">Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBestSellers;
