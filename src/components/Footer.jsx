import logo from "../assets/images/logo.webp";
import circle3 from "../assets/images/design-circle-3.webp";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-black px-5 py-10 text-white ">
      <div className="relative z-20 mx-auto max-w-7xl md:flex-row lg:flex lg:justify-between lg:gap-10">
        <div className="flex flex-col  gap-5">
          <img src={logo} className="block w-32 object-contain" alt="" />
          <p className="text-[1.65rem] font-semibold text-white">
            Reach out & let your{" "}
            <span className="bg-gradient-to-r  from-blue to-second-color bg-clip-text text-transparent">
              mind explore
            </span>{" "}
          </p>
          <p className="text-sm ">
            I also love the challenge of trying to beat a difficult game or
            master a new skill.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mt-10 text-base  font-semibold uppercase">
            Navigation::
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link>Search</Link>
            </li>
            <li>
              <Link to="/collections/all">All Collections</Link>
            </li>
            <li>
              <Link to="/collections/all">All Products</Link>
            </li>
            <li>
              <Link to="/blog">Article Page</Link>
            </li>
            <li>
              <Link to="/blog">Blog Page</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mt-10 text-base  font-semibold uppercase">About Us::</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact With Us</Link>
            </li>
            <li>
              <Link to="/faqs">FAQ&#39;s</Link>
            </li>
            <li>
              <Link to="/pages/privacy-policy">Privacy & Policy</Link>
            </li>
            <li>
              <Link to="/pages/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/pages/shiping-delivery">Shipping & Delivery</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mt-10 text-base  font-semibold uppercase">Share::</p>
          <div className="flex gap-2  text-sm">
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black"
              href="www.facebook.com/meiti-021"
              aria-label="external link to developer's social media accounts"
              rel="nofollow"
            >
              <FacebookIcon style={{ fontSize: "20px" }} />
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black"
              href="www.instagram.com/meiti-021"
              aria-label="external link to developer's social media accounts"
              rel="nofollow"
            >
              <InstagramIcon style={{ fontSize: "20px" }} />
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black"
              href="www.linkedin.com/in/mahdi-dehgani"
              aria-label="external link to developer's social media accounts"
              rel="nofollow"
            >
              <LinkedInIcon style={{ fontSize: "20px" }} />
            </a>
            <a
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black"
              href="www.github.com/meiti-021"
              aria-label="external link to developer's social media accounts"
              rel="nofollow"
            >
              <GitHubIcon style={{ fontSize: "20px" }} />
            </a>
          </div>
        </div>
      </div>
      <p className="w-ful3 mx-auto mt-10 max-w-7xl text-base">
        © 2023, Gaming Store, Developed By @Meit-021
      </p>
      <img src={circle3} alt="" className="absolute -right-32 -top-32 z-10" />
    </div>
  );
};

export default Footer;
