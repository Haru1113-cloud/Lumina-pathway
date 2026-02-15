import Section from "../components/Section";
import PageHeader from "../components/PageHeader";

export default function Privacy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <PageHeader label="Privacy Policy" title="プライバシーポリシー" />

        <div className="space-y-12 text-[15px] text-stone-600 leading-[1.9]">
          <div>
            <h2 className="mb-5">1. 個人情報の取得について</h2>
            <p>
              Lumina Pathways（以下「当サービス」）は、セッションの予約・提供にあたり、以下の個人情報を取得することがあります。
            </p>
            <ul className="mt-4 space-y-2 text-[14px] text-stone-500">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                氏名
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                メールアドレス
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                セッション内でご共有いただく経歴・学歴等の情報
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5">2. 利用目的</h2>
            <p>取得した個人情報は、以下の目的で利用します。</p>
            <ul className="mt-4 space-y-2 text-[14px] text-stone-500">
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                セッションの予約・日程調整
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                セッションの提供・サポート
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                お問い合わせへの対応
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[7px] block h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                サービス改善のための分析（個人を特定しない形式）
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5">3. 第三者への提供</h2>
            <p>
              法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>
          </div>

          <div>
            <h2 className="mb-5">4. 個人情報の管理</h2>
            <p>
              個人情報の漏洩・紛失・改ざんを防止するため、適切なセキュリティ対策を講じます。
            </p>
          </div>

          <div>
            <h2 className="mb-5">5. 外部サービスの利用</h2>
            <p>
              当サービスでは、予約管理にCalendly、セッション実施にZoom等の外部サービスを利用しています。各サービスのプライバシーポリシーについては、それぞれの公式サイトをご確認ください。
            </p>
          </div>

          <div>
            <h2 className="mb-5">6. お問い合わせ</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <p className="mt-3 text-[14px] text-stone-500">
              Lumina Pathways
              <br />
              （メールアドレスを記載）
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
