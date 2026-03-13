import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/381648780129"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-primary-foreground" size={24} />
      </a>
      <a
        href="viber://chat?number=%2B381648780129"
        className="w-14 h-14 rounded-full bg-[#7360F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Viber"
      >
        <MessageCircle className="text-primary-foreground" size={24} />
      </a>
      <a
        href="tel:+381648780129"
        className="w-14 h-14 rounded-full bg-tool-yellow flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Pozovite"
      >
        <Phone className="text-accent-foreground" size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
