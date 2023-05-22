import heroBgLeft from "../assets/images/Half-bluthooth.png";
import heroBgRight from "../assets/images/Half-bluthooth-right.png";
import circle2 from "../assets/images/design-circle-2.png";
import circle1 from "../assets/images/design-circle-1.png";
import joystick from "../assets/images/main-conent-games.png";
import circle3 from "../assets/images/round-img-big.png";
import circle4 from "../assets/images/round-img-small.png";
import circle5 from "../assets/images/full-bluthooth.png";
import herostar from "../assets/images/top-star.png";

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
      </div>
    </div>
  );
};

export default Home;
