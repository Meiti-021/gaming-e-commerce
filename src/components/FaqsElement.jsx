import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Proptypes from "prop-types";
import { useState } from "react";
const FaqsElement = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border-1 w-full mb-3 border-border-color text-gray-500 text-sm flex flex-col`}
    >
      <div
        className="flex justify-between cursor-pointer p-3"
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
        className={`p-3 transition-all overflow-hidden ${
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
