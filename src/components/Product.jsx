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
    <div className="border-ellipse h-full w-full border-[1px]   border-blue bg-gradient-to-br from-sky-100 to-white p-4">
      <div className="flex h-6  w-full items-center justify-between">
        <div className="h-6 w-auto rounded-[0.25rem] bg-gradient-to-r from-blue to-sky-200 p-2 px-3  pt-[0.3rem] text-xs text-white">
          {type}
        </div>
      </div>
      <p className="mt-3 h-14 overflow-hidden text-ellipsis  whitespace-nowrap text-xl font-semibold xs:h-10">
        {name}
      </p>
      <figure className="h-[12rem] p-4 ">
        <img
          src={`../assets/products/${images[option]}`}
          alt=""
          className="h-full w-full object-contain"
        />
      </figure>
      <p className="text-xs font-semibold">{options[0]}:</p>
      <div
        className="border-ellipse relative mt-2 flex h-10 w-full cursor-pointer items-center justify-between border-[1px] border-gray-500 px-4"
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <p className="text-sm font-normal text-gray-400">{options[1][0]}</p>
        <p>
          <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
        </p>
        <div className="absolute left-0 right-0 top-6 z-20 mx-auto flex w-52 flex-col bg-white">
          {options[1].map((item, index) => {
            return (
              <button
                key={`${id}optionsbtnctg${index}`}
                className={` ${
                  isOpen ? "block" : "hidden"
                } h-6 border-[1px] border-black text-xs text-black`}
                onClick={() => {
                  setOption(index);
                }}
                aria-label="changes the products option"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-3 flex h-auto items-center  justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            {price}.00 <sup className="text-xs">USD</sup>
          </p>
          <p className="text-sm font-semibold text-gray-600 md:hidden">
            <span className="line-through">
              {(price - (price * 20) / 100).toFixed(2)}
            </span>
            <sup className="text-xs">USD</sup>
          </p>
        </div>
        <Link
          to={`/product/${id}`}
          className={`border-ellipse flex h-9 w-32 items-center justify-center bg-gradient-to-r from-blue to-second-color  pt-[0.15rem] text-sm text-white  `}
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
