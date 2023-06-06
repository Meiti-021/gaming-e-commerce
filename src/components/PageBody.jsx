const PageBody = ({ content, title }) => {
  return (
    <div className="w-full p-4">
      <div className="w-full max-w-7xl mx-auto py-10">
        <h1 className="text-4xl font-semibold my-5">{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default PageBody;
