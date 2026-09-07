import { Link } from "@tanstack/react-router";

export const WHATSAPP_SCHEDULE_URL =
  "https://wa.me/5551992402094?text=Ol%C3%A1!%20Quero%20agendar%20uma%20prova%20de%20vestido.";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-script text-3xl leading-none text-bordeaux">
          Karina Noivas
        </Link>
        <nav className="hidden items-center gap-8 text-[0.7rem] font-medium tracking-[0.25em] uppercase md:flex">
          <a href="/#colecao" className="transition-colors hover:text-bordeaux">
            Coleção
          </a>
          <Link to="/catalogo" className="transition-colors hover:text-bordeaux">
            Catálogo
          </Link>
          <a href="/#galeria" className="transition-colors hover:text-bordeaux">
            Galeria
          </a>
          <a href="/#sobre" className="transition-colors hover:text-bordeaux">
            A Loja
          </a>
          <a href="/#visite" className="transition-colors hover:text-bordeaux">
            Visite-nos
          </a>
        </nav>
        <a
          href={WHATSAPP_SCHEDULE_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-bordeaux px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-bordeaux-deep"
        >
          Agendar prova
        </a>
      </div>
    </header>
  );
}
