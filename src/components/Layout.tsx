import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";

const CTA_LABEL = "60分で迷いを整理する（単発セッション）";

const navLinks = [
  { to: "/services", label: "サービス" },
  { to: "/pricing", label: "料金" },
  { to: "/process", label: "ご利用の流れ" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/60 bg-brand-bg/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-8">
          <Link to="/" className="flex-shrink-0 font-serif text-[1.3rem] font-semibold tracking-[0.02em] text-brand-text">
            Lumina Pathways
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.04em] transition-colors duration-150 ${
                    isActive ? "text-brand-text font-medium" : "text-stone-400 hover:text-stone-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden flex-shrink-0 lg:block">
            <Button to="/book" size="sm">{CTA_LABEL}</Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-stone-100 lg:hidden"
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="flex w-[18px] flex-col items-center gap-[5px]">
              <span className={`block h-[1.5px] w-full rounded-full bg-stone-600 transition-all duration-300 ${mobileOpen ? "translate-y-[3.25px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-full rounded-full bg-stone-600 transition-all duration-300 ${mobileOpen ? "-translate-y-[3.25px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </Container>

      <div className={`fixed inset-x-0 top-[73px] bottom-0 z-40 bg-brand-bg transition-all duration-300 ease-out lg:hidden ${
        mobileOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}>
        <Container>
          <nav className="flex flex-col gap-1 pt-6 pb-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-[15px] transition-colors ${
                    isActive ? "bg-stone-100 font-medium text-brand-text" : "text-stone-500 hover:bg-stone-100 hover:text-stone-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-6 px-4">
              <Button to="/book" size="lg" className="w-full">{CTA_LABEL}</Button>
              <p className="mt-2 text-center text-[12px] text-stone-400">完全オンライン・枠数限定</p>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

const footerNavLinks = [
  { to: "/services", label: "サービス" },
  { to: "/pricing", label: "料金" },
  { to: "/process", label: "ご利用の流れ" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
];
const footerLegalLinks = [
  { to: "/policies", label: "運営ポリシー" },
  { to: "/legal", label: "特定商取引法に基づく表記" },
  { to: "/privacy", label: "プライバシーポリシー" },
];

function Footer() {
  return (
    <footer className="border-t border-brand-border/60 bg-stone-100">
      <Container>
        <div className="py-20">
          <div className="mb-14 flex flex-col gap-10 md:flex-row md:justify-between">
            <div>
              <Link to="/" className="font-serif text-lg font-semibold tracking-[0.02em] text-brand-text">
                Lumina Pathways
              </Link>
              <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-stone-400">
                女性が自分の力で世界に挑戦できる社会を創る。
              </p>
            </div>
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              <div>
                <p className="mb-4 text-[11px] font-medium tracking-[0.12em] text-stone-400 uppercase">Menu</p>
                <div className="flex flex-col gap-2.5">
                  {footerNavLinks.map((l) => (
                    <Link key={l.to} to={l.to} className="text-[13px] text-stone-500 transition-colors hover:text-stone-700">{l.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-4 text-[11px] font-medium tracking-[0.12em] text-stone-400 uppercase">Legal</p>
                <div className="flex flex-col gap-2.5">
                  {footerLegalLinks.map((l) => (
                    <Link key={l.to} to={l.to} className="text-[13px] text-stone-500 transition-colors hover:text-stone-700">{l.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-border/60 pt-8">
            <p className="text-[11px] tracking-wide text-stone-400">
              &copy; {new Date().getFullYear()} Lumina Pathways. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
