import SectionHeader from "./SectionHeader";
import cpu from "../assets/images/product-cpu.webp";
import cpu2 from "../assets/images/double.cpu.webp";
import circle1 from "../assets/images/design-circle-3.webp";
import circle2 from "../assets/images/gaming-products.webp";
import circle3 from "../assets/images/gaming-products-1.webp";
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
    <div className="relative  mt-10 h-auto bg-black py-5">
      <div className="absolute h-full w-full ">
        <img
          src={circle1}
          alt=""
          className="absolute  bottom-0 left-0 right-0 top-0 m-auto"
        />
        <img
          src={circle2}
          alt=""
          className="absolute -top-14 left-44 hidden md:block"
        />
        <img
          src={circle3}
          alt=""
          className="absolute -top-12 right-44 hidden md:block"
        />
      </div>

      <SectionHeader
        title="Best Pro Gaming Products"
        address="/collections/GamePCs"
      />
      <div className="relative z-10 -mt-10 flex h-[60rem] w-full flex-col justify-between gap-5 p-3 md:flex-row md:items-center lg:-mt-40">
        <img
          src={cpu}
          alt=""
          className="block h-1/2 object-contain  object-left sm:h-[30rem] md:w-1/2 lg:h-full xl:w-1/3"
        />
        <div className="border-ellipse relative z-10 mx-auto  h-auto w-full max-w-md bg-gradient-to-r from-blue to-second-color p-[1px]">
          <div
            className={`border-ellipse "scale-110" h-full w-full 
             bg-black 
             p-4 transition-all  `}
          >
            <div className="flex  h-auto items-center justify-between">
              <div className="flex h-[1.3rem] min-w-[4rem] items-center justify-between rounded-md bg-gradient-to-r from-blue to-dark-blue p-[0.8rem] pt-[0.9rem] text-xs text-white ">
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
                  <FavoriteBorderOutlined style={{ color: "white" }} />
                )}
              </button>
            </div>
            <p className="my-4 text-[1.35rem] font-semibold text-white">
              KD DMTR Gaming Desktop PC
            </p>
            <p className="-my-2 text-sm font-semibold text-gray-500">
              TYPE: GamePCs
            </p>
            <p className="my-5 h-32  text-sm font-semibold text-gray-400">
              Multiple connectivity options including HDMI, USB ports & RGB fans
              let you connect a variety of peripherals easily. Wi-Fi Ready –
              Connect to the internet wirelessly with ease. Preloaded with
              Windows 10 64-bit OS for enhanced productivity and multitasking.
            </p>
            <p className="text-xs capitalize text-white">Size :</p>
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
                {["256 GB", "364 GB"][option]}
              </p>
              <p>
                <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
              </p>
              <div className="absolute left-0 right-0 top-6 z-20 mx-auto flex w-64 flex-col bg-white">
                {["256 GB", "364 GB"].map((item, index) => {
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
                <p className="text-3xl font-semibold text-white">
                  865.00 <sup className="text-xs">USD</sup>
                </p>
              </div>
              <Link
                to={"/product/kd-dmtr-gaming-desktop-pc"}
                className={`border-ellipse flex h-9 w-36 cursor-pointer  items-center justify-center bg-gradient-to-r from-blue to-second-color pt-[0.15rem] text-sm text-white  `}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
        <img
          src={cpu2}
          alt=""
          className=" relative z-10 hidden h-1/2  w-1/3 object-contain object-left sm:h-2/3 xl:block"
        />
      </div>
    </div>
  );
};

export default HomeBestProducts;
