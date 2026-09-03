import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import vestido1 from "@/assets/foto-vestido-1.jpg.asset.json";
import vestido2 from "@/assets/foto-vestido-2.jpg.asset.json";
import vestido3 from "@/assets/foto-vestido-3.jpg.asset.json";
import vestido4 from "@/assets/foto-vestido-4.jpg.asset.json";
import vestido5 from "@/assets/foto-vestido-5.jpg.asset.json";
import vestido6 from "@/assets/foto-vestido-6.jpg.asset.json";
import logo from "@/assets/logo-karina-noivas.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karina Noivas | Realizando sonhos desde 1989" },
      {
        name: "description",
        content:
          "Vestidos de noiva, debutante, formatura e madrinhas em Canoas, RS. Desde 1989 realizando sonhos. Agende sua prova pelo WhatsApp.",
      },
      { property: "og:title", content: "Karina Noivas | Realizando sonhos desde 1989" },
      {
        property: "og:description",
        content:
          "Vestidos de noiva, debutante e festa em Canoas. Atendimento exclusivo, modelos únicos e tradição desde 1989.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_URL =
  "https://wa.me/5551992402094?text=Ol%C3%A1!%20Quero%20agendar%20uma%20prova%20de%20vestido.";
const INSTAGRAM_URL = "https://instagram.com/karinanoivasoficial";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Ver%C3%ADssimo+2049+Harmonia+Canoas";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const categories = [
  {
    img: vestido5.url,
    alt: "Noiva com vestido azul esvoaçante na vitrine da Karina Noivas",
    label: "Noivas",
    text: "O vestido do grande dia, escolhido com calma, prova a prova.",
  },
  {
    img: vestido6.url,
    alt: "Debutante sorrindo com vestido rosa bordado e coroa",
    label: "15 Anos",
    text: "Uma noite de princesa, do jeito que você sempre sonhou.",
  },
  {
    img: vestido2.url,
    alt: "Debutante sentada com vestido azul-turquesa volumoso",
    label: "Festa & Formatura",
    text: "Silhuetas marcantes para brilhar em qualquer celebração.",
  },
];

