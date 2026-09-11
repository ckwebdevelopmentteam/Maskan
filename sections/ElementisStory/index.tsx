import ElementisStoryClient from "./Client";
import ElementisStoryServer from "./Server";

export default function ElementisStory() {
  return (
    <div id="portfolio" className="overflow-x-hidden bg-[var(--bg-primary)] px-6 py-8 text-[var(--fg-primary)] md:px-16 md:py-16 flex flex-col gap-8 md:gap-10 border-t border-[var(--border-white-5)]">
      <div className="md:grid md:grid-cols-11 md:gap-x-8 items-center">
        <ElementisStoryServer />
      </div>
      <ElementisStoryClient />
    </div>
  );
}
