import Image from "next/image";

export default function Contact() {
  return (
    <section
      className="bg-neutral-900 py-24 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none grayscale">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp35QShtigXr3hxOi2q0hB4melKOExjNg4rf93QKr621Isk6Wf2lK0gdWWF1CFdldf8PXJCyPxbWnUffBpFql7WeGsgw8NknjF-eiwoWvvUlkULyKkgUYDDypD-SaN6IFq49kNOHtlNJGMEnFyaRIbgQ5lxYWqpgIisExPcE3-eLe_EAXYvHv-2YQUN-a9zjF9Dm2g0rFy5XThAyQlqi2KoDyF-6ddsMtg9IV1Azr56Tpoc2-lVY7PEtyvhCMNwEJ6u_4DURQNShu_"
          alt="Plano de edificio con símbolos eléctricos"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-primary-container p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-6xl font-black text-on-primary-container uppercase leading-none mb-6">
              ¿Listo para energizar tu proyecto?
            </h2>
            <p className="text-on-primary-container/80 text-lg uppercase font-bold tracking-tight">
              Presupuestos inmediatos y asesoramiento técnico sin cargo.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <a
              href="tel:+541100000000"
              className="flex items-center justify-center gap-4 bg-neutral-950 text-white px-10 py-6 font-black text-2xl uppercase tracking-tighter hover:bg-neutral-800 transition-colors"
            >
              <span className="material-symbols-outlined">phone</span>
              +54 11 0000 0000
            </a>
            <button className="bg-white text-on-surface px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-100 transition-colors shadow-xl">
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
