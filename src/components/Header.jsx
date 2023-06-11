import logo from "../assets/images/logo.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import navpic from "../assets/images/1.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState, useRef } from "react";
import CartSideBar from "./CartSideBar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const pages = [
  {
    title: "About US",
    address: "/about",
  },
  {
    title: "Contact With Us",
    address: "/contact",
  },
  {
    title: "FAQs",
    address: "/faqs",
  },
  {
    title: "Privacy & Policy",
    address: "/pages/privacy-policy",
  },
  {
    title: "Shipping & Delivery",
    address: "/pages/shiping-delivery",
  },
  {
    title: "Terms & Conditions",
    address: "/pages/terms-conditions",
  },
];
const blogs = [
  {
    title: "Blog Page",
    address: "/blog",
  },
  {
    title: "Article Page",
    address: "/blog",
  },
];
const accounts = [
  {
    title: "Log in",
    address: "/login",
  },
  {
    title: "Create Account",
    address: "/login",
  },
];

const sideNavOpt = {
  shopAll: false,
  blog: false,
};
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sideMenu, setSideMenu] = useState(sideNavOpt);
  const [menu, setMenu] = useState(false);
  const [otherMenus, SetOtherMenus] = useState({
    pages: false,
    blogs: false,
    account: false,
  });
  const [sidenav, setSideNav] = useState(false);
  const [isTop, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartItems, wishList } = useSelector((store) => store.cart);
  const headerRef = useRef(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setOpen(false);
    setSideNav(false);
    setSearchOpen(false);
  }, [location]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (headerRef.current.getBoundingClientRect().top < 40) {
        setTop(false);
      } else {
        setTop(true);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`${
          !searchOpen
            ? "hidden"
            : "fixed z-30 flex h-screen w-full items-center justify-center bg-black p-5"
        }`}
      >
        <form
          className="border-ellipse relative flex h-14 w-full items-center justify-start gap-2 border-[1px] border-gray-500 px-5 "
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/collections/search?${query}`);
            setQuery("");
          }}
        >
          <button type="submit">
            <SearchOutlinedIcon style={{ color: "#fff" }} />{" "}
          </button>
          <input
            type="search"
            name="query"
            id=""
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="border-0  bg-transparent text-white outline-none"
            placeholder="Search Products ..."
          />
          <button
            className="absolute right-5 text-red-600"
            onClick={(e) => {
              e.preventDefault();
              setQuery("");
              setSearchOpen(false);
            }}
          >
            <CloseIcon />{" "}
          </button>
        </form>
      </div>
      <div className="fixed z-50 h-auto w-full">
        <div className="absolute -z-10 h-full w-full"></div>
        <div className="flex h-14 w-full items-center  justify-between bg-black p-3 md:hidden ">
          <Link to="/" className="block">
            <img src={logo} alt="logo" className="h-7 object-contain" />
          </Link>
          <div className="flex items-center  gap-4 text-white">
            <button
              onClick={() => {
                setSearchOpen(true);
              }}
            >
              <SearchOutlinedIcon style={{ fontSize: "22px" }} />
            </button>
            <Link to="login">
              <AccountCircleOutlinedIcon style={{ fontSize: "22px" }} />
            </Link>
            <Link
              to="/wishlist"
              className="relative flex items-center justify-center"
            >
              <div
                className={`${
                  wishList.length === 0 ? "hidden" : undefined
                } absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-second-color to-blue  pt-1 text-[0.7rem]`}
              >
                {wishList.length}
              </div>
              <FavoriteBorderOutlinedIcon style={{ fontSize: "22px" }} />
            </Link>
            <button className="relative" onClick={() => setOpen(!open)}>
              <div
                className={`${
                  cartItems.length === 0 && "hidden"
                } absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-second-color to-blue  pt-1 text-[0.7rem]`}
              >
                {cartItems.length}
              </div>
              <LocalMallOutlinedIcon style={{ fontSize: "22px" }} />
            </button>

            <button
              onClick={() => {
                setSideNav(true);
              }}
            >
              <MenuOutlinedIcon />
            </button>
          </div>
        </div>
        <div
          className={`hidden w-full flex-col md:flex ${
            isTop ? undefined : "bg-black"
          }`}
        >
          <div
            aria-label="mid-header"
            className={`mx-auto flex w-full max-w-7xl items-center  justify-between  transition-all duration-200 ${
              isTop ? "h-20" : "h-14"
            }`}
          >
            <nav className="flex items-center gap-4">
              <Link to="/" className="block">
                <img src={logo} className="object-contain lg:hidden" alt="" />
              </Link>

              <ul className="flex list-outside list-none items-center gap-4">
                <li
                  className="nav-item  relative  flex cursor-pointer  font-semibold text-white"
                  onMouseEnter={() => {
                    setMenu(true);
                  }}
                >
                  Gamin Accessories
                  <p className="nav-arrow">
                    <ExpandMoreIcon
                      style={{ fontSize: "20px", marginLeft: "5px" }}
                    />
                  </p>
                  <div className="nav-indicator absolute  -bottom-1 mx-auto my-0 h-[1px] w-0 bg-gradient-to-r from-second-color via-blue to-blue"></div>
                </li>
                <li
                  className=" nav-item  relative flex cursor-pointer  font-semibold text-white"
                  onMouseEnter={() => {
                    setMenu(false);
                    SetOtherMenus({
                      pages: true,
                      blogs: false,
                      account: false,
                    });
                  }}
                >
                  Pages
                  <p className="nav-arrow">
                    <ExpandMoreIcon
                      style={{ fontSize: "20px", marginLeft: "5px" }}
                    />
                  </p>
                  <div className="nav-indicator absolute  -bottom-1 mx-auto my-0 h-[1px] w-0 bg-gradient-to-r from-second-color via-blue to-blue"></div>
                  <div
                    aria-label="pages-menu"
                    className={`nav-menu absolute top-[1rem] pt-9 ${
                      otherMenus.pages ? undefined : "hidden"
                    }`}
                  >
                    <div className="  h-48 w-64  bg-white p-4 font-normal">
                      <ul className="flex flex-col gap-1">
                        {pages.map((item) => {
                          return (
                            <li key={item.title} className="text-black">
                              <Link
                                to={item.address}
                                className="hover:border-b-1 hover:border-b-black"
                                onClick={() => {
                                  SetOtherMenus({
                                    pages: false,
                                    blogs: false,
                                    account: false,
                                  });
                                }}
                              >
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  className="nav-item  relative flex cursor-pointer  font-semibold text-white"
                  onMouseEnter={() => {
                    setMenu(false);
                    SetOtherMenus({
                      pages: false,
                      blogs: true,
                      account: false,
                    });
                  }}
                >
                  Blog
                  <p className="nav-arrow">
                    <ExpandMoreIcon
                      style={{ fontSize: "20px", marginLeft: "5px" }}
                    />
                  </p>
                  <div className="nav-indicator absolute  -bottom-1 mx-auto my-0 h-[1px] w-0 bg-gradient-to-r from-second-color via-blue to-blue"></div>
                  <div
                    aria-label="blogs-menu"
                    className={`nav-menu absolute top-[1rem] pt-9 ${
                      otherMenus.blogs ? undefined : "hidden"
                    }`}
                  >
                    <div className=" h-20 w-64 bg-white p-4 font-normal">
                      <ul className="flex flex-col gap-1">
                        {blogs.map((item) => {
                          return (
                            <li key={item.title} className="text-black ">
                              <Link
                                to={item.address}
                                className="border-black hover:border-b-1"
                                onClick={() => {
                                  SetOtherMenus({
                                    pages: false,
                                    blogs: false,
                                    account: false,
                                  });
                                }}
                              >
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <Link className="block" to="/">
              <img
                src={logo}
                className="hidden object-contain lg:block  "
                alt=""
              />
            </Link>
            <div className="flex gap-4 text-white ">
              <button
                className="nav-item relative"
                onMouseEnter={() => {
                  setMenu(false);
                  SetOtherMenus({ pages: false, blogs: false, account: true });
                }}
              >
                <AccountCircleOutlinedIcon />
                <div
                  aria-label="account-menu"
                  className={`nav-menu absolute -right-28  top-[1rem] mx-auto pt-7 ${
                    otherMenus.account ? undefined : "hidden"
                  }`}
                >
                  <div className=" h-20 w-64  bg-white p-4 font-normal">
                    <ul className="flex flex-col gap-1">
                      {accounts.map((item) => {
                        return (
                          <li
                            key={item.title}
                            className="text-black hover:underline"
                          >
                            <Link
                              to={item.address}
                              onClick={() => {
                                SetOtherMenus({
                                  pages: false,
                                  blogs: false,
                                  account: false,
                                });
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </button>
              <Link
                to="/wishlist"
                className="relative flex items-center justify-center"
              >
                <FavoriteBorderOutlinedIcon />
                <div
                  className={`${
                    wishList.length === 0 ? "hidden" : undefined
                  } absolute -right-[0.7rem] top-[0.22rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-second-color to-blue  pt-1 text-[0.7rem]`}
                >
                  {wishList.length}
                </div>
              </Link>
              <p className=" text-right text-sm font-semibold">
                My Cart:
                <br /> 0.000 USD
              </p>
              <button className="relative" onClick={() => setOpen(!open)}>
                <LocalMallOutlinedIcon />
                <div
                  className={`absolute -right-[0.7rem] top-[0.22rem] flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-second-color to-blue  pt-1 text-[0.7rem] ${
                    cartItems.length === 0 ? "hidden" : undefined
                  }`}
                >
                  {cartItems.length}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-second-color via-blue to-blue md:hidden "></div>
        <div className="absolute bottom-16 hidden h-[1px] w-full bg-[rgba(255,255,255,0.2)] md:block "></div>
        <div
          className={`hidden h-16  w-full  border-b-[1px] border-[rgba(255,255,255,0.2)] transition-all md:block  ${
            isTop ? undefined : "header-sc "
          }`}
        >
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 py-3">
            <p className=" font-bold text-white">
              New Accessories -30 % Off.{" "}
              <Link to="/collections/all" className="underline">
                More
              </Link>
            </p>
            <form
              className="border-ellipse flex h-full w-64 items-center justify-center border-[1px] border-gray-500"
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/collections/search?${query}`);
                setQuery("");
              }}
            >
              <button type="submit">
                <SearchOutlinedIcon style={{ color: "#fff" }} />{" "}
              </button>
              <input
                type="search"
                name="query"
                id=""
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="border-0  bg-transparent text-white outline-none"
                placeholder="Search Products ..."
              />
            </form>
            <Link to="/collections/all" className=" text-white underline">
              New Collections
            </Link>
          </div>
        </div>
        <div
          aria-label="gaming-accesories-menu"
          className={`${
            menu ? "nav-menu-on" : undefined
          } nav-menu absolute hidden w-full ${
            isTop ? "top-[4.5rem]" : "top-[3.5rem]"
          } h-[26rem] justify-between bg-white p-4 md:flex`}
          onMouseLeave={() => {
            setMenu(false);
          }}
        >
          <ul className=" flex w-1/4 flex-col gap-3 p-2">
            <p className=" font-semibold">Pro Gaming</p>
            <li className="border-black hover:border-b-2">
              <Link to={`/collections/Console`} onClick={() => setMenu(false)}>
                Game Console
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link to="/collections/Remote" onClick={() => setMenu(false)}>
                Game Remote
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link to="/collections/Cards" onClick={() => setMenu(false)}>
                Gaming Cards
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link to="/collections/Chairs" onClick={() => setMenu(false)}>
                Gaming Chairs
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link to="/collections/Monitors" onClick={() => setMenu(false)}>
                Gaming moniters
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link to="/collections/GamePCs" onClick={() => setMenu(false)}>
                Gaming Pc
              </Link>
            </li>
          </ul>
          <ul className=" flex w-1/4 flex-col gap-3 p-2">
            <p className="font-semibold">New Accessories</p>
            <li className="border-black hover:border-b-2">
              <Link to="/product/alien-ware-monitor-t-46">
                Alien ware Monitor
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link to="/product/g-series-curved-va-monitor">
                G-series Curved VA Monitor
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/cloud-alpha-gaming-headset"
                onClick={() => setMenu(false)}
              >
                Cloud Alpha Gaming Headset
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/dualsense-wireless-controllers"
                onClick={() => setMenu(false)}
              >
                DualSense Wirless Controllers
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/raptor-gameing-z95"
                onClick={() => setMenu(false)}
              >
                Raptor Gaming z95{" "}
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/kd-dmtr-gaming-desktop-pc"
                onClick={() => setMenu(false)}
              >
                KD DMTR GAming Desktop PC
              </Link>
            </li>
          </ul>
          <ul className=" flex w-1/4 flex-col  gap-3 p-2">
            <p className="font-semibold">Master Game</p>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/colossus-ergonomic-gaming-office-chair"
                onClick={() => setMenu(false)}
              >
                Gaming Office Chair
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/htc-vive-tracker-3-0-pc-"
                onClick={() => setMenu(false)}
              >
                HTC Vive Tracker 3.0 PC
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/vr-headset-with-headphones"
                onClick={() => setMenu(false)}
              >
                VR Headset with Headphones
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/radeon-rx-590-gts-graphics-card"
                onClick={() => setMenu(false)}
              >
                RX 590 GTS Graphics Card
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/gaming-chair-for-gamers-with-lumbar"
                onClick={() => setMenu(false)}
              >
                Gaming Chair for Gamers for lambers
              </Link>
            </li>
            <li className="border-black hover:border-b-2">
              <Link
                to="/product/radeon-rx-680-gts-graphics-card"
                onClick={() => setMenu(false)}
              >
                RX 680 GTS Graphic Card
              </Link>
            </li>
          </ul>
          <div className="w-1/4 p-2 ">
            <img src={navpic} alt="" className="w-full object-contain" />
          </div>
        </div>
        <div
          className={`absolute top-0 h-screen w-screen bg-white transition-all ${
            sidenav ? "left-0" : "left-full"
          } flex flex-col`}
        >
          <div className="flex h-12 w-full items-center bg-blue px-4">
            <button
              onClick={() => {
                setSideNav(false);
              }}
            >
              <CloseIcon style={{ color: "#fff" }} />
            </button>
          </div>
          <div className="p-5 ">
            <ul>
              <li className="relative mb-3">
                <div
                  className="flex cursor-pointer justify-between text-lg text-gray-500"
                  onClick={() => {
                    setSideMenu({ ...sideMenu, shopAll: !sideMenu.shopAll });
                  }}
                >
                  Shop All
                  {sideMenu.shopAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </div>
                <ul
                  className={`mt-3 flex flex-col gap-2 text-base  ${
                    sideMenu.shopAll ? "nav-menu-on static" : "absolute "
                  } nav-menu`}
                >
                  <li>
                    <Link to={`/collections/Console`}>Game Console</Link>
                  </li>
                  <li>
                    <Link to="/collections/Remote">Game Remote</Link>
                  </li>
                  <li>
                    <Link to="/collections/Cards">Gaming Cards</Link>
                  </li>
                  <li>
                    <Link to="/collections/Chairs">Gaming Chairs</Link>
                  </li>
                  <li>
                    <Link to="/collections/Monitors">Gaming moniters</Link>
                  </li>
                  <li>
                    <Link to="/collections/GamePCs">Gaming Pc</Link>
                  </li>
                </ul>
              </li>
              <li className="relative mb-3">
                <div
                  className="flex cursor-pointer justify-between text-lg text-gray-500"
                  onClick={() => {
                    setSideMenu({ ...sideMenu, blog: !sideMenu.blog });
                  }}
                >
                  Pages
                  {sideMenu.blog ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </div>
                <ul
                  className={`mt-3 flex flex-col gap-2 text-base  ${
                    sideMenu.blog ? "nav-menu-on static" : "absolute"
                  } nav-menu`}
                >
                  <li>
                    <Link to="/blog"> Blog Page</Link>
                  </li>
                  <li>
                    <Link to="/blog">Article Page </Link>
                  </li>
                </ul>
              </li>
              <li className="relative mb-3 text-lg text-gray-500">
                <Link to="/collections/all">All Collection</Link>
              </li>
              <li className="relative mb-3 text-lg text-gray-500">
                <Link to="/about">About Us</Link>
              </li>
              <li className="relative mb-3 text-lg text-gray-500">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <CartSideBar open={open} setOpen={setOpen} />
      </div>

      <div className="absolute top-10 h-14 w-full " ref={headerRef}></div>
    </>
  );
};

export default Header;
