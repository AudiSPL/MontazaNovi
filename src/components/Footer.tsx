import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-primary-foreground/10 py-12">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MontažaPro" className="h-9 w-9" />
            <div>
              <span className="font-heading font-bold text-primary-foreground block">
                MontažaPro
              </span>
              <span className="text-xs text-primary-foreground/50">
                Montaža i demontaža nameštaja · Beograd i okolina
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/50">
            <a href="tel:+381648780129" className="hover:text-tool-yellow transition-colors">
              064 8780 129
            </a>
            <a
              href="https://www.instagram.com/montazanamestajabg2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tool-yellow transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/montazanamestajabg2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tool-yellow transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-primary-foreground/30 mt-8">
          © {new Date().getFullYear()} MontažaPro. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
