import { useNavigate } from "react-router-dom";
const FaqsHero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black p-10 ">
      <div className="h-40 w-full bg-black "></div>
      <div className="mx-auto flex h-72 w-full max-w-7xl flex-col justify-end gap-7 bg-black pb-10 ">
        <div className="flex items-center gap-2">
          <button
            className=" h-9 w-9 rounded-full border-1 border-white pb-[0.1rem] text-lg text-white"
            onClick={() => {
              navigate(-1);
            }}
            aria-label="back to previous page"
          >
            &#8592;
          </button>
          <p className="text-xs font-semibold text-white">Back to home</p>
        </div>
        <h1 className=" bg-gradient-to-r from-blue  to-second-color  to-25% bg-clip-text text-[2.2rem]  font-semibold capitalize text-transparent">
          Featured asked questions
        </h1>
        <p className="max-w-3xl pr-10 text-sm text-white md:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown.
        </p>
      </div>
    </div>
  );
};

export default FaqsHero;
