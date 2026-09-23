import HeroClient from "./Client";
import HeroServer from "./Server";

export default function HeroWrapper() {
  return (
    <div id="home" className="relative bg-black">
      <HeroClient />
      <HeroServer />
    </div>
  );
}
