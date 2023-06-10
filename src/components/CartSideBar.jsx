import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const CartSideBar = ({ open = false }) => {
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
    <div
      className={`fixed top-0 w-full   sm:w-96 bg-white h-screen font-first-font ${
        open ? "right-0" : "right-full"
      }`}
    >
      <div className="flex justify-between items-center p-5 h-16 text-white text-2xl bg-gradient-to-r from-blue to-second-color ">
        MyCart
        <button>
          <CloseIcon />
        </button>
      </div>
      <div className="grid grid-col-1 gap-3 p-5 h-full overflow-y-scroll pb-96 ">
        {cartItems.map((item, index) => {
          return <CartItem {...item} key={item.id + "cart-item" + index} />;
        })}
      </div>
      <div className="absolute bottom-0 flex flex-col justify-center  h-60 border-t-1 w-full border-border-color p-8  bg-white">
        <div className="flex justify-between items-center ">
          <p className="text-2xl font-semibold">Total Price</p>
          <p className="text-xl font-semibold">
            {total},00 <span className="align-super text-sm">USD</span>
          </p>
        </div>

        <button className="h-12 my-4 flex justify-center items-center gap-2  search-bar w-full bg-gradient-to-r from-blue to-second-color text-white">
          Proceed to checkout
          <LocalMallOutlinedIcon />
        </button>
        <p className="text-xl cursor-pointer font-semibold text-center flex justify-center items-center gap-3">
          View Cart <span className="text-4xl block -mt-1">&#8594; </span>
        </p>
      </div>
    </div>
  );
};

CartSideBar.propTypes = {
  open: PropTypes.bool,
};

export default CartSideBar;
