import PropTypes from "prop-types";
const PageBody = ({ content, title }) => {
  return (
    <div className="w-full p-4">
      <div className="mx-auto w-full max-w-7xl py-10">
        <h1 className="my-5 text-4xl font-semibold">{title}</h1>
        {content}
      </div>
    </div>
  );
};

PageBody.propTypes = {
  content: PropTypes.any,
  title: PropTypes.string,
};

export default PageBody;
