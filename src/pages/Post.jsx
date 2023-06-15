import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import BlogPostItem from "../components/BlogPostItem";
import { useParams } from "react-router-dom";
import { blogs } from "../features/Blogs";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data] = useState(blogs.find((item) => item.id === id));
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  if (data === undefined) {
    return (
      <div className="px-5 py-40 ">
        <div className="mb-5 flex items-center gap-2">
          <button
            className=" h-9 w-9 rounded-full border-1 border-black pb-[0.1rem] text-lg text-black"
            onClick={() => {
              navigate(-1);
            }}
            aria-label="navigates to previous page"
          >
            &#8592;
          </button>
          <p className="text-xs font-semibold text-black">Back to home</p>
        </div>
        <p className="text-2xl  ">404 ERR. PAGE NOT FOND!</p>
      </div>
    );
  }
  return (
    <div>
      <div className="relative bg-[url(../assets/bg/navbar.png)] bg-cover bg-center bg-no-repeat p-10 ">
        <div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.6)]"></div>
        <div className="relative  z-10 mx-auto mt-56 flex h-40 w-full max-w-7xl flex-col justify-end gap-7 pb-10 xs:h-80 md:h-72 ">
          <div className="flex items-center gap-2">
            <button
              className=" h-9 w-9 rounded-full border-1 border-white pb-[0.1rem] text-lg text-white"
              onClick={() => {
                navigate(-1);
              }}
              aria-label="navigates to previous page"
            >
              &#8592;
            </button>
            <p className="text-xs font-semibold text-white">Back to home</p>
          </div>
          <div className="hidden w-full  max-w-lg items-center gap-10 text-sm text-white xs:flex">
            <div className="h-7 w-auto rounded-xl bg-gradient-to-r  from-blue to-second-color p-1 px-4 pt-[0.3rem]">
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
          <h1 className=" w-full bg-gradient-to-r from-blue  to-second-color  to-25% bg-clip-text text-[1.8rem] font-semibold capitalize  leading-normal text-transparent xxs:text-[2.6rem] xxs:leading-none">
            {data.title}
          </h1>
          <p className="w-full max-w-xl text-sm text-white">{data.describe}</p>
        </div>
      </div>
      <div className="w-full px-5 py-10 ">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <div className="mt-10 flex w-full flex-col items-start gap-10 text-base  text-gray-500  lg:flex-row ">
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
            <h1 className=" w-full bg-gradient-to-r from-blue  to-second-color  to-25% bg-clip-text text-[1.8rem] font-semibold capitalize  text-transparent xxs:text-[2rem] xs:text-[2.6rem]">
              {data.title}
            </h1>
            <img
              src={`../assets/blogs/${data.image}`}
              alt=""
              className="block h-auto w-full object-contain"
            />
            <div className="flex flex-col gap-6 text-gray-500">{data.body}</div>
            <p className="text-sm font-semibold">
              Tags:
              <span className="ml-2 font-normal">
                {data.tags.map((item) => item + ",")}
              </span>
            </p>
            <div className="flex items-center gap-1">
              <p className="mr-3 text-lg">Share this post: </p>

              <button
                className="h-7 w-7 rounded-full bg-second-color  text-white "
                aria-label="share post in external apps"
              >
                <FacebookIcon style={{ fontSize: "20px" }} />
              </button>
              <button
                className="h-7 w-7 rounded-full bg-second-color  text-white"
                aria-label="share post in external apps"
              >
                <InstagramIcon style={{ fontSize: "20px" }} />
              </button>
              <button
                className="h-7 w-7 rounded-full bg-second-color  text-white"
                aria-label="share post in external apps"
              >
                <LinkedInIcon style={{ fontSize: "20px" }} />
              </button>
              <button
                className="h-7 w-7 rounded-full bg-second-color  text-white"
                aria-label="share post in external apps"
              >
                <GitHubIcon style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
          <div className="my-10  flex w-full flex-col-reverse  gap-4 lg:col-span-1 lg:mt-[11.5rem] lg:flex-col">
            <div className="mt-5  flex flex-col gap-5 border-black">
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
            <form
              className="border-ellipse flex flex-col gap-4 border-1 border-border-color p-3 pt-5"
              onSubmit={(e) => {
                e.preventDefault();
                enqueueSnackbar({
                  variant: "error",
                  message:
                    "Sorry! You can't leave a comment until you're logged into your account. Please Login first.",
                });
              }}
            >
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
                className="border-ellipse h-12 border-1 border-border-color p-3 text-sm"
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
              <p className="hidden w-full px-3 text-xs text-red-500">alert!</p>
              <button className="border-ellipse h-12 w-full bg-gradient-to-r from-blue to-second-color font-semibold text-white">
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
