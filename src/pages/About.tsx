import Section from "../components/Section";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import aboutIllus from "../assets/about-illus.svg";

const valueItems = [
  { label: "Clarity", desc: "複雑な選択肢を整理し、迷いを減らす" },
  { label: "Empowerment", desc: "依存ではなく、自分で決める力を育てる" },
  { label: "Integrity", desc: "誠実で透明性のあるサポート" },
  { label: "Elegance", desc: "女性のキャリアにふさわしい洗練された体験設計" },
  { label: "Flexibility", desc: "背景や人生状況に応じた柔軟な支援" },
];

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
              <h2 className="mb-5">
                女性が自分の意思で世界を舞台にキャリアを築ける社会を創る。
              </h2>
            </div>

            <div>
              <p className="mb-2 text-[13px] font-medium tracking-[0.12em] text-sage-500 uppercase">
                Mission
              </p>
              <h2 className="mb-5">
                一人ひとりの意思決定に寄り添い、複雑な選択肢の中に“進むべき道”を言語化する。
              </h2>
            </div>
          </div>

          <div>
            <img
              src={aboutIllus}
              alt=""
              aria-hidden="true"
              className="w-full rounded-2xl border border-stone-200/80 select-none"
            />
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-[13px] font-medium tracking-[0.12em] text-sage-500 uppercase">
            Values
          </p>
          <h2 className="mb-10 text-center">大切にしている5つの価値</h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {valueItems.map((v) => (
              <li
                key={v.label}
                className="rounded-2xl border border-stone-200/80 bg-white p-6"
              >
                <p className="mb-2 font-serif text-[1.05rem] text-stone-800">
                  {v.label}
                </p>
                <p className="text-[14px] leading-[1.85] text-stone-500">
                  {v.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center">事業について</h2>
          <div className="space-y-6 text-[15px] text-stone-600 leading-[1.95]">
            <p>
              Lumina Pathwaysは、海外大学院進学そのものをゴールとするのではなく、キャリア・学び・人生の選択肢を横断的に整理し、「自分で納得して選択できる状態」をつくる伴走型サービスです。
            </p>
            <p>
              25〜40歳の女性を主なターゲットに、海外キャリア・海外大学院進学・学び直しを検討中の方へ、SOP・CVなどの「書類作成」ではなく「戦略設計」を支援。奨学金・資金戦略を含めた現実的な意思決定を伴走します。
            </p>
            <p>
              出願代行や文章の代筆・代理作成は行いません。依存的な支援ではなく、意思決定そのものの力を育てることを目的としています。
            </p>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-[13px] font-medium tracking-[0.12em] text-sage-500 uppercase">
            Founder
          </p>
          <h2 className="mb-3 text-center">代表者プロフィール</h2>
          <p className="mb-10 text-center font-serif text-[1.1rem] text-stone-700">
            軽尾 貴子 ｜ Takako Karuo
          </p>
          <div className="space-y-6 text-[15px] text-stone-600 leading-[1.95]">
            <p>
              高校時代にカナダへの短期留学を経験したことをきっかけに、海外で学び・働くことに関心を持つ。その後渡米し、University of California, Berkeleyを卒業。現在はTeachers College, Columbia Universityに在籍し、国際教育およびキャリア領域を専門とする。
            </p>
            <p>
              卒業後はベネッセコーポレーションに入社し、新規事業の立ち上げ・マーケティング・コミュニティ運営をリード。戦略設計から実行まで一貫して携わる。並行して、学生時代から海外大学・大学院進学支援に関わり、出願戦略の設計やキャリア選択の伴走を多数経験。
            </p>
            <p>
              現在は、オーストラリアの大学および附属語学学校の駐日代表として日本マーケットを統括し、留学支援・奨学金サポート・グローバルキャリア支援に従事している。
            </p>
            <p>
              これまで多くの意思決定に伴走する中で、情報や選択肢があるだけでは人は前に進めず、「自分で納得して選べる状態」をつくることこそが最も重要であると考えるようになった。海外大学院進学およびキャリア選択における意思決定支援を専門とし、一人ひとりが自分の意思で進路を選べる状態をつくることを大切にしている。
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[13px] font-medium tracking-[0.12em] text-sage-500 uppercase">
            Concept
          </p>
          <h2 className="font-serif italic">
            “正解を選ぶのではなく、<br className="hidden sm:block" />自分で選べる状態をつくる”
          </h2>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
