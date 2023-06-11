import { useNavigate } from "react-router-dom";
const ContactHero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black p-10 font-first-font">
      <div className="w-full h-40 bg-black "></div>
      <div className="w-full h-72 bg-black flex-col justify-end pb-10 flex gap-7 max-w-7xl mx-auto ">
        <div className="flex items-center gap-2">
          <button
            className=" w-9 h-9 rounded-full border-1 text-white text-lg pb-[0.1rem] border-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8592;
          </button>
          <p className="text-white text-xs font-semibold">Back to home</p>
        </div>
        <h1 className=" text-[2.6rem] font-semibold  text-transparent  bg-clip-text bg-gradient-to-r from-blue  to-25% to-second-color capitalize">
          Contact
        </h1>
        <p className="text-sm text-white max-w-3xl md:w-1/2 pr-10">
          You are viewing a demo project that is meant to show my skills and
          creativity in the field of website design. If you want to contact me
          or report a bug or problem, or if you want to work with me, feel free
          to use the form below and share your opinion with me!
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
