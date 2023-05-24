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
import { useState } from "react";
const pages = [
  {
    title: "About US",
    address: "",
  },
  {
    title: "Contact With Us",
    address: "",
  },
  {
    title: "FAQs",
    address: "",
  },
  {
    title: "Privacy & Policy",
    address: "",
  },
  {
    title: "Shipping & Delivery",
    address: "",
  },
  {
    title: "Terms & Conditions",
    address: "",
  },
];
const blogs = [
  {
    title: "Blog Page",
    address: "",
  },
  {
    title: "Article Page",
    address: "",
  },
];
const accounts = [
  {
    title: "Log in",
    address: "",
  },
  {
    title: "Create Account",
    address: "",
  },
];

const sideNavOpt = {
  shopAll: false,
  blog: false,
};
const Header = () => {
  const [sideMenu, setSideMenu] = useState(sideNavOpt);
  const [menu, setMenu] = useState(false);
  const [sidenav, setSideNav] = useState(false);
  return (
    <div className="h-auto z-40 fixed w-full ">
      <div className="absolute w-full h-full -z-10"></div>
      <div className="md:hidden w-full h-14 p-3 flex items-center justify-between bg-black ">
        <img src={logo} alt="logo" className="h-7 object-contain" />
        <div className="flex text-white  gap-4 items-center">
          <Link>
            <SearchOutlinedIcon style={{ fontSize: "22px" }} />
          </Link>
          <Link>
            <AccountCircleOutlinedIcon style={{ fontSize: "22px" }} />
          </Link>
          <Link className="relative">
            <div className="absolute w-4 h-4 rounded-full -top-1 -right-2 flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1">
              3
            </div>
            <FavoriteBorderOutlinedIcon style={{ fontSize: "22px" }} />
          </Link>
          <Link className="relative">
            <div className="absolute w-4 h-4 rounded-full -top-1 -right-2 flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1">
              3
            </div>
            <LocalMallOutlinedIcon style={{ fontSize: "22px" }} />
          </Link>

          <button
            onClick={() => {
              setSideNav(true);
            }}
          >
            <MenuOutlinedIcon />
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col w-full ">
        <div
          aria-label="mid-header"
          className="flex justify-between items-center p-4 w-full h-20 mx-auto max-w-7xl"
        >
          <nav className="flex gap-4 items-center">
            <img src={logo} className="object-contain lg:hidden" alt="" />
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
                  className="nav-menu absolute  bg-white w-64 top-[3.2rem] h-48 p-4 font-normal"
                >
                  <ul className="flex flex-col gap-1">
                    {pages.map((item) => {
                      return (
                        <li key={item.title} className="text-black">
                          <Link>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li
                className="relative font-first-font flex font-semibold text-white  cursor-pointer nav-item"
                onMouseEnter={() => {
                  setMenu(false);
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
                  className="nav-menu absolute bg-white w-64 top-[3.2rem] h-20 p-4 font-normal"
                >
                  <ul className="flex flex-col gap-1">
                    {blogs.map((item) => {
                      return (
                        <li key={item.title} className="text-black">
                          <Link>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <img src={logo} className="object-contain hidden lg:block  " alt="" />
          <div className="flex gap-4 text-white">
            <button
              className="nav-item"
              onMouseEnter={() => {
                setMenu(false);
              }}
            >
              <AccountCircleOutlinedIcon />
              <div
                aria-label="account-menu"
                className="nav-menu absolute bg-white w-64 top-[5.2rem] right-11 h-20 p-4 font-normal"
              >
                <ul className="flex flex-col gap-1">
                  {accounts.map((item) => {
                    return (
                      <li
                        key={item.title}
                        className="text-black hover:underline"
                      >
                        <Link>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </button>
            <button className="relative">
              <FavoriteBorderOutlinedIcon />
              <div className="absolute w-4 h-4 rounded-full top-1 -right-2 flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1">
                3
              </div>
            </button>
            <p className="font-first-font font-semibold text-sm text-right">
              My Cart:
              <br /> 0.000 USD
            </p>
            <button className="relative">
              <LocalMallOutlinedIcon />
              <div className="absolute w-4 h-4 rounded-full top-1 -right-2 flex justify-center items-center bg-gradient-to-r from-second-color to-blue font-first-font text-[0.7rem] pt-1">
                3
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden absolute h-[1px] bottom-0 w-full bg-gradient-to-r from-second-color via-blue to-blue "></div>
      <div className="hidden md:block absolute h-[1px] bottom-16 w-full bg-[rgba(255,255,255,0.2)] "></div>
      <div className="hidden md:block  h-16  w-full border-b-[1px] border-[rgba(255,255,255,0.2)] ">
        <div className="flex max-w-7xl mx-auto justify-between h-full items-center px-4 py-3">
          <p className="font-first-font text-white font-bold">
            New Accessories -30 % Off. <span className="underline">More</span>
          </p>
          <div className="w-64 border-[1px] border-gray-500 search-bar flex items-center justify-center h-full">
            <button>
              <SearchOutlinedIcon style={{ color: "#fff" }} />{" "}
              <input
                type="search"
                name=""
                id=""
                className="bg-transparent font-first-font text-white border-0 outline-none"
                placeholder="Search Products ..."
              />
            </button>
          </div>
          <p className="font-first-font text-white underline">
            New Collections
          </p>
        </div>
      </div>
      <div
        aria-label="gaming-accesories-menu"
        className={`${
          menu ? "nav-menu-on" : undefined
        } nav-menu absolute hidden w-full top-[4.9rem] h-[26rem] bg-white md:flex justify-between p-4`}
        onMouseLeave={() => {
          setMenu(false);
        }}
      >
        <ul className="font-first-font flex flex-col gap-3 p-2 w-1/4">
          <p className=" font-semibold">Pro Gaming</p>
          <li className="hover:border-b-2 border-black">
            <Link>Game Console</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Game Remote</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Gaming Cards</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Gaming Chairs</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Gaming moniters</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Gaming Pc</Link>
          </li>
        </ul>
        <ul className="font-first-font flex flex-col gap-3 p-2 w-1/4">
          <p className="font-semibold">New Accessories</p>
          <li className="hover:border-b-2 border-black">
            <Link>Alien ware Monitor</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>G-series Curved VA Monitor</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Cloud Alpha Gaming Headset</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>DualSense Wirless Controllers</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>Raptor Gaming z95 </Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>KD DMTR GAming Desktop PC</Link>
          </li>
        </ul>
        <ul className="font-first-font flex flex-col gap-3  p-2 w-1/4">
          <p className="font-semibold">Master Game</p>
          <li className="hover:border-b-2 border-black">
            <Link>Gaming Office Chair</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>HTC Vive Tracker 3.0 PC</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>VR Headset with Headphones</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>RX 590 GTS Graphics CArd</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>GAming Chair for Gamers for lambers</Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <Link>RX 680 GTS Graphic Card</Link>
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
                  <Link> Gaming Pc</Link>
                </li>
                <li>
                  <Link>Game Remote </Link>
                </li>
                <li>
                  <Link>Gaming Cards </Link>
                </li>
                <li>
                  <Link>Gaming Chairs </Link>
                </li>
                <li>
                  <Link> Gaming Monitores </Link>
                </li>
                <li>
                  <Link> Gaming Console</Link>
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
                  <Link> Blog Page</Link>
                </li>
                <li>
                  <Link>Article Page </Link>
                </li>
              </ul>
            </li>
            <li className="relative mb-3 text-lg text-gray-500">
              <Link>All Collection</Link>
            </li>
            <li className="relative mb-3 text-lg text-gray-500">
              <Link>About Us</Link>
            </li>
            <li className="relative mb-3 text-lg text-gray-500">
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
