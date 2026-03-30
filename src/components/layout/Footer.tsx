import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary text-xl">
              bolt
            </span>
            <span className="text-lg font-bold text-neutral-900 font-headline uppercase">
              FL Electricidad
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
            © {new Date().getFullYear()} FL Electricidad. Industrial Precision
            Engineering.
          </p>
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-loose">
            Seguridad eléctrica de vanguardia para infraestructuras modernas.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-sm uppercase tracking-widest text-neutral-900 font-bold mb-2">
            Contacto
          </p>
          <div className="flex items-center gap-3 text-neutral-600">
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            <span className="text-xs uppercase tracking-widest">
              Calle Industrial 123, Ciudad
            </span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span className="text-xs uppercase tracking-widest">
              Mon-Fri: 08:00 - 18:00
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-body text-sm uppercase tracking-widest text-neutral-900 font-bold mb-2">
            Redes Sociales
          </p>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-neutral-600 hover:text-yellow-500 transition-colors opacity-80 hover:opacity-100"
              >
                <span className="text-xs uppercase tracking-widest font-bold">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 h-px w-full" />
    </footer>
  );
}
