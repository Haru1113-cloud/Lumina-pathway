import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";
import CTASection from "../components/CTASection";

const values = [
  { title: "Clarity", desc: "複雑な選択肢を整理し、迷いを減らす。" },
  { title: "Empowerment", desc: "依存させず、自分で決める力を育てる。" },
  { title: "Integrity", desc: "誠実で透明性のあるサポートを提供する。" },
  { title: "Elegance", desc: "女性向け・海外キャリアにふさわしい洗練。" },
  { title: "Flexibility", desc: "一人ひとりの背景やペースを尊重する。" },
];

const features = [
  {
    title: "意思決定の整理",
    desc: "進学先選び・キャリアの方向性など、複雑な選択肢を構造化し、あなた自身が納得できる判断を導きます。",
  },
  {
    title: "SOP・CV の方向性設計",
    desc: "Statement of Purposeやレジュメの核となるストーリーを、ゼロの段階から一緒に構築します。代筆ではなく「自分の言葉」で語れる状態を目指します。",
  },
  {
    title: "出願戦略の壁打ち",
    desc: "出願校の選定、スケジュール管理、面接準備まで、戦略的に伴走します。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="!py-32 md:!py-44">
        <div className="max-w-2xl">
          <p className="mb-4 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            海外大学院・キャリア支援
          </p>
          <h1 className="mb-7">
            自分の意思で、
            <br />
            世界を選ぶ力を。
          </h1>
          <p className="mb-12 max-w-xl text-base leading-relaxed text-stone-500 md:text-lg">
            Lumina Pathwaysは、海外大学院進学や海外キャリアを目指す女性のための意思決定伴走サービスです。情報提供や代行ではなく、「主体的に選ぶ力」を育てます。
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/book" size="lg">
              60分 単発セッションを予約
            </Button>
            <Button to="/services" variant="outline" size="lg">
              サービスを見る
            </Button>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="stone">
        <div className="mb-14 max-w-xl md:mb-16">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            Values
          </p>
          <h2>大切にしていること</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h4 className="mb-2 font-serif">{v.title}</h4>
              <p className="text-[14px] leading-relaxed text-stone-500">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="mb-14 max-w-xl md:mb-16">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            What We Do
          </p>
          <h2>提供するサポート</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {features.map((f, i) => (
            <div key={i}>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-[13px] font-medium text-sage-600">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3">{f.title}</h3>
              <p className="text-[14px] leading-[1.85] text-stone-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Differentiator */}
      <Section bg="stone">
        <div className="mb-14 max-w-xl md:mb-16">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            Difference
          </p>
          <h2>一般的な留学エージェントとの違い</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-stone-200/80 bg-white">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="border-b border-stone-100">
                <th className="px-7 py-5 font-medium text-stone-400">項目</th>
                <th className="px-7 py-5 font-medium text-stone-400">
                  一般的な留学エージェント
                </th>
                <th className="px-7 py-5 font-medium text-stone-900">
                  Lumina Pathways
                </th>
              </tr>
            </thead>
            <tbody className="text-stone-600">
              {[
                ["出願代行", "あり", "なし（主体性を重視）"],
                ["主体性", "低くなりがち", "高い"],
                ["女性特化", "なし", "あり"],
                ["サポート形式", "事務的", "伴走型"],
              ].map(([label, general, lumina], i, arr) => (
                <tr
                  key={label}
                  className={i < arr.length - 1 ? "border-b border-stone-100/60" : ""}
                >
                  <td className="px-7 py-4 font-medium text-stone-700">{label}</td>
                  <td className="px-7 py-4">{general}</td>
                  <td className="px-7 py-4 font-medium text-stone-900">{lumina}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
