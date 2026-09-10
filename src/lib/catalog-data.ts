import vestido15Anos1 from "@/assets/catalogo/15-anos/vestido-debutante-esmeralda.jpeg";
import vestido15Anos2 from "@/assets/catalogo/15-anos/vestido-debutante-preto-glitter.jpeg";
import vestido15Anos3 from "@/assets/catalogo/15-anos/vestido-debutante-vermelho.jpeg";

import vestidoFormatura1 from "@/assets/catalogo/formatura/vestido-festa-azul.jpeg";
import vestidoFormatura2 from "@/assets/catalogo/formatura/vestido-festa-verde.jpeg";

import vestidoGalaEFestas1 from "@/assets/catalogo/gala-e-festas/vestido-festa-magenta.jpeg";
import vestidoGalaEFestas2 from "@/assets/catalogo/gala-e-festas/vestido-festa-preto.jpeg";

import vestidoMadrinhas1 from "@/assets/catalogo/madrinhas/vestido-festa-lilas.jpeg";
import vestidoMadrinhas2 from "@/assets/catalogo/madrinhas/vestido-festa-verde-2.jpeg";

import vestidoNoivas1 from "@/assets/catalogo/noivas/vestido-noiva-detalhe-corpete-renda.jpeg";
import vestidoNoivas2 from "@/assets/catalogo/noivas/vestido-noiva-renda.jpeg";
import vestidoNoivas3 from "@/assets/catalogo/noivas/vestido-noiva.jpeg";

// import terno1 from "@/assets/catalogo/ternos"

export type ProductCategory = {
  /** identificador único, usado internamente (filtro, âncora da seção) */
  id: string;
  /** nome mostrado na tela (filtro + título da seção) */
  label: string;
  /** frase curta em itálico, mesmo tom editorial do resto do site */
  tagline: string;
  /**
   * Cor do placeholder (usada até você trocar pelas fotos reais).
   * Pode ser qualquer cor CSS válida: "#7c2d3a", "oklch(0.5 0.1 20)",
   * "rgb(120,40,50)" etc. Escolha tons que combinem com a paleta do site
   * (bordeaux, blush, champagne) ou o que preferir.
   */
  placeholderColor: string;
};

export type Product = {
  /** identificador único do produto */
  id: string;
  /** precisa bater com o `id` de uma categoria lá em cima */
  categoryId: string;
  /** nome do produto, ex: "Vestido Aurora" */
  name: string;
  /** descrição curta (1 linha), estilo itálico editorial */
  description: string;
  image?: string;
};

export const categories: ProductCategory[] = [
  {
    id: "noivas",
    label: "Noivas",
    tagline: "O vestido do grande dia, escolhido com calma, prova a prova.",
    placeholderColor: "#8a3a48",
  },
  {
    id: "15-anos",
    label: "15 Anos",
    tagline: "Uma noite de princesa, do jeito que você sempre sonhou.",
    placeholderColor: "#c98fa0",
  },
  {
    id: "formatura",
    label: "Formatura",
    tagline: "Silhuetas marcantes para brilhar em qualquer celebração.",
    placeholderColor: "#b8935f",
  },
  {
    id: "madrinhas",
    label: "Madrinhas",
    tagline: "Elegância discreta para acompanhar a noiva com estilo.",
    placeholderColor: "#9a8b6f",
  },
  {
    id: "gala-e-festas",
    label: "Gala & Festas",
    tagline: "Brilho, fendas e sofisticação para ocasiões inesquecíveis.",
    placeholderColor: "#584b60",
  },
  {
    id: "ternos",
    label: "Ternos",
    tagline: "Alfaiataria sob medida para os cavalheiros da celebração.",
    placeholderColor: "#3f4652",
  },
  // {
  //   id: "malucos",
  //   label: "Loucaçous",
  //   tagline: "Alfaiataria sob medida para os cavalheiros da celebração.",
  //   placeholderColor: "#3f4652",
  // },
];

export const products: Product[] = [
  // 15 Anos
  {
    id: "1",
    categoryId: "15-anos",
    name: "Vestido Esmeralda",
    description: "Renda francesa e cauda longa, para uma entrada inesquecível.",
    image: vestido15Anos1,
  },
  {
    id: "2",
    categoryId: "15-anos",
    name: "Vestido Preto Glitter",
    description: "Silhueta sereia com bordado floral delicado no busto.",
    image: vestido15Anos2,
  },
  {
    id: "3",
    categoryId: "15-anos",
    name: "Vestido Vermelho",
    description: "Tule leve e decote coração, romântico e minimalista.",
    image: vestido15Anos3,
  },
  // Formatura
  {
    id: "4",
    categoryId: "formatura",
    name: "Vestido Azul",
    description: "Saia volumosa em camadas de tule com brilho suave.",
    image: vestidoFormatura1,
  },
  {
    id: "5",
    categoryId: "formatura",
    name: "Vestido Verde",
    description: "Bordado em pedrarias e corpete estruturado.",
    image: vestidoFormatura2,
  },
  // Gala e Festas
  {
    id: "6",
    categoryId: "gala-e-festas",
    name: "Vestido Magenta",
    description: "Fenda lateral e caimento fluido para a noite de gala.",
    image: vestidoGalaEFestas1,
  },
  {
    id: "7",
    categoryId: "gala-e-festas",
    name: "Vestido Preto",
    description: "Alfaiataria justa com detalhe em metal dourado.",
    image: vestidoGalaEFestas2,
  },
  // Madrinhas
  {
    id: "8",
    categoryId: "madrinhas",
    name: "Vestido Lilás",
    description: "Tom pastel em crepe, elegante e confortável para longas festas.",
    image: vestidoMadrinhas1,
  },
  {
    id: "9",
    categoryId: "madrinhas",
    name: "Vestido Verde",
    description: "Corte slim em lã fria, para um visual clássico e atual.",
    image: vestidoMadrinhas2,
  },
  // Noivas
  {
    id: "10",
    categoryId: "noivas",
    name: "Vestido Renda Corpete",
    description: "Alfaiataria italiana com colete combinando.",
    image: vestidoNoivas1,
  },
  {
    id: "11",
    categoryId: "noivas",
    name: "Vestido Renda",
    description: "Alfaiataria italiana com colete combinando.",
    image: vestidoNoivas2,
  },
  {
    id: "12",
    categoryId: "noivas",
    name: "Vestido Renda Branco",
    description: "Alfaiataria italiana com colete combinando.",
    image: vestidoNoivas3,
  },
];
