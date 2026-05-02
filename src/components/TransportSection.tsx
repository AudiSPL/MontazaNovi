import { Package, MapPin } from "lucide-react";
import transportVan from "@/assets/transport-van.jpg";

const TransportSection = () => {
  return (
    <section className="section-padding bg-graphite" aria-labelledby="transport-heading">
      <div className="container-narrow">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={transportVan}
              alt="Vozilo za prenos nameštaja po dogovoru — ilustracija usluge Montaža Nameštaja"
              className="h-full w-full object-cover brightness-[0.75] contrast-[1.02]"
              loading="lazy"
              width={800}
              height={520}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-charcoal/30" />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-primary-foreground/90">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-graphite/80 px-3 py-1.5 backdrop-blur-sm">
                <Package size={16} className="text-tool-yellow" aria-hidden />
                Usluge po dogovoru
              </span>
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tool-yellow">Dodatno</span>
            <h2 id="transport-heading" className="section-heading mt-3 text-primary-foreground">
              Selidba i premeštanje nameštaja
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
              Po dogovoru, moguća pomoć oko demontaže, prenosa i ponovne montaže. Obim zavisi od namene i termina —
              sve se unapred dogovori, bez obećanja koja ne možemo da ispunimo.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tool-yellow/10 text-tool-yellow ring-1 ring-tool-yellow/15">
                  <MapPin size={18} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-primary-foreground">Beograd i okolina</p>
                  <p className="text-sm text-primary-foreground/[0.58]">Fokus na montaži na adresi klijenta.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tool-yellow/10 text-tool-yellow ring-1 ring-tool-yellow/15">
                  <Package size={18} aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-primary-foreground">Bez forsiranog „kompletnog paketa“</p>
                  <p className="text-sm text-primary-foreground/[0.58]">
                    Prevoz ili složenije kombinacije samo ako odgovara vašem slučaju.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
