import logoMark from "@/assets/logo-mark.png";

const footerNav = [
  { label: "Usluge", href: "#usluge" },
  { label: "Radovi", href: "#radovi" },
  { label: "Kontakt", href: "#kontakt" },
];

const Footer = () => {
  return (
    <footer className="border-t border-primary-foreground/10 bg-graphite pb-20 pt-9 md:pb-12 md:pt-11">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-7 md:flex-row md:items-start md:justify-between md:gap-10">
          <a
            href="#hero"
            className="flex max-[767px]:gap-2.5 items-center gap-[11px] rounded-sm outline-none transition-[color,box-shadow] focus-visible:ring-2 focus-visible:ring-[hsl(var(--tool-yellow))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--graphite))]"
          >
            <img
              src={logoMark}
              alt="Montaža Nameštaja logo"
              width={40}
              height={40}
              className="h-8 w-auto shrink-0 object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)] sm:h-9 md:h-10"
            />
            <div className="text-center md:text-left">
              <span className="font-heading block text-lg font-bold text-primary-foreground">Montaža Nameštaja</span>
              <span className="mt-0.5 block text-xs text-primary-foreground/45">
                Profesionalna montaža nameštaja · Beograd i okolina
              </span>
            </div>
          </a>

          <nav aria-label="Footer navigacija">
            <ul className="flex max-w-[22rem] flex-wrap items-center justify-center gap-x-5 gap-y-2.5 md:max-w-none md:justify-end md:gap-x-6 md:gap-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-sm text-sm font-medium text-primary-foreground/55 transition-colors hover:text-tool-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:0648780129"
                  className="rounded-sm text-sm font-semibold text-tool-yellow transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  064 8780 129
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/montazanamestajabg2021/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-sm text-primary-foreground/45 transition-colors hover:text-tool-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/montazanamestajabg2021/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-sm text-primary-foreground/45 transition-colors hover:text-tool-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tool-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-8 border-t border-primary-foreground/[0.06] pt-6 text-center text-xs text-primary-foreground/30 md:text-left">
          © {new Date().getFullYear()} Montaža Nameštaja. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
