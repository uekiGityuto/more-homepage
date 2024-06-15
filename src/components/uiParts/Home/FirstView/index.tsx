import heroPcImgSrc from "./images/hero_pc.png";
import heroSpImgSrc from "./images/hero_sp.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="block md:hidden">
        <img
          src={heroSpImgSrc.src}
          alt="More株式会社多くの人の「もっと」を実現する。"
          className="object-cover w-full"
        />
      </div>
      <div className="hidden md:block">
        <img
          src={heroPcImgSrc.src}
          alt="More株式会社多くの人の「もっと」を実現する。"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export const FirstView = () => {
  return <Hero />;
};
