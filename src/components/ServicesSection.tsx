import {
  LayoutGrid,
  CookingPot,
  BedDouble,
  Briefcase,
  Boxes,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Plakari i ormari",
    description:
      "Sklapanje, nivelacija, štelovanje vrata i montaža unutrašnjih elemenata.",
  },
  {
    icon: CookingPot,
    title: "Kuhinje i elementi",
    description:
      "Montaža kuhinjskih elemenata, fioka, šarki i osnovno uklapanje po prostoru.",
  },
  {
    icon: BedDouble,
    title: "Kreveti i komode",
    description:
      "Precizno sklapanje kreveta, komoda, noćnih stočića i dnevnih elemenata.",
  },
  {
    icon: Briefcase,
    title: "Kancelarijski nameštaj",
    description: "Stolovi, police, ormarići i opremanje radnog prostora.",
  },
  {
    icon: Boxes,
    title: "IKEA, JYSK, Forma Ideale",
    description:
      "Iskustvo sa pločastim nameštajem i uputstvima različitih proizvođača.",
  },
  {
    icon: RefreshCw,
    title: "Demontaža i ponovna montaža",
    description: "Rastavljanje, prenos po dogovoru i ponovno sklapanje nameštaja.",
  },
];

const ServicesSection = () => {
  return (
    <section id="usluge" className="section-padding bg-graphite" aria-labelledby="services-heading">
      <div className="container-narrow">
        <header className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tool-yellow">
            Montaža Nameštaja
          </span>
          <h2 id="services-heading" className="section-heading mt-3 text-primary-foreground">
            Šta montiramo
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/[0.68] sm:mt-4 sm:text-base">
            Montaža i demontaža nameštaja za stanove, kuće i kancelarije.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex min-h-[11rem] min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-graphite-light/40 px-7 py-8 transition-colors duration-200 hover:border-tool-yellow/25 sm:min-h-[12rem] sm:px-7 sm:py-8 md:px-6 md:py-7 lg:px-7 lg:py-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-tool-yellow/10 text-tool-yellow ring-1 ring-tool-yellow/15 transition-colors duration-200 group-hover:bg-tool-yellow/[0.14]">
                <service.icon size={24} strokeWidth={2} aria-hidden />
              </div>
              <h3 className="font-heading text-[1.0625rem] font-semibold leading-snug text-primary-foreground sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/[0.62]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
