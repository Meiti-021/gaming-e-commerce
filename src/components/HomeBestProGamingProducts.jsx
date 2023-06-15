import { SportsEsportsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Navigation } from "swiper";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import HomeCategoriesProduct from "./HomeCategoriesProduct";
const HomeBestProGamingProducts = () => {
  const swiperRef = useRef(null);
  const xs = useMediaQuery("(min-width:575px)");
  const md = useMediaQuery("(min-width:768px)");
  const lg = useMediaQuery("(min-width:1024px)");
  const { products } = useSelector((store) => store.cart);
  return (
    <div className="w-full p-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 xs:flex-row xs:items-center xs:justify-between">
          <h2 className=" text-3xl font-semibold text-black  md:w-full md:max-w-[20rem] md:text-4xl ml:text-5xl">
            Best
            <span className="mx-2 bg-gradient-to-r from-blue to-second-color bg-clip-text text-transparent md:mx-0 md:block">
              Pro Gaming
            </span>
            Products
          </h2>
          <p className="hidden max-w-sm text-xs text-gray-500 md:block">
            Gaming Product means any intangible asset, good or interest that can
            be bought or sold or otherwise is the subject of an activity
            constituting a Gaming Business.
          </p>
          <Link
            to="/collections/all"
            className="border-ellipse flex h-10 w-36 items-center justify-center gap-2 border-[1px] border-gray-500 p-2 text-xs text-gray-500 transition-all  hover:border-none hover:bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white xs:h-12 xs:w-44"
          >
            Show More
            <SportsEsportsOutlined />
          </Link>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={!xs ? "1" : !md ? "2" : !lg ? "3" : "4"}
            spaceBetween={30}
            ref={swiperRef}
            modules={[Navigation]}
            loop={true}
            className="h-full w-full py-10 "
          >
            {products
              .filter((item) => {
                return item.rate > 4.5;
              })
              .map((product) => {
                return (
                  <SwiperSlide
                    className=""
                    key={`home-best-product-categorie-gaming-${product.id}`}
                  >
                    <HomeCategoriesProduct light={true} {...product} />
                  </SwiperSlide>
                );
              })}
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
    </div>
  );
};

export default HomeBestProGamingProducts;
