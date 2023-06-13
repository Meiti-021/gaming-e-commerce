import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
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
import {
  addToCart,
  addAmount,
  removeAmount,
  addToWishList,
  removeWhisItem,
} from "../features/cartSlice";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loading from "../assets/images/loading.gif";
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
import { useNavigate } from "react-router-dom";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Info = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const productID = useParams();
  const [form, setForm] = useState({ name: "", message: "", rate: null });
  const { products, cartItems, wishList } = useSelector((store) => store.cart);
  const [currentProduct, setCurrentProduct] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [exist, setExist] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef(null);
  const smSwiperRef = useRef(null);
  const modalSwiperRef = useRef(null);
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

  useEffect(() => {
    wishList.find((item) => item.id === productID.id)
      ? setExist(true)
      : setExist(false);
  }, [productID.id, wishList]);

  useEffect(() => {
    if (
      swiperRef.current == null &&
      smSwiperRef.current == null &&
      modalSwiperRef.current == null
    ) {
      return;
    }
    swiperRef.current.swiper.slideTo(swiperIndex);
    smSwiperRef.current.swiper.slideTo(swiperIndex);
    modalSwiperRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  useEffect(() => {
    setCurrentProduct(undefined);
    setIsInCart(false);
    const pro = cartItems.find((item) => item.id === productID.id);
    const production = products.find((item) => item.id === productID.id);

    if (pro !== undefined) {
      setCurrentProduct(pro);
      setIsInCart(true);
    } else {
      setCurrentProduct(production);
    }
  }, [productID, products, cartItems, location]);

  const addIndex = () => {
    if (swiperIndex === currentProduct.images.length - 1) {
      setSwiperIndex(0);
    } else {
      setSwiperIndex(swiperIndex + 1);
    }
  };
  const minusIndex = () => {
    if (swiperIndex === 0) {
      setSwiperIndex(currentProduct.images.length - 1);
    } else {
      setSwiperIndex(swiperIndex - 1);
    }
  };
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <img src={Loading} className=" bg-black object-contain" />
      </div>
    );
  }
  if (currentProduct === undefined) {
    return <p className="h-screen">hello</p>;
  }

  return (
    <div className="relative">
      <div
        className={`fixed  z-50 h-screen w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.8)] ${
          isModalOpen ? "flex" : "hidden"
        }`}
      >
        <button
          className="absolute right-0 top-20 z-50 h-12 w-32 text-white "
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <CloseIcon style={{ fontSize: "3rem" }} />
        </button>
        <div className="relative h-[30.5rem] w-full max-w-7xl sm:col-span-7">
          <Swiper
            slidesPerView={"1"}
            ref={modalSwiperRef}
            spaceBetween={"20px"}
            speed={1000}
            modules={[Pagination, Navigation]}
            centeredSlides={true}
            className="border-ellipse  pointer-events-none h-full w-full overflow-hidden text-white"
          >
            {currentProduct.images.map((image) => {
              return (
                <SwiperSlide
                  key={`product-info-images-${image}`}
                  className="h-full w-full "
                >
                  <figure className="flex h-full w-full items-center justify-center p-5">
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
            className="absolute bottom-0 right-0 top-0 z-10 my-auto cursor-pointer text-white transition-all hover:text-blue"
            onClick={() => {
              addIndex();
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: "3rem" }} />
          </button>
          <button
            className="absolute bottom-0 left-0 top-0 z-10 my-auto cursor-pointer text-white transition-all hover:text-blue"
            onClick={() => {
              minusIndex();
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: "3rem" }} />
          </button>
        </div>
        <p className="text-center text-lg  text-white">{currentProduct.name}</p>
      </div>
      <div className="h-20 bg-black sm:h-40"></div>
      <div className="w-full bg-black py-14">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-2 bg-black p-5 ">
          <button
            className=" h-9 w-9 rounded-full border-1 border-white pb-[0.1rem] text-lg text-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8592;
          </button>
          <p className="text-xs font-semibold text-white">Back to categories</p>
        </div>
        <div className="mx-auto  grid max-w-7xl grid-cols-1 gap-10 bg-black  p-5 text-white lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="flex h-12  w-full items-center gap-2">
              <div className="mr-3 h-6 w-auto rounded-[0.25rem] bg-gradient-to-r from-blue to-second-color p-2 px-3  pt-[0.3rem] text-xs text-white">
                {currentProduct.type}
              </div>
              <button
                onClick={() => {
                  if (exist) {
                    dispatch(removeWhisItem(productID.id));
                    setExist(false);
                    enqueueSnackbar({
                      variant: "info",
                      message: "Item seccesfuly removed from your wishlist!",
                      className: "",
                    });
                  } else {
                    dispatch(addToWishList(currentProduct));
                    setExist(true);
                    enqueueSnackbar({
                      variant: "info",
                      message: "Item seccesfuly added to your wishlist!",
                      className: "",
                    });
                  }
                }}
              >
                {exist ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </button>
              <p
                className="cursor-pointer text-sm"
                onClick={() => {
                  dispatch(addToWishList(currentProduct));
                }}
              >
                Add to wishlist
              </p>
            </div>
            <div className="flex gap-2">
              <Rating
                value={currentProduct.rate}
                precision={0.5}
                readOnly
                size="small"
                sx={{ color: "white", fontSize: "1.3rem" }}
                emptyIcon={
                  <StarBorderIcon
                    style={{ fontSize: "inherit", color: "white" }}
                  />
                }
              />
              <p>({currentProduct.seller})</p>
              <button className="flex items-center gap-1 text-sm">
                <EditOutlinedIcon style={{ fontSize: "1rem" }} />
                Write a review
              </button>
            </div>
            <h1 className="text-3xl font-semibold">{currentProduct.name}</h1>
            <p className="flex gap-4 text-sm uppercase text-gray-400">
              <span>BRAND: {currentProduct.brand}</span>
              <span>SKU: {currentProduct.sku}</span>
            </p>
            <p className="text-sm text-gray-400">
              {currentProduct.description}
            </p>
            <div className="flex flex-col ">
              <p className="text-sm text-white">
                {currentProduct.options[0]}:{" "}
              </p>
              <div
                className="border-ellipse relative mt-2 flex h-10 w-full cursor-pointer items-center justify-between border-[1px] border-gray-500 px-4"
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <p className="text-sm font-normal text-white">
                  {currentProduct.options[1][currentProduct.option]}
                </p>
                <p>
                  <ExpandMoreTwoTone style={{ color: "#7b35c8" }} />
                </p>
                <div className="absolute left-0 right-0 top-6 z-20 mx-auto flex w-64 flex-col bg-white">
                  {currentProduct.options[1].map((item, index) => {
                    return (
                      <button
                        key={`${currentProduct.id}optionsbtnctg${index}`}
                        className={` ${
                          isOpen ? "block" : "hidden"
                        } border-[1px] border-black text-xs text-black`}
                        onClick={() => {
                          setSwiperIndex(index);
                          setCurrentProduct({
                            ...currentProduct,
                            option: index,
                          });
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
                {formatter.format(
                  currentProduct.price * currentProduct.quantity
                )}
                <sup className="text-xs font-normal"> USD</sup>
              </p>
              <div className="flex items-center gap-2">
                <p>Quantity: </p>
                <div className="flex h-8 w-28 items-center justify-between rounded-md border-1 border-gray-500 px-2 text-gray-500">
                  <button
                    onClick={() => {
                      if (!isInCart) {
                        setCurrentProduct({
                          ...currentProduct,
                          quantity: currentProduct.quantity + 1,
                        });
                      } else {
                        dispatch(addAmount(currentProduct));
                      }
                    }}
                  >
                    <AddIcon style={{ fontSize: "1rem" }} />
                  </button>
                  <p className="text-sm">{currentProduct.quantity}</p>
                  <button
                    onClick={() => {
                      if (!isInCart && currentProduct.quantity > 1) {
                        setCurrentProduct({
                          ...currentProduct,
                          quantity: currentProduct.quantity - 1,
                        });
                      } else {
                        dispatch(removeAmount(currentProduct));
                      }
                    }}
                  >
                    <RemoveIcon style={{ fontSize: "1rem" }} />
                  </button>
                </div>
              </div>
            </div>
            <button
              className={`border-ellipse h-10 w-32 text-sm   ${
                currentProduct.stock
                  ? "bg-gradient-to-r from-blue to-second-color text-white"
                  : "pointer-events-none cursor-not-allowed border-2 border-gray-400 text-gray-300"
              }`}
              onClick={() => {
                dispatch(addToCart(currentProduct));
                if (cartItems.find((item) => item.id === currentProduct.id)) {
                  enqueueSnackbar({
                    variant: "error",
                    message: "This product is already exist in your cart!",
                    className: "capitalize ",
                  });
                } else {
                  enqueueSnackbar({
                    variant: "success",
                    message: "Product seccessfuly added to your cart!",
                    className: "capitalize ",
                  });
                }
              }}
            >
              {currentProduct.stock ? " Add to cart" : "Not Exist"}
            </button>
          </div>
          <div className="sm:grid sm:grid-cols-8 sm:gap-3">
            <div className="hidden h-[30.5rem]  flex-col gap-3 sm:col-span-1 sm:flex ">
              <div className="h-72 overflow-hidden ">
                <Swiper
                  slidesPerView={"1"}
                  ref={smSwiperRef}
                  spaceBetween={"10px"}
                  speed={1000}
                  modules={[Pagination, Navigation]}
                  centeredSlides={true}
                  direction={"vertical"}
                  className="border-ellipse pointer-events-none relative z-10 h-16   w-full  overflow-visible  text-white"
                >
                  {currentProduct.images.map((image) => {
                    return (
                      <SwiperSlide
                        key={`product-info-images-${image}`}
                        className="border-ellipse relative z-20 h-auto w-full cursor-pointer overflow-hidden border-1 border-border-color  "
                      >
                        {({ isActive }) => (
                          <figure
                            className={`flex h-full w-full items-center justify-center p-2 ${
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
            <div
              className="relative h-[25rem] xxs:h-[30.5rem] sm:col-span-7"
              onMouseEnter={() => {
                setIsInside(true);
              }}
              onMouseLeave={() => {
                setIsInside(false);
              }}
            >
              <Swiper
                slidesPerView={"1"}
                ref={swiperRef}
                spaceBetween={"20px"}
                speed={1000}
                modules={[Pagination, Navigation]}
                centeredSlides={true}
                className="border-ellipse pointer-events-none h-full w-full overflow-hidden border-1 border-blue text-white"
              >
                {currentProduct.images.map((image) => {
                  return (
                    <SwiperSlide
                      key={`product-info-images-${image}`}
                      className="h-full w-full "
                    >
                      <figure className="relative flex h-full w-full items-center justify-center p-5">
                        <img
                          src={`/assets/products/${image}`}
                          alt=""
                          className="h-full w-full object-contain"
                        />

                        <button
                          className={`${
                            isInside ? "block" : "hidden"
                          } border-ellipse  pointer-events-auto absolute h-12 w-20 cursor-pointer bg-gradient-to-r from-blue to-second-color text-white`}
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
                className="absolute  bottom-0 right-0 top-0 z-10 my-auto h-9 w-9 cursor-pointer rounded-full bg-white pb-[0.1rem] text-lg text-black  transition-all hover:bg-blue hover:text-white sm:hidden"
                onClick={() => {
                  addIndex();
                }}
              >
                &#8594;
              </button>
              <button
                className="absolute bottom-0 left-0 top-0 z-10 my-auto h-9 w-9 cursor-pointer rounded-full bg-white pb-[0.1rem] text-lg text-black  transition-all hover:bg-second-color hover:text-white sm:hidden"
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
      <div className="bg-white p-5  text-black ">
        <div className="mx-auto mt-8 w-full max-w-7xl">
          <Tabs value={tabIndex} onChange={handleChange}>
            <Tab label="Reviews" sx={{ fontFamily: "Outfit" }} />
            <Tab label="Description" sx={{ fontFamily: "Outfit" }} />
          </Tabs>
          <div className="">
            {tabIndex === 1 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <p className="py-5 text-justify text-base">
                  {currentProduct.description}
                </p>
                <div className="h-96 w-full">
                  <img
                    src={banners[Math.floor(Math.random() * banners.length)]}
                    alt=""
                    className="block h-full w-full object-contain object-top"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex flex-col gap-3 p-4 sm:gap-10">
                  {users.map((item) => {
                    return (
                      <div className="" key={item.id + "product-comment"}>
                        <div className="mt-10 flex flex-col gap-3 xs:mt-0 ">
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-4">
                              <img
                                src={`/assets/users/${item.image}`}
                                alt=""
                                className="block h-11 w-11 rounded-md bg-gradient-to-l from-blue to-second-color object-cover"
                              />
                              <div>
                                <p className="text-lg font-semibold">
                                  {item.name}
                                </p>
                                <p className="-mt-1 text-xs">
                                  {item.membership}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-center gap-3 xs:flex-row">
                              <img
                                src={star}
                                alt=""
                                className="w-20 object-contain"
                              />
                              <p className="hidden text-xs font-bold text-blue xs:block">
                                4.5 <span className="text-black">/ 5.0</span>
                              </p>
                            </div>
                          </div>
                          <p className="px-14 text-sm">
                            {item.comment.caption}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="relative h-full w-full">
                  <form
                    className="border-ellipse sticky top-14 flex max-w-md flex-col gap-4 border-1 border-border-color p-3 pt-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      enqueueSnackbar({
                        variant: "error",
                        message:
                          "Sorry! You can't leave a comment until you're logged into your account.Please log-in first!",
                      });
                    }}
                  >
                    <p className="flex items-center justify-between text-2xl font-semibold">
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
                      className="border-ellipse h-12 border-1 border-border-color p-3 text-sm"
                    />

                    <textarea
                      className="border-ellipse min-h-[3rem] resize-none border-1 border-border-color p-3 text-sm "
                      placeholder="Message"
                      required
                      value={form.message}
                      onChange={(event) => {
                        setForm({ ...form, message: event.target.value });
                      }}
                    ></textarea>
                    <p className="hidden w-full px-3 text-xs text-red-500">
                      alert!
                    </p>
                    <button className="border-ellipse h-12 w-full bg-gradient-to-r from-blue to-second-color font-semibold text-white">
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
