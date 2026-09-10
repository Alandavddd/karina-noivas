import logo from "@/assets/logo-karina-noivas.svg";
import { BUSINESS_HOURS, WHATSAPP_SCHEDULE_URL } from "@/components/Header";

const INSTAGRAM_URL = "https://instagram.com/karinanoivasoficial";
const MAPS_URL =
  "https://www.google.com/maps/place/Karina+Noivas-Roupas+p+Festas+Aluguel-+Canoas/@-29.9107708,-51.2215512,17z/data=!4m15!1m8!3m7!1s0x95196528777c43d7:0x2574e8263aacf6ca!2sR.+Jos%C3%A9+Ver%C3%ADssimo,+2049+-+Harmonia,+Canoas+-+RS,+92320-700!3b1!8m2!3d-29.9107708!4d-51.2193625!16s%2Fg%2F11c27b7nbg!3m5!1s0x9519652870b758c9:0x59258b47413b19ff!8m2!3d-29.9107708!4d-51.2193625!16s%2Fg%2F1thbxv7k?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D";

export function Footer() {
  return (
    <footer className="border-t border-border bg-blush">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <img src={logo} alt="Karina Noivas" className="w-24" />
        <p className="font-script text-3xl text-bordeaux">realizando sonhos desde 1989</p>
        <p className="text-[0.68rem] font-semibold tracking-[0.15em] text-foreground uppercase">
          {BUSINESS_HOURS}
        </p>
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
