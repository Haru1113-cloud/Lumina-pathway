import { useEffect, useRef } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";
import CTASection from "../components/CTASection";
import Container from "../components/Container";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FadeIn from "../components/FadeIn";
import heroPhoto from "../assets/hero-photo.png";
import valuesIllus from "../assets/values-illus.svg";
import feat01 from "../assets/feat-01.svg";
import feat02 from "../assets/feat-02.svg";
import feat03 from "../assets/feat-03.svg";

const values = [
  {
    title: "Clarity",
    desc: "複雑な選択肢を整理し、迷いを減らす。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    desc: "依存させず、自分で決める力を育てる。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22V12" />
        <path d="M8 16l4-4 4 4" />
        <path d="M5 8a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "誠実で透明性のあるサポートを提供する。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2l2.5 7H22l-6 4.5 2.3 7L12 17l-6.3 3.5L8 13 2 8.5h7.5z" />
      </svg>
    ),
  },
  {
    title: "Elegance",
    desc: "女性向け・海外キャリアにふさわしい洗練。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2c0 4-3 6-3 9a3 3 0 0 0 6 0c0-3-3-5-3-9z" />
        <path d="M6 9c3 0 5 2 5 5" />
        <path d="M18 9c-3 0-5 2-5 5" />
        <line x1="12" y1="17" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Flexibility",
    desc: "一人ひとりの背景やペースを尊重する。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2 12c2-4 4-6 6-6s4 4 6 4 4-6 6-6" />
        <path d="M2 18c2-3 4-5 6-5s4 3 6 3 4-4 6-4" />
      </svg>
    ),
  },
];

const features = [
  {
    icon: feat01,
    title: "意思決定の整理",
    desc: "進学先選び・キャリアの方向性など、複雑な選択肢を構造化し、あなた自身が納得できる判断を導きます。",
  },
  {
    icon: feat02,
    title: "SOP・CV の方向性設計",
    desc: "Statement of Purposeやレジュメの核となるストーリーを、ゼロの段階から一緒に構築します。代筆ではなく「自分の言葉」で語れる状態を目指します。",
  },
  {
    icon: feat03,
    title: "出願戦略の壁打ち",
    desc: "出願校の選定、スケジュール管理、面接準備まで、戦略的に伴走します。",
  },
];

function ValueCard({ v, className = "" }: { v: typeof values[number]; className?: string }) {
  return (
    <Card className={`!p-6 ${className}`}>
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-400">
        {v.icon}
      </div>
      <h4 className="mb-1.5 font-serif">{v.title}</h4>
      <p className="text-[13px] leading-relaxed text-stone-500">{v.desc}</p>
    </Card>
  );
}

export default function Home() {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPhoto}
            alt=""
            aria-hidden="true"
            ref={heroImgRef}
            className="h-full w-full object-cover object-[65%_15%] will-change-transform"
          />
          <div className="absolute inset-0 bg-black/[.34]" />
        </div>
        <Container className="relative z-10 py-28 md:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <p className="mb-4 text-[13px] font-medium tracking-[0.15em] uppercase text-white">
                海外大学院・キャリア支援
              </p>
              <h1 className="mb-6 text-white">
                自分の意思で、
                <br />
                世界を選ぶ力を。
              </h1>
              <p className="mb-10 text-lg leading-[1.9] text-white">
                Lumina Pathwaysは、海外大学院進学や海外キャリアを目指す女性のための意思決定伴走サービスです。
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button to="/book" size="lg">
                  60分 単発セッションを予約
                </Button>
                <Button to="/services" size="lg" className="!bg-[#e1e1e1] !text-[#111827] hover:!bg-[#d4d4d4]">
                  サービスを見る
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <TestimonialCarousel />

      {/* Values */}
      <Section bg="muted">
        <FadeIn className="mb-14 flex items-start justify-between gap-8 md:mb-16">
          <div className="max-w-xl">
            <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
              Values
            </p>
            <h2>大切にしていること</h2>
          </div>
          <div className="hidden flex-shrink-0 md:block">
            <img
              src={valuesIllus}
              alt=""
              aria-hidden="true"
              className="w-28 select-none opacity-70"
            />
          </div>
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          <FadeIn delay={0}   className="lg:col-span-2"><ValueCard v={values[0]} /></FadeIn>
          <FadeIn delay={80}  className="lg:col-span-2"><ValueCard v={values[1]} /></FadeIn>
          <FadeIn delay={160} className="lg:col-span-2"><ValueCard v={values[2]} /></FadeIn>
          <FadeIn delay={80}  className="lg:col-span-2 lg:col-start-2"><ValueCard v={values[3]} /></FadeIn>
          <FadeIn delay={160} className="lg:col-span-2"><ValueCard v={values[4]} /></FadeIn>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <FadeIn className="mb-14 max-w-xl md:mb-16">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            What We Do
          </p>
          <h2>提供するサポート</h2>
        </FadeIn>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="mb-5">
                <img
                  src={f.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-14 w-14 select-none"
                />
              </div>
              <h3 className="mb-3">{f.title}</h3>
              <p className="text-[14px] leading-[1.85] text-stone-500">{f.desc}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Differentiator */}
      <Section bg="muted">
        <FadeIn className="mb-14 max-w-xl md:mb-16">
          <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
            Difference
          </p>
          <h2>一般的な留学エージェントとの違い</h2>
        </FadeIn>
        <FadeIn delay={100} className="overflow-x-auto rounded-2xl border border-stone-200/80 bg-white">
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
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
