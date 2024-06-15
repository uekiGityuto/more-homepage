import { H2, H3 } from "@/components/atoms/Typography";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <section>
      <H2 text="ABOUT US" />
      <H3 text="代表者経歴" />
      <div className="grid gap-4">
        <p>
          2016年にTIS株式会社に入社し、数億円規模の大規模決済システムを中心に複数の金融機関向けPJをリーダーとして推進。
          その後、2021年に個人事業主として独立してからは、金融機関だけでなく、メガベンチャーやスタートアップなど幅広いお客様のシステム開発を支援。
          <br />
          2024年にMore株式会社を設立。
        </p>
        <p>
          代表者の詳細な経歴は
          <a
            href="https://morecoltd.notion.site/8e8d4a1c81b44cfbba438ff40f0bb1c6"
            className="text-link-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちらのレジュメ
          </a>
          を参照。
        </p>
      </div>
    </section>
  );
};
