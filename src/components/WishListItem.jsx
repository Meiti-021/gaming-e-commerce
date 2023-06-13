import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeWhisItem } from "../features/cartSlice";
import { enqueueSnackbar } from "notistack";
const WishListItem = ({
  id,
  name,
  price,
  quantity,
  images,
  options,
  option,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex h-36 w-full  gap-2 border-1 border-border-color p-3">
      <img
        src={`/assets/products/${images[option]}`}
        alt=""
        className="h-full w-20 object-contain object-center p-2"
      />
      <div className="flex w-4/6 flex-col justify-between gap-1">
        <p className="overflow-hidden  text-ellipsis whitespace-nowrap text-lg">
          {name}
        </p>
        <p className="text-sm">
          {options[0]}: {options[1][option]}
        </p>
        <p className="text-lg font-semibold">
          {price * quantity}.00 <span className="align-super text-xs">USD</span>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-5 rounded-sm border-1 border-border-color p-1 text-sm">
            <button>
              <AddIcon style={{ fontSize: "1rem", color: "gray" }} />
            </button>
            <p className="pt-1">{quantity}</p>
            <button>
              <RemoveIcon style={{ fontSize: "1rem", color: "gray" }} />
            </button>
          </div>
          <button
            className="text-gray-400"
            onClick={() => {
              dispatch(removeWhisItem(id));
              enqueueSnackbar({
                variant: "info",
                message: "Item seccessfully removed from your wish list !",
                className: "capitalize ",
              });
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

WishListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  images: PropTypes.array,
  options: PropTypes.array,
  option: PropTypes.number,
};

export default WishListItem;
