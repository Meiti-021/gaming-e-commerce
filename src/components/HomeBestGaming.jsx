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
    <div className="relative h-auto  min-h-[34rem] w-full">
      <div className="absolute -z-30 hidden h-44 w-full bg-black md:block">
        <img src={circle} alt="" className="absolute -bottom-8 right-8 " />
        <img src={circle3} alt="" className="-bottom-68 absolute right-24 " />
      </div>
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-5 xs:gap-0 md:grid md:grid-cols-3 ml:grid-cols-4">
        <div className="col-span-1 flex h-80 w-full flex-col items-center gap-5 p-5 md:col-span-1 ">
          <h2 className=" text-3xl font-semibold md:w-full md:max-w-[20rem] md:text-4xl md:text-white ml:text-5xl">
            Best
            <span className="mx-2 bg-gradient-to-r from-blue to-second-color bg-clip-text text-transparent md:mx-0 md:block">
              Pro Gaming
            </span>
            Categories
          </h2>
          <div className="my-2 flex w-full max-w-[20rem] flex-col gap-3 xxs:my-0 xxs:gap-6">
            {categories.map((item, index) => {
              return (
                <button
                  key={item.title}
                  className={`w-full border-[1px] ${
                    index === categorie
                      ? "bg-gradient-to-r from-blue to-second-color text-white"
                      : "bg-transparent text-gray-500"
                  } border-ellipse  flex h-12 items-center justify-center gap-1 border-gray-600  text-xs font-semibold transition-all `}
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
            className="text-center text-sm  uppercase text-gray-500 underline"
          >
            show more categories
          </Link>
        </div>
        <div className="relative flex h-[28rem] w-full items-center justify-center p-3 xxs:h-[35rem] md:col-span-2 ml:col-span-3">
          <Swiper
            slidesPerView={!xs ? "1" : !ml ? "2" : "3"}
            spaceBetween={10}
            ref={swiperRef}
            modules={[Navigation]}
            loop={true}
            className="h-full w-full  "
          >
            {ctgProduct.map((item) => {
              return (
                <SwiperSlide
                  className="border-ellipse h-full w-full border-[1px] border-blue bg-gradient-to-br from-sky-200 to-white p-3 md:bg-none"
                  key={`categorie-product${item.id}`}
                >
                  <HomeCategoriesProduct {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="absolute bottom-0 left-2 top-0 z-20 my-auto flex h-5 w-5 items-center justify-center border-2  border-white bg-white text-blue"
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
          >
            <ArrowCircleLeftRoundedIcon style={{ fontSize: "2.5rem" }} />
          </button>
          <button
            className="absolute bottom-0 right-2 top-0 z-20 my-auto flex h-5 w-5 items-center justify-center border-2  border-white bg-white text-second-color"
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
