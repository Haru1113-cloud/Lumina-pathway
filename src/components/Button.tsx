import { Link } from "react-router-dom";
import type { ReactNode, MouseEvent } from "react";

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

function createRipple(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.8;
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.style.cssText = `
    position:absolute;border-radius:50%;pointer-events:none;
    width:${size}px;height:${size}px;left:${x}px;top:${y}px;
    background:rgba(255,255,255,0.25);transform:scale(0);
    animation:btn-ripple 0.55s ease-out forwards;
  `;
  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

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
    "relative overflow-hidden inline-flex items-center justify-center font-sans font-medium tracking-normal transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

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

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    createRipple(e);
    onClick?.();
  };

  if (to && !disabled) {
    return <Link to={to} className={cls} onClick={handleClick}>{children}</Link>;
  }

  if (href && !disabled) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={handleClick}>{children}</a>;
  }

  return <button onClick={handleClick} disabled={disabled} className={cls}>{children}</button>;
}
