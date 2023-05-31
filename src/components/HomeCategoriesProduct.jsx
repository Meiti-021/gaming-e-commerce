import { ExpandMoreTwoTone, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";
const HomeCategoriesProduct = ({
  type,
  name,
  images,
  options,
  id,
  price,
  stock,
  light,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(0);
  return (
    <div
      className={`h-full w-full ${
        light
          ? "bg-gradient-to-br from-sky-200 p-4 search-bar border-[1px] border-blue to-white"
          : undefined
      }`}
    >
      <div className="w-full h-12  flex justify-between items-center">
        <div className="w-auto h-6 bg-gradient-to-r from-blue to-white text-xs p-2 px-3 font-first-font rounded-[0.25rem] text-white pt-[0.3rem]">
          {type}
        </div>
        <FavoriteBorderOutlined />
      </div>
      <p
        className={`text-2xl h-14 xs:h-20 ${
          light ? undefined : "md:text-white"
        } font-first-font font-semibold`}
      >
        {name}
      </p>
      <p className="text-xs font-first-font font-semibold text-gray-500">
        TYPE : {type}
      </p>
      <figure className=" h-3/5 xs:h-[14rem]  p-10">
        <img
          src={`./assets/products/${images[option]}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
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
        <div className="bg-white z-20 absolute top-6 w-64 right-0 left-0 mx-auto flex flex-col">
          {options[1].map((item, index) => {
            return (
              <button
                key={`${id}optionsbtnctg${index}`}
                className={` ${
                  isOpen ? "block" : "hidden"
                } text-xs text-black border-[1px] border-black`}
                onClick={() => {
                  setOption(index);
                  setIsOpen(false);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-14 md:h-24  mt-3 flex md:flex-col justify-between p-3 items-center">
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
        <button
          className={`search-bar text-sm pt-[0.15rem] w-36 h-9  bg-gradient-to-r from-blue to-second-color font-first-font ${
            stock
              ? "cursor-pointer text-white"
              : "cursor-not-allowed text-gray-700"
          }`}
        >
          {stock ? "Add To Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

export default HomeCategoriesProduct;
