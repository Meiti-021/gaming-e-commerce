import { SportsEsportsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, address }) => {
  return (
    <div className="w-full flex flex-col xs:flex-row xs:justify-between xs:items-center gap-4 mb-7">
      <h2 className="font-first-font text-3xl font-semibold text-white">
        {title}
      </h2>
      <Link
        to={address}
        className="flex h-10 xs:h-12 w-36 xs:w-56 justify-center items-center p-2 gap-2 border-[1px] search-bar border-[rgba(255,255,255,0.6)] text-xs font-first-font text-[rgba(255,255,255,0.6)] transition-all"
      >
        Show product
        <SportsEsportsOutlined />
      </Link>
    </div>
  );
};

export default SectionHeader;
