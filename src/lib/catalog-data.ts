/**
 * DADOS DO CATÁLOGO
 * ==================
 * Este arquivo é a ÚNICA coisa que você precisa editar pra adicionar/remover
 * categorias e produtos do catálogo. A página /catalogo só lê essas duas
 * listas (`categories` e `products`) e monta tudo sozinha.
 *
 * COMO ADICIONAR UMA NOVA CATEGORIA
 * ----------------------------------
 * 1. Copie um dos objetos da lista `categories` abaixo.
 * 2. Troque o `id` (sem espaços/acentos, tipo "ternos", "calcados").
 * 3. Troque `label` (nome que aparece na tela), `tagline` (frase em itálico)
 *    e `placeholderColor` (ver seção de cores mais abaixo).
 * 4. Pronto — a categoria já aparece no filtro do topo e ganha sua própria
 *    seção na página, na mesma ordem em que está nesta lista.
 *
 * COMO ADICIONAR UM NOVO PRODUTO
 * --------------------------------
 * 1. Copie um dos objetos da lista `products` abaixo.
 * 2. Troque o `id` (precisa ser único — pode ser só um número em string).
 * 3. Troque `categoryId` pelo `id` de uma categoria que já exista lá em cima.
 * 4. Troque `name` e `description`.
 * 5. O produto aparece automaticamente dentro da seção da categoria certa.
 *
 * COMO TROCAR O PLACEHOLDER PELA FOTO DE VERDADE
 * -------------------------------------------------
 * Por enquanto cada produto usa a cor da categoria (placeholder). Quando
 * você tiver a foto real, veja as instruções no topo de `catalogo.tsx` —
 * é só importar a imagem e adicionar um campo `image` no produto.
 */

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
    id: "ternos",
    label: "Ternos",
    tagline: "Alfaiataria sob medida para os cavalheiros da celebração.",
    placeholderColor: "#3f4652",
  },
];

export const products: Product[] = [
  // Noivas
  {
    id: "1",
    categoryId: "noivas",
    name: "Vestido Aurora",
    description: "Renda francesa e cauda longa, para uma entrada inesquecível.",
  },
  {
    id: "2",
    categoryId: "noivas",
    name: "Vestido Bianca",
    description: "Silhueta sereia com bordado floral delicado no busto.",
  },
  {
    id: "3",
    categoryId: "noivas",
    name: "Vestido Celeste",
    description: "Tule leve e decote coração, romântico e minimalista.",
  },

  // 15 Anos
  {
    id: "4",
    categoryId: "15-anos",
    name: "Vestido Encanto",
    description: "Saia volumosa em camadas de tule com brilho suave.",
  },
  {
    id: "5",
    categoryId: "15-anos",
    name: "Vestido Flor de Lis",
    description: "Bordado em pedrarias e corpete estruturado.",
  },

  // Formatura
  {
    id: "6",
    categoryId: "formatura",
    name: "Vestido Ravena",
    description: "Fenda lateral e caimento fluido para a noite de gala.",
  },
  {
    id: "7",
    categoryId: "formatura",
    name: "Vestido Ísis",
    description: "Alfaiataria justa com detalhe em metal dourado.",
  },

  // Madrinhas
  {
    id: "8",
    categoryId: "madrinhas",
    name: "Vestido Vênus",
    description: "Tom pastel em crepe, elegante e confortável para longas festas.",
  },

  // Ternos
  {
    id: "9",
    categoryId: "ternos",
    name: "Terno Milano Slim",
    description: "Corte slim em lã fria, para um visual clássico e atual.",
  },
  {
    id: "10",
    categoryId: "ternos",
    name: "Terno Firenze Cinza",
    description: "Alfaiataria italiana com colete combinando.",
  },
];
