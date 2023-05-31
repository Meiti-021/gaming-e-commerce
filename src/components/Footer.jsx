import logo from "../assets/images/logo.png";
import circle3 from "../assets/images/design-circle-3.png";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="bg-black py-10 overflow-hidden relative text-white px-5 font-first-font">
      <div className="relative z-20 lg:gap-10 lg:flex md:flex-row lg:justify-between mx-auto max-w-7xl">
        <div className="flex flex-col  gap-5">
          <img src={logo} className="block w-32 object-contain" alt="" />
          <p className="text-white text-[1.65rem] font-semibold">
            Reach out & let your{" "}
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue to-second-color">
              mind explore
            </span>{" "}
          </p>
          <p className="text-sm ">
            I also love the challenge of trying to beat a difficult game or
            master a new skill.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base mt-6 uppercase font-semibold">Navigation::</p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link>Search</Link>
            </li>
            <li>
              <Link>All Collections</Link>
            </li>
            <li>
              <Link>All Products</Link>
            </li>
            <li>
              <Link>Article Page</Link>
            </li>
            <li>
              <Link>Blog Page</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base mt-6 uppercase font-semibold">About Us::</p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact With Us</Link>
            </li>
            <li>
              <Link>FAQ &#39 s</Link>
            </li>
            <li>
              <Link>Privacy & Policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base mt-6 uppercase font-semibold">Share::</p>
          <ul className="text-sm flex  gap-2">
            <button className="bg-white w-8 h-8 rounded-lg text-black ">
              <FacebookIcon style={{ fontSize: "20px" }} />
            </button>
            <button className="bg-white w-8 h-8 rounded-lg text-black">
              <InstagramIcon style={{ fontSize: "20px" }} />
            </button>
            <button className="bg-white w-8 h-8 rounded-lg text-black">
              <LinkedInIcon style={{ fontSize: "20px" }} />
            </button>
            <button className="bg-white w-8 h-8 rounded-lg text-black">
              <GitHubIcon style={{ fontSize: "20px" }} />
            </button>
          </ul>
        </div>
      </div>
      <p className="text-base mt-10 mx-auto max-w-7xl w-full">
        © 2023, Gaming Store, Developed By @Meiti
      </p>
      <img src={circle3} alt="" className="absolute -top-32 -right-32 z-10" />
    </div>
  );
};

export default Footer;
