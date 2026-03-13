import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Početna", href: "#hero" },
  { label: "Zašto mi", href: "#zasto-mi" },
  { label: "Usluge", href: "#usluge" },
  { label: "Radovi", href: "#radovi" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-graphite/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Montaža nameštaja logo" className="h-10 w-10" />
          <span className="font-heading font-bold text-lg text-primary-foreground tracking-tight">
            MontažaPro
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-tool-yellow transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+381648780129"
            className="inline-flex items-center gap-2 bg-tool-yellow text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all"
          >
            <Phone size={16} />
            064 8780 129
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-graphite/98 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-primary-foreground/80 hover:text-tool-yellow transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+381648780129"
                className="inline-flex items-center justify-center gap-2 bg-tool-yellow text-accent-foreground font-semibold px-5 py-3 rounded-lg mt-2"
              >
                <Phone size={16} />
                Pozovite odmah
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
