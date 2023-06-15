import { useState } from "react";
import image from "../assets/images/subscribe-img.webp";
import { useSnackbar } from "notistack";
const HomeNewsLetter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  return (
    <div className="mx-auto mt-7 flex h-[35rem] w-full max-w-7xl flex-col gap-5 p-5 md:flex-row-reverse md:items-center lg:gap-7">
      <img
        src={image}
        alt=""
        className="block h-1/2 w-full object-contain transition-all lg:h-3/4"
      />
      <div className="flex  w-full flex-col gap-4">
        <div className="flex h-6 w-24 items-center justify-center rounded-md bg-gradient-to-r from-blue to-second-color pt-[1px] text-xs text-white">
          Subscribe US
        </div>
        <h2 className="text-3xl font-semibold  lg:text-5xl">
          Subscribe newsletter and{" "}
          <span className="mx-2 bg-gradient-to-r  from-blue to-second-color bg-clip-text text-transparent md:mx-0">
            get -20% off
          </span>
        </h2>
        <p className="text-sm text-gray-500  lg:text-base ">
          Almost three-quarters of dedicated PC gamers say their main motivation
          to upgrade is improving gaming experiences.
        </p>
        <div className="border-ellipse  flex h-[2.9rem] w-full items-center overflow-hidden border-[1px] border-black">
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter enail address.."
            className="h-2/4 w-5/6 border-none  p-4 text-xs  focus:outline-none lg:w-4/6 "
          />
          <button
            className="h-full w-1/4 bg-gradient-to-r from-blue to-second-color text-xs  font-semibold text-white xxs:text-sm lg:w-2/6 "
            onClick={() => {
              if (email !== "") {
                enqueueSnackbar({
                  variant: "success",
                  message: "You have seccessfully subscribed to out newsletter",
                  className: "capitalize ",
                });
              } else {
                enqueueSnackbar({
                  variant: "error",
                  message:
                    "The email section is empty or your email format is incorrect!",
                  className: "capitalize ",
                });
              }
            }}
            aria-label="subscribes to newsletter"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;
