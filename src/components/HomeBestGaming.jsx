import circle from "../assets/images/main-conent-games.png";
import circle3 from "../assets/images/design-circle-3.png";
import SpeakerRoundedIcon from "@mui/icons-material/SpeakerRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

import HomeCategoriesProduct from "./HomeCategoriesProduct";
import { useMediaQuery } from "@mui/material";
const categories = [
  {
    title: "Gaming Peripherals",
    icon: <SportsEsportsRoundedIcon style={{ fontSize: "1.2rem" }} />,
  },
  {
    title: "Speakers & Monitors",
    icon: <SpeakerRoundedIcon style={{ fontSize: "1.2rem" }} />,
  },
  {
    title: "Power Supplies",
    icon: <BoltRoundedIcon style={{ fontSize: "1.2rem" }} />,
  },
];
const HomeBestGaming = () => {
  const xs = useMediaQuery("(min-width:575px)");
  const ml = useMediaQuery("(min-width:1200px)");
  const { products } = useSelector((store) => store.cart);
  const [categorie, setCategorie] = useState(0);
  const [ctgProduct, setctgProduct] = useState(
    products.filter((item) => {
      return item.type === "Remote" || item.type === "Console";
    })
  );
  const swiperRef = useRef(null);
  return (
    <div className="w-full relative  min-h-[34rem] h-auto">
      <div className="absolute hidden md:block w-full h-44 bg-black -z-30">
        <img src={circle} alt="" className="absolute right-8 -bottom-8 " />
        <img src={circle3} alt="" className="absolute right-24 -bottom-68 " />
      </div>
      <div className="w-full max-w-7xl h-full mx-auto  flex flex-col md:grid md:grid-cols-3 ml:grid-cols-4">
        <div className="col-span-1 flex flex-col items-center gap-5 md:col-span-1 w-full h-80 p-5 ">
          <h2 className="font-first-font font-semibold text-3xl md:text-white md:w-full md:max-w-[20rem] md:text-4xl ml:text-5xl">
            Best
            <span className="text-transparent mx-2 md:block md:mx-0 bg-clip-text bg-gradient-to-r from-blue to-second-color">
              Pro Gaming
            </span>
            Categories
          </h2>
          <div className="w-full max-w-[20rem]  flex flex-col gap-6">
            {categories.map((item, index) => {
              return (
                <button
                  key={item.title}
                  className={`w-full border-[1px] ${
                    index === categorie
                      ? "text-white bg-gradient-to-r from-blue to-second-color"
                      : "text-gray-500 bg-transparent"
                  } border-gray-600 search-bar h-10 text-xs font-semibold flex font-first-font justify-center transition-all items-center gap-1`}
                  onClick={() => {
                    setCategorie(index);
                    if (index === 0) {
                      setctgProduct(
                        products.filter((item) => {
                          return (
                            item.type === "Remote" || item.type === "Console"
                          );
                        })
                      );
                    } else if (index === 1) {
                      setctgProduct(
                        products.filter((item) => {
                          return (
                            item.type === "Headset" || item.type === "Monitors"
                          );
                        })
                      );
                    } else if (index === 2) {
                      setctgProduct(
                        products.filter((item) => {
                          return (
                            item.type === "GamePCs" || item.type === "Cards"
                          );
                        })
                      );
                    }
                  }}
                >
                  {item.icon}
                  {item.title}
                </button>
              );
            })}
          </div>
          <Link
            to={"/collections/all"}
            className="uppercase underline font-first-font text-sm text-center text-gray-500"
          >
            show more categories
          </Link>
        </div>
        <div className="w-full p-3 relative h-[40rem] xs:h-[35rem] md:col-span-2 ml:col-span-3 flex justify-center items-center">
          <Swiper
            slidesPerView={!xs ? "1" : !ml ? "2" : "3"}
            spaceBetween={10}
            ref={swiperRef}
            modules={[Navigation]}
            loop={true}
            className="w-full h-full  "
          >
            {ctgProduct.map((item) => {
              return (
                <SwiperSlide
                  className="w-full h-full p-3 border-[1px] bg-gradient-to-br md:bg-none from-sky-200 to-white border-blue search-bar"
                  key={`categorie-product${item.id}`}
                >
                  <HomeCategoriesProduct {...item} />
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

export default HomeBestGaming;
