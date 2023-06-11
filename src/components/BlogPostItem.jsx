import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BlogPostItem = ({
  title,
  categorie,
  image,
  author,
  date,
  light,
  describe,
  id,
}) => {
  return (
    <div className=" my-4 h-auto">
      <figure className="border-ellipse relative h-3/5 overflow-hidden border-[1px] border-blue">
        <img
          src={`/assets/blogs/${image}`}
          alt=""
          className="h-full w-full object-cover"
        />
        <p className="absolute right-4 top-4 text-[0.6rem] text-white">
          {date}
        </p>
        <div className="absolute left-4 top-3 rounded-lg bg-gradient-to-r from-blue to-second-color p-1 px-3 text-[0.6rem] text-white">
          {categorie}
        </div>
      </figure>
      <p
        className={`mt-4 text-[1.33rem] ${
          light ? "text-black" : "text-white"
        } overflow-hidden text-ellipsis whitespace-nowrap font-semibold`}
      >
        {title}
      </p>
      <p className="mt-2 text-sm uppercase text-gray-500">AUTHOR : {author}</p>
      {light ? (
        <p className="mt-3 h-10 overflow-hidden text-ellipsis text-sm text-gray-500">
          {describe}
        </p>
      ) : undefined}
      <Link
        to={`/blog/${id}`}
        className="border-ellipse  mt-5 flex w-36 items-center justify-center  bg-gradient-to-r from-blue  to-second-color py-3 pt-3 text-xs font-semibold text-white"
      >
        READ MORE
      </Link>
    </div>
  );
};

BlogPostItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  categorie: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  light: PropTypes.bool,
  describe: PropTypes.string,
};
export default BlogPostItem;
