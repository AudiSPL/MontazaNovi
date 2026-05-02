import { ImagePlus, ClipboardCheck, MapPinned } from "lucide-react";

const steps = [
  {
    icon: ImagePlus,
    step: "01",
    title: "Pošaljete slike",
    description: "Pošaljite fotografije, dimenzije ili link proizvoda.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Dobijete procenu",
    description: "Dogovaramo cenu, termin i detalje montaže.",
  },
  {
    icon: MapPinned,
    step: "03",
    title: "Dolazimo na adresu",
    description: "Montaža se radi precizno, uz uredno ostavljen prostor.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background" aria-labelledby="process-heading">
      <div className="container-narrow">
        <header className="mb-8 text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tool-yellow">Koraci</span>
          <h2 id="process-heading" className="section-heading mt-3 text-foreground">
            Kako funkcioniše
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
          {steps.map((s) => (
            <article
              key={s.step}
              className="flex flex-col rounded-2xl border border-border bg-card px-7 py-8 text-center md:px-6 md:py-7 md:text-left lg:px-7 lg:py-8"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-tool-yellow text-accent-foreground shadow-md shadow-black/25 md:mx-0 md:h-[3.75rem] md:w-[3.75rem]">
                <s.icon size={26} strokeWidth={2} aria-hidden />
              </div>
              <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-tool-yellow">
                Korak {s.step}
              </p>
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
