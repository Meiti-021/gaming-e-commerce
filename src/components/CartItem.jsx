import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
const CartItem = ({ id, name, price, quantity, images, options, option }) => {
  return (
    <div className="p-3 border-1 font-first-font border-border-color w-full flex gap-2">
      <img
        src={`/assets/products/${images[option]}`}
        alt=""
        className="w-2/6 h-full p-2 object-contain object-center"
      />
      <div className="w-4/6 flex flex-col justify-between gap-1">
        <p className="text-base  overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </p>
        <p className="text-sm">
          {options[0]}: {options[1][option]}
        </p>
        <p className="text-lg font-semibold">
          {price * quantity}.00 <span className="text-xs align-super">USD</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex justify-between text-sm rounded-sm items-center gap-5 p-1 border-1 border-border-color">
            <button>
              <AddIcon style={{ fontSize: "1rem", color: "gray" }} />
            </button>
            <p className="pt-1">{quantity}</p>
            <button>
              <RemoveIcon style={{ fontSize: "1rem", color: "gray" }} />
            </button>
          </div>
          <button className="text-gray-400">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.proptypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  images: PropTypes.array,
  options: PropTypes.array,
  option: PropTypes.number,
};

export default CartItem;
