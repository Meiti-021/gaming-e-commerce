import HomeHero from "../components/HomeHero";
import HomeBestSellers from "../components/HomeBestSellers";
import HomeBrandSwiper from "../components/HomeBrandSwiper";
import HomeBestGaming from "../components/HomeBestGaming";
const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeBestSellers />
      <HomeBrandSwiper />
      <HomeBestGaming />
    </div>
  );
};

export default Home;
