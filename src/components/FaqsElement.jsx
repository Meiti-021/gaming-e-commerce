import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Proptypes from "prop-types";
import { useState } from "react";
const FaqsElement = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`mb-3 flex w-full flex-col border-1 border-border-color text-sm text-gray-500`}
    >
      <div
        className="flex cursor-pointer justify-between p-3"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className="font-semibold ">{question}</p>
        {open ? (
          <ExpandLess style={{ color: "blue" }} />
        ) : (
          <ExpandMore style={{ color: "blue" }} />
        )}
      </div>
      <div
        className={`overflow-hidden p-3 transition-all ${
          open ? "h-auto border-t-1 border-border-color" : "h-0 py-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

FaqsElement.propTypes = {
  question: Proptypes.string,
  answer: Proptypes.string,
};

export default FaqsElement;
