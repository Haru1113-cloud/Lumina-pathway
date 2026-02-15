import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const plans = [
  {
    name: "単発セッション",
    price: "33,000",
    unit: "円〜 / 60分",
    desc: "まずは一度、課題を整理したい方に。",
    features: [
      "60分オンラインセッション",
      "意思決定整理 / SOP方向性設計 / 出願戦略壁打ち",
      "完全オンライン（Zoom等）",
    ],
    cta: "セッションを予約",
    to: "/book",
    highlight: true,
  },
  {
    name: "3セッションパス",
    price: "88,000",
    unit: "円〜",
    desc: "継続的に伴走が必要な方に。",
    features: [
      "60分 × 3回のオンラインセッション",
      "SOP構成整理・ブラッシュアップ",
      "CV・推薦状の方向性整理",
      "面接対策・進路最終判断",
    ],
    cta: "お問い合わせ",
    to: "/book",
    highlight: false,
  },
  {
    name: "5セッションパス",
    price: "132,000",
    unit: "円〜",
    desc: "出願準備をトータルで伴走したい方に。",
    features: [
      "60分 × 5回のオンラインセッション",
      "SOP構成整理・ブラッシュアップ",
      "CV・推薦状の方向性整理",
      "面接対策・進路最終判断",
      "より深い伴走サポート",
    ],
    cta: "お問い合わせ",
    to: "/book",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Section>
        <PageHeader
          label="Pricing"
          title="料金"
          description="シンプルで透明性のある料金体系です。すべてのプランは完全オンラインで提供されます。"
        />

        <div className="grid gap-6 md:grid-cols-3">
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

      <Section bg="stone">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center">補足事項</h2>
          <ul className="space-y-4 text-[14px] leading-relaxed text-stone-500">
            <li>・表示価格はすべて税込です。</li>
            <li>・時間外質問対応をご希望の場合は、質問対応付きプラン（別料金）をご契約ください。</li>
            <li>・文章の代筆・出願手続きの代行は行っておりません。</li>
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
