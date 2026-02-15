import Section from "../components/Section";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

export default function About() {
  return (
    <>
      <Section>
        <PageHeader label="About" title="Lumina Pathways について" />

        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="space-y-12">
            <div>
              <p className="mb-2 text-[13px] font-medium tracking-[0.12em] text-sage-500 uppercase">
                Vision
              </p>
              <h2 className="mb-5">女性が自分の力で世界に挑戦できる社会を創る。</h2>
            </div>

            <div>
              <p className="mb-2 text-[13px] font-medium tracking-[0.12em] text-sage-500 uppercase">
                Mission
              </p>
              <h2 className="mb-5">一人ひとりの意思決定に寄り添い、進むべき道に光をあてる。</h2>
            </div>
          </div>

          <div>
            <div className="aspect-[4/3] rounded-2xl border border-stone-200/80 bg-stone-50 flex items-center justify-center">
              <p className="text-[13px] text-stone-300">Image Placeholder</p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="stone">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center">事業について</h2>
          <div className="space-y-6 text-[15px] text-stone-600 leading-[1.9]">
            <p>
              Lumina Pathwaysは、海外大学院進学や学び直し、海外キャリアを検討する女性に対し、情報提供や代行ではなく「意思決定の整理」と「主体的に選ぶ力」を育てる伴走型サービスを提供する事業です。
            </p>
            <p>
              25〜40代の女性を主な対象とし、米・英・加・豪などの海外大学院進学を検討中の方、学び直しやキャリア転換に迷いがある方に対して、少人数制による心理的安全性の高い環境でサポートを行います。
            </p>
            <p>
              文章の代筆や出願代行は行わず、SOP（Statement of Purpose）をゼロの段階から整理・構築し、「自分の言葉で語れる」状態をつくることを目指しています。
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center">代表者について</h2>
          <p className="text-[15px] text-stone-600 leading-[1.9]">
            海外大学・大学院に関する実務経験を持ち、日本・海外教育機関との連携実績があります。海外進学・キャリア支援の専門性を活かし、クライアント一人ひとりの状況に寄り添った伴走型サポートを提供しています。
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
