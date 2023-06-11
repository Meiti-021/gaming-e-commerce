import headset from "../assets/images/full-width-bluthhoth.png";
import doubleHeadset from "../assets/images/double-bluthoth.png";

import { ExpandMoreTwoTone, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { addToWishList, removeWhisItem } from "../features/cartSlice";
import { Link } from "react-router-dom";
const HomeAd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(0);
  const { wishList, products } = useSelector((store) => store.cart);
  const product = products.find(
    (item) => item.id === "cloud-alpha-gaming-headset"
  );
  const [exist, setExist] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    wishList.find((item) => item.id === "cloud-alpha-gaming-headset") &&
      setExist(true);
  }, [wishList]);
  return (
    <div className="h-auto  py-5  relative mt-10">
      <div className="w-full -mt-10 lg:-mt-40 items-center  p-3 h-[60rem] flex flex-col md:flex-row md:justify-center md:items-center gap-10">
        <img
          src={doubleHeadset}
          alt=""
          className="block object-contain lg:h-full md:w-[25rem]  h-[20rem] p-3 sm:h-[30rem] xl:w-[35rem] "
        />
        <div className="h-auto  max-w-md  bg-gradient-to-r from-blue to-second-color p-[1px] search-bar">
          <div
            className={`w-full search-bar bg-white h-full 
             "scale-110" 
             transition-all p-4 font-first-font `}
          >
            <div className="flex  h-auto justify-between items-center relative z-20">
              <div className="h-[1.3rem] bg-gradient-to-r from-blue to-dark-blue text-xs flex justify-between items-center p-[0.8rem] pt-[0.9rem] rounded-md min-w-[4rem] text-white ">
                Headset
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
            <p className="text-[1.35rem] text-black font-semibold my-4">
              Cloud Alpha Gaming Headset
            </p>
            <p className="text-sm font-semibold text-gray-500 -my-2">
              TYPE: GamePCs
            </p>
            <p className="text-gray-400 text-sm  h-32 font-semibold my-5">
              HyperX Dual Chamber Drivers for more distinction and less
              distortion. Signature Award-Winning HyperX comfort. Durable
              aluminum frame with an expanded headband. Detachable braided cable
              with convenient in-line audio control. Detachable noise
              cancellation microphone.
            </p>
            <p className="text-xs capitalize text-black">Color :</p>
            <div
              className="h-10 w-full cursor-pointer flex relative justify-between px-4 items-center search-bar border-[1px] border-gray-500 mt-2"
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <p className="font-normal text-sm text-gray-400">
                {["black", "red"][option]}
              </p>
              <p>
                <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
              </p>
              <div className="bg-white z-20 absolute top-6 w-64 right-0 left-0 mx-auto flex flex-col">
                {["black", "red"].map((item, index) => {
                  return (
                    <button
                      key={`${index}-options-btn-best-product`}
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
                <p className="text-3xl text-black font-semibold">
                  530.00 <sup className="text-xs">USD</sup>
                </p>
              </div>
              <Link
                to="/product/cloud-alpha-gaming-headset"
                className={`search-bar text-sm flex justify-center items-center pt-[0.15rem] w-36 h-9 bg-gradient-to-r from-blue to-second-color font-first-font cursor-pointer text-white`}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
        <img
          src={headset}
          alt=""
          className=" object-contain hidden absolute -right-36 z-10  h-1/2 sm:h-2/3 w-1/3 xl:block "
        />
      </div>
    </div>
  );
};

export default HomeAd;
