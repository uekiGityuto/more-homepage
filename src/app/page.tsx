import { Body } from "@/components/layout/Body";
import { AboutUs } from "@/components/uiParts/Home/AboutUs";
import { FirstView } from "@/components/uiParts/Home/FirstView";
import { Overview } from "@/components/uiParts/Home/Overview";
import { Services } from "@/components/uiParts/Home/Services";

export default function Home() {
  return (
    <div className="text-base">
      <FirstView />
      <Body gap="lg">
        <Services />
        <AboutUs />
        <Overview />
      </Body>
    </div>
  );
}
