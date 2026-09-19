import vestido15Anos1 from "@/assets/catalogo/15-anos/vestido-debutante-esmeralda.jpeg";
import vestido15Anos2 from "@/assets/catalogo/15-anos/vestido-debutante-preto-glitter.jpeg";
import vestido15Anos3 from "@/assets/catalogo/15-anos/vestido-debutante-vermelho.jpeg";
import vestido15Anos4 from "@/assets/catalogo/15-anos/vestido-debutante-azul-glitter.jpeg";

import vestidoFormatura1 from "@/assets/catalogo/formatura/vestido-festa-azul.jpeg";
import vestidoFormatura2 from "@/assets/catalogo/formatura/vestido-festa-verde.jpeg";

import vestidoGalaEFestas1 from "@/assets/catalogo/gala-e-festas/vestido-festa-magenta.jpeg";
import vestidoGalaEFestas2 from "@/assets/catalogo/gala-e-festas/vestido-festa-preto.jpeg";
import vestidoGalaEFestas3 from "@/assets/catalogo/gala-e-festas/vestido-festa-bordo-sereia.jpeg";

import vestidoMadrinhas1 from "@/assets/catalogo/madrinhas/vestido-festa-lilas.jpeg";
import vestidoMadrinhas2 from "@/assets/catalogo/madrinhas/vestido-festa-verde-2.jpeg";

import vestidoNoivas1 from "@/assets/catalogo/noivas/vestido-noiva-detalhe-corpete-renda.jpeg";
import vestidoNoivas2 from "@/assets/catalogo/noivas/vestido-noiva-renda.jpeg";
import vestidoNoivas3 from "@/assets/catalogo/noivas/vestido-noiva.jpeg";

import terno1 from "@/assets/catalogo/ternos/terno-cinza.jpeg";
import terno2 from "@/assets/catalogo/ternos/terno-azul-royal.jpeg";

import vestidoAia1 from "@/assets/catalogo/aia/vestido-aia-flores-perolas.jpeg";
import vestidoAia2 from "@/assets/catalogo/aia/vestido-aia-laco-pink.jpeg";
import vestidoAia3 from "@/assets/catalogo/aia/vestido-aia-bordado-tule.jpeg";
import vestidoAia4 from "@/assets/catalogo/aia/vestido-aia-vermelho.jpeg";

