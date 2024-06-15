import { H2, H3 } from "@/components/atoms/Typography";
import { Body } from "@/components/layout/Body";

export default function SecurityPolicy() {
  return (
    <Body gap="sm">
      <H2 text="セキュリティーポリシー" />
      <div className="text-right">
        <p>2024年6月15日</p>
        <p>More株式会社</p>
        <p>代表取締役　山川宥登</p>
      </div>
      <section>
        <H3 text="1. 導入" />
        <p>
          More株式会社（以下「当社」といいます）は、顧客のシステム開発を支援するビジネスを展開しています。お客様の個人情報を保護し、安全で信頼できるサービスを提供するため、本セキュリティーポリシーを制定しました。
        </p>
      </section>
      <section>
        <H3 text="2. 適用範囲" />
        <p>本ポリシーは、当社の事業活動に適用されます。</p>
      </section>
      <section>
        <H3 text="3. 情報の収集と利用" />
        <p>
          当社は現在、顧客の個人情報を収集しておりません。将来的にサービスの提供や改善のために情報を収集する場合、その詳細をお客様に通知し、同意を得た上で行います。
        </p>
      </section>
      <section>
        <H3 text="4. 情報の保護" />
        <p>
          当社は、個人情報を取り扱う場合、業界標準のセキュリティ対策（暗号化、アクセス制御、監視など）を講じて、個人情報を保護します。
        </p>
      </section>
      <section>
        <H3 text="5. 情報の共有と開示" />
        <p>当社は、法令に基づく場合を除き、個人情報を第三者と共有しません。</p>
      </section>
      <section>
        <H3 text="6. インシデント対応" />
        <p>
          セキュリティインシデントが発生した場合、速やかに関係部署に報告し、影響範囲を特定して適切な対策を講じます。インシデントの内容と対応策は、必要に応じてお客様に通知されます。
        </p>
      </section>
      <section>
        <H3 text="7. ポリシーの更新" />
        <p>
          本ポリシーは、必要に応じて見直しを行い、最新のセキュリティ要件を反映します。
        </p>
      </section>
    </Body>
  );
}
