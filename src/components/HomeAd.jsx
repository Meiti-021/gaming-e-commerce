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
    <div className="relative  mt-10  h-auto py-5">
      <div className="-mt-10 flex h-[60rem] w-full  flex-col items-center gap-10 p-3 md:flex-row md:items-center md:justify-center lg:-mt-40">
        <img
          src={doubleHeadset}
          alt=""
          className="block h-[20rem] object-contain p-3  sm:h-[30rem] md:w-[25rem] lg:h-full xl:w-[35rem] "
        />
        <div className="border-ellipse  h-auto  max-w-md bg-gradient-to-r from-blue to-second-color p-[1px]">
          <div
            className={`border-ellipse "scale-110" h-full w-full 
             bg-white 
             p-4 transition-all  `}
          >
            <div className="relative  z-20 flex h-auto items-center justify-between">
              <div className="flex h-[1.3rem] min-w-[4rem] items-center justify-between rounded-md bg-gradient-to-r from-blue to-dark-blue p-[0.8rem] pt-[0.9rem] text-xs text-white ">
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
              >
                {exist ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </button>
            </div>
            <p className="my-4 text-[1.35rem] font-semibold text-black">
              Cloud Alpha Gaming Headset
            </p>
            <p className="-my-2 text-sm font-semibold text-gray-500">
              TYPE: GamePCs
            </p>
            <p className="my-5 h-32  text-sm font-semibold text-gray-400">
              HyperX Dual Chamber Drivers for more distinction and less
              distortion. Signature Award-Winning HyperX comfort. Durable
              aluminum frame with an expanded headband. Detachable braided cable
              with convenient in-line audio control. Detachable noise
              cancellation microphone.
            </p>
            <p className="text-xs capitalize text-black">Color :</p>
            <div
              className="border-ellipse relative mt-2 flex h-10 w-full cursor-pointer items-center justify-between border-[1px] border-gray-500 px-4"
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <p className="text-sm font-normal text-gray-400">
                {["black", "red"][option]}
              </p>
              <p>
                <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
              </p>
              <div className="absolute left-0 right-0 top-6 z-20 mx-auto flex w-64 flex-col bg-white">
                {["black", "red"].map((item, index) => {
                  return (
                    <button
                      key={`${index}-options-btn-best-product`}
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

            <div className="mt-3 flex h-14 items-center justify-between p-3">
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-semibold text-black">
                  530.00 <sup className="text-xs">USD</sup>
                </p>
              </div>
              <Link
                to="/product/cloud-alpha-gaming-headset"
                className={`border-ellipse flex h-9 w-36 cursor-pointer items-center justify-center bg-gradient-to-r from-blue to-second-color pt-[0.15rem]  text-sm text-white`}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
        <img
          src={headset}
          alt=""
          className=" absolute -right-36 z-10 hidden h-1/2  w-1/3 object-contain sm:h-2/3 xl:block "
        />
      </div>
    </div>
  );
};

export default HomeAd;
