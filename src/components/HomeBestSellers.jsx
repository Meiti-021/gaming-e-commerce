import circle6 from "../assets/images/design-circle-3.png";
import SectionHeader from "../components/SectionHeader";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { Pagination } from "swiper";
import { useEffect, useRef } from "react";
import BestSellerSlider from "./BestSellerSlider";
const HomeBestSellers = () => {
  const { products } = useSelector((store) => store.cart);
  const swiper = useSwiper();
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.slideTo(3);
  }, [swiperRef]);
  return (
    <div className="relative bg-black w-full h-auto mt-[27rem] xs:mt-[31rem] md:mt-[35rem] lg:mt-[36rem]">
      <img
        src={circle6}
        alt=""
        className="absolute -top-32 z-0 right-0 left-0 mx-auto"
      />
      <div className="flex-col relative  w-full z-40">
        <SectionHeader title="Bestsellers of the week" address="" />
        <div className="">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={"0px"}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            ref={swiperRef}
            slideToClickedSlide={true}
            loop={true}
            modules={[Pagination]}
            centeredSlides={true}
            className="mySwiper w-[21rem] overflow-visible h-[40rem] text-white"
          >
            {products
              .slice(0, 8)
              .sort((a, b) => a.seller - b.seller)
              .map((product, index) => {
                return (
                  <SwiperSlide key={product.id} className="h-[35.5rem] p-4">
                    {({ isActive }) => (
                      <BestSellerSlider {...product} isActive={isActive} />
                    )}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBestSellers;
