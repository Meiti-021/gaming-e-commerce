import { useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black p-10 ">
      <div className="h-40 w-full bg-black "></div>
      <div className="mx-auto flex h-72 w-full max-w-7xl flex-col justify-end gap-7 bg-black pb-10 ">
        <div className="flex items-center gap-2">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border-1 border-white pb-[0.1rem] text-lg text-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8592;
          </button>
          <p className="text-xs font-semibold text-white">Back to home</p>
        </div>
        <h1 className=" bg-gradient-to-r from-blue  to-second-color  to-25% bg-clip-text text-[2.6rem]  font-semibold capitalize text-transparent">
          About
        </h1>
        <p className="max-w-3xl text-sm text-white">
          The style of an &#34;About Us&#34; page can vary depending on the
          company and its target audience. However, there are some general tips
          that can help you create a well-written and engaging &#34;About
          Us&#34; page.Here I have decided to write about myself.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
