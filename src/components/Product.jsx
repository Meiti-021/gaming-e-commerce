import { ExpandMoreTwoTone } from "@mui/icons-material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({ type, name, images, options, id, price }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(0);
  useEffect(() => {
    setIsOpen(false);
  }, [option]);
  return (
    <div className="h-full w-full bg-gradient-to-br from-sky-100   p-4 search-bar border-[1px] border-blue to-white">
      <div className="w-full h-6  flex justify-between items-center">
        <div className="w-auto h-6 bg-gradient-to-r from-blue to-sky-200 text-xs p-2 px-3 font-first-font rounded-[0.25rem] text-white pt-[0.3rem]">
          {type}
        </div>
      </div>
      <p className="text-xl mt-3 h-14 xs:h-10 font-first-font font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </p>
      <figure className="h-[12rem] p-4 ">
        <img
          src={`../assets/products/${images[option]}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
      <p className="text-xs font-semibold">{options[0]}:</p>
      <div
        className="h-10 w-full cursor-pointer flex relative justify-between px-4 items-center search-bar border-[1px] border-gray-500 mt-2"
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <p className="font-normal text-sm text-gray-400">{options[1][0]}</p>
        <p>
          <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
        </p>
        <div className="bg-white z-20 absolute top-6 w-52 right-0 left-0 mx-auto flex flex-col">
          {options[1].map((item, index) => {
            return (
              <button
                key={`${id}optionsbtnctg${index}`}
                className={` ${
                  isOpen ? "block" : "hidden"
                } text-xs text-black h-6 border-[1px] border-black`}
                onClick={() => {
                  setOption(index);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-auto mt-3 flex justify-between  items-center">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            {price}.00 <sup className="text-xs">USD</sup>
          </p>
          <p className="text-sm md:hidden font-semibold text-gray-600">
            <span className="line-through">
              {(price - (price * 20) / 100).toFixed(2)}
            </span>
            <sup className="text-xs">USD</sup>
          </p>
        </div>
        <Link
          to={`/product/${id}`}
          className={`search-bar flex justify-center items-center text-white text-sm pt-[0.15rem] w-32 h-9  bg-gradient-to-r from-blue to-second-color font-first-font `}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.array,
  options: PropTypes.array,
  price: PropTypes.number,
  stock: PropTypes.bool,
  light: PropTypes.bool,
};

export default Product;
