const aboutOptions = [
  {
    title: "Gift Boxes",
    description: "Finished products and gift wrapping.",
  },
  {
    title: "Promotions",
    description: "Large promotions with numerous discount.",
  },
  {
    title: "Shipping",
    description: "Free shiping on any order from $ 150",
  },
  {
    title: "Quality",
    description: "All products are made by engineers from india",
  },
];
const HomeAbout = () => {
  return (
    <div className="w-full -mt-28  mx-auto max-w-7xl font-first-font p-3">
      <h2 className="text-5xl ">About our shop</h2>
      <p className="my-5 text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        iste vitae, aspernatur, aliquam eveniet veritatis cum debitis qui nisi
        laborum reiciendis ipsa consectetur totam dicta corrupti amet modi odit.
        Quam.
      </p>
      <div className="w-full h-auto grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 grid-rows-4 gap-5 md:grid-cols-4 md:grid-rows-1 mt-11">
        {aboutOptions.map((item, index) => {
          return (
            <div
              className="p-[1px] bg-gradient-to-r search-bar overflow-hidden from-blue  to-second-color w-full h-auto "
              key={item.title}
            >
              <div className="w-full h-full bg-white flex flex-col gap-2 p-4">
                <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-blue to-second-color">
                  0{index + 1}
                </p>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-xs w-40">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeAbout;
