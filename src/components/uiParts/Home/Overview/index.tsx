import { H2 } from "@/components/atoms/Typography";

const DATA = [
  { label: "企業名", value: "More株式会社" },
  { label: "設立", value: "2024年3月6日" },
  { label: "資本金", value: "100万円" },
  { label: "代表者", value: "山川宥登" },
  // TODO: 問い合わせ先の情報を追加する
];

export const Overview = () => (
  <section>
    <H2 text="Overview" />
    <table>
      <tbody>
        {DATA.map((data) => (
          <tr key={data.label}>
            <th className="p-2 font-normal text-left">{data.label}</th>
            <td className="p-2">{data.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
