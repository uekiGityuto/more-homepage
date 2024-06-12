import { Body } from "@/components/layout/Body";
import { AboutMe } from "@/components/uiParts/Home/AboutMe";
import { Overview } from "@/components/uiParts/Home/Overview";
import { Services } from "@/components/uiParts/Home/Services";

export default function Home() {
  return (
    <div className="text-base">
      <Overview />
      <Body gap="lg">
        <Services />
        <AboutMe />
      </Body>
    </div>
  );
}
