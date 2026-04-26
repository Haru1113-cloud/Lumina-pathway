import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const areas = [
  {
    no: "01",
    title: "Global Career Design",
    subtitle: "海外を含めたキャリア設計・転職・方向性整理",
    desc: "海外を視野に入れたキャリアの方向性整理から、転職・学び直しの判断、グローバル環境での働き方までを一緒に設計します。",
    items: [
      "キャリアの方向性の言語化",
      "海外転職／グローバル環境での働き方の検討",
      "学び直し・ライフキャリアの統合的設計",
    ],
  },
  {
    no: "02",
    title: "Graduate School Strategy",
    subtitle: "海外大学院進学を含むキャリア戦略・出願設計",
    desc: "海外大学院進学を「手段の一つ」として捉え、キャリア全体から逆算した出願戦略・SOP・CV構造の設計を行います。",
    items: [
      "進学・学び直しの意思決定整理",
      "出願戦略・スケジュール設計",
      "SOP・CV構造設計／面接サポート",
    ],
  },
];

const plans = [
  {
    name: "単発セッション",
    tagline: "Intro",
    duration: "60分／¥22,000（税込）",
    desc: "現状整理と方向性の壁打ち。プラン検討前の入口として。",
  },
  {
    name: "Strategy Sprint",
    tagline: "短期集中",
    duration: "6週間／¥132,000（税込）",
    desc: "方向性の整理と意思決定の言語化、戦略設計までを一気に進めます。",
  },
  {
    name: "Core Program",
    tagline: "中期伴走",
    duration: "3ヶ月／¥264,000（税込）",
    desc: "意思決定から実行まで伴走。SOP・CV構造設計、面接・最終判断までフルサポート。",
  },
  {
    name: "Ongoing Support",
    tagline: "継続",
    duration: "月額¥44,000（税込）",
    desc: "中長期の壁打ちと進行管理。決まった方向を着実に動かしていく方向け。",
  },
];

export default function Services() {
  return (
    <>
      <Section>
        <PageHeader
          label="Services"
          title="サービス内容"
          description="Lumina Pathwaysは、海外キャリア・海外大学院進学・学び直しを含む、グローバルなキャリア選択における意思決定を支援する伴走型サービスです。すべて完全オンラインで提供します。"
        />

        <div className="mx-auto mb-16 max-w-3xl text-center text-[15px] leading-[1.95] text-stone-600">
          <p>
            単なる進学支援やキャリア相談ではなく、
            <strong className="font-medium text-stone-800">
              「どの環境で、どのようにキャリアを築いていくのか」
            </strong>
            という意思決定そのものを整理し、納得して進める状態をつくることを目的としています。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {areas.map((a) => (
            <Card key={a.no} className="flex flex-col">
              <p className="mb-1 text-[13px] font-medium text-sage-500">{a.no}</p>
              <h3 className="mb-2">{a.title}</h3>
              <p className="mb-6 text-[13px] tracking-[0.02em] text-stone-400">
                {a.subtitle}
              </p>
              <p className="mb-8 flex-1 text-[14px] leading-[1.85] text-stone-500">
                {a.desc}
              </p>
              <ul className="space-y-3 text-[14px] text-stone-600">
                {a.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-stone-400">
          ※ どちらも「意思決定支援」がコアであり、必要に応じて横断的に対応します。
        </p>
      </Section>

      <Section bg="muted">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            Plans
          </p>
          <h2>期間ベースの4プラン</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <p className="mb-1 text-[12px] font-medium tracking-[0.08em] text-sage-500 uppercase">
                {p.tagline}
              </p>
              <h4 className="mb-2 font-serif text-[1.05rem]">{p.name}</h4>
              <p className="mb-4 text-[13px] text-stone-700">{p.duration}</p>
              <p className="text-[13px] leading-[1.85] text-stone-500">{p.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/pricing" variant="outline">料金の詳細を見る</Button>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6">出願代行・代筆は行いません</h2>
          <p className="text-stone-500 leading-relaxed">
            Lumina Pathwaysは、依存的な支援ではなく、意思決定そのものの力を育てることを目的としています。出願代行・文章の代筆・代理作成は一切行わず、「自分の言葉で語れる」状態をつくる伴走を行います。
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
