import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="kontakt" className="section-padding bg-graphite relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-tool-yellow/5" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-tool-yellow/5" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Potrebna vam je sigurna i brza{" "}
            <span className="text-gradient">montaža nameštaja?</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mt-6 mb-4">
            Pozovite i zakažite termin za montažu ili demontažu nameštaja.
          </p>

          {/* Phone number */}
          <a
            href="tel:+381648780129"
            className="inline-block font-heading text-4xl sm:text-5xl font-bold text-tool-yellow hover:brightness-110 transition-all mb-8"
          >
            064 8780 129
          </a>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:+381648780129"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tool-yellow text-accent-foreground font-bold px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-[hsl(38,92%,50%,0.3)]"
            >
              <Phone size={20} />
              Pozovite
            </a>
            <a
              href="viber://chat?number=%2B381648780129"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:border-[#7360F2] hover:text-[#7360F2] transition-all"
            >
              Viber
            </a>
            <a
              href="https://wa.me/381648780129"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:border-[#25D366] hover:text-[#25D366] transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          {/* Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/50">
            <span>📍 Beograd i okolina</span>
            <span>🕐 Dostupnost radnim danima</span>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/montazanamestajabg2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-tool-yellow transition-colors text-sm font-medium"
            >
              Instagram
            </a>
            <span className="text-primary-foreground/20">•</span>
            <a
              href="https://www.facebook.com/montazanamestajabg2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-tool-yellow transition-colors text-sm font-medium"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