import vestidoNoivas4 from "@/assets/catalogo/noivas/vestido-noiva-cropped-corse.jpeg";

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
  {
    id: "aia",
    label: "Vestidos de Aia",
    tagline: "Delicadeza em cada detalhe para as pequenas encantarem o grande dia.",
    placeholderColor: "#d4a5b0",
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
    description: "Ombré esmeralda com brilho suave, decote princesa e corpete de renda bordado em pérolas.",
    image: vestido15Anos1,
  },
  {
    id: "2",
    categoryId: "15-anos",
    name: "Vestido Preto Glitter",
    description: "Silhueta de princesa em preto glitter, ombros à mostra e cinto transparente que marca a cintura.",
    image: vestido15Anos2,
  },
  {
    id: "3",
    categoryId: "15-anos",
    name: "Vestido Vermelho",
    description: "Corpete rígido bordado em strass sobre saia rodada de tule vermelho com leve brilho.",
    image: vestido15Anos3,
  },
  {
    id: "13",
    categoryId: "15-anos",
    name: "Vestido Azul Glitter",
    description: "Azul serenity com glitter, ombros à mostra e laço na cintura para uma noite de princesa.",
    image: vestido15Anos4,
  },
  // Formatura
  {
    id: "4",
    categoryId: "formatura",
    name: "Vestido Azul",
    description: "Decote V profundo em tecido fluido azul serenity, elegância leve para a noite de formatura.",
    image: vestidoFormatura1,
  },
  {
    id: "5",
    categoryId: "formatura",
    name: "Vestido Verde",
    description: "Um ombro só, manga longa bufante e fenda lateral em verde esmeralda brilhante.",
    image: vestidoFormatura2,
  },
  // Gala e Festas
  {
    id: "6",
    categoryId: "gala-e-festas",
    name: "Vestido Magenta",
    description: "Um ombro só em cetim magenta, drapeado que valoriza a silhueta e fenda frontal.",
    image: vestidoGalaEFestas1,
  },
  {
    id: "7",
    categoryId: "gala-e-festas",
    name: "Vestido Preto",
    description: "Paetês pretos do busto à barra, alcinhas finas e fenda lateral para um look de festa marcante.",
    image: vestidoGalaEFestas2,
  },
  {
    id: "14",
    categoryId: "gala-e-festas",
    name: "Vestido Bordô Sereia",
    description: "Corte sereia em bordô, faixas de strass no busto e barra em camadas de tule fluido.",
    image: vestidoGalaEFestas3,
  },
  // Madrinhas
  {
    id: "8",
    categoryId: "madrinhas",
    name: "Vestido Lilás",
    description: "Um ombro só em cetim lilás, drapeado na cintura e fenda lateral discreta.",
    image: vestidoMadrinhas1,
  },
  {
    id: "9",
    categoryId: "madrinhas",
    name: "Vestido Verde",
    description: "Cetim verde esmeralda em um ombro só, caimento justo e fenda que alonga a silhueta.",
    image: vestidoMadrinhas2,
  },
  // Noivas
  {
    id: "10",
    categoryId: "noivas",
    name: "Vestido Renda Corpete",
    description: "Detalhe do corpete em renda com decote off-shoulder, bordado à mão nos mínimos detalhes.",
    image: vestidoNoivas1,
  },
  {
    id: "11",
    categoryId: "noivas",
    name: "Vestido Renda",
    description: "Vestido de noiva em renda com mangas curtas, saia rodada e cauda para o grande dia.",
    image: vestidoNoivas2,
  },
  {
    id: "12",
    categoryId: "noivas",
    name: "Vestido Renda Branco",
    description: "Renda leve com ombros à mostra e mangas bufantes, um toque romântico e atemporal.",
    image: vestidoNoivas3,
  },
  {
    id: "17",
    categoryId: "noivas",
    name: "Vestido Saia Cropped Corselê",
    description: "Corselê de renda bordada em pérolas sobre saia ampla em tule floral, um visual de noiva em duas peças.",
    image: vestidoNoivas4,
  },
  // Ternos
  {
    id: "15",
    categoryId: "ternos",
    name: "Terno Cinza",
    description: "Terno cinza clássico de dois botões, ideal para casamentos e formaturas durante o dia.",
    image: terno1,
  },
  {
    id: "16",
    categoryId: "ternos",
    name: "Terno Azul Royal",
    description: "Terno azul royal com colete, alfaiataria moderna para quem quer destaque na festa.",
    image: terno2,
  },
  // Aia
  {
    id: "18",
    categoryId: "aia",
    name: "Vestido Aia Flores e Pérolas",
    description: "Corpete bordado em flores e pérolas com mangas bufantes, saia rodada em tule off-white.",
    image: vestidoAia1,
  },
  {
    id: "19",
    categoryId: "aia",
    name: "Vestido Aia Laço Pink",
    description: "Corpete em renda floral com faixa pink amarrada na cintura e barra dupla em cetim.",
    image: vestidoAia2,
  },
  {
    id: "20",
    categoryId: "aia",
    name: "Vestido Aia Bordado",
    description: "Bordado floral em relevo no corpete, mangas curtas transparentes e saia ampla em tule.",
    image: vestidoAia3,
  },
  {
    id: "21",
    categoryId: "aia",
    name: "Vestido Aia Vermelho",
    description: "Vestido vermelho em tule com aplicações florais, ideal para festas temáticas e ocasiões especiais.",
    image: vestidoAia4,
  },
];
