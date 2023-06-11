import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PageHero = ({ title, subtitle, className = "h-72 pb-10" }) => {
  const navigate = useNavigate();
  return (
    <div className={`bg-black p-10 `}>
      <div className="h-40 w-full bg-black "></div>
      <div
        className={`mx-auto flex  w-full max-w-7xl flex-col  justify-end gap-7 bg-black sm:px-5 ${className}`}
      >
        <div className="flex items-center gap-2">
          <button
            className=" h-9 w-9 rounded-full border-1 border-white pb-[0.1rem] text-lg text-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8592;
          </button>
          <p className="text-xs font-semibold text-white">Back to home</p>
        </div>
        <h1 className=" bg-gradient-to-r from-blue  to-second-color  to-25% bg-clip-text text-[2.2rem]  font-semibold capitalize text-transparent">
          {title}
        </h1>
        <p className="max-w-3xl pr-10 text-sm text-white md:w-1/2">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

PageHero.propTypes = {
  title: Proptypes.string,
  subtitle: Proptypes.string,
  className: Proptypes.string,
};

export default PageHero;
