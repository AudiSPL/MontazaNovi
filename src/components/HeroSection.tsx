import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Montaža nameštaja"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,10%,16%,0.85)] via-[hsl(220,10%,16%,0.7)] to-[hsl(220,10%,16%,0.95)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-tool-yellow/10 border border-tool-yellow/30 text-tool-yellow text-sm font-medium px-4 py-1.5 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-tool-yellow animate-pulse" />
            Beograd i okolina
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Montaža i demontaža
            <br />
            nameštaja{" "}
            <span className="text-gradient">bez komplikacija</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Profesionalno sklapanje, rasklapanje i ponovna montaža nameštaja u
            Beogradu i okolini. Dugogodišnje iskustvo, precizan rad i pouzdana
            usluga.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+381648780129"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tool-yellow text-accent-foreground font-bold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-[hsl(38,92%,50%,0.3)]"
            >
              <Phone size={20} />
              Pozovite odmah
            </a>
            <a
              href="https://wa.me/381648780129"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground font-semibold text-base px-8 py-4 rounded-xl hover:border-tool-yellow hover:text-tool-yellow transition-all"
            >
              <MessageCircle size={20} />
              Pošaljite poruku
            </a>
            <a
              href="#radovi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary-foreground/60 font-medium text-base px-8 py-4 rounded-xl hover:text-tool-yellow transition-colors"
            >
              Pogledajte radove
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-tool-yellow rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
