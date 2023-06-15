import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const CollectionsHero = ({ title, count = 0 }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-black p-10 ">
      <div className="h-40 w-full bg-black "></div>
      <div className="mx-auto flex h-72 w-full max-w-7xl flex-col justify-end gap-7 bg-black pb-10 ">
        <div className="flex items-center gap-2">
          <button
            className=" h-9 w-9 rounded-full border-1 border-white pb-[0.1rem] text-lg text-white"
            onClick={() => {
              navigate(-1);
            }}
            aria-label="back to previous page"
          >
            &#8592;
          </button>
          <p className="text-xs font-semibold text-white">Back to home</p>
        </div>
        <h1 className=" bg-gradient-to-r from-blue  to-second-color  to-25% bg-clip-text text-[2.6rem]  font-semibold capitalize text-transparent">
          {title} Collections <span className="text-base">({count})</span>
        </h1>
        <p className="max-w-3xl text-sm text-white">
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
