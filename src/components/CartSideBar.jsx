import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartSideBar = ({ open = false, setOpen }) => {
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
      className={`fixed  top-0 h-screen w-full   bg-white transition-all sm:w-96  ${
        open ? "right-0" : "-right-[50rem]"
      }`}
    >
      <div className="flex h-16 items-center justify-between bg-gradient-to-r from-blue to-second-color p-5 text-2xl text-white ">
        MyCart
        <button onClick={() => setOpen(!open)}>
          <CloseIcon />
        </button>
      </div>
      <div className="grid-col-1 grid h-full gap-1 overflow-y-scroll border-l-1 border-border-color p-5 pb-96 ">
        {cartItems.map((item, index) => {
          return <CartItem {...item} key={item.id + "cart-item" + index} />;
        })}
      </div>
      <div className="absolute bottom-0  flex h-40 w-full flex-col justify-center  border-l-1 border-t-1 border-border-color bg-white p-3 xs:h-60  xs:p-8">
        <div className="flex items-center justify-between ">
          <p className="text-2xl font-semibold">Total Price</p>
          <p className="text-xl font-semibold">
            {total},00 <span className="align-super text-sm">USD</span>
          </p>
        </div>

        <button className="border-ellipse my-2 flex h-12 w-full items-center justify-center  gap-2 bg-gradient-to-r from-blue to-second-color text-white xs:my-4">
          Proceed to checkout
          <LocalMallOutlinedIcon />
        </button>
        <Link
          to={"/cart"}
          className="flex cursor-pointer items-center justify-center gap-3 text-center text-xl font-semibold"
        >
          View Cart <span className="-mt-1 block text-4xl">&#8594; </span>
        </Link>
      </div>
    </div>
  );
};

CartSideBar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default CartSideBar;
