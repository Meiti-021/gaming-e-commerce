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
}) => {
  return (
    <div className="font-first-font h-auto my-4">
      <figure className="relative h-3/5 overflow-hidden search-bar border-[1px] border-blue">
        <img
          src={`./assets/blogs/${image}`}
          alt=""
          className="w-full h-full object-cover"
        />
        <p className="text-[0.6rem] absolute top-4 right-4 text-white">
          {date}
        </p>
        <div className="text-[0.6rem] absolute top-3 left-4 bg-gradient-to-r from-blue to-second-color p-1 px-3 rounded-lg text-white">
          {categorie}
        </div>
      </figure>
      <p
        className={`text-[1.33rem] mt-4 ${
          light ? "text-black" : "text-white"
        } font-semibold text-ellipsis whitespace-nowrap overflow-hidden`}
      >
        {title}
      </p>
      <p className="text-sm text-gray-500 uppercase mt-2">AUTHOR : {author}</p>
      {light ? (
        <p className="text-sm mt-3 h-14 overflow-hidden text-ellipsis text-gray-500">
          {describe}
        </p>
      ) : undefined}
      <Link className="py-3  text-white bg-gradient-to-r from-blue to-second-color search-bar  text-xs font-semibold  mt-5 w-36 flex justify-center items-center pt-3">
        READ MORE
      </Link>
    </div>
  );
};

BlogPostItem.propTypes = {
  title: PropTypes.string,
  categorie: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  light: PropTypes.bool,
  describe: PropTypes.string,
};
export default BlogPostItem;
