import TeamAssets from "../components/TeamPageComp/TeamAssets";
import TeamCTA from "../components/TeamPageComp/TeamCTA";
import TeamHeader from "../components/TeamPageComp/TeamHeader";
import TeamMems from "../components/TeamPageComp/TeamMems";

export default function TeamPage() {
  return (
    <>
      <TeamHeader />
      <TeamAssets />
      <TeamMems />
      <TeamCTA />
    </>
  );
}
