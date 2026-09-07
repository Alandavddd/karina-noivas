import type { Product, ProductCategory } from "@/lib/catalog-data";

/** Mesmo número já usado no resto do site (agendamento de prova). */
export const WHATSAPP_NUMBER = "5551992402094";

/**
 * Monta o link do WhatsApp com a mensagem já preenchida pro produto clicado.
 *
 * O texto é o MESMO MODELO para todos os produtos por enquanto — só o nome
 * e a categoria mudam. Se um dia quiser textos diferentes por categoria,
 * dá pra trocar esse `if`/`switch` aqui dentro sem mexer em mais nada.
 */
export function buildProductWhatsAppLink(product: Product, category: ProductCategory) {
  const message = `Olá! Tenho interesse no ${product.name} (${category.label}). Poderia me passar mais informações e valores?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
