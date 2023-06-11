import DeleteIcon from "@mui/icons-material/Delete";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import {
  clearWishList,
  addAllToCart,
  removeWhisItem,
  addToCart,
} from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const WishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishList } = useSelector((store) => store.cart);
  return (
    <div className="min-h-screen font-first-font">
      <div className="h-36 w-full bg-black"></div>
      <div className="w-full px-5 py-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex border-b-1 border-border-color">
            <p className="text-base font-semibold flex justify-center capitalize w-2/12 border-r-1   px-3 py-1 border-x-border-color text-gray-500">
              image
            </p>
            <p className="text-base font-semibold flex justify-center capitalize lg:w-6/12 w-7/12 border-r-1   px-3 py-1 border-x-border-color text-gray-500">
              name
            </p>
            <p className="text-base hidden font-semibold lg:flex justify-center capitalize w-1/12 border-r-1   px-3 py-1 border-x-border-color text-gray-500">
              price
            </p>
            <p className="text-base  font-semibold flex justify-center capitalize w-2/12 border-r-1   px-3 py-1 border-x-border-color text-gray-500">
              <span className="hidden md:block">quantity</span>
              <span className="md:hidden">Qty</span>
            </p>
            <p className="text-base  font-semibold flex justify-center capitalize w-1/12  px-3 py-1 items-center border-x-border-color text-gray-500">
              <span className="hidden md:block">remove</span>
              <span className="md:hidden">Del</span>
            </p>
          </div>
          {wishList.length > 0 ? (
            <div className="py-5 -mt-5">
              {wishList.map((item, index) => {
                return (
                  <div
                    className="flex lg:h-24  h-32 border-b-1 border-border-color"
                    key={"wishList-item-page" + item.id + index}
                  >
                    <div className="text-base font-semibold flex justify-center capitalize w-2/12    px-3 py-1 ">
                      <img
                        src={`/assets/products/${item.images[item.option]}`}
                        alt=""
                        className="w-full p-2 h-full  object-contain object-center"
                      />
                    </div>
                    <Link
                      to={`/product/${item.id}`}
                      className=" lg:text-2xl text-lg gap-1 flex-col font-semibold flex capitalize lg:w-6/12 w-7/12    px-3 py-1  justify-center"
                    >
                      {item.name}
                      <p className=" text-xs">
                        {item.options[0]}: {item.options[1][item.option]}
                      </p>
                      <p className="lg:hidden text-base">
                        {formatter.format(item.price)}
                      </p>
                    </Link>
                    <div className="text-sm hidden font-semibold lg:flex  capitalize w-1/12    px-3 py-1  items-center">
                      <p>{formatter.format(item.price)}</p>
                    </div>
                    <div className="text-base font-semibold flex justify-center capitalize w-2/12    px-3 py-1  items-center">
                      <div className="flex lg:flex-row flex-col justify-between text-sm rounded-sm items-center lg:gap-5 p-1 lg:border-1 border-border-color">
                        <button
                          onClick={() => {
                            dispatch(addToCart(item));
                            dispatch(removeWhisItem(item.id));
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <div className="text-base font-semibold flex justify-center capitalize w-1/12  px-3 py-1  items-center">
                      <button
                        className="text-gray-400"
                        onClick={() => {
                          dispatch(removeWhisItem(item.id));
                          enqueueSnackbar({
                            variant: "info",
                            message:
                              "Item seccessfully removed from your wishList !",
                            className: "capitalize font-first-font",
                          });
                        }}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-2 justify-center items-center p-5">
              <div className="flex max-w-7xl items-center p-5  gap-2 w-full mx-auto ">
                <button
                  className=" w-9 h-9 rounded-full border-1 text-black text-lg pb-[0.1rem] border-black"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  &#8592;
                </button>
                <p className="text-black text-xs font-semibold">
                  Back to categories
                </p>
              </div>
              <p className="text-3xl h-80 py-12 flex justify-center items-center">
                Your wishList Is Empty!{" "}
              </p>
            </div>
          )}
          <div className=" flex flex-col justify-start items-center gap-1   w-full p-8  bg-white">
            <button
              className="h-12 max-w-md my-1 mt-4 flex justify-center items-center gap-2 border-1 search-bar text-gray-500 hover:border-none transition-all border-border-color w-full bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white"
              onClick={() => {
                dispatch(clearWishList());
              }}
            >
              Clear wishList
              <DeleteIcon />
            </button>
            <button
              className="h-12 max-w-md my-1 flex justify-center items-center gap-2 border-1 search-bar border-none transition-all  w-full bg-gradient-to-r from-blue to-second-color text-white"
              onClick={() => {
                dispatch(addAllToCart());
              }}
            >
              Add All To Cart
              <LocalMallOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
