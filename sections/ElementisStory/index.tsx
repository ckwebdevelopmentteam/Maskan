import ElementisStoryClient from "./Client";
import ElementisStoryServer from "./Server";

export default function ElementisStory() {
  return (
    <div id="portfolio" className="overflow-x-hidden bg-[var(--bg-primary)] px-3-75 py-24 text-[var(--fg-primary)] md:px-16 md:py-36 flex flex-col gap-16 md:gap-20 border-t border-[var(--border-white-5)]">
      <div className="md:grid md:grid-cols-11 md:gap-x-5">
        <ElementisStoryServer />
      </div>
      <ElementisStoryClient />
    </div>
  );
}
