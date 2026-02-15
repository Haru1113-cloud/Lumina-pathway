import Section from "../components/Section";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

export default function Policies() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <PageHeader label="Policies" title="運営ポリシー" />

          <div className="space-y-14 text-[15px] text-stone-600 leading-[1.9]">
            <div>
              <h2 className="mb-6">サービス提供の基本方針</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    すべてのサービスは完全オンライン（Zoom等の指定ツール）で提供します。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>完全予約制・枠数限定で運営しています。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    文章の代筆・出願手続きの代行は行いません。「自分の言葉で語れる」状態をつくる伴走を行います。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    サービス品質維持のため、サポート範囲と時間を明確に定義しています。
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6">セッション外での質問対応について</h2>
              <p className="mb-5">
                Lumina Pathwaysでは、サービスの質と継続性を保つため、セッション外での質問対応について明確なルールを設けています。
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    原則として、セッション時間内での対応を基本とします。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    セッション外での質問対応は、質問対応付きプランを契約している場合のみ提供します。
                  </span>
                </li>
              </ul>
              <div className="rounded-2xl border border-stone-200/80 bg-stone-50/50 p-7">
                <h4 className="mb-4 text-stone-800">
                  質問対応付きプランの内容
                </h4>
                <ul className="space-y-3 text-[14px]">
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-400" />
                    <span>各セッション前後3日間の質問対応</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-400" />
                    <span>最大5件までの質問対応</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-400" />
                    <span>
                      対応方法はテキストベース（メール・指定ツール）
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-400" />
                    <span>即時返信は保証しません</span>
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-[14px] text-stone-500">
                これにより、クライアントがセッション内で主体的に思考・整理を行うことを重視しつつ、必要なタイミングでの補足サポートを可能としています。時間外質問対応は、依存を生まない健全な伴走関係を維持するための仕組みです。
              </p>
            </div>

            <div>
              <h2 className="mb-6">運営体制</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>高単価・少人数制による品質重視の運営</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    一人ひとりのクライアントに十分な時間と集中を確保するため、受け入れ枠を限定しています。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
