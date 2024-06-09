import { Body } from "@/components/layout/Body";
import { AboutUs } from "@/components/uiParts/Home/AboutUs";
import { Overview } from "@/components/uiParts/Home/Overview";
import { Services } from "@/components/uiParts/Home/Services";

export default function Home() {
  return (
    <div>
      <Overview />
      <Body gap="lg">
        <AboutUs />
        <Services />
      </Body>
    </div>
  );
}
