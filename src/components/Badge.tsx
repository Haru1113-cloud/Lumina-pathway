export default function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "rose" | "sage";
}) {
  const styles = {
    default: "bg-stone-100 text-stone-600",
    rose: "bg-rose-50 text-rose-500",
    sage: "bg-sage-50 text-sage-500",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-wide ${styles[variant]}`}>
      {children}
    </span>
  );
}
