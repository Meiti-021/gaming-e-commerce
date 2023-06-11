/* eslint-disable react/prop-types */
import { ExpandMoreTwoTone, FavoriteBorderOutlined } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeWhisItem } from "../features/cartSlice";
const BestSellerSlider = ({
  isActive,
  type,
  name,
  images,
  options,
  price,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(0);
  const { wishList, products } = useSelector((store) => store.cart);
  const product = products.find((item) => item.id === id);
  const [exist, setExist] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    wishList.find((item) => item.id === id) && setExist(true);
  }, [id, wishList]);
  return (
    <div
      className={`w-full search-bar h-full ${
        isActive ? "scale-110" : undefined
      } border-[1px]  border-blue transition-all p-4 font-first-font `}
    >
      <div className="flex  h-auto justify-between items-center">
        <div className="h-[1.3rem] bg-gradient-to-r from-blue to-dark-blue text-xs flex justify-between items-center p-[0.8rem] pt-[0.9rem] rounded-md min-w-[4rem] ">
          {type}
        </div>
        <button
          onClick={() => {
            if (exist) {
              dispatch(removeWhisItem(product.id));
              setExist(false);
              enqueueSnackbar({
                variant: "info",
                message: "Item seccesfuly removed from your wishlist!",
                className: "font-first-font",
              });
            } else {
              dispatch(addToWishList(product));
              setExist(true);
              enqueueSnackbar({
                variant: "info",
                message: "Item seccesfuly added to your wishlist!",
                className: "font-first-font",
              });
            }
          }}
        >
          {exist ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </button>
      </div>
      <p className="text-[1.35rem] font-semibold my-4">{name}</p>
      <p className="text-sm font-semibold text-gray-500 -my-2">TYPE: {type}</p>
      <img
        src={`./assets/products/${images[option]}`}
        alt={name}
        title={name}
        className=" h-52  my-5 block w-full object-contain "
      />
      <p className="text-xs capitalize">{options[0]} :</p>
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
                key={`${index}optionsbtn`}
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

      <div className="h-14 mt-3 flex justify-between p-3 items-center">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            {formatter.format(price)}
            <sup className="text-xs">USD</sup>
          </p>
          <p className="text-sm font-semibold text-gray-600">
            <span className="line-through">
              {(price - (price * 20) / 100).toFixed(2)}
            </span>
            <sup className="text-xs">USD</sup>
          </p>
        </div>
        <Link
          to={`/product/${id}`}
          className="search-bar flex justify-center items-center text-sm pt-[0.15rem] w-36 h-9 bg-gradient-to-r from-blue to-second-color font-first-font"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

BestSellerSlider.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.array,
  options: PropTypes.array,
  price: PropTypes.number,
  stock: PropTypes.bool,
};

export default BestSellerSlider;
