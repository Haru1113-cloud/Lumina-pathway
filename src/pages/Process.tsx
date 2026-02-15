import Section from "../components/Section";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const steps = [
  {
    num: "01",
    title: "セッションを予約",
    desc: "ご希望の日時をオンライン予約フォームからお選びください。初回は60分の単発セッションをおすすめしています。",
  },
  {
    num: "02",
    title: "事前ヒアリング",
    desc: "ご予約後、簡単な事前アンケートをお送りします。現在の状況や課題感を共有いただくことで、セッションをより有意義な時間にします。",
  },
  {
    num: "03",
    title: "セッション実施",
    desc: "Zoom等のオンラインツールで60分のセッションを行います。意思決定の整理、SOP・CVの方向性設計、出願戦略の壁打ちなど、あなたの状況に合わせて進めます。",
  },
  {
    num: "04",
    title: "振り返りと次のステップ",
    desc: "セッション後、整理した内容と次のアクションを共有します。継続的なサポートが必要な場合は、チケット制パスへの移行もご案内できます。",
  },
];

export default function Process() {
  return (
    <>
      <Section>
        <PageHeader
          label="Process"
          title="ご利用の流れ"
          description="予約からセッション、フォローアップまで。シンプルな4ステップでご利用いただけます。"
        />

        <div className="mx-auto max-w-3xl">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative flex gap-8 pb-14 last:pb-0"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[19px] top-[48px] bottom-0 w-px bg-stone-200/80" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-[13px] font-medium text-stone-400">
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div className="pt-1.5">
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-[14px] leading-[1.85] text-stone-500">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="stone">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6">完全オンライン対応</h2>
          <p className="text-stone-500 leading-relaxed">
            すべてのセッションはZoom等のオンラインツールで実施します。居住地や国を問わず、国内外どこからでもご利用いただけます。海外在住者や多忙な社会人の方にも柔軟に対応しています。
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
