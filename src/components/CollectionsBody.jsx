import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Product from "./Product";
import { Pagination } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
const allBrands = [
  "samsung",
  "acer",
  "HyperX",
  "Kepler Brooks",
  "Sony PS5",
  "Electrobot",
  "Lenovo",
  "XFX",
  "KandE",
  "Vulture",
];
const allSizes = [
  "32-inches",
  "28-inches",
  "21.5-inches",
  "25-inches",
  "30 inches",
  "32.5 inches",
  "128 GB",
  "256 GB",
  "50D x 66W x 131H",
  "52D x 66W x 131H",
  "236 GB",
  "365 GB",
  "50D x 65W x 130H",
  "3 GB",
  "6 GB",
  "RX 750",
  "364 GB",
  "18 x 11.5 x 11",
  "20 x 12.5 x 13",
];
const allColors = ["red", "black", "white", "green", "gray", "blue"];

const CollectionsBody = ({ collections = [], type = "all" }) => {
  const { products } = useSelector((store) => store.cart);
  const [collection, setCollection] = useState(products);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(0);
  const [sideFilter, setSideFilter] = useState(false);
  const [filterOpen, setFilterOpen] = useState({
    availability: true,
    price: true,
    brand: true,
    size: false,
    color: false,
  });
  const [filter, setFilter] = useState({
    availability: false,
    nonAvailability: false,
    maxPrice: 1000.0,
    minPrice: 0,
    brands: {
      samsung: false,
      acer: false,
      HyperX: false,
      "Kepler Brooks": false,
      "Sony PS5": false,
      Electrobot: false,
      Lenovo: false,
      XFX: false,
      KandE: false,
      Vulture: false,
    },
    sizes: {
      "32-inches": false,
      "28-inches": false,
      "21.5-inches": false,
      "25-inches": false,
      "30 inches": false,
      "32.5 inches": false,
      "128 GB": false,
      "256 GB": false,
      "50D x 66W x 131H": false,
      "52D x 66W x 131H": false,
      "236 GB": false,
      "365 GB": false,
      "50D x 65W x 130H": false,
      "3 GB": false,
      "6 GB": false,
      "RX 750": false,
      "364 GB": false,
      "18 x 11.5 x 11": false,
      "20 x 12.5 x 13": false,
    },
    colors: {
      red: false,
      black: false,
      white: false,
      green: false,
      gray: false,
      blue: false,
    },
  });
  useEffect(() => {
    const pureProduct = [];
    if (filter.availability && !filter.nonAvailability) {
      collections
        .filter((item) => {
          return item.stock === true;
        })
        .forEach((element) => pureProduct.push(element));
    } else if (filter.nonAvailability && !filter.availability) {
      collections
        .filter((item) => {
          return item.stock === false;
        })
        .forEach((element) => pureProduct.push(element));
    } else if (
      (filter.availability && filter.nonAvailability) ||
      (!filter.availability && !filter.nonAvailability)
    ) {
      collections.forEach((item) => pureProduct.push(item));
    }
    const pureProduct2 = pureProduct.filter(
      (element) =>
        element.price > filter.minPrice && element.price < filter.maxPrice
    );

    const pureProduct3 = [];
    if (Object.values(filter.brands).includes(true)) {
      if (filter.brands.samsung) {
        pureProduct2
          .filter((item) => item.brand === "samsung")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.acer) {
        pureProduct2
          .filter((item) => item.brand === "acer")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.HyperX) {
        pureProduct2
          .filter((item) => item.brand === "HyperX")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands["Kepler Brooks"]) {
        pureProduct2
          .filter((item) => item.brand === "Kepler Brooks")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands["Sony PS5"]) {
        pureProduct2
          .filter((item) => item.brand === "Sony PS5")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.Electrobot) {
        pureProduct2
          .filter((item) => item.brand === "Electrobot")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.Lenovo) {
        pureProduct2
          .filter((item) => item.brand === "Lenovo")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.XFX) {
        pureProduct2
          .filter((item) => item.brand === "XFX")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.KandE) {
        pureProduct2
          .filter((item) => item.brand === "KandE")
          .forEach((element) => pureProduct3.push(element));
      }
      if (filter.brands.Vulture) {
        pureProduct2
          .filter((item) => item.brand === "Vulture")
          .forEach((element) => pureProduct3.push(element));
      }
    } else {
      pureProduct2.forEach((item) => pureProduct3.push(item));
    }

    const pureProduct4 = [];

    if (Object.values(filter.sizes).includes(true)) {
      if (filter.sizes["32-inches"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("32-inches")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["28-inches"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("28-inches")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["21.5-inches"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("21.5-inches")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["25-inches"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("25-inches")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["30 inches"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("30 inches")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["32.5 inches"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("32.5 inches")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["128 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("128 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["256 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("256 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["50D x 66W x 131H"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("50D x 66W x 131H")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["52D x 66W x 131H"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("52D x 66W x 131H")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["236 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("236 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["365 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("365 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["50D x 65W x 130H"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("50D x 65W x 130H")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["3 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("3 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["6 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("6 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["RX 750"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("RX 750")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["364 GB"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" && item.options[1].includes("364 GB")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["18 x 11.5 x 11"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("18 x 11.5 x 11")
          )
          .forEach((element) => pureProduct4.push(element));
      }
      if (filter.sizes["20 x 12.5 x 13"]) {
        pureProduct3
          .filter(
            (item) =>
              item.options[0] === "size" &&
              item.options[1].includes("20 x 12.5 x 13")
          )
          .forEach((element) => pureProduct4.push(element));
      }
    } else {
      pureProduct3.forEach((item) => pureProduct4.push(item));
    }

    const pureProduct5 = [];

    if (Object.values(filter.colors).includes(true)) {
      if (filter.colors["red"]) {
        pureProduct4
          .filter(
            (item) =>
              item.options[0] === "color" && item.options[1].includes("red")
          )
          .forEach((element) => pureProduct5.push(element));
      }
      if (filter.colors["black"]) {
        pureProduct4
          .filter(
            (item) =>
              item.options[0] === "color" && item.options[1].includes("black")
          )
          .forEach((element) => pureProduct5.push(element));
      }
      if (filter.colors["white"]) {
        pureProduct4
          .filter(
            (item) =>
              item.options[0] === "color" && item.options[1].includes("white")
          )
          .forEach((element) => pureProduct5.push(element));
      }
      if (filter.colors["green"]) {
        pureProduct4
          .filter(
            (item) =>
              item.options[0] === "color" && item.options[1].includes("green")
          )
          .forEach((element) => pureProduct5.push(element));
      }
      if (filter.colors["gray"]) {
        pureProduct4
          .filter(
            (item) =>
              item.options[0] === "color" && item.options[1].includes("gray")
          )
          .forEach((element) => pureProduct5.push(element));
      }
      if (filter.colors["blue"]) {
        pureProduct4
          .filter(
            (item) =>
              item.options[0] === "color" && item.options[1].includes("blue")
          )
          .forEach((element) => pureProduct5.push(element));
      }
    } else {
      pureProduct4.forEach((item) => pureProduct5.push(item));
    }
    const finalList = pureProduct5.sort((a, b) => {
      if (sort === "newest") {
        return b.date - a.date;
      } else if (sort === "oldest") {
        return a.date - b.date;
      } else if (sort === "az") {
        return b.name[0] > a.name[0];
      } else if (sort === "za") {
        return a.name[0] > b.name[0];
      } else if (sort === "price-h") {
        return b.price - a.price;
      } else if (sort === "price-l") {
        return a.price - b.price;
      } else if (sort === "best") {
        return b.seller - a.seller;
      }
    });
    setCollection(finalList);
    setPage(0);
  }, [filter, collections, sort]);
  const pageHandle = (event, value) => {
    setPage(value - 1);
  };
  return (
    <div className="bg-white relative h-auto w-full px-5 py-10 font-first-font">
      <div
        className={`absolute bg-white z-40 px-10 transition-all  w-screen ${
          sideFilter ? "right-0" : "right-full"
        } h-full col-span-1 `}
      >
        <p className="text-2xl font-semibold flex justify-between items-center">
          Filter
          <button
            onClick={() => {
              setSideFilter(false);
            }}
          >
            <CloseIcon />
          </button>
        </p>
        <div className=" mt-7">
          <div className="flex flex-col  justify-center font-first-font font-medium  border-b-1 border-border-color">
            <div className="flex justify-between min-h-[3rem] items-center h-auto ">
              <p className="">AVAILABILITY</p>
              <button
                className=" text-2xl  font-normal"
                onClick={() =>
                  setFilterOpen({
                    ...filterOpen,
                    availability: !filterOpen.availability,
                  })
                }
              >
                {filterOpen.availability ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`my-7 pr-2 ${
                filterOpen.availability ? undefined : "hidden"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm">0 selected</p>
                <button className="text-sm font-normal">Reset</button>
              </div>
              <div className="flex flex-col mt-4 gap-1">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      onInput={(e) => {
                        if (e.target.checked === true) {
                          setFilter({ ...filter, availability: true });
                        } else {
                          setFilter({ ...filter, availability: false });
                        }
                      }}
                    />
                    <p className="text-sm">In stock</p>
                  </div>
                  <p className="text-xs">
                    ({collections.filter((item) => item.stock).length})
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      onInput={(e) => {
                        if (e.target.checked === true) {
                          setFilter({ ...filter, nonAvailability: true });
                        } else {
                          setFilter({ ...filter, nonAvailability: false });
                        }
                      }}
                    />
                    <p className="text-sm">Out of Stock</p>
                  </div>
                  <p className="text-xs">
                    ({collections.filter((item) => !item.stock).length})
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center  font-first-font font-medium  border-b-1 border-border-color">
            <div className="flex justify-between items-center h-auto min-h-[3rem]">
              <p className="">PRICE</p>
              <button
                className=" text-2xl font-normal"
                onClick={() =>
                  setFilterOpen({
                    ...filterOpen,
                    price: !filterOpen.price,
                  })
                }
              >
                {filterOpen.price ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`my-7 pr-2 ${filterOpen.price ? undefined : "hidden"}`}
            >
              <div className="flex justify-between items-center font-normal">
                <p className="text-sm">The highest price is 900.00</p>
                <button className="text-sm font-normal">Reset</button>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex justify-between items-center">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1 text-xs">
                      <p>Min Price:</p>
                      <input
                        type="number"
                        max={filter.maxPrice}
                        min={filter.minPrice}
                        className="search-bar border-1 border-border-color w-full h-10 p-3"
                        placeholder="0"
                        value={filter.minPrice}
                        onChange={(e) => {
                          setFilter({ ...filter, minPrice: e.target.value });
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1 text-xs">
                      <p>Max price:</p>
                      <input
                        type="text"
                        className="search-bar border-1 border-border-color w-full h-10 p-3"
                        placeholder="900.00"
                        max={filter.maxPrice}
                        min="0"
                        value={filter.maxPrice}
                        onChange={(e) => {
                          e.target.value === ""
                            ? setFilter({
                                ...filter,
                                maxPrice: 1000,
                              })
                            : setFilter({
                                ...filter,
                                maxPrice: e.target.value,
                              });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-center  font-first-font font-medium  border-b-1 border-border-color">
            <div className="flex justify-between min-h-[3rem]  items-center h-auto ">
              <p className="">BRAND</p>
              <button
                className=" text-2xl font-normal"
                onClick={() =>
                  setFilterOpen({
                    ...filterOpen,
                    brand: !filterOpen.brand,
                  })
                }
              >
                {filterOpen.brand ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`my-7 pr-2 ${filterOpen.brand ? undefined : "hidden"}`}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm">0 selected</p>
                <button className="text-sm font-normal">Reset</button>
              </div>
              <div className="flex flex-col mt-4">
                {allBrands.map((item) => {
                  return (
                    <div
                      className={`flex justify-between items-center ${
                        collection.filter((product) => {
                          return product.brand === item;
                        }).length === 0
                          ? "hidden"
                          : undefined
                      }`}
                      key={"brands" + item}
                    >
                      <div className="flex gap-4">
                        <input
                          type="checkbox"
                          className="w-5 h-5"
                          name={item}
                          onInput={(e) => {
                            if (e.target.checked) {
                              setFilter({
                                ...filter,
                                brands: {
                                  ...filter.brands,
                                  [e.target.name]: true,
                                },
                              });
                            } else {
                              setFilter({
                                ...filter,
                                brands: {
                                  ...filter.brands,
                                  [e.target.name]: false,
                                },
                              });
                            }
                          }}
                        />
                        <p className="">{item}</p>
                      </div>
                      <p className="text-sm">
                        (
                        {
                          collection.filter((product) => {
                            return product.brand === item;
                          }).length
                        }
                        )
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center  font-first-font font-medium border-b-1 border-border-color">
            <div className="flex justify-between items-center min-h-[3rem] h-auto  ">
              <p className="">SIZE</p>
              <button
                className="font-normal text-2xl "
                onClick={() =>
                  setFilterOpen({
                    ...filterOpen,
                    size: !filterOpen.size,
                  })
                }
              >
                {filterOpen.size ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`my-7 pr-2  ${filterOpen.size ? undefined : "hidden"}`}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm">0 selected</p>
                <button className="text-sm font-normal">Reset</button>
              </div>
              <div className="flex flex-col mt-4">
                {allSizes.map((item) => {
                  return (
                    <div
                      className="flex justify-between items-center"
                      key={"options" + item}
                    >
                      <div className="flex gap-4">
                        <input
                          type="checkbox"
                          className="w-5 h-5"
                          name={item}
                          onInput={(e) => {
                            if (e.target.checked) {
                              setFilter({
                                ...filter,
                                sizes: {
                                  ...filter.sizes,
                                  [e.target.name]: true,
                                },
                              });
                            } else {
                              setFilter({
                                ...filter,
                                sizes: {
                                  ...filter.sizes,
                                  [e.target.name]: false,
                                },
                              });
                            }
                          }}
                        />
                        <p className="">{item}</p>
                      </div>
                      <p className="text-sm">
                        (
                        {
                          collections.filter((product) => {
                            return (
                              product.options[0] === "size" &&
                              product.options[1].includes(item)
                            );
                          }).length
                        }
                        )
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center  font-first-font font-medium">
            <div className="flex justify-between items-center h-auto min-h-[3rem] ">
              <p className="">COLORS</p>
              <button
                className="font-normal text-2xl "
                onClick={() =>
                  setFilterOpen({
                    ...filterOpen,
                    color: !filterOpen.color,
                  })
                }
              >
                {filterOpen.color ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`my-7 pr-2 ${filterOpen.color ? undefined : "hidden"}`}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm">0 selected</p>
                <button className="text-sm font-normal">Reset</button>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {allColors.map((item) => {
                  return (
                    <div
                      className="flex justify-between items-center"
                      key={"options-colors" + item}
                    >
                      <div className="flex gap-4">
                        <input
                          type="checkbox"
                          className={`w-5 h-5 accent-slate-950`}
                          name={item}
                          onInput={(e) => {
                            if (e.target.checked) {
                              setFilter({
                                ...filter,
                                colors: {
                                  ...filter.colors,
                                  [e.target.name]: true,
                                },
                              });
                            } else {
                              setFilter({
                                ...filter,
                                colors: {
                                  ...filter.colors,
                                  [e.target.name]: false,
                                },
                              });
                            }
                          }}
                        />
                        <p className="w-14">{item}</p>
                        <div className="w-6 h-6 rounded-full  p-[0.15rem]  border-2 border-black overflow-hidden ">
                          <div
                            className={`w-full h-full rounded-full`}
                            style={{ backgroundColor: item }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-sm">
                        (
                        {
                          collections.filter((product) => {
                            return (
                              product.options[0] === "color" &&
                              product.options[1].includes(item)
                            );
                          }).length
                        }
                        )
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl h-auto mx-auto grid grid-cols-1 ml:grid-cols-4 gap-3">
        <div className=" hidden ml:block w-full h-full col-span-1 ">
          <p className="text-2xl font-semibold">Filter</p>
          <div className=" mt-7">
            <div className="flex flex-col  justify-center font-first-font font-medium  border-b-1 border-border-color">
              <div className="flex justify-between min-h-[3rem] items-center h-auto ">
                <p className="">AVAILABILITY</p>
                <button
                  className=" text-2xl  font-normal"
                  onClick={() =>
                    setFilterOpen({
                      ...filterOpen,
                      availability: !filterOpen.availability,
                    })
                  }
                >
                  {filterOpen.availability ? <RemoveIcon /> : <AddIcon />}
                </button>
              </div>
              <div
                className={`my-7 pr-2 ${
                  filterOpen.availability ? undefined : "hidden"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">0 selected</p>
                  <button className="text-sm font-normal">Reset</button>
                </div>
                <div className="flex flex-col mt-4 gap-1">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        onInput={(e) => {
                          if (e.target.checked === true) {
                            setFilter({ ...filter, availability: true });
                          } else {
                            setFilter({ ...filter, availability: false });
                          }
                        }}
                      />
                      <p className="text-sm">In stock</p>
                    </div>
                    <p className="text-xs">
                      ({collections.filter((item) => item.stock).length})
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        onInput={(e) => {
                          if (e.target.checked === true) {
                            setFilter({ ...filter, nonAvailability: true });
                          } else {
                            setFilter({ ...filter, nonAvailability: false });
                          }
                        }}
                      />
                      <p className="text-sm">Out of Stock</p>
                    </div>
                    <p className="text-xs">
                      ({collections.filter((item) => !item.stock).length})
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center  font-first-font font-medium  border-b-1 border-border-color">
              <div className="flex justify-between items-center h-auto min-h-[3rem]">
                <p className="">PRICE</p>
                <button
                  className=" text-2xl font-normal"
                  onClick={() =>
                    setFilterOpen({
                      ...filterOpen,
                      price: !filterOpen.price,
                    })
                  }
                >
                  {filterOpen.price ? <RemoveIcon /> : <AddIcon />}
                </button>
              </div>
              <div
                className={`my-7 pr-2 ${
                  filterOpen.price ? undefined : "hidden"
                }`}
              >
                <div className="flex justify-between items-center font-normal">
                  <p className="text-sm">The highest price is 900.00</p>
                  <button className="text-sm font-normal">Reset</button>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-1 text-xs">
                        <p>Min Price:</p>
                        <input
                          type="number"
                          max={filter.maxPrice}
                          min={filter.minPrice}
                          className="search-bar border-1 border-border-color w-full h-10 p-3"
                          placeholder="0"
                          value={filter.minPrice}
                          onChange={(e) => {
                            setFilter({ ...filter, minPrice: e.target.value });
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-xs">
                        <p>Max price:</p>
                        <input
                          type="text"
                          className="search-bar border-1 border-border-color w-full h-10 p-3"
                          placeholder="900.00"
                          max={filter.maxPrice}
                          min="0"
                          value={filter.maxPrice}
                          onChange={(e) => {
                            e.target.value === ""
                              ? setFilter({
                                  ...filter,
                                  maxPrice: 1000,
                                })
                              : setFilter({
                                  ...filter,
                                  maxPrice: e.target.value,
                                });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col  justify-center  font-first-font font-medium  border-b-1 border-border-color">
              <div className="flex justify-between min-h-[3rem]  items-center h-auto ">
                <p className="">BRAND</p>
                <button
                  className=" text-2xl font-normal"
                  onClick={() =>
                    setFilterOpen({
                      ...filterOpen,
                      brand: !filterOpen.brand,
                    })
                  }
                >
                  {filterOpen.brand ? <RemoveIcon /> : <AddIcon />}
                </button>
              </div>
              <div
                className={`my-7 pr-2 ${
                  filterOpen.brand ? undefined : "hidden"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">0 selected</p>
                  <button className="text-sm font-normal">Reset</button>
                </div>
                <div className="flex flex-col mt-4">
                  {allBrands.map((item) => {
                    return (
                      <div
                        className={`flex justify-between items-center ${
                          collection.filter((product) => {
                            return product.brand === item;
                          }).length === 0
                            ? "hidden"
                            : undefined
                        }`}
                        key={"brands" + item}
                      >
                        <div className="flex gap-4">
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            name={item}
                            onInput={(e) => {
                              if (e.target.checked) {
                                setFilter({
                                  ...filter,
                                  brands: {
                                    ...filter.brands,
                                    [e.target.name]: true,
                                  },
                                });
                              } else {
                                setFilter({
                                  ...filter,
                                  brands: {
                                    ...filter.brands,
                                    [e.target.name]: false,
                                  },
                                });
                              }
                            }}
                          />
                          <p className="">{item}</p>
                        </div>
                        <p className="text-sm">
                          (
                          {
                            collection.filter((product) => {
                              return product.brand === item;
                            }).length
                          }
                          )
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center  font-first-font font-medium border-b-1 border-border-color">
              <div className="flex justify-between items-center min-h-[3rem] h-auto  ">
                <p className="">SIZE</p>
                <button
                  className="font-normal text-2xl "
                  onClick={() =>
                    setFilterOpen({
                      ...filterOpen,
                      size: !filterOpen.size,
                    })
                  }
                >
                  {filterOpen.size ? <RemoveIcon /> : <AddIcon />}
                </button>
              </div>
              <div
                className={`my-7 pr-2  ${
                  filterOpen.size ? undefined : "hidden"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">0 selected</p>
                  <button className="text-sm font-normal">Reset</button>
                </div>
                <div className="flex flex-col mt-4">
                  {allSizes.map((item) => {
                    return (
                      <div
                        className="flex justify-between items-center"
                        key={"options" + item}
                      >
                        <div className="flex gap-4">
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            name={item}
                            onInput={(e) => {
                              if (e.target.checked) {
                                setFilter({
                                  ...filter,
                                  sizes: {
                                    ...filter.sizes,
                                    [e.target.name]: true,
                                  },
                                });
                              } else {
                                setFilter({
                                  ...filter,
                                  sizes: {
                                    ...filter.sizes,
                                    [e.target.name]: false,
                                  },
                                });
                              }
                            }}
                          />
                          <p className="">{item}</p>
                        </div>
                        <p className="text-sm">
                          (
                          {
                            collections.filter((product) => {
                              return (
                                product.options[0] === "size" &&
                                product.options[1].includes(item)
                              );
                            }).length
                          }
                          )
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center  font-first-font font-medium">
              <div className="flex justify-between items-center h-auto min-h-[3rem] ">
                <p className="">COLORS</p>
                <button
                  className="font-normal text-2xl "
                  onClick={() =>
                    setFilterOpen({
                      ...filterOpen,
                      color: !filterOpen.color,
                    })
                  }
                >
                  {filterOpen.color ? <RemoveIcon /> : <AddIcon />}
                </button>
              </div>
              <div
                className={`my-7 pr-2 ${
                  filterOpen.color ? undefined : "hidden"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm">0 selected</p>
                  <button className="text-sm font-normal">Reset</button>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  {allColors.map((item) => {
                    return (
                      <div
                        className="flex justify-between items-center"
                        key={"options-colors" + item}
                      >
                        <div className="flex gap-4">
                          <input
                            type="checkbox"
                            className={`w-5 h-5 accent-slate-950`}
                            name={item}
                            onInput={(e) => {
                              if (e.target.checked) {
                                setFilter({
                                  ...filter,
                                  colors: {
                                    ...filter.colors,
                                    [e.target.name]: true,
                                  },
                                });
                              } else {
                                setFilter({
                                  ...filter,
                                  colors: {
                                    ...filter.colors,
                                    [e.target.name]: false,
                                  },
                                });
                              }
                            }}
                          />
                          <p className="w-14">{item}</p>
                          <div className="w-6 h-6 rounded-full  p-[0.15rem]  border-2 border-black overflow-hidden ">
                            <div
                              className={`w-full h-full rounded-full`}
                              style={{ backgroundColor: item }}
                            ></div>
                          </div>
                        </div>
                        <p className="text-sm">
                          (
                          {
                            collections.filter((product) => {
                              return (
                                product.options[0] === "color" &&
                                product.options[1].includes(item)
                              );
                            }).length
                          }
                          )
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <main
          aria-label="main"
          className="w-full h-full col-span-1  ml:col-span-3 "
        >
          <div className="flex justify-between mb-3 items-center">
            <p className="text-sm font-medium  h-8 capitalize flex items-center">
              Home / collections / {type}
            </p>
            <div className="hidden ml:flex items-center h-full gap-1">
              <span className="text-sm font-bold text-black">Sort by:</span>
              <div className="">
                <select
                  name=""
                  id=""
                  className="text-sm"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value="newest">Date, new to old </option>
                  <option value="oldest">Date, old to new </option>
                  <option value="az">Alphabeticaly, A-Z </option>
                  <option value="za">Alphabeticaly, Z-A </option>
                  <option value="price-h">Price, high to low </option>
                  <option value="price-l">Price, low to high </option>
                  <option value="best">Best selling</option>
                </select>
              </div>
            </div>
            <button
              className="mr-3 ml:hidden"
              onClick={() => {
                setSideFilter(true);
              }}
            >
              <TuneIcon />
            </button>
          </div>
          <div className="h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collection.slice(page * 6, 6 * (page + 1)).map((item, index) => {
              return (
                <Product
                  {...item}
                  key={"collection-product" + "item.id" + `${index}`}
                />
              );
            })}
          </div>
          <div className="h-20 w-full flex justify-center items-center">
            <Pagination
              count={
                collection.length % 6 === 0
                  ? collection.length / 6
                  : Math.floor(collection.length / 6) + 1
              }
              variant="outlined"
              color="primary"
              size="large"
              onChange={pageHandle}
              shape="rounded"
              page={page + 1}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

CollectionsBody.propTypes = {
  products: PropTypes.array,
  collections: PropTypes.array,
  type: PropTypes.string,
};

export default CollectionsBody;
