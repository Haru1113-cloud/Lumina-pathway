import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  cta: string;
  to: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "単発セッション",
    tagline: "Intro Session",
    price: "22,000",
    unit: "円（税込）／ 60分",
    desc: "初回・スポット相談向け。現状整理と方向性の壁打ち。",
    features: [
      "現状整理",
      "方向性の壁打ち",
      "プラン検討のための判断材料提供",
    ],
    cta: "セッションを予約",
    to: "/book",
  },
  {
    name: "Strategy Sprint",
    tagline: "短期集中",
    price: "132,000",
    unit: "円（税込）／ 6週間",
    desc: "「まず整理したい」「進む方向を決めたい」方向け。",
    features: [
      "方向性整理・意思決定の言語化",
      "キャリア／進学の戦略設計",
      "次のアクション明確化",
      "メンバーシップ初月無料",
    ],
    cta: "申し込む",
    to: "/book",
    highlight: true,
  },
  {
    name: "Core Program",
    tagline: "中期伴走",
    price: "264,000",
    unit: "円（税込）／ 3ヶ月",
    desc: "進学・キャリア選択を現実に進めたい方向け。",
    features: [
      "意思決定〜実行までの伴走",
      "キャリア設計／出願戦略",
      "SOP・CV構造設計",
      "面接・最終判断サポート",
      "メンバーシップ初月無料",
    ],
    cta: "申し込む",
    to: "/book",
  },
  {
    name: "Ongoing Support",
    tagline: "継続サポート",
    price: "44,000",
    unit: "円（税込）／ 月額",
    desc: "中長期でキャリアを動かしていく方向け。",
    features: [
      "意思決定の壁打ち",
      "進行管理・軌道修正",
      "長期キャリア設計の継続支援",
    ],
    cta: "お問い合わせ",
    to: "/book",
  },
];

export default function Pricing() {
  return (
    <>
      <Section>
        <PageHeader
          label="Pricing"
          title="料金"
          description="目的と期間に合わせて選べる、4つのプラン。すべて完全オンライン・税込価格でご案内します。"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.highlight ? "border-stone-800" : ""
              }`}
            >
              {plan.highlight && (
                <p className="mb-5 text-[11px] font-medium tracking-[0.12em] text-sage-500 uppercase">
                  おすすめ
                </p>
              )}
              <p className="mb-1 text-[12px] font-medium tracking-[0.08em] text-sage-500 uppercase">
                {plan.tagline}
              </p>
              <h3 className="mb-3">{plan.name}</h3>
              <div className="mb-2">
                <span className="font-serif text-[2rem] font-semibold leading-none text-stone-900">
                  ¥{plan.price}
                </span>
              </div>
              <p className="mb-6 text-[13px] text-stone-400">{plan.unit}</p>
              <p className="mb-8 text-[14px] text-stone-500">{plan.desc}</p>
              <ul className="mb-10 flex-1 space-y-3">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] text-stone-600"
                  >
                    <svg
                      className="mt-[3px] h-4 w-4 flex-shrink-0 text-sage-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                to={plan.to}
                variant={plan.highlight ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center">オプション・メンバーシップ</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col">
              <p className="mb-1 text-[12px] font-medium tracking-[0.08em] text-sage-500 uppercase">
                Option
              </p>
              <h3 className="mb-3">奨学金サポート</h3>
              <div className="mb-2">
                <span className="font-serif text-[1.6rem] font-semibold leading-none text-stone-900">
                  ＋¥55,000
                </span>
              </div>
              <p className="mb-6 text-[13px] text-stone-400">税込／単独利用不可</p>
              <p className="mb-6 text-[14px] leading-[1.85] text-stone-500">
                海外大学院進学における奨学金獲得に向けた戦略設計・エッセイ構造支援。代筆・添削は行いません。
              </p>
              <ul className="space-y-3 text-[13px] text-stone-600">
                <li>・奨学金の選定・優先順位整理</li>
                <li>・応募戦略・スケジュール設計</li>
                <li>・エッセイ構造設計</li>
                <li>・出願全体との一貫性整理</li>
              </ul>
            </Card>

            <Card className="flex flex-col">
              <p className="mb-1 text-[12px] font-medium tracking-[0.08em] text-sage-500 uppercase">
                Membership
              </p>
              <h3 className="mb-3">メンバーシップ（任意）</h3>
              <div className="mb-2">
                <span className="font-serif text-[1.6rem] font-semibold leading-none text-stone-900">
                  ¥5,500
                </span>
              </div>
              <p className="mb-6 text-[13px] text-stone-400">税込／月額</p>
              <p className="mb-6 text-[14px] leading-[1.85] text-stone-500">
                月2回のオンラインセミナーに加え、メンバー限定コミュニティや交流会を不定期開催。Strategy Sprint・Core Program参加者は初月無料。
              </p>
              <ul className="space-y-3 text-[13px] text-stone-600">
                <li>・月2回のオンラインセミナー（固定）</li>
                <li>・メンバー限定コミュニティ（不定期）</li>
                <li>・対面イベント・交流会（不定期）</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center">補足事項</h2>
          <ul className="space-y-4 text-[14px] leading-relaxed text-stone-500">
            <li>・表示価格はすべて税込です。</li>
            <li>・お支払いは銀行振込またはクレジットカードに対応しています。</li>
            <li>・出願代行および文章の代筆・代理作成は行いません。</li>
            <li>・キャンセルポリシー：開始72時間前まで全額返金／48〜24時間前は50％返金／24時間以内・無断キャンセルは返金不可。</li>
            <li>
              ・詳細な運営ルールは
              <Link
                to="/policies"
                className="text-stone-700 underline underline-offset-4 decoration-stone-300 hover:text-stone-900 hover:decoration-stone-500 transition-colors"
              >
                運営ポリシー
              </Link>
              をご確認ください。
            </li>
          </ul>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
