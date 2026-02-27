import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";

const cards = [...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  return (
    <div className="overflow-x-hidden bg-stone-50 py-14">
      <div className="mb-8 px-6 text-center">
        <p className="text-[13px] font-medium tracking-[0.15em] text-sage-500 uppercase">
          Voice
        </p>
        <h2 className="mt-2 text-[1.5rem]">ご利用者の声</h2>
      </div>

      <div className="relative py-4">
        <div className="flex w-max animate-marquee gap-5 px-5">
          {cards.map((t, i) => (
            <Link
              key={i}
              to={`/voices/${t.id}`}
              className="group w-72 flex-shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm
                         transition-all duration-300 ease-out
                         hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl"
            >
              {/* Dummy image area */}
              <div className={`h-40 bg-gradient-to-br ${t.gradient}`} />

              {/* Comment area */}
              <div className="p-5">
                <span className="mb-3 inline-block rounded-full bg-rose-50 px-3 py-1 text-[11px] font-medium tracking-wide text-rose-400">
                  {t.tag}
                </span>
                <p className="mb-4 text-[13px] leading-[1.85] text-stone-600">
                  "{t.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-medium text-stone-400">
                    {t.name}・{t.age}
                  </p>
                  <span className="text-[12px] text-rose-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    記事を読む →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