function LandingPage() {
  const pageRef = useReveal();

  return (
    <div ref={pageRef} className="bg-background text-foreground antialiased">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#topo" className="font-script text-3xl leading-none text-bordeaux">
            Karina Noivas
          </a>
          <nav className="hidden items-center gap-8 text-[0.7rem] font-medium tracking-[0.25em] uppercase md:flex">
            <a href="#colecao" className="transition-colors hover:text-bordeaux">
              Coleção
            </a>
            <a href="#galeria" className="transition-colors hover:text-bordeaux">
              Galeria
            </a>
            <a href="#sobre" className="transition-colors hover:text-bordeaux">
              A Loja
            </a>
            <a href="#visite" className="transition-colors hover:text-bordeaux">
              Visite-nos
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-bordeaux px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-bordeaux-deep"
          >
            Agendar prova
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative flex min-h-svh items-end">
        <img
          src={vestido5.url}
          alt="Noiva com vestido azul claro cintilante e coroa na entrada da Karina Noivas"
          className="animate-kenburns absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/90 via-bordeaux-deep/25 to-bordeaux-deep/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-40 pb-24">
          <p
            className="animate-fade-up font-script text-4xl text-champagne md:text-5xl"
            style={{ animationDelay: "0.15s" }}
          >
            desde 1989
          </p>
          <h1
            className="animate-fade-up mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.35s" }}
          >
            Realizando sonhos, um vestido por vez.
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl font-serif text-lg text-primary-foreground/85 italic md:text-xl"
            style={{ animationDelay: "0.55s" }}
          >
            Noivas, debutantes e madrinhas — há mais de três décadas vestindo os momentos mais
            importantes de Canoas.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.75s" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-bordeaux px-8 py-4 text-[0.72rem] font-semibold tracking-[0.25em] text-primary-foreground uppercase transition-colors hover:bg-primary-foreground hover:text-bordeaux"
            >
              Agendar minha prova
            </a>
            <a
              href="#colecao"
              className="border border-primary-foreground/60 px-8 py-4 text-[0.72rem] font-semibold tracking-[0.25em] text-primary-foreground uppercase transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              Ver coleções
            </a>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-blush py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-[0.68rem] font-medium tracking-[0.3em] text-bordeaux uppercase">
          <span>Noivas</span>
          <span aria-hidden="true">✦</span>
          <span>15 anos</span>
          <span aria-hidden="true">✦</span>
          <span>Formaturas</span>
          <span aria-hidden="true">✦</span>
          <span>Madrinhas</span>
          <span aria-hidden="true">✦</span>
          <span>Convidadas</span>
        </div>
      </div>

      {/* Categories */}
      <section id="colecao" className="mx-auto max-w-6xl px-6 py-28">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="font-script text-4xl text-bordeaux">nossa coleção</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Para cada momento, um vestido à altura
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {categories.map((c, i) => (
            <a
              key={c.label}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="reveal group relative block overflow-hidden"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-3xl text-primary-foreground">{c.label}</h3>
                <p className="mt-2 max-w-xs font-serif text-primary-foreground/80 italic">
                  {c.text}
                </p>
                <span className="mt-4 inline-block border-b border-champagne pb-0.5 text-[0.65rem] font-semibold tracking-[0.3em] text-champagne uppercase">
                  Agendar prova
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Statement with negative-space overlay */}
      <section id="galeria" className="relative overflow-hidden">
        <img
          src={vestido3.url}
          alt="Debutante de vestido vermelho em meio a arco de flores no campo"
          loading="lazy"
          className="h-[80vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-bordeaux-deep/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="reveal max-w-3xl text-center">
            <p className="font-script text-4xl text-champagne md:text-5xl">o seu momento</p>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-primary-foreground italic md:text-4xl">
              “Aqui, cada prova é uma celebração. Você sai da loja sabendo que encontrou{' '}
              <span className="font-display not-italic tracking-wide">o</span> vestido.”
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-script text-4xl text-bordeaux">do nosso ateliê</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Sonhos que vestimos</h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="border-b border-bordeaux pb-1 text-[0.7rem] font-semibold tracking-[0.25em] text-bordeaux uppercase transition-opacity hover:opacity-70"
          >
            @karinanoivasoficial
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="reveal col-span-2 row-span-2">
            <img
              src={vestido1.url}
              alt="Duas debutantes com vestidos verde-esmeralda bordados na Karina Noivas"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <img
              src={vestido4.url}
              alt="Debutante com vestido lilás cintilante visto de cima"
              loading="lazy"
              className="aspect-square w-full object-cover object-top"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <img
              src={vestido6.url}
              alt="Sorriso de debutante com vestido rosa de pedrarias"
              loading="lazy"
              className="aspect-square w-full object-cover object-top"
            />
          </div>
          <div className="reveal col-span-2" style={{ transitionDelay: "0.25s" }}>
            <img
              src={vestido2.url}
              alt="Debutante de vestido azul-turquesa posando ao ar livre"
              loading="lazy"
              className="aspect-[2/1] w-full object-cover object-[center_20%]"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-bordeaux-deep text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-28 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <img
              src={logo}
              alt="Logotipo Karina Noivas"
              className="w-36 md:w-44"
            />
            <p className="mt-8 font-script text-4xl text-champagne">tradição & carinho</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Desde 1989 no mercado, realizando sonhos
            </h2>
            <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-primary-foreground/80 italic">
              Uma história construída prova após prova, geração após geração. Na Karina Noivas,
              cada cliente é recebida com atendimento exclusivo, provadores amplos e a curadoria
              de quem entende que o vestido certo muda tudo.
            </p>
          </div>
          <div className="reveal grid grid-cols-3 gap-6 text-center" style={{ transitionDelay: "0.15s" }}>
            {[
              ["37", "anos de tradição"],
              ["+10 mil", "sonhos realizados"],
              ["4.5 mil", "seguidoras no Instagram"],
            ].map(([n, label]) => (
              <div key={label} className="border border-primary-foreground/20 px-4 py-8">
                <p className="font-display text-4xl text-champagne md:text-5xl">{n}</p>
                <p className="mt-3 text-[0.65rem] tracking-[0.2em] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visite" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="reveal relative overflow-hidden">
            <img
              src={vestido3.url}
              alt="Vestido vermelho de debutante ao ar livre"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/70 via-transparent to-transparent" />
            <p className="absolute bottom-8 left-8 max-w-[16rem] font-serif text-2xl text-primary-foreground italic">
              Venha viver a sua prova com a gente.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="font-script text-4xl text-bordeaux">visite-nos</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Estamos te esperando</h2>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                  Endereço
                </dt>
                <dd className="mt-2 font-serif text-xl">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-bordeaux"
                  >
                    Rua José Veríssimo, 2049 — Harmonia, Canoas / RS
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                  WhatsApp
                </dt>
                <dd className="mt-2 font-serif text-xl">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-bordeaux"
                  >
                    (51) 99240-2094
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                  Instagram
                </dt>
                <dd className="mt-2 font-serif text-xl">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-bordeaux"
                  >
                    @karinanoivasoficial
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block bg-bordeaux px-8 py-4 text-[0.72rem] font-semibold tracking-[0.25em] text-primary-foreground uppercase transition-colors hover:bg-bordeaux-deep"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-blush">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
          <img src={logo} alt="Karina Noivas" className="w-24" />
          <p className="font-script text-3xl text-bordeaux">realizando sonhos desde 1989</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.65rem] font-medium tracking-[0.25em] uppercase">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-bordeaux">
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
    </div>
  );
}
