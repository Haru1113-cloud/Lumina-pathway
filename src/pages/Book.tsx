import Section from "../components/Section";
import PageHeader from "../components/PageHeader";

export default function Book() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <PageHeader
            label="Book a Session"
            title="セッションを予約"
            description="下記のカレンダーからご希望の日時をお選びください。初回は60分の単発セッションをおすすめしています。"
          />
        </div>

        {/* Calendly Embed Placeholder */}
        <div className="mx-auto max-w-md">
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-stone-200/80 bg-stone-50/50 px-8 py-14 transition-all duration-200 hover:border-stone-300 hover:bg-stone-50"
          >
            <div className="mb-5 flex justify-center">
              <svg
                className="h-10 w-10 text-stone-300 transition-colors group-hover:text-stone-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-[15px] font-medium text-stone-700">
              Calendlyで予約する
            </p>
            <p className="mt-2 text-[13px] text-stone-400">
              外部サイトが開きます
            </p>
          </a>
        </div>

        <ul className="mt-14 space-y-3 text-[13px] text-stone-400">
          <li>すべてのセッションは完全オンライン（Zoom等）で行います</li>
          <li>ご予約後、事前アンケートをお送りします</li>
          <li>無理な勧誘は一切ありません</li>
        </ul>
      </div>
    </Section>
  );
}
