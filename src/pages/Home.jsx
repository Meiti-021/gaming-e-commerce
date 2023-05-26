import HomeHero from "../components/HomeHero";
import HomeBestSellers from "../components/HomeBestSellers";
const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeBestSellers />
    </div>
  );
};

export default Home;
