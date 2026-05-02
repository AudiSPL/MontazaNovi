import { Phone, MessageCircle } from "lucide-react";

const fabBtn =
  "flex shrink-0 items-center justify-center rounded-full shadow-lg transition-[transform,filter] duration-200 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0";

/**
 * Brzi kontakt — samo desktop (md+). Na mobilnom su hero / kontakt sekcija i linkovi u meniju
 * dovoljni da UI ne prekriva hero i galeriju.
 */
const FloatingButtons = () => {
  return (
    <div
      className="fixed bottom-8 right-8 z-50 hidden flex-col gap-2.5 md:flex"
      role="toolbar"
      aria-label="Brzi kontakt — Montaža Nameštaja"
    >
      {/* TODO: Potvrditi da su wa.me i viber:// linkovi konačni za posao (nalog / poruka). */}
      <a
        href="https://wa.me/381648780129"
        target="_blank"
        rel="noopener noreferrer"
        className={`${fabBtn} h-14 w-14 bg-[#25D366] text-white ring-2 ring-black/10`}
        aria-label="Pošalji poruku preko WhatsApp-a"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
      </a>
      <a
        href="viber://chat?number=%2B381648780129"
        className={`${fabBtn} h-14 w-14 bg-[#7360F2] text-white ring-2 ring-black/10`}
        aria-label="Pošalji poruku preko Vibera"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
      </a>
      <a
        href="tel:0648780129"
        className={`${fabBtn} h-14 w-14 bg-tool-yellow text-accent-foreground shadow-black/25 ring-2 ring-black/15 hover:brightness-105`}
        aria-label="Pozovi 064 8780 129"
      >
        <Phone className="h-6 w-6" strokeWidth={2.25} aria-hidden />
      </a>
    </div>
  );
};

export default FloatingButtons;
