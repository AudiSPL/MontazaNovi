/**
 * Kratki vizuelni most između hero-a i usluga — bez dugog scroll blokiranja i praznog prostora.
 */
const AssemblyAnimation = () => {
  return (
    <section
      className="border-y border-white/[0.06] bg-graphite py-8 md:py-10"
      aria-hidden="true"
    >
      <div className="container-narrow px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-tool-yellow">
          Montaža Nameštaja
        </p>
        <p className="mt-3 font-heading text-base font-semibold text-primary-foreground text-balance sm:text-lg">
          Precizna montaža, komad po komad
        </p>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-primary-foreground/[0.62]">
          Od pojedinačnih elemenata do uklopljenog nameštaja — uredno i pouzdano.
        </p>
      </div>
    </section>
  );
};

export default AssemblyAnimation;
