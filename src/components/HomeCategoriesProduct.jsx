import { ExpandMoreTwoTone, FavoriteBorderOutlined } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { addToWishList, removeWhisItem } from "../features/cartSlice";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const HomeCategoriesProduct = ({
  type,
  name,
  images,
  options,
  id,
  price,
  light,
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
      className={`h-full w-full ${
        light
          ? "border-ellipse border-[1px] border-blue bg-gradient-to-br from-sky-200 to-white p-4"
          : undefined
      }`}
    >
      <div className="flex h-12  w-full items-center justify-between">
        <div className="h-6 w-auto rounded-[0.25rem] bg-gradient-to-r from-blue to-white p-2 px-3  pt-[0.3rem] text-xs text-white">
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
                className: " z-20",
              });
            }
          }}
        >
          {exist ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined style={{ color: "gray" }} />
          )}
        </button>
      </div>
      <p
        className={`h-14 text-2xl xs:h-10 ${
          light ? undefined : "md:text-white"
        }  overflow-hidden text-ellipsis whitespace-nowrap font-semibold`}
      >
        {name}
      </p>
      <p className="text-xs  font-semibold text-gray-500">TYPE : {type}</p>
      <figure className=" h-[9rem] p-1 xxs:my-5 xxs:h-[14rem] xxs:p-10">
        <img
          src={`/assets/products/${images[option]}`}
          alt=""
          className="h-full w-full object-contain"
        />
      </figure>
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
                key={`${id}optionsbtnctg${index}`}
                className={` ${
                  isOpen ? "block" : "hidden"
                } border-[1px] border-black text-xs text-black`}
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
      <div className="mt-3 flex  h-14 items-center justify-between p-3 md:h-24 md:flex-col">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            {formatter.format(price)} <sup className="text-xs">USD</sup>
          </p>
          <p className="hidden text-sm font-semibold text-gray-600 xxs:block md:hidden">
            <span className="line-through">
              {(price - (price * 20) / 100).toFixed(2)}
            </span>
            <sup className="text-xs">USD</sup>
          </p>
        </div>
        <Link
          to={`/product/${id}`}
          className={`border-ellipse flex h-9 w-36 items-center justify-center bg-gradient-to-r from-blue to-second-color pt-[0.15rem] text-sm text-white `}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

HomeCategoriesProduct.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.array,
  options: PropTypes.array,
  price: PropTypes.number,
  stock: PropTypes.bool,
  light: PropTypes.bool,
};

export default HomeCategoriesProduct;
