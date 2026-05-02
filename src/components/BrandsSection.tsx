const exampleCategories = ["Serijski / pločasti programi", "Kuhinje i plakari", "Kancelarija i stan"];

const BrandsSection = () => {
  return (
    <section className="border-y border-border bg-card py-11 md:py-14" aria-labelledby="brands-heading">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-9">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tool-yellow">Uputstva i sistemi</span>
          <h2 id="brands-heading" className="section-heading mt-3 text-foreground">
            Iskustvo sa tipičnim programima na tržištu
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Montiramo nameštaj prema uputstvima proizvođača — često pločasti programi poput IKEA, JYSK, Forma Ideale i
            sličnih rešenja. To <span className="text-foreground/90">ne predstavlja zvanična partnerstva</span> sa
            tim brendovima; radi se o praktičnom iskustvu sa njihovim sistemima montaže.
          </p>
        </header>

        <ul className="flex flex-wrap justify-center gap-3">
          {exampleCategories.map((label) => (
            <li
              key={label}
              className="rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandsSection;
