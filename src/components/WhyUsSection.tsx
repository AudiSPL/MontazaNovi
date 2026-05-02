import { MapPin, Ruler, CalendarClock, Layers } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Dolazak na adresu",
    description: "Radimo na lokaciji u Beogradu i okolini.",
  },
  {
    icon: Ruler,
    title: "Precizan i uredan rad",
    description: "Pažljiva montaža po uputstvu i čist završetak.",
  },
  {
    icon: CalendarClock,
    title: "Dogovor pre dolaska",
    description: "Termin i obim posla znate unapred.",
  },
  {
    icon: Layers,
    title: "Iskustvo sa različitim proizvođačima",
    description: "Pločasti programi i različiti sistemi spajanja.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="zasto-mi" className="section-padding bg-background" aria-labelledby="why-heading">
      <div className="container-narrow">
        <header className="mb-8 text-center md:mb-11">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tool-yellow">Pouzdan partner</span>
          <h2 id="why-heading" className="section-heading mt-3 text-foreground">
            Zašto klijenti biraju Montažu Nameštaja
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Jasno obećanje, bez nepotrebnog žurbe.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex min-w-0 flex-col rounded-2xl border border-border bg-card px-7 py-8 transition-colors duration-200 hover:border-tool-yellow/25 sm:px-7 sm:py-8 md:px-6 md:py-7 xl:px-7 xl:py-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-tool-yellow/10 text-tool-yellow ring-1 ring-tool-yellow/15">
                <reason.icon size={22} strokeWidth={2} aria-hidden />
              </div>
              <h3 className="font-heading text-[1.0625rem] font-semibold leading-snug text-foreground">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
