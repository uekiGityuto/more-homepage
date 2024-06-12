import { H2 } from "@/components/atoms/Typography";

export const AboutMe = () => {
  // TODO: 代表者挨拶的な文章を記述する。あと、自分の経歴書も載せると良いかも。
  return (
    <section>
      <H2 text="ABOUT ME" />
      <div>
        <p>
          More株式会社は多くの人が「もっと」欲張りになれる社会を創ることを目指しています。
          <br />
          障害や持病、経済的理由など何らかの理由でやりたいことを諦めてしまっている人が諦めないで良くなるような社会を創る。
        </p>
      </div>
    </section>
  );
};
