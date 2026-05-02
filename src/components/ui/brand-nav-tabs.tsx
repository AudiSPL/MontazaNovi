import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export type BrandNavTabItem = {
  label: string;
  href: string;
};

function resolveActiveIndex(items: BrandNavTabItem[], hash: string): number {
  const h = hash || "";
  const direct = items.findIndex((item) => item.href === h);
  if (direct !== -1) return direct;
  if (!h || h === "#") {
    const home = items.findIndex(
      (item) => item.href === "#hero" || item.href === "#pocetna" || item.href === "/",
    );
    return home !== -1 ? home : 0;
  }
  return 0;
}

type BrandNavTabsProps = {
  items: BrandNavTabItem[];
  className?: string;
};

export function BrandNavTabs({ items, className }: BrandNavTabsProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const syncHash = useCallback(() => {
    setActiveIndex(resolveActiveIndex(items, typeof window !== "undefined" ? window.location.hash : ""));
  }, [items]);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [syncHash]);

  const measure = useCallback((index: number) => {
    const container = containerRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;
    const cr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    setPill({
      left: er.left - cr.left,
      top: er.top - cr.top,
      width: er.width,
      height: er.height,
    });
  }, []);

  const targetIndex = hovered ?? activeIndex;

  useLayoutEffect(() => {
    measure(targetIndex);
  }, [measure, targetIndex, items.length]);

  useEffect(() => {
    const onResize = () => measure(targetIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure, targetIndex]);

  const transition = reduceMotion
    ? { duration: 0.12, ease: "easeOut" as const }
    : { type: "spring" as const, stiffness: 520, damping: 38, mass: 0.85 };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-row items-stretch rounded-full border border-white/[0.1] bg-graphite/55 px-1 py-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md",
        className,
      )}
      onMouseLeave={() => setHovered(null)}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute z-0 rounded-full bg-tool-yellow/[0.13] ring-1 ring-tool-yellow/[0.22]"
        initial={false}
        animate={{
          left: pill.left,
          top: pill.top,
          width: pill.width,
          height: pill.height,
          opacity: pill.width > 0 ? 1 : 0,
        }}
        transition={transition}
      />
      {items.map((item, i) => {
        const isActive = i === activeIndex && hovered === null;
        const isHoverTarget = hovered === i;
        return (
          <a
            key={item.href}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onMouseEnter={() => setHovered(i)}
            onFocus={() => setHovered(i)}
            onBlur={(e) => {
              const next = e.relatedTarget as Node | null;
              if (next && containerRef.current?.contains(next)) return;
              setHovered(null);
            }}
            className={cn(
              "relative z-10 whitespace-nowrap rounded-full px-3.5 py-2 font-semibold leading-none tracking-[-0.01em] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "text-[13px] text-primary-foreground/66 sm:text-[14px]",
              (isActive || isHoverTarget) && "text-primary-foreground",
            )}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
