import image from "../assets/images/subscribe-img.png";
const HomeNewsLetter = () => {
  return (
    <div className="w-full p-5 gap-5 lg:gap-7 max-w-7xl flex md:flex-row-reverse md:items-center flex-col mt-7 h-[35rem] mx-auto">
      <img
        src={image}
        alt=""
        className="block h-1/2 lg:h-3/4 w-full object-contain transition-all"
      />
      <div className="w-full font-first-font flex flex-col gap-4">
        <div className="w-24 rounded-md text-white h-6 bg-gradient-to-r from-blue to-second-color text-xs pt-[1px] flex justify-center items-center">
          Subscribe US
        </div>
        <h2 className="text-3xl lg:text-5xl  font-semibold">
          Subscribe newsletter and{" "}
          <span className="text-transparent mx-2  md:mx-0 bg-clip-text bg-gradient-to-r from-blue to-second-color">
            get -20% off
          </span>
        </h2>
        <p className="text-sm lg:text-base font-semibold text-gray-600 font-first-font">
          Almost three-quarters of dedicated PC gamers say their main motivation
          to upgrade is improving gaming experiences.
        </p>
        <div className="w-full  h-[3rem] items-center overflow-hidden search-bar border-[1px] border-black flex">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter enail address.."
            className="w-5/6 h-2/4 lg:w-4/6  text-xs p-4 font-first-font border-none focus:outline-none "
          />
          <button className="w-1/4 lg:w-2/6 h-full text-white font-semibold font-first-font text-sm bg-gradient-to-r from-blue to-second-color">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;
