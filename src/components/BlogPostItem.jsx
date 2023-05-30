import { Link } from "react-router-dom";

const BlogPostItem = ({ title, categorie, image, author, date }) => {
  return (
    <div className="font-first-font h-auto">
      <figure className="relative h-3/5 overflow-hidden search-bar border-[1px] border-blue">
        <img
          src={`./assets/blogs/${image}`}
          alt=""
          className="w-full h-full object-contain"
        />
        <p className="text-[0.6rem] absolute top-4 right-4 text-white">
          {date}
        </p>
        <div className="text-[0.6rem] absolute top-3 left-4 bg-gradient-to-r from-blue to-second-color p-1 px-3 rounded-lg text-white">
          {categorie}
        </div>
      </figure>
      <p className="text-[1.33rem] mt-4 text-white font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </p>
      <p className="text-sm text-gray-500 uppercase mt-2">AUTHOR : {author}</p>
      <Link className="py-3  text-white bg-gradient-to-r from-blue to-second-color search-bar  text-xs font-semibold  mt-5 w-36 flex justify-center items-center pt-3">
        READ MORE
      </Link>
    </div>
  );
};

export default BlogPostItem;
