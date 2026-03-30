import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/electricidad.fl/", icon: FaInstagram },
] as const;

export default function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 px-8 py-12 max-w-7xl mx-auto">
        <div className="md:max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logoby.png" alt="FL Electricidad" width={120} height={120} />
            {/* <span className="text-lg font-bold text-neutral-900 font-headline uppercase">
              FL Electricidad
            </span> */}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
            © {new Date().getFullYear()} FL Electricidad.
             {/* Electricistas a domicilio en Mar del Plata. */}
          </p>
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-loose">
            Tu instalación eléctrica, en buenas manos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row  gap-12 sm:gap-28">

          <div className="flex flex-col gap-2 sm:gap-4">
            <p className="font-body text-sm uppercase tracking-widest text-neutral-900 font-bold mb-2">
              Navegación
            </p>
            {[
              { label: "Inicio", href: "#" },
              { label: "Servicios", href: "#services" },
              { label: "Contacto", href: "#contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest text-neutral-600 hover:text-yellow-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:gap-4">
            <p className="font-body text-sm uppercase tracking-widest text-neutral-900 font-bold mb-2">
              Contacto
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=5492235982883"
              target="_blank"
              className="flex items-center gap-3 text-neutral-600 hover:text-yellow-500 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest">
                +54 9 2235 98-2883
              </span>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5492235423025"
              target="_blank"
              className="flex items-center gap-3 text-neutral-600 hover:text-yellow-500 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest">
                +54 9 2235 42-3025
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-2 sm:gap-4">
            <p className="font-body text-sm uppercase tracking-widest text-neutral-900 font-bold mb-2">
              Redes Sociales
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-neutral-600 hover:text-yellow-500 transition-colors opacity-80 hover:opacity-100"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="bg-neutral-200 h-px w-full" />
      <div className="bg-neutral-100 px-8 py-6 text-center">
        <p className="text-xs text-neutral-600  tracking-wider">
          Desarrollado por{" "}
          <Link
            href="https://tosunian.dev/"
            target="_blank"
            className="text-neutral-900 hover:text-yellow-500 transition-colors font-bold border-b border-yellow-500"
          >
            tosunian.dev 
          </Link>
        </p>
      </div>
    </footer>
  );
}
