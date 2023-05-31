import HomeHero from "../components/HomeHero";
import HomeBestSellers from "../components/HomeBestSellers";
import HomeBrandSwiper from "../components/HomeBrandSwiper";
import HomeBestGaming from "../components/HomeBestGaming";
import HomeNewsLetter from "../components/HomeNewsLetter";
import HomeBestProducts from "../components/HomeBestProducts";
import HomeAd from "../components/HomeAd";
import HomeAbout from "../components/HomeAbout";
import HomeBlogs from "../components/HomeBlogs";
import HomeBestProGamingProducts from "../components/HomeBestProGamingProducts";
import HomeTestimonials from "../components/HomeTestimonials";
const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeBestSellers />
      <HomeBrandSwiper />
      <HomeBestGaming />
      <HomeNewsLetter />
      <HomeBestProducts />
      <HomeAd />
      <HomeAbout />
      <HomeBlogs />
      <HomeBestProGamingProducts />
      <HomeTestimonials />
    </div>
  );
};

export default Home;
