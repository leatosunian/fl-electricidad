import Link from "next/link";

export default function WhatsAppFab() {
  return (
    <Link
      href="#"
      className="fixed bottom-8 right-8 z-40 bg-primary-container text-on-primary-container w-16 h-16 flex items-center justify-center shadow-[0_12px_40px_rgba(26,28,28,0.06)] group hover:scale-110 transition-transform active:scale-95"
      aria-label="Consulta por WhatsApp"
    >
      <span className="material-symbols-outlined text-3xl">chat</span>
      <span className="absolute right-full mr-4 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Consulta Directa
      </span>
    </Link>
  );
}
