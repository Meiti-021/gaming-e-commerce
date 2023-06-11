import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const CollectionsHero = ({ title, count = 0 }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-black p-10 font-first-font">
      <div className="w-full h-40 bg-black "></div>
      <div className="w-full h-72 bg-black flex-col justify-end pb-10 flex gap-7 max-w-7xl mx-auto ">
        <div className="flex items-center gap-2">
          <button
            className=" w-9 h-9 rounded-full border-1 text-white text-lg pb-[0.1rem] border-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8592;
          </button>
          <p className="text-white text-xs font-semibold">Back to home</p>
        </div>
        <h1 className=" text-[2.6rem] font-semibold  text-transparent  bg-clip-text bg-gradient-to-r from-blue  to-25% to-second-color capitalize">
          {title} Collections <span className="text-base">({count})</span>
        </h1>
        <p className="text-sm text-white max-w-3xl">
          online gaming, electronic game playing over a computer network,
          particularly over the Internet. Electronic game worlds have generated
          billions of dollars, with millions of players around the world
          fighting, buying, crafting, and selling in a variety of online
          environments.
        </p>
      </div>
    </div>
  );
};

CollectionsHero.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
};

export default CollectionsHero;
