import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rx = -100, ry = -100;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
    };

    const animate = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button, [role='button']");
      setHovered(!!el);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400 transition-[width,height,opacity] duration-150"
        style={{ width: hovered ? 8 : 6, height: hovered ? 8 : 6 }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-400/50 transition-[width,height,opacity] duration-200"
        style={{ width: hovered ? 40 : 28, height: hovered ? 40 : 28, opacity: hovered ? 0.7 : 0.4 }}
      />
    </>
  );
}
