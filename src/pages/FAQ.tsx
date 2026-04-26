import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const faqItems = [
  {
    question: "どのような方が対象ですか？",
    answer:
      "主に25〜40歳の女性で、海外キャリア・海外大学院・学び直しを検討中の方、キャリアの方向性に迷いがある方が対象です。海外経験はあるが次のキャリアに迷っている方や、グローバルな働き方・転職・進学を検討している方もご利用いただけます。",
  },
  {
    question: "出願代行やSOPの代筆はしてもらえますか？",
    answer:
      "いいえ。Lumina Pathwaysでは出願代行・文章の代筆・代理作成は一切行いません。依存的な支援ではなく、意思決定そのものの力を育てることを目的としており、SOP・CVは構造設計の伴走のみを行います。",
  },
  {
    question: "どのプランから始めればよいですか？",
    answer:
      "「まずは話してみたい」「一度整理したい」方には60分の単発セッション（¥22,000）がおすすめです。方向性を一気に決めたい方はStrategy Sprint（6週間／¥132,000）、進学・キャリア選択を実際に進める方はCore Program（3ヶ月／¥264,000）、中長期で動かす方はOngoing Support（月額¥44,000）をご利用ください。",
  },
  {
    question: "奨学金サポートだけ単独で利用できますか？",
    answer:
      "奨学金サポート（＋¥55,000）は、Strategy SprintまたはCore Programに付随するオプションのため、単独でのご利用はできません。代筆・添削は行わず、奨学金の選定・応募戦略・エッセイ構造設計など、出願全体との一貫性を整理する形で支援します。",
  },
  {
    question: "メンバーシップとは何ですか？",
    answer:
      "月額¥5,500の任意メンバーシップで、月2回のオンラインセミナー、メンバー限定コミュニティ、対面イベント・交流会（不定期）にご参加いただけます。Strategy Sprint・Core Program参加者は初月無料です（単発セッション・Ongoing Supportは対象外）。",
  },
  {
    question: "セッションはどのように行われますか？",
    answer:
      "すべてのセッションは完全オンライン（Zoom等の指定ツール）で行います。居住地や国を問わず、国内外どこからでもご利用いただけます。",
  },
  {
    question: "キャンセル・返金は可能ですか？",
    answer:
      "サービス開始の72時間前までは全額返金、48〜24時間前は50％返金、24時間以内および無断キャンセルは返金不可とさせていただきます。天災等の不可抗力の場合は個別対応します。",
  },
  {
    question: "男性も利用できますか？",
    answer:
      "Lumina Pathwaysは女性を対象としたサービスです。女性が自分の意思で世界を舞台にキャリアを築ける状態を伴走でつくることを目的としています。",
  },
  {
    question: "初回は何を相談すればいいですか？",
    answer:
      "初回の60分セッションでは、現在の状況やお悩みをお聞きしながら、一緒に課題を整理します。「何から始めればいいかわからない」という段階でも問題ありません。事前にお送りする簡単なアンケートにお答えいただくことで、より有意義な時間にできます。",
  },
];

export default function FAQ() {
  return (
    <>
      <Section>
        <PageHeader
          label="FAQ"
          title="よくあるご質問"
          description="サービスに関するご質問をまとめています。"
        />

        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
