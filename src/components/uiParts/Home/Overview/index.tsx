import { H2 } from "@/components/atoms/Typography";

const DATA: { label: string; value: string; className?: string }[] = [
  { label: "企業名", value: "More株式会社" },
  { label: "設立", value: "2024年3月6日" },
  { label: "資本金", value: "100万円" },
  { label: "代表者", value: "山川宥登" },
  {
    label: "連絡先",
    value: "more.contact.morecoltd@gmail.com",
    className: "text-sm md:text-base",
  },
];

export const Overview = () => (
  <section>
    <H2 text="Overview" />
    <table>
      <tbody>
        {DATA.map((data) => (
          <tr key={data.label}>
            <th className="py-2 pr-2 font-normal text-left">{data.label}</th>
            <td className={`py-2 pl-2 ${data.className ?? ""}`}>{data.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
