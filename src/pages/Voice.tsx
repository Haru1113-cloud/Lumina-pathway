import { useParams, Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import Container from "../components/Container";
import Button from "../components/Button";

export default function Voice() {
  const { id } = useParams();
  const t = testimonials.find((t) => t.id === Number(id));

  if (!t) {
    return (
      <Container className="py-32 text-center">
        <p className="text-stone-400">記事が見つかりませんでした。</p>
        <Link to="/" className="mt-6 inline-block text-sm text-rose-400 hover:underline">
          トップへ戻る
        </Link>
      </Container>
    );
  }

  return (
    <div className="bg-brand-bg">
      {/* Header */}
      <div className={`bg-gradient-to-br ${t.gradient} py-20`}>
        <Container>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[13px] text-stone-500 hover:text-stone-700"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            一覧に戻る
          </Link>
          <span className="mb-4 inline-block rounded-full bg-white/70 px-3 py-1 text-[12px] font-medium text-rose-400">
            {t.tag}
          </span>
          <h1 className="mb-4 font-serif text-3xl text-stone-800">
            {t.name}のストーリー
          </h1>
          <p className="text-[14px] text-stone-600">
            {t.age}・{t.job}
          </p>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          {/* Intro */}
          <div className="mb-12 rounded-2xl border border-stone-200 bg-stone-50 p-7">
            <p className="text-[15px] leading-[1.9] text-stone-600">{t.interview.intro}</p>
          </div>

          {/* Quote */}
          <blockquote className="mb-12 border-l-2 border-rose-300 pl-6">
            <p className="font-serif text-xl leading-relaxed text-stone-700">
              "{t.comment}"
            </p>
          </blockquote>

          {/* Q&A */}
          <div className="space-y-10">
            {t.interview.qa.map((item, i) => (
              <div key={i}>
                <p className="mb-3 flex items-start gap-3 font-serif text-[17px] font-medium text-stone-800">
                  <span className="mt-0.5 flex-shrink-0 font-sans text-[13px] font-semibold text-rose-400">Q</span>
                  {item.q}
                </p>
                <p className="flex items-start gap-3 text-[15px] leading-[1.9] text-stone-600">
                  <span className="mt-0.5 flex-shrink-0 text-[13px] font-semibold text-sage-500">A</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-stone-100 p-8 text-center">
            <p className="mb-2 font-serif text-xl text-stone-800">あなたも一歩、踏み出してみませんか</p>
            <p className="mb-6 text-[14px] text-stone-500">60分の単発セッションで、今の迷いを整理します。</p>
            <Button to="/book" size="lg">60分 単発セッションを予約</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
