import circle6 from "../assets/images/design-circle-3.png";
import SectionHeader from "../components/SectionHeader";
const HomeBestSellers = () => {
  return (
    <div className="relative bg-black w-full h-auto mt-[27rem] xs:mt-[31rem] md:mt-[35rem] lg:mt-[36rem]">
      <img
        src={circle6}
        alt=""
        className="absolute -top-32 z-0 right-0 left-0 mx-auto"
      />
      <div className="flex-col relative p-5 max-w-7xl w-full mx-auto z-50">
        <SectionHeader title="Bestsellers of the week" address="" />
      </div>
    </div>
  );
};

export default HomeBestSellers;
