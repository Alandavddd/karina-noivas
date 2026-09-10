import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { categories, products, type ProductCategory, type Product } from "@/lib/catalog-data";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo | Karina Noivas" },
      {
        name: "description",
        content:
          "Conheça todas as peças da Karina Noivas: vestidos de noiva, 15 anos, formatura, madrinhas e ternos. Consulte pelo WhatsApp.",
      },
    ],
  }),
  component: CatalogoPage,
});

const ALL_FILTER = "todos";

function CatalogoPage() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

  return (
    <div className="bg-background text-foreground antialiased">
      <Header />

      {/* Cabeçalho da página */}
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 text-center">
        <p className="font-script text-4xl text-bordeaux">nosso catálogo</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Cada peça, uma história</h1>
        <p className="mx-auto mt-6 max-w-xl font-serif text-lg text-muted-foreground italic">
          Navegue pelas nossas coleções e consulte diretamente pelo WhatsApp a peça que mais
          combinar com você.
        </p>
      </section>

      {/* Barra de filtros */}
      <div className="sticky top-[65px] z-40 border-y border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-6 py-4">
          <FilterPill
            label="Todos"
            isActive={activeFilter === ALL_FILTER}
            onClick={() => setActiveFilter(ALL_FILTER)}
          />
          {categories.map((category) => (
            <FilterPill
              key={category.id}
              label={category.label}
              isActive={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Seções por categoria */}
      <div className="mx-auto max-w-6xl px-6">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            isVisible={activeFilter === ALL_FILTER || activeFilter === category.id}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function FilterPill({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`border px-5 py-2 text-[0.68rem] font-medium tracking-[0.2em] uppercase transition-colors ${
        isActive
          ? "border-bordeaux bg-bordeaux text-primary-foreground"
          : "border-border text-muted-foreground hover:border-bordeaux hover:text-bordeaux"
      }`}
    >
      {label}
    </button>
  );
}

function CategorySection({
  category,
  isVisible,
}: {
  category: ProductCategory;
  isVisible: boolean;
}) {
  const categoryProducts = products.filter((p) => p.categoryId === category.id);
  if (categoryProducts.length === 0) return null;

  return (
    <section
      id={category.id}
      className="catalog-collapse"
      data-hidden={!isVisible}
      aria-hidden={!isVisible}
    >
      <div className="min-h-0 overflow-hidden py-16">
        <div className="max-w-xl">
          <p className="font-script text-3xl text-bordeaux">coleção</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">{category.label}</h2>
          <p className="mt-3 font-serif text-muted-foreground italic">{category.tagline}</p>
        </div>

        <div className="mt-10 space-y-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, category }: { product: Product; category: ProductCategory }) {
  const whatsappLink = buildProductWhatsAppLink(product, category);
  const [imgFailed, setImgFailed] = useState(false);

  const showImage = Boolean(product.image) && !imgFailed;

  return (
    <div className="flex flex-col overflow-hidden border border-border bg-card sm:flex-row">
      <div
        className="aspect-[4/5] w-full shrink-0 overflow-hidden sm:w-72"
        style={showImage ? undefined : { backgroundColor: category.placeholderColor }}
      >
        {showImage && (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center p-8">
        <span className="text-[0.65rem] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          {category.label}
        </span>
        <h3 className="mt-2 font-display text-2xl">{product.name}</h3>
        <p className="mt-3 max-w-md font-serif text-muted-foreground italic">
          {product.description}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block w-fit bg-bordeaux px-6 py-3 text-[0.68rem] font-semibold tracking-[0.25em] text-primary-foreground uppercase transition-colors hover:bg-bordeaux-deep"
        >
          Consultar no WhatsApp
        </a>
      </div>
    </div>
  );
}
