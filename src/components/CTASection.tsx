import Section from "./Section";
import Button from "./Button";

export default function CTASection() {
  return (
    <Section bg="muted">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-5">まずは一歩、踏み出してみませんか</h2>
        <p className="mb-10 text-stone-500 leading-relaxed">
          60分の単発セッションで、今抱えている迷いや課題を整理します。
          <br className="hidden sm:block" />
          無理な勧誘は一切ありません。
        </p>
        <div>
          <Button to="/book" size="lg" className="!text-[#111827]">
            60分で迷いを整理する（単発セッション）
          </Button>
          <p className="mt-3 text-[12px] text-stone-400">完全オンライン・枠数限定</p>
        </div>
      </div>
    </Section>
  );
}
