import { Phone, MessageCircle } from "lucide-react";

import { CTAButton } from "@/components/ui/cta-button";

const CTASection = () => {
  return (
    <section
      id="kontakt"
      className="section-padding relative scroll-mt-24 overflow-hidden bg-graphite"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-tool-yellow/[0.06]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-tool-yellow/[0.05]" aria-hidden />

      <div className="container-narrow relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/[0.09] bg-graphite-light/35 px-5 py-8 shadow-xl shadow-black/30 backdrop-blur-sm sm:rounded-3xl sm:px-10 sm:py-11 md:max-w-2xl md:border-white/[0.08]">
          <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-tool-yellow">
            Montaža Nameštaja
          </p>
          <h2
            id="cta-heading"
            className="mt-4 text-center font-heading text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-primary-foreground text-balance max-md:font-extrabold max-md:tracking-[-0.02em] sm:text-4xl md:font-bold md:tracking-tight"
          >
            Treba vam montaža nameštaja?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-center text-base leading-relaxed text-primary-foreground/[0.74]">
            Pošaljite slike nameštaja ili pozovite direktno za dogovor termina u Beogradu i okolini.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4 md:gap-4">
            <CTAButton
              variant="primary"
              size="md"
              href="tel:0648780129"
              leftIcon={<Phone strokeWidth={2.25} />}
              aria-label="Pozovi 064 8780 129"
              className="flex-1 sm:flex-initial sm:min-w-[12rem]"
            >
              Pozovi odmah
            </CTAButton>
            {/* TODO: Potvrditi da je https://wa.me/381648780129 konačan WhatsApp link za „Pošalji slike“ (po potrebi dodati tekst poruke u URL). */}
            <CTAButton
              variant="secondary"
              size="md"
              href="https://wa.me/381648780129"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<MessageCircle strokeWidth={2} />}
              aria-label="Pošalji poruku preko WhatsApp-a"
              className="flex-1 sm:flex-initial sm:min-w-[11rem]"
            >
              Pošalji slike
            </CTAButton>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-primary-foreground/[0.58] md:mt-7">
            Najbrža procena je uz slike, dimenzije ili link proizvoda.
          </p>

          <p className="mt-5 max-md:leading-snug text-center text-xs text-primary-foreground/45 md:mt-6">
            Beograd i okolina · dogovor termina na poziv ili poruku
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
