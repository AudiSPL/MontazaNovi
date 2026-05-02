import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import logoMark from "@/assets/logo-mark.png";
import { BrandNavTabs, type BrandNavTabItem } from "@/components/ui/brand-nav-tabs";
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

function mobileNavMatchesHash(href: string, hash: string): boolean {
  const h = hash || "";
  if (href === "#hero") return h === "" || h === "#" || h === "#hero";
  return h === href;
}

/** Desktop pill nav — Početka koristi #hero jer je to scroll cilj početnog ekrana (id sekcije hero). */
const desktopBrandNavItems: BrandNavTabItem[] = [
  { label: "Početna", href: "#hero" },
  { label: "Usluge", href: "#usluge" },
  { label: "Radovi", href: "#radovi" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [navHash, setNavHash] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const measureHeader = useCallback(() => {
    const el = headerRef.current;
    if (!el) return;
    setMenuTop(el.getBoundingClientRect().bottom);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    measureHeader();
  }, [measureHeader, scrolled, menuOpen]);

  useEffect(() => {
    window.addEventListener("resize", measureHeader);
    return () => window.removeEventListener("resize", measureHeader);
  }, [measureHeader]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const sync = () => setNavHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (menuOpen) setNavHash(window.location.hash);
  }, [menuOpen]);

  const dropdownTop = Math.max(menuTop, 72) + 6;
  const ease = prefersReducedMotion ? ([0.25, 0, 0.75, 1] as const) : ([0.25, 0.1, 0.25, 1] as const);
  const dur = prefersReducedMotion ? 0.12 : 0.18;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 top-0 z-[100] min-w-0 border-b transition-[background-color,box-shadow,padding,border-color] duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-graphite/95 py-3 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="relative z-[101] container-narrow flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-3 rounded-md outline-none max-[767px]:gap-2.5 md:gap-[0.8125rem] focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={logoMark}
            alt="Montaža Nameštaja logo"
            width={44}
            height={44}
            className="h-[38px] w-auto shrink-0 self-center object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.42)] md:h-[42px]"
          />
          <span className="font-heading min-w-0 self-center text-[15px] font-bold leading-[1.2] tracking-[-0.012em] text-primary-foreground antialiased drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-[16px] md:text-lg md:font-semibold md:leading-tight md:tracking-[-0.022em]">
            Montaža Nameštaja
          </span>
        </a>

        <nav className="hidden shrink-0 items-center md:flex md:gap-5 lg:gap-7" aria-label="Glavna navigacija">
          <BrandNavTabs items={desktopBrandNavItems} />
          <CTAButton
            variant="primary"
            size="sm"
            href="#kontakt"
            className="shrink-0 rounded-full px-5 py-2 text-[13px] font-semibold shadow-md shadow-black/25 hover:shadow-[0_10px_28px_-12px_rgba(242,165,50,0.38)]"
          >
            Zakaži montažu
          </CTAButton>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-transparent text-primary-foreground transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-haspopup="dialog"
          aria-label={menuOpen ? "Zatvori mobilni meni" : "Otvori mobilni meni"}
        >
          {menuOpen ? <X size={22} strokeWidth={2} aria-hidden /> : <Menu size={22} strokeWidth={2} aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: dur, ease }}
              className="fixed inset-x-0 bottom-0 z-[90] bg-black/[0.68] backdrop-blur-[6px] md:hidden"
              style={{ top: Math.max(menuTop, 72) }}
              aria-hidden
              onClick={closeMenu}
            />
            <motion.div
              key="mobile-nav-panel"
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: dur, ease }}
              className="fixed left-4 right-4 z-[95] min-w-0 max-h-[85dvh] overflow-x-hidden overflow-y-auto rounded-xl border border-white/[0.1] bg-[hsl(var(--graphite))] shadow-[0_22px_56px_-8px_rgba(0,0,0,0.72),0_0_0_1px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.06] md:hidden"
              style={{ top: dropdownTop }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="mobile-menu-title" className="sr-only">
                Mobilna navigacija — Montaža Nameštaja
              </h2>

              <nav className="min-w-0 px-1.5 pb-1 pt-1" aria-label="Mobilna navigacija">
                <ul className="min-w-0 divide-y divide-white/[0.07]">
                  {desktopBrandNavItems.map((link) => {
                    const active = mobileNavMatchesHash(link.href, navHash);
                    return (
                      <li key={link.href} className="min-w-0">
                        <a
                          href={link.href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-h-[42px] items-center px-2.5 py-1.5 text-[15px] font-medium leading-snug tracking-[-0.01em] transition-colors duration-150 rounded-md mx-0.5",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--graphite))]",
                            active
                              ? "font-semibold text-tool-yellow"
                              : "text-primary-foreground/95 hover:bg-white/[0.05] hover:text-tool-yellow active:bg-white/[0.07]",
                          )}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-white/[0.07] px-2.5 pb-2 pt-2">
                <CTAButton
                  variant="primary"
                  size="sm"
                  href="tel:0648780129"
                  leftIcon={<Phone strokeWidth={2.25} className="size-[17px]" />}
                  onClick={closeMenu}
                  aria-label="Pozovi 064 8780 129"
                  className="h-[44px] min-h-[44px] w-full justify-center rounded-lg px-3 py-0 text-[15px] font-bold leading-none tracking-[-0.01em] text-accent-foreground shadow-[0_8px_28px_-10px_rgba(242,165,50,0.55)] [&_svg]:size-[17px]"
                >
                  Pozovi odmah
                </CTAButton>
                {/* TODO: Potvrditi da su wa.me i viber:// linkovi konačni za posao. */}
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[12.5px] font-medium leading-snug text-primary-foreground/65">
                  <a
                    href="https://wa.me/381648780129"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="rounded-sm px-1 py-0.5 text-tool-yellow/95 underline decoration-tool-yellow/35 underline-offset-2 transition-colors hover:text-tool-yellow hover:decoration-tool-yellow/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--graphite))]"
                    aria-label="Pošalji poruku preko WhatsApp-a"
                  >
                    WhatsApp
                  </a>
                  <span className="text-primary-foreground/25 select-none" aria-hidden>
                    ·
                  </span>
                  <a
                    href="viber://chat?number=%2B381648780129"
                    onClick={closeMenu}
                    className="rounded-sm px-1 py-0.5 text-tool-yellow/95 underline decoration-tool-yellow/35 underline-offset-2 transition-colors hover:text-tool-yellow hover:decoration-tool-yellow/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--graphite))]"
                    aria-label="Pošalji poruku preko Vibera"
                  >
                    Viber
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
