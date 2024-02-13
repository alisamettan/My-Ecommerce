import AboutContent from "../components/AboutPageComp/AboutContent";
import AboutHeader from "../components/AboutPageComp/AboutHeader";
import AboutStats from "../components/AboutPageComp/AboutStats";
import AboutTeam from "../components/AboutPageComp/AboutTeam";
import AboutVideo from "../components/AboutPageComp/AboutVideo";
import Clients from "../components/ProductList/Clients";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutContent />
      <AboutStats />
      <AboutVideo />
      <AboutTeam />
      <Clients />
    </>
  );
}
