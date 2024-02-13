import Advertisement from "../components/HomePageComp/Advertisement";
import BestSeller from "../components/HomePageComp/BestSeller";
import Carousel from "../components/HomePageComp/Carousel";
import CategoryCard from "../components/HomePageComp/CategoryCard";
import FeaturedPosts from "../components/HomePageComp/FeaturedPosts";
import Social from "../components/HomePageComp/Social";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <CategoryCard />
      <BestSeller />
      <Carousel />
      <Advertisement />
      <Social />
      <FeaturedPosts />
    </>
  );
}
