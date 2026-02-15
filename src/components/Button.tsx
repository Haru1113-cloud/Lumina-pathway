import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium tracking-normal transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-rose-400 text-white hover:bg-rose-500 active:bg-rose-600",
    secondary:
      "bg-sage-50 text-sage-600 hover:bg-sage-100 active:bg-sage-200",
    outline:
      "border border-brand-border text-stone-600 hover:border-stone-400 hover:text-brand-text active:bg-stone-50",
    ghost:
      "text-stone-500 hover:text-brand-text hover:bg-stone-50 active:bg-stone-100",
  };

  const sizes = {
    sm: "h-9 px-4 text-[13px] rounded-lg gap-2",
    md: "h-11 px-6 text-[13px] rounded-lg gap-2",
    lg: "h-12 px-8 text-sm rounded-xl gap-2.5",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to && !disabled) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  if (href && !disabled) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }

  return <button onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}
