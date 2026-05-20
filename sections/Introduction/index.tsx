import IntroductionServer from "./Server";
export default function Introduction({ noTopPadding = false }: { noTopPadding?: boolean }) {
  return <IntroductionServer noTopPadding={noTopPadding} />;
}
