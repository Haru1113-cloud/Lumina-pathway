import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-brand-border bg-white p-7 sm:p-9 ${className}`}>
      {children}
    </div>
  );
}
