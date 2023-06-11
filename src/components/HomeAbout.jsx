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
    <div className="mx-auto w-full max-w-7xl p-3  md:-mt-28">
      <h2 className="text-5xl ">About our shop</h2>
      <p className="my-5 text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        iste vitae, aspernatur, aliquam eveniet veritatis cum debitis qui nisi
        laborum reiciendis ipsa consectetur totam dicta corrupti amet modi odit.
        Quam.
      </p>
      <div className="mt-11 grid h-auto w-full grid-cols-1 grid-rows-4 gap-5 xs:grid-cols-2 xs:grid-rows-2 md:grid-cols-4 md:grid-rows-1">
        {aboutOptions.map((item, index) => {
          return (
            <div key={item.title}>
              <div className="border-ellipse flex h-full w-full flex-col gap-2 bg-white bg-gradient-to-br from-sky-200 to-white p-4">
                <p className="bg-gradient-to-t from-blue to-second-color bg-clip-text text-3xl font-semibold text-transparent">
                  0{index + 1}
                </p>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="w-40 text-xs">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeAbout;
