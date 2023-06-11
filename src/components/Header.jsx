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
            : "fixed flex p-5 bg-black justify-center z-30 items-center h-screen w-full"
        }`}
      >
        <form
          className="w-full h-14 relative border-[1px] border-gray-500 search-bar flex gap-2 items-center justify-start px-5 "
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
            className="bg-transparent font-first-font text-white border-0 outline-none"
            placeholder="Search Products ..."
          />
          <button
            className="text-red-600 absolute right-5"
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
      <div className="h-auto z-50 fixed w-full">
        <div className="absolute w-full h-full -z-10"></div>
        <div className="md:hidden w-full h-14 p-3  flex items-center justify-between bg-black ">
          <Link to="/" className="block">
            <img src={logo} alt="logo" className="h-7 object-contain" />
          </Link>
          <div className="flex text-white  gap-4 items-center">
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
              className="relative flex justify-center items-center"
            >
              <div
                className={`${
                  wishList.length === 0 ? "hidden" : undefined
                } absolute w-4 h-4 rounded-full -top-1 -right-2 flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1`}
              >
                {wishList.length}
              </div>
              <FavoriteBorderOutlinedIcon style={{ fontSize: "22px" }} />
            </Link>
            <button className="relative" onClick={() => setOpen(!open)}>
              <div
                className={`${
                  cartItems.length === 0 && "hidden"
                } absolute w-4 h-4 rounded-full -top-1 -right-2 flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1`}
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
          className={`hidden md:flex flex-col w-full ${
            isTop ? undefined : "bg-black"
          }`}
        >
          <div
            aria-label="mid-header"
            className={`flex justify-between transition-all duration-200 items-center  w-full  mx-auto max-w-7xl ${
              isTop ? "h-20" : "h-14"
            }`}
          >
            <nav className="flex gap-4 items-center">
              <Link to="/" className="block">
                <img src={logo} className="object-contain lg:hidden" alt="" />
              </Link>

              <ul className="list-none list-outside flex gap-4 items-center">
                <li
                  className="relative font-first-font flex  font-semibold text-white  cursor-pointer nav-item"
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
                  <div className="nav-indicator h-[1px]  bg-gradient-to-r from-second-color via-blue to-blue absolute -bottom-1 mx-auto my-0 w-0"></div>
                </li>
                <li
                  className=" relative font-first-font flex font-semibold text-white  cursor-pointer nav-item"
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
                  <div className="nav-indicator h-[1px]  bg-gradient-to-r from-second-color via-blue to-blue absolute -bottom-1 mx-auto my-0 w-0"></div>
                  <div
                    aria-label="pages-menu"
                    className={`nav-menu absolute pt-9 top-[1rem] ${
                      otherMenus.pages ? undefined : "hidden"
                    }`}
                  >
                    <div className="  bg-white w-64  h-48 p-4 font-normal">
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
                  className="relative font-first-font flex font-semibold text-white  cursor-pointer nav-item"
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
                  <div className="nav-indicator h-[1px]  bg-gradient-to-r from-second-color via-blue to-blue absolute -bottom-1 mx-auto my-0 w-0"></div>
                  <div
                    aria-label="blogs-menu"
                    className={`nav-menu absolute pt-9 top-[1rem] ${
                      otherMenus.blogs ? undefined : "hidden"
                    }`}
                  >
                    <div className=" bg-white w-64 h-20 p-4 font-normal">
                      <ul className="flex flex-col gap-1">
                        {blogs.map((item) => {
                          return (
                            <li key={item.title} className="text-black ">
                              <Link
                                to={item.address}
                                className="hover:border-b-1 border-black"
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
                className="object-contain hidden lg:block  "
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
                  className={`nav-menu absolute top-[1rem]  pt-7 -right-28 mx-auto ${
                    otherMenus.account ? undefined : "hidden"
                  }`}
                >
                  <div className=" bg-white w-64  h-20 p-4 font-normal">
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
                className="relative flex justify-center items-center"
              >
                <FavoriteBorderOutlinedIcon />
                <div
                  className={`${
                    wishList.length === 0 ? "hidden" : undefined
                  } absolute w-5 h-5 rounded-full top-[0.22rem] -right-[0.7rem] flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1`}
                >
                  {wishList.length}
                </div>
              </Link>
              <p className="font-first-font font-semibold text-sm text-right">
                My Cart:
                <br /> 0.000 USD
              </p>
              <button className="relative" onClick={() => setOpen(!open)}>
                <LocalMallOutlinedIcon />
                <div
                  className={`absolute w-5 h-5 rounded-full top-[0.22rem] -right-[0.7rem] flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1 ${
                    cartItems.length === 0 ? "hidden" : undefined
                  }`}
                >
                  {cartItems.length}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden absolute h-[1px] bottom-0 w-full bg-gradient-to-r from-second-color via-blue to-blue "></div>
        <div className="hidden md:block absolute h-[1px] bottom-16 w-full bg-[rgba(255,255,255,0.2)] "></div>
        <div
          className={`hidden md:block  h-16  w-full border-b-[1px] border-[rgba(255,255,255,0.2)] transition-all  ${
            isTop ? undefined : "header-sc "
          }`}
        >
          <div className="flex max-w-7xl mx-auto justify-between h-full items-center px-4 py-3">
            <p className="font-first-font text-white font-bold">
              New Accessories -30 % Off.{" "}
              <Link to="/collections/all" className="underline">
                More
              </Link>
            </p>
            <form
              className="w-64 border-[1px] border-gray-500 search-bar flex items-center justify-center h-full"
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
                className="bg-transparent font-first-font text-white border-0 outline-none"
                placeholder="Search Products ..."
              />
            </form>
            <Link
              to="/collections/all"
              className="font-first-font text-white underline"
            >
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
          } h-[26rem] bg-white md:flex justify-between p-4`}
          onMouseLeave={() => {
            setMenu(false);
          }}
        >
          <ul className="font-first-font flex flex-col gap-3 p-2 w-1/4">
            <p className=" font-semibold">Pro Gaming</p>
            <li className="hover:border-b-2 border-black">
              <Link to={`/collections/Console`} onClick={() => setMenu(false)}>
                Game Console
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link to="/collections/Remote" onClick={() => setMenu(false)}>
                Game Remote
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link to="/collections/Cards" onClick={() => setMenu(false)}>
                Gaming Cards
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link to="/collections/Chairs" onClick={() => setMenu(false)}>
                Gaming Chairs
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link to="/collections/Monitors" onClick={() => setMenu(false)}>
                Gaming moniters
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link to="/collections/GamePCs" onClick={() => setMenu(false)}>
                Gaming Pc
              </Link>
            </li>
          </ul>
          <ul className="font-first-font flex flex-col gap-3 p-2 w-1/4">
            <p className="font-semibold">New Accessories</p>
            <li className="hover:border-b-2 border-black">
              <Link to="/product/alien-ware-monitor-t-46">
                Alien ware Monitor
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link to="/product/g-series-curved-va-monitor">
                G-series Curved VA Monitor
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/cloud-alpha-gaming-headset"
                onClick={() => setMenu(false)}
              >
                Cloud Alpha Gaming Headset
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/dualsense-wireless-controllers"
                onClick={() => setMenu(false)}
              >
                DualSense Wirless Controllers
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/raptor-gameing-z95"
                onClick={() => setMenu(false)}
              >
                Raptor Gaming z95{" "}
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/kd-dmtr-gaming-desktop-pc"
                onClick={() => setMenu(false)}
              >
                KD DMTR GAming Desktop PC
              </Link>
            </li>
          </ul>
          <ul className="font-first-font flex flex-col gap-3  p-2 w-1/4">
            <p className="font-semibold">Master Game</p>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/colossus-ergonomic-gaming-office-chair"
                onClick={() => setMenu(false)}
              >
                Gaming Office Chair
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/htc-vive-tracker-3-0-pc-"
                onClick={() => setMenu(false)}
              >
                HTC Vive Tracker 3.0 PC
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/vr-headset-with-headphones"
                onClick={() => setMenu(false)}
              >
                VR Headset with Headphones
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/radeon-rx-590-gts-graphics-card"
                onClick={() => setMenu(false)}
              >
                RX 590 GTS Graphics Card
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
              <Link
                to="/product/gaming-chair-for-gamers-with-lumbar"
                onClick={() => setMenu(false)}
              >
                Gaming Chair for Gamers for lambers
              </Link>
            </li>
            <li className="hover:border-b-2 border-black">
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
          className={`w-screen h-screen absolute top-0 transition-all bg-white ${
            sidenav ? "left-0" : "left-full"
          } flex flex-col`}
        >
          <div className="w-full h-12 bg-blue px-4 flex items-center">
            <button
              onClick={() => {
                setSideNav(false);
              }}
            >
              <CloseIcon style={{ color: "#fff" }} />
            </button>
          </div>
          <div className="p-5 font-first-font">
            <ul>
              <li className="relative mb-3">
                <div
                  className="flex justify-between text-lg text-gray-500 cursor-pointer"
                  onClick={() => {
                    setSideMenu({ ...sideMenu, shopAll: !sideMenu.shopAll });
                  }}
                >
                  Shop All
                  {sideMenu.shopAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </div>
                <ul
                  className={`text-base flex flex-col gap-2 mt-3  ${
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
                  className="flex justify-between text-lg text-gray-500 cursor-pointer"
                  onClick={() => {
                    setSideMenu({ ...sideMenu, blog: !sideMenu.blog });
                  }}
                >
                  Pages
                  {sideMenu.blog ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </div>
                <ul
                  className={`text-base flex flex-col gap-2 mt-3  ${
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

      <div className="h-14 w-full top-10 absolute " ref={headerRef}></div>
    </>
  );
};

export default Header;
