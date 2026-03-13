import { motion } from "framer-motion";
import {
  Wrench,
  PackageOpen,
  Truck,
  DoorOpen,
  Building2,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Montaža novog nameštaja",
    description:
      "Profesionalno sklapanje novog nameštaja prema uputstvu proizvođača. Brzo, precizno i bez oštećenja.",
  },
  {
    icon: PackageOpen,
    title: "Demontaža postojećeg nameštaja",
    description:
      "Pažljivo rasklapanje nameštaja za selidbu ili zamenu. Svi delovi se čuvaju uredno za ponovnu montažu.",
  },
  {
    icon: Truck,
    title: "Ponovna montaža nakon selidbe",
    description:
      "Kada se preselite, ponovo sklapamo vaš nameštaj na novoj lokaciji. Brzo i bez stresa.",
  },
  {
    icon: DoorOpen,
    title: "Plakari, kreveti, komode, kuhinje",
    description:
      "Sklapanje svih vrsta nameštaja — od plakara i kreveta do TV elemenata i kuhinjskih garnitura.",
  },
  {
    icon: Building2,
    title: "Kancelarijski nameštaj",
    description:
      "Montaža nameštaja za poslovne prostore — radni stolovi, police, ormari i kompleksni sistemi.",
  },
  {
    icon: Settings,
    title: "Korekcije i podešavanja",
    description:
      "Sitne korekcije nakon montaže — podešavanje vrata, fioka i mehanizama za savršeno funkcionisanje.",
  },
];

const ServicesSection = () => {
  return (
    <section id="usluge" className="section-padding bg-graphite">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-tool-yellow tracking-wider uppercase">
            Naše usluge
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mt-3">
            Sve što vam treba na jednom mestu
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Pružamo usluge montaže i demontaže različitih vrsta nameštaja, od
            pojedinačnih elemenata do složenijih sistema.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-graphite-light/50 border border-primary-foreground/10 rounded-2xl p-6 hover:border-tool-yellow/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-tool-yellow/10 flex items-center justify-center mb-4 group-hover:bg-tool-yellow/20 transition-colors">
                <service.icon className="text-tool-yellow" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
