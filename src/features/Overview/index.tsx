"use client";

import { useDevice } from "@/hooks/useDevice";
import heroPcImgSrc from "./images/hero_pc.png";
import heroSpImgSrc from "./images/hero_sp.png";

const Hero = () => {
  const { isPc } = useDevice();

  return (
    <div className="w-full">
      <img
        src={isPc ? heroPcImgSrc.src : heroSpImgSrc.src}
        alt="More株式会社多くの人の「もっと」を実現する。"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export const Overview = () => {
  return (
    <div className="w-full">
      <Hero />
    </div>
  );
};
