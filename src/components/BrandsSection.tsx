import { motion } from "framer-motion";

const brands = ["IKEA", "Forma Ideale", "JYSK", "Vitorog", "Jela Jagodina"];

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-tool-yellow tracking-wider uppercase">
            Iskustvo sa vodećim brendovima
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Poznajemo sisteme, poznajemo nameštaj
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Imamo dugogodišnje iskustvo u montaži i demontaži nameštaja poznatih
            proizvođača kao što su IKEA, Forma Ideale, JYSK, Vitorog i Jela
            Jagodina. Poznajemo različite sisteme spajanja, okove i načine
            montaže, što omogućava brz, siguran i precizan rad.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background border border-border rounded-xl px-8 py-4 font-heading font-semibold text-foreground text-lg hover:border-tool-yellow/40 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
