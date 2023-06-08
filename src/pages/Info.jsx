import { useSelector } from "react-redux";
import {
  ExpandLessTwoTone,
  ExpandMoreTwoTone,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Rating, Tab, Tabs } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import star from "../assets/images/star.png";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import banner4 from "../assets/images/banner-4.jpg";
import banner5 from "../assets/images/banner-5.jpg";
import banner6 from "../assets/images/banner-6.jpg";
import banner7 from "../assets/images/banner-7.jpg";
import banner8 from "../assets/images/banner-8.jpg";
import banner9 from "../assets/images/banner-9.jpg";
import HomeBestProGamingProducts from "../components/HomeBestProGamingProducts";

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
];

const Info = () => {
  const [form, setForm] = useState({ name: "", message: "", rate: null });
  const { products } = useSelector((store) => store.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef(null);
  const smSwiperRef = useRef(null);
  const modalSwiperRef = useRef(null);
  const { users } = useSelector((store) => store.user);
  useEffect(() => {
    swiperRef.current.swiper.slideTo(swiperIndex);
    smSwiperRef.current.swiper.slideTo(swiperIndex);
    modalSwiperRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  const addIndex = () => {
    if (swiperIndex === products[1].images.length - 1) {
      setSwiperIndex(0);
    } else {
      setSwiperIndex(swiperIndex + 1);
    }
  };
  const minusIndex = () => {
    if (swiperIndex === 0) {
      setSwiperIndex(products[1].images.length - 1);
    } else {
      setSwiperIndex(swiperIndex - 1);
    }
  };
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className="relative">
      <div
        className={`fixed  w-full h-screen flex-col justify-center items-center z-50 bg-[rgba(0,0,0,0.8)] ${
          isModalOpen ? "flex" : "hidden"
        }`}
      >
        <button
          className="w-32 h-12 absolute top-10 right-10 text-white "
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <CloseIcon style={{ fontSize: "3rem" }} />
        </button>
        <div className="relative w-full max-w-7xl h-[30.5rem] sm:col-span-7">
          <Swiper
            slidesPerView={"1"}
            ref={modalSwiperRef}
            spaceBetween={"20px"}
            speed={1000}
            modules={[Pagination, Navigation]}
            centeredSlides={true}
            className="w-full  pointer-events-none search-bar overflow-hidden h-full text-white"
          >
            {products[1].images.map((image) => {
              return (
                <SwiperSlide
                  key={`product-info-images-${image}`}
                  className="h-full w-full "
                >
                  <figure className="w-full h-full flex justify-center items-center p-5">
                    <img
                      src={`/assets/products/${image}`}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="cursor-pointer z-10 text-white absolute top-0 bottom-0 my-auto right-0 hover:text-blue transition-all"
            onClick={() => {
              addIndex();
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: "3rem" }} />
          </button>
          <button
            className="cursor-pointer z-10 text-white absolute top-0 bottom-0 my-auto left-0 hover:text-blue transition-all"
            onClick={() => {
              minusIndex();
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: "3rem" }} />
          </button>
        </div>
        <p className="text-center text-lg font-first-font text-white">
          {products[0].name}
        </p>
      </div>
      <div className="bg-black h-20 sm:h-40"></div>
      <div className="w-full bg-black py-14">
        <div className="flex max-w-7xl items-center p-5 bg-black gap-2 w-full mx-auto ">
          <button className=" w-9 h-9 rounded-full border-1 text-white text-lg pb-[0.1rem] border-white">
            &#8592;
          </button>
          <p className="text-white text-xs font-semibold">Back to categories</p>
        </div>
        <div className="grid  gap-10 max-w-7xl mx-auto lg:grid-cols-2 p-5 font-first-font grid-cols-1 text-white bg-black">
          <div className="flex flex-col gap-5">
            <div className="w-full h-12  flex gap-2 items-center">
              <div className="w-auto h-6 mr-3 bg-gradient-to-r from-blue to-second-color text-xs p-2 px-3 font-first-font rounded-[0.25rem] text-white pt-[0.3rem]">
                {products[0].type}
              </div>
              <FavoriteBorderOutlined />
              <p className="text-sm">Add to wishlist</p>
            </div>
            <div className="flex gap-2">
              <Rating
                value={products[0].rate}
                precision={0.5}
                readOnly
                size="small"
                sx={{ color: "white", fontSize: "1.3rem" }}
              />
              <p>({products[0].seller})</p>
              <button className="text-sm flex items-center gap-1">
                <EditOutlinedIcon style={{ fontSize: "1rem" }} />
                Write a review
              </button>
            </div>
            <h1 className="text-3xl font-semibold">{products[0].name}</h1>
            <p className="text-sm text-gray-400 flex gap-4">
              <span>TYPE: {products[0].type}</span>
              <span>SKU: {products[0].sku}</span>
            </p>
            <p className="text-sm text-gray-400">{products[0].description}</p>
            <div className="flex flex-col ">
              <p className="text-sm text-white">{products[0].options[0]}: </p>
              <div
                className="h-10 w-full cursor-pointer flex relative justify-between px-4 items-center search-bar border-[1px] border-gray-500 mt-2"
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <p className="font-normal text-sm text-white">
                  {products[0].options[1][0]}
                </p>
                <p>
                  <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
                </p>
                <div className="bg-white z-20 absolute top-6 w-64 right-0 left-0 mx-auto flex flex-col">
                  {products[0].options[1].map((item, index) => {
                    return (
                      <button
                        key={`${products[0].id}optionsbtnctg${index}`}
                        className={` ${
                          isOpen ? "block" : "hidden"
                        } text-xs text-black border-[1px] border-black`}
                        onClick={() => {
                          setSwiperIndex(index);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-semibold">
                {products[0].price}.00{" "}
                <sup className="text-xs font-normal"> USD</sup>
              </p>
              <div className="flex items-center gap-2">
                <p>Quantity: </p>
                <div className="rounded-md border-1 border-gray-500 h-8 w-28 px-2 text-gray-500 flex items-center justify-between">
                  <button>
                    <AddIcon style={{ fontSize: "1rem" }} />{" "}
                  </button>
                  <p className="text-sm">{count}</p>
                  <button>
                    <RemoveIcon style={{ fontSize: "1rem" }} />{" "}
                  </button>
                </div>
              </div>
            </div>
            <button className="search-bar text-sm h-8 w-32 bg-gradient-to-r from-blue to-second-color text-white">
              Add to cart
            </button>
          </div>
          <div className="sm:grid sm:grid-cols-8 sm:gap-3">
            <div className="sm:col-span-1 hidden  h-[30.5rem] sm:flex flex-col gap-3 ">
              <div className="h-64 overflow-hidden ">
                <Swiper
                  slidesPerView={"1"}
                  ref={smSwiperRef}
                  spaceBetween={"10px"}
                  speed={1000}
                  modules={[Pagination, Navigation]}
                  centeredSlides={true}
                  direction={"vertical"}
                  className="w-full h-16 pointer-events-none relative z-10   overflow-visible  search-bar  text-white"
                >
                  {products[1].images.map((image) => {
                    return (
                      <SwiperSlide
                        key={`product-info-images-${image}`}
                        className="h-auto relative z-20 cursor-pointer search-bar overflow-hidden border-1 border-border-color w-full  "
                      >
                        {({ isActive }) => (
                          <figure
                            className={`w-full h-full flex justify-center items-center p-2 ${
                              isActive ? "bg-white" : "bg-black"
                            }`}
                          >
                            <img
                              src={`/assets/products/${image}`}
                              alt=""
                              className="h-full w-full object-contain"
                            />
                          </figure>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  className="text-second-color"
                  onClick={() => {
                    minusIndex();
                  }}
                >
                  <ExpandLessTwoTone style={{ fontSize: "2rem" }} />
                </button>
                <button
                  className="text-second-color"
                  onClick={() => {
                    addIndex();
                  }}
                >
                  <ExpandMoreTwoTone style={{ fontSize: "2rem" }} />
                </button>
              </div>
            </div>
            <div className="relative h-[30.5rem] sm:col-span-7">
              <Swiper
                slidesPerView={"1"}
                ref={swiperRef}
                spaceBetween={"20px"}
                speed={1000}
                modules={[Pagination, Navigation]}
                centeredSlides={true}
                className="w-full border-1 pointer-events-none border-blue search-bar overflow-hidden h-full text-white"
              >
                {products[1].images.map((image) => {
                  return (
                    <SwiperSlide
                      key={`product-info-images-${image}`}
                      className="h-full w-full "
                    >
                      <figure className="w-full h-full flex justify-center items-center p-5 relative">
                        <img
                          src={`/assets/products/${image}`}
                          alt=""
                          className="h-full w-full object-contain"
                        />

                        <button
                          className="text-white cursor-pointer pointer-events-auto w-20 search-bar h-12 bg-gradient-to-r from-blue absolute to-second-color"
                          onClick={() => {
                            setIsModalOpen(true);
                          }}
                        >
                          <SearchIcon />
                        </button>
                      </figure>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <button
                className="cursor-pointer  sm:hidden z-10 transition-all hover:text-white hover:bg-blue absolute right-0 top-0 bottom-0 my-auto w-9 h-9 rounded-full  text-black text-lg pb-[0.1rem] bg-white"
                onClick={() => {
                  addIndex();
                }}
              >
                &#8594;
              </button>
              <button
                className="cursor-pointer sm:hidden z-10 transition-all hover:text-white hover:bg-second-color absolute left-0 top-0 bottom-0 my-auto w-9 h-9 rounded-full  text-black text-lg pb-[0.1rem] bg-white"
                onClick={() => {
                  minusIndex();
                }}
              >
                &#8592;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5  text-black font-first-font">
        <div className="w-full max-w-7xl mx-auto mt-8">
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Reviews" />
            <Tab label="Description" />
          </Tabs>
          <div className="">
            {tabIndex === 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <p className="text-base py-5 text-justify">
                  {products[0].description}
                </p>
                <div className="w-full h-96">
                  <img
                    src={banners[Math.floor(Math.random() * banners.length)]}
                    alt=""
                    className="w-full h-full object-top object-contain block"
                  />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-12 grid-cols-1">
                <div className="flex flex-col gap-3 sm:gap-10 p-4">
                  {users.map((item) => {
                    return (
                      <div className="" key={item.id + "product-comment"}>
                        <div className="flex flex-col mt-10 xs:mt-0 gap-3 font-first-font">
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-4">
                              <img
                                src={`/assets/users/${item.image}`}
                                alt=""
                                className="w-11 h-11 bg-gradient-to-l from-blue to-second-color rounded-md object-cover block"
                              />
                              <div>
                                <p className="text-lg font-semibold">
                                  {item.name}
                                </p>
                                <p className="text-xs -mt-1">
                                  {item.membership}
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-3 flex-col items-center xs:flex-row">
                              <img
                                src={star}
                                alt=""
                                className="object-contain w-20"
                              />
                              <p className="text-xs text-blue font-bold hidden xs:block">
                                4.5 <span className="text-black">/ 5.0</span>
                              </p>
                            </div>
                          </div>
                          <p className="text-sm px-14">
                            {item.comment.caption}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full h-full relative">
                  <form className="border-1 sticky top-14 search-bar pt-5 border-border-color max-w-md flex flex-col gap-4 p-3">
                    <p className="text-2xl font-semibold flex justify-between items-center">
                      Write a Review
                      <Rating
                        precision={0.5}
                        aria-required={true}
                        value={form.rate}
                        onChange={(event, newValue) => {
                          setForm({ ...form, rate: newValue });
                        }}
                        icon={
                          <StarIcon
                            style={{
                              fontSize: "inherit",
                              color: "blue",
                            }}
                          />
                        }
                        emptyIcon={
                          <StarBorderIcon
                            style={{ fontSize: "inherit", color: "blue" }}
                          />
                        }
                      />
                    </p>
                    <input
                      type="text"
                      id=""
                      value={form.name}
                      onChange={(event) => {
                        setForm({ ...form, name: event.target.value });
                      }}
                      placeholder="title"
                      required
                      className="border-1 border-border-color search-bar p-3 text-sm h-12"
                    />

                    <textarea
                      className="border-1 resize-none border-border-color search-bar p-3 text-sm min-h-[3rem] "
                      placeholder="Message"
                      required
                      value={form.message}
                      onChange={(event) => {
                        setForm({ ...form, message: event.target.value });
                      }}
                    ></textarea>
                    <p className="text-xs text-red-500 px-3 w-full hidden">
                      alert!
                    </p>

                    <button className="w-full h-12 search-bar text-white font-semibold bg-gradient-to-r from-blue to-second-color">
                      Post Review
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <HomeBestProGamingProducts />
    </div>
  );
};

export default Info;
