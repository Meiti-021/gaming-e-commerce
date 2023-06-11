import heroBgLeft from "../assets/images/Half-bluthooth.png";
import heroBgRight from "../assets/images/Half-bluthooth-right.png";
import circle2 from "../assets/images/design-circle-2.png";
import circle1 from "../assets/images/design-circle-1.png";
import joystick from "../assets/images/main-conent-games.png";
import circle3 from "../assets/images/round-img-big.png";
import circle4 from "../assets/images/round-img-small.png";
import circle5 from "../assets/images/full-bluthooth.png";
import herostar from "../assets/images/top-star.png";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { Link } from "react-router-dom";
const HomeHero = () => {
  return (
    <div className="relative">
      <div className="absolute h-[27rem] w-full bg-black xs:h-[31rem] md:h-[35rem]  lg:h-[36rem] ">
        <div className="full absolute w-full bg-black">
          <img
            src={heroBgLeft}
            alt=""
            className="absolute left-0 top-0 z-10 h-[28rem] object-contain xs:h-[35rem] ml:h-[42rem]"
          />

          <img
            src={heroBgRight}
            alt=""
            className="absolute -top-12 right-[0] z-10 h-[25rem] object-contain xs:h-[33rem] ml:right-[12%] ml:h-[39rem]"
          />
          <img
            src={circle1}
            alt=""
            className="absolute left-0 top-0 z-0 hidden md:block"
          />
          <img
            src={joystick}
            alt=""
            className="absolute left-24 top-80 z-20 hidden xs:block"
          />
          <img
            src={circle4}
            alt=""
            className="absolute right-[47%]  top-[20rem] z-20 hidden"
          />
          <img
            src={circle3}
            alt=""
            className="absolute right-[50%] top-[12rem] z-20 hidden md:block  "
          />
          <img
            src={circle5}
            alt=""
            className="absolute right-[21%] top-[10rem] z-20 hidden h-20 object-contain md:block"
          />
          <img
            src={herostar}
            alt=""
            className="absolute right-[20%] top-32 z-20 hidden xs:block "
          />
          <img src={circle2} alt="" className="absolute right-0 top-0" />
        </div>
        <div className="absolute z-40 h-full  w-full pt-14 backdrop-brightness-75">
          <div className="mx-auto h-full w-full max-w-7xl ">
            <div className=" flex h-full w-full flex-col justify-center gap-5 p-5 md:mt-14 xl:w-[34rem] ">
              <div className="flex h-11 w-full max-w-sm items-center gap-1 rounded-full bg-dark-blue p-2 transition-all xs:h-12 ">
                <div className="flex h-full w-20 items-center rounded-s-full  bg-gradient-to-r  from-blue to-dark-blue px-2 pt-[0.1rem] text-xs text-white">
                  Featured
                </div>
                <p className="text-xs text-white">New featured collection \</p>
                <p className="text-xs text-blue">Gaming Collector</p>
              </div>
              <h1 className=" text-4xl font-semibold text-white lg:text-5xl xl:text-6xl">
                Best
                <span className="bg-gradient-to-r from-blue to-second-color bg-clip-text text-transparent">
                  {" "}
                  Pro Gaming
                </span>
                <br /> Accessories
              </h1>
              <p className="w-full text-sm text-white  md:text-gray-500 ">
                Gaming accessories include gear such as headsets, extra
                controllers, charging stations, memory devices, carrying cases
                and much more.
              </p>
              <div className="flex h-10 w-72 gap-3 transition-all xs:h-[3rem] xs:w-[26rem]">
                <Link
                  to={"/collections/all"}
                  className="border-ellipse flex h-full w-1/2 items-center  justify-center bg-gradient-to-r  from-blue to-second-color text-xs  text-white   transition-all   "
                >
                  Show products
                  <SportsEsportsOutlinedIcon
                    style={{ fontSize: "20px", marginLeft: "2px" }}
                  />
                </Link>
                <Link
                  to={"/collections/all"}
                  className="border-ellipse flex h-full w-1/2 items-center justify-center border-[1px] border-[rgba(255,255,255,0.4)] text-xs text-[rgba(255,255,255,0.4)]  transition-all hover:border-blue hover:bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white"
                >
                  Show Collections
                  <SportsEsportsOutlinedIcon
                    style={{ fontSize: "20px", marginLeft: "2px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
