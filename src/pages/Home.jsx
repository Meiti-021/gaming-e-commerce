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
const Home = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-[27rem] xs:h-[31rem] md:h-[35rem] lg:h-[36rem]  bg-black">
        <div className="absolute w-full full bg-black">
          <img
            src={heroBgLeft}
            alt=""
            className="absolute object-contain h-[28rem] xs:h-[35rem] ml:h-[42rem] z-10 left-0 top-0"
          />

          <img
            src={heroBgRight}
            alt=""
            className="absolute object-contain h-[25rem] xs:h-[33rem] ml:h-[39rem] z-10 right-[0] -top-12 ml:right-[12%]"
          />
          <img
            src={circle1}
            alt=""
            className="absolute hidden md:block z-0 top-0 left-0"
          />
          <img
            src={joystick}
            alt=""
            className="absolute hidden xs:block z-20 top-80 left-24"
          />
          <img
            src={circle4}
            alt=""
            className="absolute hidden  z-20 top-[20rem] right-[47%]"
          />
          <img
            src={circle3}
            alt=""
            className="absolute hidden md:block z-20 right-[50%] top-[12rem]  "
          />
          <img
            src={circle5}
            alt=""
            className="absolute hidden md:block object-contain h-20 z-20 top-[10rem] right-[21%]"
          />
          <img
            src={herostar}
            alt=""
            className="absolute hidden xs:block z-20 top-32 right-[20%] "
          />
          <img src={circle2} alt="" className="absolute right-0 top-0" />
        </div>
        <div className="absolute w-full h-full  z-40 pt-14">
          <div className="w-full h-full mx-auto max-w-7xl ">
            <div className=" h-full md:mt-14 p-5 flex flex-col justify-center gap-5 w-[30rem] xl:w-[34rem]">
              <div className="h-11 w-96 xs:h-12 transition-all bg-dark-blue rounded-full flex items-center p-2 gap-1 ">
                <div className="h-full rounded-s-full w-20 bg-gradient-to-r from-blue  to-dark-blue font-first-font text-white text-xs flex items-center px-2 pt-[0.1rem]">
                  Featured
                </div>
                <p className="text-white text-xs">New featured collection \</p>
                <p className="text-xs text-blue">Gaming Collector</p>
              </div>
              <h1 className="font-first-font lg:text-5xl xl:text-6xl text-white text-4xl font-semibold">
                Best
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-second-color">
                  {" "}
                  Pro Gaming
                </span>
                <br /> Accessories
              </h1>
              <p className="text-white md:text-gray-500 text-sm font-first-font ">
                Gaming accessories include gear such as headsets, extra
                controllers, charging stations, memory devices, carrying cases
                and much more.
              </p>
              <div className="flex gap-3 h-10 w-72 transition-all xs:w-[26rem] xs:h-[3rem]">
                <button className="w-1/2 transition-all  h-full search-bar  bg-gradient-to-r from-blue to-second-color text-xs font-first-font text-white ">
                  Show products
                  <SportsEsportsOutlinedIcon
                    style={{ fontSize: "20px", marginLeft: "2px" }}
                  />
                </button>
                <button className="w-1/2 transition-all  h-full search-bar border-[1px] border-[rgba(255,255,255,0.4)] text-xs font-first-font text-[rgba(255,255,255,0.4)]">
                  Show Collections
                  <SportsEsportsOutlinedIcon
                    style={{ fontSize: "20px", marginLeft: "2px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
