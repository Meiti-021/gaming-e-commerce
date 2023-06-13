import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import {
  clearCart,
  addAmount,
  removeAmount,
  removeItem,
} from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let mytotal = 0;
    cartItems.forEach((element) => {
      mytotal += element.price * element.quantity;
    });
    setTotal(mytotal);
  }, [cartItems]);
  return (
    <div className="min-h-screen ">
      <div className="h-14  w-full bg-black sm:h-36"></div>
      <div className="w-full px-5 py-10">
        <div className="mx-auto hidden w-full max-w-7xl sm:block">
          <div className=" flex border-b-1 border-border-color">
            <p className="flex w-2/12 justify-center border-r-1 border-x-border-color px-3 py-1   text-base font-semibold capitalize text-gray-500">
              image
            </p>
            <p className="flex w-7/12 justify-center border-r-1 border-x-border-color px-3 py-1 text-base   font-semibold capitalize text-gray-500 lg:w-6/12">
              name
            </p>
            <p className="hidden w-1/12 justify-center border-r-1 border-x-border-color px-3 py-1 text-base   font-semibold capitalize text-gray-500 lg:flex">
              price
            </p>
            <p className="flex  w-2/12 justify-center border-r-1 border-x-border-color px-3 py-1   text-base font-semibold capitalize text-gray-500">
              <span className="hidden md:block">quantity</span>
              <span className="md:hidden">Qty</span>
            </p>
            <p className="flex  w-1/12 items-center justify-center border-x-border-color px-3  py-1 text-base font-semibold capitalize text-gray-500">
              <span className="hidden md:block">remove</span>
              <span className="md:hidden">Del</span>
            </p>
          </div>
          {cartItems.length > 0 ? (
            <div className="-mt-5 py-5">
              {cartItems.map((item, index) => {
                return (
                  <div
                    className="flex h-32  border-b-1 border-border-color lg:h-24"
                    key={"cart-item-page" + item.id + index}
                  >
                    <div className="flex w-2/12 justify-center px-3 py-1 text-base    font-semibold capitalize ">
                      <img
                        src={`/assets/products/${item.images[item.option]}`}
                        alt=""
                        className="h-full w-full object-contain  object-center p-2"
                      />
                    </div>
                    <Link
                      to={`/product/${item.id}`}
                      className=" flex w-7/12 flex-col justify-center gap-1 px-3 py-1 text-lg font-semibold    capitalize lg:w-6/12  lg:text-2xl"
                    >
                      {item.name}
                      <p className=" text-xs">
                        {item.options[0]}: {item.options[1][item.option]}
                      </p>
                      <p className="text-base lg:hidden">
                        {formatter.format(item.price)}
                      </p>
                    </Link>
                    <div className="hidden w-1/12 items-center px-3  py-1 text-sm    font-semibold capitalize  lg:flex">
                      <p>{formatter.format(item.price)}</p>
                    </div>
                    <div className="flex w-2/12 items-center justify-center px-3 py-1    text-base font-semibold  capitalize">
                      <div className="flex flex-col items-center justify-between rounded-sm border-border-color p-1 text-sm lg:flex-row lg:gap-5 lg:border-1">
                        <button
                          onClick={() => {
                            dispatch(addAmount(item));
                          }}
                        >
                          <AddIcon
                            style={{ fontSize: "1rem", color: "gray" }}
                          />
                        </button>
                        <p className="pt-1">{item.quantity}</p>
                        <button
                          onClick={() => {
                            dispatch(removeAmount(item));
                          }}
                        >
                          <RemoveIcon
                            style={{ fontSize: "1rem", color: "gray" }}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex w-1/12 items-center justify-center px-3 py-1  text-base font-semibold  capitalize">
                      <button
                        className="text-gray-400"
                        onClick={() => {
                          dispatch(removeItem(item.id));
                          enqueueSnackbar({
                            variant: "info",
                            message:
                              "Item seccessfully removed from your cart !",
                            className: "capitalize ",
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
            <div className="flex flex-col items-center justify-center gap-2 p-5">
              <div className="mx-auto flex w-full max-w-7xl  items-center gap-2 p-5 ">
                <button
                  className=" h-9 w-9 rounded-full border-1 border-black pb-[0.1rem] text-lg text-black"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  &#8592;
                </button>
                <p className="text-xs font-semibold text-black">
                  Back to categories
                </p>
              </div>
              <p className="flex h-80 items-center justify-center py-12 text-3xl">
                Your Cart Is Empty!{" "}
              </p>
            </div>
          )}
          <div className=" flex w-full flex-col items-center justify-start   gap-1 bg-white  p-8">
            <div className="flex w-full items-center justify-between ">
              <p className="text-2xl font-semibold">Total Price</p>
              <p className="text-xl font-semibold">
                {formatter.format(total)}
                <span className="align-super text-sm">USD</span>
              </p>
            </div>

            <button
              className="border-ellipse my-1 mt-4 flex h-12 w-full max-w-md items-center justify-center gap-2 border-1 border-border-color bg-gradient-to-r text-gray-500 transition-all hover:border-none hover:from-blue hover:to-second-color hover:text-white"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
              <DeleteIcon />
            </button>
            <button className="border-ellipse my-1 flex h-12 w-full max-w-md items-center justify-center gap-2 border-1 border-none  bg-gradient-to-r from-blue to-second-color text-white transition-all">
              Proceed to checkout
              <LocalMallOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="mx-auto  max-w-7xl sm:hidden">
          {cartItems.length ? (
            <div className="grid-col-1 grid h-full gap-1  ">
              {cartItems.map((item, index) => {
                return (
                  <CartItem {...item} key={item.id + "cart-item" + index} />
                );
              })}
            </div>
          ) : (
            <div className="relative mt-14 flex min-h-[22rem] flex-col items-center justify-center gap-5 text-black">
              <p className="text-3xl">Your Cart is Empty!</p>
              <button
                className=" h-9 w-9 rounded-full border-1 border-black pb-[0.1rem] text-lg text-black"
                onClick={() => {
                  navigate(-1);
                }}
              >
                &#8592;
              </button>
            </div>
          )}
          <div className=" mt-40  flex h-60 w-full flex-col  justify-center border-t-1 border-border-color bg-white  p-8">
            <div className="flex items-center justify-between ">
              <p className="text-2xl font-semibold">Total Price</p>
              <p className="text-xl font-semibold">
                {total},00 <span className="align-super text-sm">USD</span>
              </p>
            </div>

            <button className="border-ellipse mt-4 flex h-12 w-full items-center  justify-center gap-2 bg-gradient-to-r from-blue to-second-color text-white">
              Proceed to checkout
              <LocalMallOutlinedIcon />
            </button>
            <button
              className="border-ellipse my-1 mt-4 flex h-12 w-full max-w-md items-center justify-center gap-2 border-1 border-border-color bg-gradient-to-r text-gray-500 transition-all hover:border-none hover:from-blue hover:to-second-color hover:text-white"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
