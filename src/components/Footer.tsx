import logo from "@/assets/logo-karina-noivas.svg";
import { WHATSAPP_SCHEDULE_URL } from "@/components/Header";

const INSTAGRAM_URL = "https://instagram.com/karinanoivasoficial";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Ver%C3%ADssimo+2049+Harmonia+Canoas";

export function Footer() {
  return (
    <footer className="border-t border-border bg-blush">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <img src={logo} alt="Karina Noivas" className="w-24" />
        <p className="font-script text-3xl text-bordeaux">realizando sonhos desde 1989</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.65rem] font-medium tracking-[0.25em] uppercase">
          <a
            href={WHATSAPP_SCHEDULE_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-bordeaux"
          >
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-bordeaux">
            Instagram
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-bordeaux">
            Como chegar
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Karina Noivas — Canoas, RS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
