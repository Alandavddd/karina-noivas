import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const WHATSAPP_SCHEDULE_URL =
  "https://wa.me/5551992402094?text=Ol%C3%A1!%20Quero%20agendar%20uma%20prova%20de%20vestido.";

/**
 * Horários de atendimento (pedido da cliente para ficarem bem visíveis).
 * Único lugar pra editar caso o horário mude — usado na barra do topo e
 * repetido no rodapé.
 */
export const BUSINESS_HOURS = "Seg a sáb, 9h às 18h30 · Domingo, fechado";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  // Mede a altura real do header (barra de horários + barra principal) e
  // publica isso como uma CSS variable global (--header-height). Assim, o
  // hero da home e o topo do catálogo não precisam de números fixos
  // "chutados" pra saber quanto de espaço reservar no topo da página — eles
  // só leem essa variável. Se um dia o texto dos horários quebrar em duas
  // linhas num aparelho bem estreito, tudo se reajusta sozinho.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty("--header-height", `${el.offsetHeight}px`);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      {/* Barra de horários */}
      <div className="bg-bordeaux-deep px-4 py-1.5 text-center text-[0.6rem] font-medium tracking-[0.1em] text-primary-foreground uppercase sm:text-[0.65rem] sm:tracking-[0.15em]">
        {BUSINESS_HOURS}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="font-script text-2xl leading-none text-bordeaux sm:text-3xl">
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
          className="shrink-0 bg-bordeaux px-3 py-2 text-[0.6rem] font-medium tracking-[0.1em] text-primary-foreground uppercase whitespace-nowrap transition-colors hover:bg-bordeaux-deep sm:px-5 sm:py-2.5 sm:text-[0.7rem] sm:tracking-[0.2em]"
        >
          Agendar prova
        </a>
      </div>
    </header>
  );
}
