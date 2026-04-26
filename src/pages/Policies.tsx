import Section from "../components/Section";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";

const terms = [
  {
    title: "第1条（適用）",
    body: "本規約は当サービスの利用に適用されます。",
  },
  {
    title: "第2条（利用対象）",
    body: "本サービスは女性を対象とし、条件を満たさない場合は利用をお断りすることがあります。",
  },
  {
    title: "第3条（サービス内容）",
    body: "キャリア・進学・学び直しにおける意思決定支援サービスを提供します。",
  },
  {
    title: "第4条（契約成立）",
    body: "申込および決済完了時点で契約成立とします。本サービスは事前予約制のコンサルティングサービスであり、特定商取引法に基づくクーリングオフ制度の対象外です。本サービスはデジタルコンサルティングサービスの性質上、提供開始後の返金には原則として応じません（別途キャンセルポリシーに従います）。",
  },
  {
    title: "第5条（料金）",
    body: "利用者は所定の料金を支払うものとします。",
  },
  {
    title: "第6条（セッション提供）",
    body: "予約確定日時にオンラインにて提供します。",
  },
  {
    title: "第7条（キャンセル）",
    body: "キャンセルポリシーに従います。サービス開始72時間前まで全額返金／48〜24時間前は50％返金／24時間以内および無断キャンセルは返金不可。",
  },
  {
    title: "第8条（禁止事項）",
    body: "虚偽申告、運営妨害、その他不適切と判断される行為を禁止します。",
  },
  {
    title: "第9条（免責）",
    body: "本サービスは結果保証を行いません。",
  },
  {
    title: "第10条（変更・停止）",
    body: "サービス内容は予告なく変更・停止する場合があります。",
  },
  {
    title: "第11条（規約変更）",
    body: "本規約は変更される場合があります。",
  },
  {
    title: "第12条（準拠法）",
    body: "日本法に準拠します。",
  },
];

export default function Policies() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <PageHeader label="Policies" title="運営ポリシー・利用規約" />

          <div className="space-y-14 text-[15px] text-stone-600 leading-[1.95]">
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
                    出願代行・文章の代筆・代理作成は行いません。「自分の言葉で語れる」状態をつくる伴走を行います。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    依存的な支援ではなく、意思決定そのものの力を育てることを目的としています。
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6">キャンセル・返金ポリシー</h2>
              <p className="mb-5">
                サービス開始前のキャンセルは以下の通り対応します。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>72時間前まで：全額返金</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>48〜24時間前：50％返金</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>24時間以内・無断キャンセル：返金不可</span>
                </li>
              </ul>
              <p className="mt-5 text-[14px] text-stone-500">
                ※ 天災等の不可抗力の場合は個別対応します。返金は指定口座への振込にて対応します。
              </p>
            </div>

            <div>
              <h2 className="mb-6">運営体制</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>完全予約制・枠数限定による品質重視の運営</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>セッション外対応は限定プランのみ対応</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
                  <span>
                    一人ひとりのクライアントに十分な時間と集中を確保するため、受け入れ枠を限定しています。
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6">利用規約</h2>
              <div className="space-y-6">
                {terms.map((t) => (
                  <div key={t.title}>
                    <h3 className="mb-2 font-serif text-[1.05rem] text-stone-800">
                      {t.title}
                    </h3>
                    <p className="text-[14px] leading-[1.85] text-stone-500">
                      {t.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
