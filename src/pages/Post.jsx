import { useState } from "react";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import BlogPostItem from "../components/BlogPostItem";
import { useParams } from "react-router-dom";
const Post = () => {
  const { blogs } = useSelector((store) => store.blog);
  const { id } = useParams();
  const [data] = useState(blogs.find((item) => item.id === id));
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  if (data === undefined) {
    return (
      <div className="py-40 px-5 font-first-font">
        <div className="flex items-center gap-2 mb-5">
          <button className=" w-9 h-9 rounded-full border-1 text-black text-lg pb-[0.1rem] border-black">
            &#8592;
          </button>
          <p className="text-black text-xs font-semibold">Back to home</p>
        </div>
        <p className="text-2xl  ">404 ERR. PAGE NOT FOND!</p>
      </div>
    );
  }
  return (
    <div>
      <div className="relative bg-[url(../assets/bg/navbar.png)] bg-cover bg-no-repeat p-10 font-first-font">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
        <div className="w-full  mt-56 h-80 md:h-72 z-10 relative flex-col justify-end pb-10 flex gap-7 max-w-7xl mx-auto ">
          <div className="flex items-center gap-2">
            <button className=" w-9 h-9 rounded-full border-1 text-white text-lg pb-[0.1rem] border-white">
              &#8592;
            </button>
            <p className="text-white text-xs font-semibold">Back to home</p>
          </div>
          <div className="w-full max-w-lg flex text-sm text-white gap-10 items-center">
            <div className="w-auto p-1 h-7 pt-[0.3rem]  px-4 rounded-xl bg-gradient-to-r from-blue to-second-color">
              Featured
            </div>
            <p className="font-semibold">
              categorie:{" "}
              <span className="text-xs font-normal">{data.categorie}</span>{" "}
            </p>
            <p className="font-semibold">
              Date: <span className="text-xs font-normal">{data.date}</span>{" "}
            </p>
          </div>
          <h1 className=" text-[2.6rem] w-full font-semibold  text-transparent  bg-clip-text bg-gradient-to-r from-blue  to-25% to-second-color capitalize">
            {data.title}
          </h1>
          <p className="text-sm text-white w-full max-w-xl">{data.describe}</p>
        </div>
      </div>
      <div className="w-full px-5 py-10 font-first-font">
        <div className="w-full max-w-7xl mx-auto relative lg:grid-cols-3 grid grid-cols-1 gap-8 ">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <div className="w-full flex flex-col lg:flex-row items-start mt-10 text-base  text-gray-500  gap-10 ">
              <p className="font-bold italic">
                {data.author},
                <span className="text-xs font-normal  "> Meiti-021</span>
              </p>
              <p className="font-semibold">
                categorie:
                <span className="text-xs font-normal">
                  {data.categorie}
                </span>{" "}
              </p>
              <p className="font-semibold">
                Date: <span className="text-xs font-normal">{data.date}</span>{" "}
              </p>
            </div>
            <h1 className=" text-[2.6rem] w-full font-semibold  text-transparent  bg-clip-text bg-gradient-to-r from-blue  to-25% to-second-color capitalize">
              {data.title}
            </h1>
            <img
              src={`../assets/blogs/${data.image}`}
              alt=""
              className="block w-full h-auto object-contain"
            />
            <div className="text-gray-500 flex flex-col gap-6">{data.body}</div>
            <p className="font-semibold text-sm">
              Tags:
              <span className="font-normal ml-2">
                {data.tags.map((item) => item + ",")}
              </span>
            </p>
            <div className="flex items-center gap-1">
              <p className="text-lg mr-3">Share this post: </p>

              <button className="bg-second-color w-7 h-7 rounded-full  text-white ">
                <FacebookIcon style={{ fontSize: "20px" }} />
              </button>
              <button className="bg-second-color w-7 h-7 rounded-full  text-white">
                <InstagramIcon style={{ fontSize: "20px" }} />
              </button>
              <button className="bg-second-color w-7 h-7 rounded-full  text-white">
                <LinkedInIcon style={{ fontSize: "20px" }} />
              </button>
              <button className="bg-second-color w-7 h-7 rounded-full  text-white">
                <GitHubIcon style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
          <div className="flex  w-full my-10 lg:mt-[11.5rem] font-first-font flex-col-reverse lg:flex-col gap-4 lg:col-span-1">
            <div className="mt-5  border-black flex flex-col gap-5">
              <p className="text-3xl font-semibold">Related Articles</p>
              {blogs.slice(2, 4).map((item) => {
                return (
                  <BlogPostItem
                    {...item}
                    light={true}
                    key={"side-nav-related-blog" + item.id}
                  />
                );
              })}
            </div>
            <form className="border-1 search-bar pt-5 border-border-color flex flex-col gap-4 p-3">
              <p className="text-2xl font-semibold">Leave a Comment</p>
              <input
                type="text"
                id=""
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                }}
                placeholder="Name"
                required
                className="border-1 border-border-color search-bar p-3 text-sm h-12"
              />
              <input
                type="email"
                id=""
                value={form.email}
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value });
                }}
                placeholder="Email"
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
              <p className="text-xs text-red-500 px-3 w-full hidden">alert!</p>
              <button className="w-full h-12 search-bar text-white font-semibold bg-gradient-to-r from-blue to-second-color">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
