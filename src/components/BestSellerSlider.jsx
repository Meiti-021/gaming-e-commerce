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
      className={`border-ellipse h-full w-full ${
        isActive ? "scale-110" : undefined
      } border-[1px]  border-blue p-4 transition-all  `}
    >
      <div className="flex  h-auto items-center justify-between">
        <div className="flex h-[1.3rem] min-w-[4rem] items-center justify-between rounded-md bg-gradient-to-r from-blue to-dark-blue p-[0.8rem] pt-[0.9rem] text-xs ">
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
                className: "",
              });
            } else {
              dispatch(addToWishList(product));
              setExist(true);
              enqueueSnackbar({
                variant: "info",
                message: "Item seccesfuly added to your wishlist!",
                className: "",
              });
            }
          }}
          aria-label="add or remove product from wishlist"
        >
          {exist ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </button>
      </div>
      <p className="my-4 overflow-hidden text-ellipsis whitespace-nowrap  text-xl font-semibold xs:overflow-visible xs:whitespace-normal xs:text-[1.35rem]">
        {name}
      </p>
      <p className="-my-2 text-sm font-semibold text-gray-500">TYPE: {type}</p>
      <img
        src={`./assets/products/${images[option]}`}
        alt={name}
        title={name}
        className=" my-2 block  h-32 w-full object-contain xxs:h-48  xs:my-5 xs:h-52 "
      />
      <p className="text-xs capitalize">{options[0]} :</p>
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
        <div className="absolute left-0 right-0 top-6 z-20 mx-auto flex w-64 flex-col bg-white">
          {options[1].map((item, index) => {
            return (
              <button
                key={`${index}optionsbtn`}
                className={` ${
                  isOpen ? "block" : "hidden"
                } border-[1px] border-black text-xs text-black`}
                onClick={() => {
                  setOption(index);
                  setIsOpen(false);
                }}
                aria-label="change product option "
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex h-14 items-center justify-between gap-4 p-3 xxs:gap-0">
        <div className="gap flex flex-col xxs:gap-1">
          <p className="text-sm font-semibold xxs:text-lg">
            {formatter.format(price)}
            <sup className="text-xs">USD</sup>
          </p>
          <p className="text-xs font-semibold text-gray-600 xxs:text-sm">
            <span className="line-through">
              {(price - (price * 20) / 100).toFixed(2)}
            </span>
            <sup className="text-xs">USD</sup>
          </p>
        </div>
        <Link
          to={`/product/${id}`}
          className="border-ellipse flex h-9 w-28 items-center justify-center bg-gradient-to-r from-blue to-second-color pt-[0.15rem] text-xs xs:w-36 xs:text-sm "
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
