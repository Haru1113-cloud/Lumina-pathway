import Section from "../components/Section";
import PageHeader from "../components/PageHeader";

const rows = [
  { label: "販売業者（事業者）", value: "Lumina Pathways" },
  { label: "代表者", value: "軽尾 貴子" },
  {
    label: "所在地",
    value: "〒107-0062 東京都港区南青山3丁目1番36号 青山丸竹ビル6F",
  },
  {
    label: "電話番号",
    value: "請求があれば遅滞なく開示いたします",
  },
  { label: "メールアドレス", value: "info@luminapathways.jp" },
  {
    label: "サービス内容",
    value:
      "海外キャリア・海外大学院進学・学び直しを含むグローバルキャリア意思決定支援サービス（完全オンライン）",
  },
  {
    label: "販売価格",
    value: "各サービスページに記載の通り（すべて税込）",
  },
  {
    label: "商品代金以外の必要料金",
    value: "振込手数料・消費税等（決済方法による）",
  },
  { label: "支払方法", value: "銀行振込、クレジットカード" },
  { label: "支払時期", value: "サービス確定後3日以内" },
  {
    label: "サービス提供時期",
    value: "支払確認後、予約確定日時に実施",
  },
  {
    label: "キャンセル・返金",
    value:
      "サービス開始72時間前まで全額返金／48〜24時間前は50％返金／24時間以内および無断キャンセルは返金不可。天災等の不可抗力の場合は個別対応。返金は指定口座への振込にて対応します。",
  },
  {
    label: "利用条件",
    value:
      "本サービスはグローバルキャリア・海外進学・学び直しを含むキャリア意思決定支援を目的としています。対象は女性に限定し、申込後のヒアリング内容に基づき、適合しないと判断した場合はサービス提供をお断りする場合があります。",
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
              className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <dt className="text-[14px] font-medium text-stone-700">
                {row.label}
              </dt>
              <dd className="text-[14px] leading-[1.85] text-stone-500">{row.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
