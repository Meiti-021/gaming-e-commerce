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
    <div className="w-full py-10 p-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 xs:flex-row xs:justify-between xs:items-center">
          <h2 className="font-first-font text-black font-semibold text-3xl  md:w-full md:max-w-[20rem] md:text-4xl ml:text-5xl">
            Best
            <span className="text-transparent mx-2 md:block md:mx-0 bg-clip-text bg-gradient-to-r from-blue to-second-color">
              Pro Gaming
            </span>
            Products
          </h2>
          <p className="text-gray-500 md:block hidden text-xs max-w-sm">
            Gaming Product means any intangible asset, good or interest that can
            be bought or sold or otherwise is the subject of an activity
            constituting a Gaming Business.
          </p>
          <Link
            to="/collections/all"
            className="flex h-10 xs:h-12 w-36 xs:w-44 justify-center items-center p-2 gap-2 border-[1px] search-bar border-gray-500 text-xs font-first-font text-gray-500 transition-all hover:text-white hover:border-none hover:bg-gradient-to-r hover:from-blue hover:to-second-color"
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
            className="w-full py-10 h-full "
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

export default HomeBestProGamingProducts;
