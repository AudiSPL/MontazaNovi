import { motion } from "framer-motion";
import { Phone, CalendarCheck, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Javljate se",
    description: "Kontaktirajte nas pozivom, Viber ili WhatsApp porukom. Opišite šta vam treba.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Dogovaramo termin",
    description: "Zajedno nalazimo termin koji vam odgovara. Brza organizacija bez čekanja.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Vršimo montažu",
    description: "Dolazimo na adresu sa potrebnim alatom i profesionalno obavljamo posao.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Nameštaj je spreman",
    description: "Prostor ostaje uredan, a nameštaj stabilan i spreman za svakodnevnu upotrebu.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-tool-yellow tracking-wider uppercase">
            Kako radi naš proces
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Od poziva do gotovog nameštaja
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-tool-yellow flex items-center justify-center mb-6 shadow-lg shadow-[hsl(38,92%,50%,0.25)]">
                  <s.icon className="text-accent-foreground" size={28} />
                </div>
                <span className="text-xs font-bold text-tool-yellow tracking-widest uppercase mb-1 block">
                  Korak {s.step}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
