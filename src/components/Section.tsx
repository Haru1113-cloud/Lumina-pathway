import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  bg = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "default" | "muted" | "white";
  id?: string;
}) {
  const bgClass =
    bg === "muted" ? "bg-stone-100" :
    bg === "white" ? "bg-white" :
    "bg-brand-bg";

  return (
    <section id={id} className={`py-24 md:py-32 ${bgClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
