import SectionHeader from "./SectionHeader";
import cpu from "../assets/images/product-cpu.webp";
import cpu2 from "../assets/images/double.cpu.png";
import circle1 from "../assets/images/design-circle-3.png";
import circle2 from "../assets/images/gaming-products.png";
import circle3 from "../assets/images/gaming-products-1.png";
import { ExpandMoreTwoTone, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { addToWishList, removeWhisItem } from "../features/cartSlice";
const HomeBestProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(0);
  const { wishList, products } = useSelector((store) => store.cart);
  const product = products.find(
    (item) => item.id === "kd-dmtr-gaming-desktop-pc"
  );
  const [exist, setExist] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    wishList.find((item) => item.id === "kd-dmtr-gaming-desktop-pc") &&
      setExist(true);
  }, [wishList]);
  return (
    <div className="h-auto  py-5 bg-black relative mt-10">
      <div className="absolute w-full h-full ">
        <img
          src={circle1}
          alt=""
          className="absolute  right-0 left-0 top-0 bottom-0 m-auto"
        />
        <img
          src={circle2}
          alt=""
          className="absolute hidden md:block left-44 -top-14"
        />
        <img
          src={circle3}
          alt=""
          className="absolute hidden md:block -top-12 right-44"
        />
      </div>

      <SectionHeader
        title="Best Pro Gaming Products"
        address="/collections/GamePCs"
      />
      <div className="w-full -mt-10 lg:-mt-40 relative z-10 p-3 h-[60rem] flex flex-col gap-5 md:flex-row md:items-center justify-between">
        <img
          src={cpu}
          alt=""
          className="block object-contain lg:h-full  md:w-1/2 h-1/2 sm:h-[30rem] xl:w-1/3 object-left"
        />
        <div className="h-auto w-full relative z-10  max-w-md mx-auto bg-gradient-to-r from-blue to-second-color p-[1px] search-bar">
          <div
            className={`w-full search-bar bg-black h-full 
             "scale-110" 
             transition-all p-4 font-first-font `}
          >
            <div className="flex  h-auto justify-between items-center">
              <div className="h-[1.3rem] bg-gradient-to-r from-blue to-dark-blue text-xs flex justify-between items-center p-[0.8rem] pt-[0.9rem] rounded-md min-w-[4rem] text-white ">
                GamePCs
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
                  <FavoriteBorderOutlined style={{ color: "white" }} />
                )}
              </button>
            </div>
            <p className="text-[1.35rem] text-white font-semibold my-4">
              KD DMTR Gaming Desktop PC
            </p>
            <p className="text-sm font-semibold text-gray-500 -my-2">
              TYPE: GamePCs
            </p>
            <p className="text-gray-400 text-sm  h-32 font-semibold my-5">
              Multiple connectivity options including HDMI, USB ports & RGB fans
              let you connect a variety of peripherals easily. Wi-Fi Ready –
              Connect to the internet wirelessly with ease. Preloaded with
              Windows 10 64-bit OS for enhanced productivity and multitasking.
            </p>
            <p className="text-xs capitalize text-white">Size :</p>
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
                {["256 GB", "364 GB"][option]}
              </p>
              <p>
                <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
              </p>
              <div className="bg-white z-20 absolute top-6 w-64 right-0 left-0 mx-auto flex flex-col">
                {["256 GB", "364 GB"].map((item, index) => {
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
                <p className="text-3xl text-white font-semibold">
                  865.00 <sup className="text-xs">USD</sup>
                </p>
              </div>
              <Link
                to={"/product/kd-dmtr-gaming-desktop-pc"}
                className={`search-bar flex justify-center cursor-pointer text-white  items-center text-sm pt-[0.15rem] w-36 h-9 bg-gradient-to-r from-blue to-second-color font-first-font `}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
        <img
          src={cpu2}
          alt=""
          className=" object-contain hidden relative z-10  h-1/2 sm:h-2/3 w-1/3 xl:block object-left"
        />
      </div>
    </div>
  );
};

export default HomeBestProducts;
