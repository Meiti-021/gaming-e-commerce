import { SportsEsportsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SectionHeader = ({ title, address }) => {
  return (
    <div className="relative z-20 mx-auto mb-7 flex w-full max-w-7xl flex-col gap-4 p-4 xs:flex-row xs:items-center xs:justify-between ">
      <h2 className=" text-3xl font-semibold text-white">{title}</h2>
      <Link
        to={address}
        className="border-ellipse flex h-10 w-36 items-center justify-center gap-2 border-[1px] border-[rgba(255,255,255,0.6)] p-2 text-xs text-[rgba(255,255,255,0.6)] transition-all hover:border-none hover:bg-gradient-to-r hover:from-blue hover:to-second-color hover:text-white  xs:h-12 xs:w-44  "
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
