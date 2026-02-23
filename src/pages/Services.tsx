import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

export default function Services() {
  return (
    <>
      <Section>
        <PageHeader
          label="Services"
          title="サービス内容"
          description="Lumina Pathwaysのすべてのサービスは完全オンラインで提供されます。居住地や国を問わず、海外在住者や多忙な社会人でも柔軟にご利用いただけます。"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <p className="mb-1 text-[13px] font-medium text-sage-500">01</p>
            <h3 className="mb-4">単発セッション</h3>
            <p className="mb-8 flex-1 text-[14px] leading-[1.85] text-stone-500">
              60分のオンラインセッション（Zoom等）で、今抱えている課題を一緒に整理します。意思決定の整理、SOP・CVの方向性設計、出願戦略の壁打ちなど、ご自身の状況に合わせて柔軟に対応します。
            </p>
            <ul className="mb-8 space-y-3 text-[14px] text-stone-600">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                意思決定の整理
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                SOP・CVの方向性設計
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                出願戦略の壁打ち
              </li>
            </ul>
            <div className="mt-auto">
              <Button to="/book">セッションを予約</Button>
            </div>
          </Card>

          <Card className="flex flex-col">
            <p className="mb-1 text-[13px] font-medium text-sage-500">02</p>
            <h3 className="mb-4">チケット制パス</h3>
            <p className="mb-8 flex-1 text-[14px] leading-[1.85] text-stone-500">
              3回または5回のセッションをパッケージでご購入いただけます。継続的な伴走が必要な方に適したプランです。SOP構成のブラッシュアップ、推薦状の方向性整理、面接対策まで一貫してサポートします。
            </p>
            <ul className="mb-8 space-y-3 text-[14px] text-stone-600">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                SOP構成整理・ブラッシュアップ
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                CV・推薦状の方向性整理
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage-300" />
                面接対策・進路最終判断
              </li>
            </ul>
            <div className="mt-auto">
              <Button to="/pricing" variant="outline">料金を確認</Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section bg="muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6">代筆・出願代行は行いません</h2>
          <p className="text-stone-500 leading-relaxed">
            Lumina Pathwaysは「自分の言葉で語れる」状態をつくる伴走サービスです。文章の代筆や出願手続きの代行は一切行いません。あなた自身が主体的に考え、選び、進む力を育てることを最も大切にしています。
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
