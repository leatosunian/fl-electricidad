import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #ffd700 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <span className="material-symbols-outlined absolute -right-20 -bottom-20 text-[40rem] text-primary/10 select-none">
          bolt
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            Industrial Precision Engineering
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase">
            Soluciones{" "}
            <span className="text-primary-container">Eléctricas</span> a
            Domicilio
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed">
            Seguridad y eficiencia para tu hogar o comercio. Ingeniería
            eléctrica de alto impacto con estándares industriales aplicados a
            cada conexión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-primary-container text-on-primary-container px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all duration-300 active:scale-95 group"
            >
              Contactar por WhatsApp
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-widest text-sm text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-square relative group">
            <div className="absolute inset-0 bg-primary-container/20 -translate-x-4 translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVDi9AeF2IF0IYry0RJoHp5ZyZ6uM_pCu3pMLqyUHxq8vhx1Ha5jVzBlMJusumY_H5gEygvGGdbaOwdT_LMg4fwf4qNwDgS8B_3PsvLhOmhLWtDm_5oYFFgwL4_dMQBmcrjgwdnzhj7qNU0D4PDG-EW8BbdZooOn70FvsRADdgS7cpw_3t8ISsHfP4rLvdcMtcdQYhcJQUAVVRqlDTxncdlgEJcdHr8pqeWY_-j5TCjiICZcfwOEeCLlOfw6QjNpUc_VW02Nh4ubxR"
              alt="Electricista profesional trabajando en un panel eléctrico con herramientas industriales"
              fill
              className="object-cover relative z-10 grayscale contrast-125 brightness-90"
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 z-20 shadow-2xl hidden md:block">
              <div className="text-4xl font-black font-headline text-on-surface">
                15+
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                Años de experiencia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
