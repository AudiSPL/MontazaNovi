import { motion } from "framer-motion";
import { Award, Ruler, MapPin, Clock, RefreshCw, Layers } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Dugogodišnje iskustvo",
    description:
      "Iza nas su godine rada sa različitim tipovima nameštaja i konstrukcionih sistema. Svaki posao obavljamo sa sigurnošću.",
  },
  {
    icon: Ruler,
    title: "Precizna i uredna montaža",
    description:
      "Radimo pažljivo i temeljno. Nakon montaže, svaki element je stabilan, funkcionalan i spreman za korišćenje.",
  },
  {
    icon: MapPin,
    title: "Dolazak na adresu",
    description:
      "Pokrivamo Beograd i okolinu. Dolazimo na vašu adresu u dogovorenom terminu, bez kašnjenja.",
  },
  {
    icon: Clock,
    title: "Brza organizacija termina",
    description:
      "Razumemo da vam vreme vredi. Organizujemo termin brzo i efikasno, prilagođeno vašem rasporedu.",
  },
  {
    icon: RefreshCw,
    title: "Montaža i demontaža",
    description:
      "Bilo da sklapate nov nameštaj ili rasklapate postojeći za selidbu — pokrivamo obe usluge.",
  },
  {
    icon: Layers,
    title: "Rad sa poznatim brendovima",
    description:
      "Poznajemo sisteme spajanja različitih proizvođača, od IKEA do Forma Ideale. Precizan rad bez improvizacije.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="zasto-mi" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-tool-yellow tracking-wider uppercase">
            Zašto klijenti biraju nas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Poverenje stečeno radom
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Svaki posao prilazimo sa istom pažnjom i profesionalnošću, bez obzira na obim ili složenost.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-tool-yellow/30 hover:shadow-lg hover:shadow-[hsl(38,92%,50%,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-tool-yellow/10 flex items-center justify-center mb-4 group-hover:bg-tool-yellow/20 transition-colors">
                <reason.icon className="text-tool-yellow" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
