import { useSelector } from "react-redux";
import PageHero from "../components/PageHero";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

const Cart = () => {
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
    <div className="min-h-screen font-first-font">
      <PageHero title={"My Shopping Cart"} className="h-36  pb-1" />
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
              option
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
          <div className="">
            {cartItems.map((item, index) => {
              return (
                <div
                  className="flex lg:h-24 h-32 border-b-1 border-border-color"
                  key={"cart-item-page" + item.id + index}
                >
                  <div className="text-base font-semibold flex justify-center capitalize w-2/12    px-3 py-1 ">
                    <img
                      src={`/assets/products/${item.images[item.option]}`}
                      alt=""
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <Link
                    to={`/products/${item.id}`}
                    className=" lg:text-2xl text-lg gap-1 flex-col font-semibold flex capitalize lg:w-6/12 w-7/12    px-3 py-1  justify-center"
                  >
                    {item.name}
                    <p className="lg:hidden text-xs">
                      {item.options[0]}: {item.options[1][item.option]}
                    </p>
                  </Link>
                  <div className="text-sm hidden font-semibold lg:flex  capitalize w-1/12    px-3 py-1  items-center">
                    <p>
                      {item.options[0]}: <br /> {item.options[1][item.option]}
                    </p>
                  </div>
                  <div className="text-base font-semibold flex justify-center capitalize w-2/12    px-3 py-1  items-center">
                    <div className="flex lg:flex-row flex-col justify-between text-sm rounded-sm items-center lg:gap-5 p-1 lg:border-1 border-border-color">
                      <button>
                        <AddIcon style={{ fontSize: "1rem", color: "gray" }} />
                      </button>
                      <p className="pt-1">{item.quantity}</p>
                      <button>
                        <RemoveIcon
                          style={{ fontSize: "1rem", color: "gray" }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="text-base font-semibold flex justify-center capitalize w-1/12  px-3 py-1  items-center">
                    <button className="text-gray-400">
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-col justify-start items-center gap-1   w-full p-8  bg-white">
            <div className="flex justify-between items-center w-full ">
              <p className="text-2xl font-semibold">Total Price</p>
              <p className="text-xl font-semibold">
                {total},00 <span className="align-super text-sm">USD</span>
              </p>
            </div>

            <button className="h-12 my-1 mt-4 flex justify-center items-center gap-2 border-1 search-bar text-blue hover:border-none transition-all border-blue w-full bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white">
              Clear Cart
              <DeleteIcon />
            </button>
            <button className="h-12 my-1 flex justify-center items-center gap-2 border-1 search-bar text-blue hover:border-none transition-all border-blue w-full bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white">
              Proceed to checkout
              <LocalMallOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
