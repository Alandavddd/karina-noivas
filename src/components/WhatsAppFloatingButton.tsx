import { WHATSAPP_SCHEDULE_URL } from "@/components/Header";

/**
 * Botão flutuante de WhatsApp, fixo no canto da tela em todas as páginas.
 * Pedido da cliente: deixar o WhatsApp bem destacado e fácil de achar.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_SCHEDULE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 md:right-8 md:bottom-8 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="currentColor"
      >
        <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.687 4.68 1.878 6.598L3 29l7.09-2.336a12.44 12.44 0 0 0 5.911 1.505h.005c6.905 0 12.5-5.596 12.5-12.5S22.906 3 16.001 3Zm0 22.7h-.004a10.16 10.16 0 0 1-5.176-1.418l-.371-.22-3.85 1.27 1.29-3.752-.242-.386a10.14 10.14 0 0 1-1.55-5.394c0-5.614 4.572-10.186 10.192-10.186 2.724 0 5.284 1.06 7.21 2.987a10.12 10.12 0 0 1 2.983 7.209c0 5.614-4.573 10.186-10.19 10.186Zm5.593-7.63c-.306-.154-1.813-.895-2.094-.997-.281-.102-.486-.153-.69.154-.204.307-.792.997-.972 1.202-.179.205-.358.23-.664.077-.306-.154-1.293-.477-2.463-1.522-.911-.813-1.526-1.817-1.705-2.124-.179-.307-.019-.473.135-.626.138-.138.306-.358.46-.537.153-.18.204-.307.306-.512.102-.205.05-.384-.026-.538-.077-.154-.69-1.664-.945-2.28-.249-.598-.502-.517-.69-.527-.179-.008-.383-.01-.588-.01-.204 0-.537.077-.818.384-.281.307-1.073 1.049-1.073 2.559 0 1.51 1.099 2.968 1.252 3.173.153.205 2.163 3.303 5.24 4.633.732.316 1.303.505 1.748.646.735.234 1.404.201 1.933.122.59-.088 1.813-.741 2.069-1.457.256-.717.256-1.331.179-1.458-.077-.128-.281-.205-.588-.358Z" />
      </svg>
    </a>
  );
}
