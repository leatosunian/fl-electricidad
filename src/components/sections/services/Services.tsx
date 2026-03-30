import Image from "next/image";

const CARD_SERVICES = [
  {
    icon: "ac_unit",
    title: "Aire Acondicionado",
    description:
      "Instalación y mantenimiento de equipos Split y sistemas centrales con optimización de carga.",
    number: "02",
    variant: "light" as const,
  },
  {
    icon: "construction",
    title: "Instalaciones",
    description:
      "Cableado integral para obras nuevas y remodelaciones bajo normas IRAM.",
    number: "03",
    variant: "hover" as const,
  },
  {
    icon: "settings_suggest",
    title: "Mantenimiento",
    description:
      "Revisiones periódicas para prevenir incendios y sobrecargas en sistemas antiguos.",
    number: "04",
    variant: "light" as const,
  },
  {
    icon: "lightbulb",
    title: "Iluminación LED",
    description:
      "Proyectos de iluminación técnica y decorativa de alta eficiencia energética.",
    number: "05",
    variant: "dark" as const,
  },
] as const;

export default function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Especialidades Técnicas
            </h2>
            <p className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface leading-none uppercase">
              Servicios de Alta Potencia
            </p>
          </div>
          <div className="h-[2px] flex-grow mx-8 bg-surface-container-highest hidden md:block" />
          <p className="text-sm font-medium text-neutral-500 max-w-xs uppercase tracking-tight">
            Estandarización industrial aplicada a infraestructuras residenciales
            y comerciales.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Featured: Urgencias 24/7 */}
          <div className="md:col-span-2 group relative overflow-hidden bg-neutral-900 aspect-[16/9] md:aspect-auto md:h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9TxQvmaly-2d_kBVrgUQfIS_Ta11zabrKoscdmYhq167MARJzEoIuyvbNOdE17biDH_ZXfI4jUsh3pBwrTcMhDcWGB1Aoi4Lj3Tn-SfCAacvPcdzN-XZ4l3U0ix6HL05Fh3_RAN1CONWfiOdu139K653mjzXyPLQcINZDkhYOjrtX4dL49t_Xh3_ZzttxjqpsJXCT_CElci5DrYFjMkQZ9i5n2f2HUnyYg0Ngh9tW5A6gPsYqxtm2iZ8ZgiHyUZX5QrhcwnQ_pgG3"
              alt="Chispas eléctricas en entorno industrial, iluminación dramática"
              fill
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <div className="text-primary-container font-black text-6xl mb-4 font-headline opacity-20">
                01
              </div>
              <h3 className="text-3xl font-bold text-white uppercase font-headline mb-2">
                Urgencias 24/7
              </h3>
              <p className="text-neutral-300 max-w-md">
                Respuesta inmediata ante cortocircuitos y fallas críticas de
                energía en cualquier momento.
              </p>
            </div>
          </div>

          {/* Card Services */}
          {CARD_SERVICES.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  number,
  variant,
}: (typeof CARD_SERVICES)[number]) {
  if (variant === "dark") {
    return (
      <div className="bg-neutral-900 p-10 flex flex-col justify-between group">
        <div>
          <span className="material-symbols-outlined text-4xl text-primary-container mb-8">
            {icon}
          </span>
          <h3 className="text-2xl font-bold uppercase font-headline text-white mb-4">
            {title}
          </h3>
          <p className="text-sm text-neutral-400">{description}</p>
        </div>
        <div className="text-primary-container font-black text-6xl font-headline opacity-10 self-end">
          {number}
        </div>
      </div>
    );
  }

  if (variant === "hover") {
    return (
      <div className="bg-white p-10 flex flex-col justify-between group hover:bg-primary-container transition-colors duration-300">
        <div>
          <span className="material-symbols-outlined text-4xl text-on-surface mb-8">
            {icon}
          </span>
          <h3 className="text-2xl font-bold uppercase font-headline text-on-surface mb-4">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 group-hover:text-on-primary-container">
            {description}
          </p>
        </div>
        <div className="text-neutral-200 font-black text-6xl font-headline group-hover:text-on-primary-container/20 self-end">
          {number}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-highest p-10 flex flex-col justify-between group">
      <div>
        <span className="material-symbols-outlined text-4xl text-primary mb-8">
          {icon}
        </span>
        <h3 className="text-2xl font-bold uppercase font-headline text-on-surface mb-4">
          {title}
        </h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
      <div className="text-primary font-black text-6xl font-headline opacity-10 self-end">
        {number}
      </div>
    </div>
  );
}
