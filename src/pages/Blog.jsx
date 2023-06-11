import PageHero from "../components/PageHero";
import PageBody from "../components/PageBody";
import {} from "react-redux";
import { useState } from "react";
import { Pagination } from "@mui/material";
import BlogPostItem from "../components/BlogPostItem";
const heroData = {
  title: "blogs",
  subtitle:
    "The process of selecting only the best of the best gaming blogs was challenging. These days, anyone can consider themselves a gaming blogger and expert, so it took some time to separate the wheat from the chaff.",
};
import { blogs } from "../features/Blogs";

const AllBlogs = () => {
  const [page, setPage] = useState(0);
  const pageHandle = (event, value) => {
    setPage(value - 1);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ml:grid-cols-4">
        {blogs.slice(page * 4, 4 * (page + 1)).map((item, index) => {
          return (
            <BlogPostItem
              {...item}
              light={true}
              key={"blog-post-vitrine" + "item.id" + `${index}`}
            />
          );
        })}
      </div>
      <div className="mb-10 mt-20 flex h-20 items-center justify-center">
        <Pagination
          count={
            blogs.length % 4 === 0
              ? blogs.length / 4
              : Math.floor(blogs.length / 4) + 1
          }
          variant="outlined"
          color="primary"
          size="large"
          onChange={pageHandle}
          shape="circular"
          page={page + 1}
        />
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <div className="">
      <PageHero {...heroData} />
      <PageBody content={<AllBlogs />} title="ALL BLOGS" />
    </div>
  );
};

export default Blog;
