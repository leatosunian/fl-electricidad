const FEATURES = [
  {
    icon: "verified",
    title: "Técnicos Certificados",
    description: "Personal altamente capacitado y matriculado.",
  },
  {
    icon: "workspace_premium",
    title: "Garantía de Trabajo",
    description: "Aseguramos cada conexión por 12 meses.",
  },
  {
    icon: "bolt",
    title: "Atención Inmediata",
    description: "Logística optimizada para reducir esperas.",
  },
  {
    icon: "request_quote",
    title: "Presupuestos sin Cargo",
    description: "Transparencia total antes de iniciar el trabajo.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/20">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="bg-white p-8">
                <span className="material-symbols-outlined text-primary mb-4">
                  {feature.icon}
                </span>
                <h4 className="font-bold uppercase text-on-surface mb-2">
                  {feature.title}
                </h4>
                <p className="text-xs text-neutral-500 uppercase tracking-tight">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
            Calidad Certificada
          </h2>
          <p className="font-headline text-5xl font-extrabold text-on-surface leading-[0.9] uppercase mb-8">
            Por qué elegir nuestra{" "}
            <span className="text-outline">precisión</span>
          </p>
          <p className="text-neutral-600 mb-8 max-w-md">
            No solo arreglamos cables; diseñamos infraestructuras seguras que
            protegen a tu familia y optimizan el consumo de tu negocio.
          </p>
          <div className="h-1 w-24 bg-primary-container" />
        </div>
      </div>
    </section>
  );
}
