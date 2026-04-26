import Section from "../components/Section";
import PageHeader from "../components/PageHeader";

export default function Privacy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <PageHeader label="Privacy Policy" title="プライバシーポリシー" />

        <div className="space-y-12 text-[15px] text-stone-600 leading-[1.95]">
          <p>
            Lumina Pathways（以下「当サービス」）は、個人情報の重要性を認識し、適切に取り扱います。
          </p>

          <div>
            <h2 className="mb-5">第1条（個人情報の定義）</h2>
            <p>
              個人情報とは、氏名・メールアドレス等、特定の個人を識別できる情報を指します。
            </p>
          </div>

          <div>
            <h2 className="mb-5">第2条（取得方法）</h2>
            <p>当サービスは、以下の方法で個人情報を取得します。</p>
            <ul className="mt-4 space-y-2 text-[14px] text-stone-500">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                事前申込フォーム
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                アンケート
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                セッション内でご共有いただく経歴・学歴等の情報
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5">第3条（利用目的）</h2>
            <p>取得した個人情報は、以下の目的で利用します。</p>
            <ul className="mt-4 space-y-2 text-[14px] text-stone-500">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                サービス提供
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                コミュニケーション
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                サービス改善
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                必要な連絡
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5">第4条（管理）</h2>
            <p>
              個人情報の漏洩・紛失・改ざんを防止するため、適切な管理・セキュリティ対策に努めます。
            </p>
          </div>

          <div>
            <h2 className="mb-5">第5条（第三者提供）</h2>
            <p>以下の場合を除き、第三者提供は行いません。</p>
            <ul className="mt-4 space-y-2 text-[14px] text-stone-500">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                本人の同意がある場合
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                法令に基づく場合
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5">第6条（外部サービスの利用）</h2>
            <p>
              当サービスでは、予約管理および決済・セッション実施のために外部サービス（Calendly、Zoom等）を利用しています。各サービスのプライバシーポリシーについては、それぞれの公式サイトをご確認ください。
            </p>
          </div>

          <div>
            <h2 className="mb-5">第7条（お問い合わせ）</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <p className="mt-3 text-[14px] text-stone-500">
              Lumina Pathways
              <br />
              info@luminapathways.jp
            </p>
          </div>

          <div>
            <h2 className="mb-5">免責事項</h2>
            <p>
              当サービスは、グローバルキャリアおよび進学に関する意思決定支援を目的とするものであり、進学・就職等の結果を保証するものではありません。最終的な意思決定は利用者自身の責任で行うものとします。また、本サービス利用による損害について、故意または重大な過失がある場合を除き責任を負いません。
            </p>
          </div>

          <p className="text-[12px] text-stone-400">
            制定日：2025年2月
          </p>
        </div>
      </div>
    </Section>
  );
}
