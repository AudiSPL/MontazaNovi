import type { MouseEvent } from "react";

/** Međunarodni format bez + (064 8780 129 → 381648780129). */
export const WHATSAPP_PHONE_DIGITS = "381648780129";

/** HTTPS fallback / desktop — manje redirekcija nego wa.me. */
export const WHATSAPP_WEB_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_DIGITS}`;

const WHATSAPP_APP_URL = `whatsapp://send?phone=${WHATSAPP_PHONE_DIGITS}`;

const mobileUa = /Android|iPhone|iPad|iPod/i;

/**
 * Na telefonu/tabletu otvara WhatsApp aplikaciju direktno (brže od učitavanja wa.me u tabu).
 * Na desktopu ostaje podrazumevani href (WHATSAPP_WEB_URL).
 */
export function preferWhatsAppAppOnMobile(e: MouseEvent<HTMLAnchorElement>) {
  if (typeof navigator === "undefined" || !mobileUa.test(navigator.userAgent)) return;
  e.preventDefault();
  window.location.assign(WHATSAPP_APP_URL);
}
