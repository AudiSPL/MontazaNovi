import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  caption: string;
  category: string;
  alt: string;
};

const images: GalleryItem[] = [
  {
    src: gallery1,
    caption: "Montaža plakara",
    category: "Plakar",
    alt: "Montaža plakara — poravnati moduli i vrata u enterijeru u Beogradu",
  },
  {
    src: gallery2,
    caption: "Sklapanje komode",
    category: "Komoda",
    alt: "Sklapanje komode — fiokari i šarke podešeni za ravnomerno otvaranje",
  },
  {
    src: gallery3,
    caption: "Kuhinjski elementi",
    category: "Kuhinja",
    alt: "Montaža kuhinjskih elemenata i fiokara u funkcionalnom rasporedu",
  },
  {
    src: gallery4,
    caption: "Podešavanje vrata",
    category: "Detalj",
    alt: "Podešavanje vrata ili frontova na elementu nameštaja u toku montaže",
  },
  {
    src: gallery5,
    caption: "Montaža polica",
    category: "Police",
    alt: "Montaža polica ili modularnog sistema uz zid — uredno poravnanje",
  },
  {
    src: gallery6,
    caption: "Nameštaj po meri prostora",
    category: "Prostor",
    alt: "Nameštaj uklopljen u raspoloživi prostor posle profesionalne montaže",
  },
];

type GalleryCardProps = {
  item: GalleryItem;
  className?: string;
};

/** Kartica portfolija — bez linka/lightbox-a dok interakcija ne postoji */
function GalleryCard({ item, className }: GalleryCardProps) {
  const { src, alt, caption, category } = item;

  return (
    <figure className={cn("min-w-0", className)}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-graphite-light/25 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.05]",
          "max-md:border-white/[0.12] max-md:shadow-[0_18px_52px_-20px_rgba(0,0,0,0.62)] max-md:ring-white/[0.07]",
          "transition-[border-color,box-shadow,ring-color] duration-300 ease-out",
          "md:hover:border-tool-yellow/28 md:hover:shadow-[0_18px_48px_-14px_rgba(0,0,0,0.65)] md:hover:ring-tool-yellow/15",
        )}
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.04]"
          />

          {/* Čitanje teksta */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.88] from-[12%] via-black/45 via-[52%] to-transparent sm:from-[15%] sm:via-[55%]"
            aria-hidden
          />

          <figcaption className="absolute inset-x-0 bottom-0 z-[1] max-md:p-4 p-5 sm:p-6">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-tool-yellow/90">{category}</p>
            <p className="mt-2 text-base font-semibold leading-snug tracking-[-0.01em] text-primary-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[1.0625rem]">
              {caption}
            </p>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

const GallerySection = () => {
  return (
    <section
      id="radovi"
      className="section-padding border-y border-white/[0.06] bg-graphite"
      aria-labelledby="gallery-heading"
    >
      <div className="container-narrow min-w-0 overflow-x-hidden px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-7 max-w-2xl text-center md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tool-yellow/90">Galerija</span>
          <h2 id="gallery-heading" className="section-heading mt-3 text-primary-foreground">
            Radovi iz prakse
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/65 sm:mt-4 sm:text-base sm:leading-relaxed">
            Primeri montaže plakara, komoda, kuhinjskih elemenata i drugog nameštaja.
          </p>
        </header>

        <div className="grid min-w-0 grid-cols-1 gap-6 max-md:gap-6 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {images.map((item) => (
            <GalleryCard key={item.caption} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
