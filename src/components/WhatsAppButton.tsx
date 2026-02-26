import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919755533333?text=Hi%20Gopal%20Mobile%2C%20I%20have%20a%20query"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-14 w-14 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-all animate-fade-in group"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-card text-foreground text-sm font-medium shadow-elevated whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Chat with us!
    </span>
  </a>
);

export default WhatsAppButton;
