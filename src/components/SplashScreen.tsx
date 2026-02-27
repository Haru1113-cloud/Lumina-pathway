import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [splitting, setSplitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSplitting(true), 2200);
    const t2 = setTimeout(() => { setDone(true); onComplete(); }, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      {/* Top panel */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#FAFAF8] transition-transform duration-700 ease-in-out"
        style={{ transform: splitting ? "translateY(-100%)" : "translateY(0)" }}
      />
      {/* Bottom panel */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#FAFAF8] transition-transform duration-700 ease-in-out"
        style={{ transform: splitting ? "translateY(100%)" : "translateY(0)" }}
      />
      {/* Center content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300"
        style={{ opacity: splitting ? 0 : 1 }}
      >
        <div className="splash-line" />
        <p className="splash-logo font-serif text-[1.5rem] tracking-[0.06em] text-[#111827]">
          Lumina Pathways
        </p>
        <div className="splash-line" />
      </div>
    </div>
  );
}
