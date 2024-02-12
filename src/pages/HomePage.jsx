import Advertisement from "../HomePageComp/Advertisement";
import BestSeller from "../HomePageComp/BestSeller";
import Carousel from "../HomePageComp/Carousel";
import CategoryCard from "../HomePageComp/CategoryCard";
import FeaturedPosts from "../HomePageComp/FeaturedPosts";
import Social from "../HomePageComp/Social";

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
