import { SportsEsportsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SectionHeader = ({ title, address }) => {
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col xs:flex-row xs:justify-between xs:items-center gap-4 mb-7 p-4 ">
      <h2 className="font-first-font text-3xl font-semibold text-white">
        {title}
      </h2>
      <Link
        to={address}
        className="flex h-10 xs:h-12 w-36 xs:w-44 justify-center items-center p-2 gap-2 border-[1px] search-bar border-[rgba(255,255,255,0.6)] text-xs font-first-font text-[rgba(255,255,255,0.6)] transition-all"
      >
        Show product
        <SportsEsportsOutlined />
      </Link>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
};

export default SectionHeader;
