import Advertisement from "../components/HomePageComp/Advertisement";
import BestSeller from "../components/HomePageComp/BestSeller";

import CategoryCard from "../components/HomePageComp/CategoryCard";
import FeaturedPosts from "../components/HomePageComp/FeaturedPosts";
import Social from "../components/HomePageComp/Social";

import MainCarousel from "../components/HomePageComp/MainCarousel";

export default function HomePage() {
  return (
    <>
      <MainCarousel />
      <CategoryCard />
      <BestSeller />
      <MainCarousel />
      <Advertisement />
      <Social />
      <FeaturedPosts />
    </>
  );
}
