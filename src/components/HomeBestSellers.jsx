import circle6 from "../assets/images/design-circle-3.webp";
import SectionHeader from "../components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { Pagination } from "swiper";
import { useEffect, useRef } from "react";
import BestSellerSlider from "./BestSellerSlider";
const HomeBestSellers = () => {
  const { products } = useSelector((store) => store.cart);
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.slideTo(3);
  }, [swiperRef]);
  return (
    <div className="relative mt-[27rem] h-auto w-full bg-black xs:mt-[31rem] md:mt-[35rem] lg:mt-[36rem]">
      <img
        src={circle6}
        alt=""
        className="absolute -top-32 left-0 right-0 z-0 mx-auto"
      />
      <div className="relative z-40  w-full flex-col">
        <SectionHeader
          title="Bestsellers of the week"
          address="/collections/all"
        />
        <div>
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
            className="mySwiper h-[33rem] w-[100%] overflow-visible p-4 text-white xxs:h-[40rem] xxs:w-[21rem] xs:p-0"
          >
            {products
              .slice(0, 8)
              .sort((a, b) => a.seller - b.seller)
              .map((product) => {
                return (
                  <SwiperSlide
                    key={`home-best-seller-${product.id}`}
                    className="h-[27rem] p-4 xxs:h-[31.5rem] xs:h-[35.5rem]"
                  >
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
