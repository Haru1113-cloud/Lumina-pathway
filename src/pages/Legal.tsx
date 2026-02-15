import Section from "../components/Section";
import PageHeader from "../components/PageHeader";

const rows = [
  { label: "事業者名", value: "Lumina Pathways" },
  { label: "代表者", value: "（氏名を記載）" },
  { label: "所在地", value: "（住所を記載）" },
  { label: "連絡先", value: "（メールアドレスを記載）" },
  {
    label: "サービス内容",
    value:
      "海外大学院進学・キャリア支援に関する意思決定伴走サービス（完全オンライン）",
  },
  {
    label: "料金",
    value:
      "単発セッション（60分）: 33,000円〜 / 3セッションパス: 88,000円〜 / 5セッションパス: 132,000円〜",
  },
  { label: "支払方法", value: "（銀行振込・クレジットカード等を記載）" },
  { label: "支払時期", value: "（記載）" },
  { label: "サービス提供時期", value: "ご予約確定後、指定日時にオンラインで実施" },
  {
    label: "キャンセル・返金",
    value: "（キャンセルポリシーを記載）",
  },
];

export default function Legal() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <PageHeader label="Legal" title="特定商取引法に基づく表記" />

        <div className="divide-y divide-stone-200/80 border-t border-b border-stone-200/80">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
            >
              <dt className="text-[14px] font-medium text-stone-700">
                {row.label}
              </dt>
              <dd className="text-[14px] text-stone-500">{row.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
