const AboutHero = () => {
  return (
    <div className="bg-black p-10 font-first-font">
      <div className="w-full h-40 bg-black "></div>
      <div className="w-full h-72 bg-black flex-col justify-end pb-10 flex gap-7 max-w-7xl mx-auto ">
        <div className="flex items-center gap-2">
          <button className=" w-9 h-9 rounded-full border-1 text-white text-lg pb-[0.1rem] border-white">
            &#8592;
          </button>
          <p className="text-white text-xs font-semibold">Back to home</p>
        </div>
        <h1 className=" text-[2.6rem] font-semibold  text-transparent  bg-clip-text bg-gradient-to-r from-blue  to-25% to-second-color capitalize">
          About
        </h1>
        <p className="text-sm text-white max-w-3xl">
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
