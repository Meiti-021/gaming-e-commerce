import HomeHero from "../components/HomeHero";
import HomeBestSellers from "../components/HomeBestSellers";
import HomeBrandSwiper from "../components/HomeBrandSwiper";
import HomeBestGaming from "../components/HomeBestGaming";
import HomeNewsLetter from "../components/HomeNewsLetter";
import HomeBestProducts from "../components/HomeBestProducts";
const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeBestSellers />
      <HomeBrandSwiper />
      <HomeBestGaming />
      <HomeNewsLetter />
      <HomeBestProducts />
    </div>
  );
};

export default Home;
