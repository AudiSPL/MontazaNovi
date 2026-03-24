import { motion } from "framer-motion";
import { Truck, MapPin, PackageCheck } from "lucide-react";
import transportVan from "@/assets/transport-van.jpg";

const TransportSection = () => {
  return (
    <section className="section-padding bg-graphite">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={transportVan}
              alt="Prevoz nameštaja - kombi vozilo"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-flex items-center gap-2 bg-tool-yellow/90 text-accent-foreground font-semibold text-sm px-4 py-2 rounded-lg">
                <Truck size={16} />
                Prevoz nameštaja
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-sm font-semibold text-tool-yellow tracking-wider uppercase">
              Prevoz nameštaja
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mt-3 mb-6">
              Od prodavnice do vašeg doma
            </h2>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-6">
              Pored montaže i demontaže, nudimo i uslugu prevoza nameštaja od
              prodajnog mesta do krajnje destinacije. Bez stresa oko organizacije
              transporta — mi preuzimamo nameštaj i donosimo ga direktno na vašu
              adresu, spreman za montažu.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: PackageCheck,
                  title: "Preuzimanje iz prodavnice",
                  desc: "Preuzimamo nameštaj iz bilo koje prodavnice u Beogradu i okolini.",
                },
                {
                  icon: Truck,
                  title: "Siguran transport",
                  desc: "Pažljivo pakovanje i transport do vaše adrese bez oštećenja.",
                },
                {
                  icon: MapPin,
                  title: "Dostava i montaža",
                  desc: "Donosimo, unosimo i odmah montiramo — sve u jednom terminu.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tool-yellow/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="text-tool-yellow" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/50 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
