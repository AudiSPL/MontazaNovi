import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CTAButton } from "@/components/ui/cta-button";

const stats = [
  { value: "10+", label: "godina iskustva" },
  { value: "500+", label: "montaža" },
  { value: "★ 4.9", label: "ocena klijenata" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[min(82svh,728px)] flex-col justify-center overflow-hidden scroll-mt-24 pb-14 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:min-h-[min(86svh,800px)] sm:pb-14 sm:pt-[calc(5.75rem+env(safe-area-inset-top,0px))] md:min-h-[min(90vh,880px)] md:scroll-mt-28 md:pb-16 md:pt-[6.75rem] lg:min-h-[min(min(100vh,980px),960px)] lg:pb-20 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Montaža nameštaja u radionici"
        width={900}
        height={1125}
        loading="eager"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover brightness-[0.97] contrast-[1.04] saturate-[1.02] max-md:brightness-[0.9] max-md:object-[44%_33%] md:brightness-[0.92] md:object-[56%_33%] md:contrast-[1.04] md:saturate-[0.98] lg:object-[52%_36%] xl:object-[50%_35%] 2xl:object-[48%_34%]"
      />

      {/* Base dark wash — mobilno jače radi kontrasta na svetlom drvetu iza teksta */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/44 max-md:bg-black/50 md:bg-black/45" aria-hidden />

      {/* Readability rail — mobilno tamnije levo/gore gde je copy */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-[hsl(var(--graphite)_/_0.88)] via-[hsl(var(--graphite)_/_0.52)] via-[55%] to-transparent to-[100%] max-md:from-[hsl(var(--graphite)_/_0.94)] max-md:via-[hsl(var(--graphite)_/_0.62)] max-md:via-[46%] max-md:to-transparent max-md:to-[90%] md:bg-gradient-to-r md:from-[hsl(var(--graphite))] md:via-[hsl(var(--graphite)_/_0.78)] md:via-[42%] md:to-transparent md:to-[82%]"
        aria-hidden
      />

      {/* Gornji veo — mobilno jači iznad tipografije */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[hsl(var(--graphite)_/_0.38)] via-transparent to-transparent max-md:from-[hsl(var(--graphite)_/_0.5)] max-md:block md:hidden"
        aria-hidden
      />

      {/* Vinjeta */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/28 via-transparent to-black/48 max-md:from-black/24 max-md:to-black/38 md:from-black/35 md:to-black/55"
        aria-hidden
      />

      {/* Mobilno: dodatni levi „stub“ — tamni deo kadra iza kolone teksta, dno slike ostaje vidljivo */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-black/62 from-[0%] via-black/28 via-[min(72%,26rem)] to-transparent max-md:block md:hidden"
        aria-hidden
      />

      {/* Content */}
      <div className="container-narrow relative z-10 mx-auto flex w-full flex-col justify-center px-5 sm:px-6 lg:px-8">
        <div className="w-full max-w-[min(34rem,100%)] py-9 max-md:py-10 max-md:pb-10 md:max-w-[min(760px,100%)] md:py-14 lg:max-w-[min(760px,100%)] lg:py-8">
          <p className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-tool-yellow/35 bg-black/30 px-4 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-tool-yellow shadow-sm backdrop-blur-sm max-md:mb-8 max-md:bg-black/42 max-md:shadow-[0_2px_20px_rgba(0,0,0,0.45)] md:mb-6 sm:text-xs md:bg-black/25 md:py-2 md:shadow-sm">
            Beograd i okolina
          </p>

          <h1
            id="hero-heading"
            className="font-heading text-[clamp(2.125rem,6.8vw+0.95rem,4.5rem)] font-bold leading-[1.06] tracking-tight text-primary-foreground text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] max-md:drop-shadow-[0_3px_32px_rgba(0,0,0,0.62)] sm:text-[clamp(2.35rem,7.5vw+0.85rem,4.5rem)] sm:leading-[1.05] lg:text-display lg:leading-[1.06]"
          >
            <span className="block">Nameštaj montiran</span>
            <span className="font-hero-accent mt-4 block font-medium leading-[1.14] text-tool-yellow max-md:mt-4 max-md:drop-shadow-[0_2px_22px_rgba(0,0,0,0.58)] sm:mt-3 sm:leading-[1.12]">
              precizno.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[1.0625rem] leading-[1.65] text-primary-foreground/[0.88] shadow-black/20 drop-shadow-sm max-md:mt-9 max-md:max-w-[min(36rem,100%)] max-md:text-primary-foreground/[0.94] max-md:drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] md:mt-7 md:drop-shadow-sm sm:text-lg sm:leading-relaxed">
            Profesionalna montaža i demontaža nameštaja u Beogradu. Dolazak na adresu, dogovor termina i uredan završetak
            posla.
          </p>

          <div className="mt-11 flex w-full flex-col gap-4 max-md:mt-12 md:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-3">
            <CTAButton
              variant="primary"
              size="lg"
              href="tel:0648780129"
              leftIcon={<Phone strokeWidth={2.25} />}
              aria-label="Pozovi 064 8780 129"
              className="w-full flex-1 min-h-[56px] md:min-h-0 md:w-auto md:flex-none md:min-w-[12rem]"
            >
              Pozovi odmah
            </CTAButton>
            {/* TODO: Potvrditi da je https://wa.me/381648780129 konačan WhatsApp link za „Pošalji slike“ (po potrebi dodati tekst poruke u URL). */}
            <CTAButton
              variant="secondary"
              size="lg"
              href="https://wa.me/381648780129"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<MessageCircle strokeWidth={2} />}
              aria-label="Pošalji poruku preko WhatsApp-a"
              className="w-full flex-1 min-h-[56px] md:min-h-0 md:w-auto md:flex-none md:min-w-[11rem]"
            >
              Pošalji slike
            </CTAButton>
          </div>

          <CTAButton
            variant="ghost"
            size="md"
            href="#radovi"
            rightIcon={<ArrowRight strokeWidth={2} />}
            className="mt-8 w-fit min-h-[48px] max-md:mt-9 md:mt-7"
          >
            Pogledajte radove
          </CTAButton>

          <dl className="mt-11 grid min-w-0 grid-cols-3 gap-3 border-t border-white/15 pt-8 max-md:mt-12 max-md:gap-x-4 max-md:pt-9 sm:mt-12 sm:gap-8 sm:pt-10">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 text-left">
                <dt className="font-heading text-xl font-bold tabular-nums text-primary-foreground drop-shadow-sm max-md:drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-2xl md:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-[0.6875rem] leading-snug text-primary-foreground/65 max-md:text-primary-foreground/75 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
