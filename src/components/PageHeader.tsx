export default function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-16 max-w-2xl md:mb-20">
      <p className="mb-3 text-[13px] font-medium tracking-[0.15em] text-rose-400 uppercase">
        {label}
      </p>
      <h1 className="mb-5">{title}</h1>
      {description && (
        <p className="text-base leading-relaxed text-stone-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
