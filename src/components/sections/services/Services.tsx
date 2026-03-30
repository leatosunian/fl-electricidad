'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CARD_SERVICES = [
  {
    icon: "smart_toy",
    title: "Domótica",
    description: "Diseño e implementación de sistemas automatizados para el control de iluminación, climatización y seguridad en espacios residenciales y comerciales.",
    number: "02",
    variant: "light" as const,
  },
  {
    icon: "construction",
    title: "Instalaciones",
    description:
      "Desarrollo e instalación integral para obras nuevas y remodelaciones bajo normas IRAM.",
    number: "03",
    variant: "hover" as const,
  },
  {
    icon: "lightbulb",
    title: "Mantenimiento",
    description:
      "Revisiones periódicas para prevenir incendios y sobrecargas en sistemas antiguos.",
    number: "04",
    variant: "light" as const,
  },
  {
    icon: "settings_suggest",
    title: "Reparaciones",
    description:
      "Solución rápida a fallas eléctricas, elementos dañados, cortocircuitos y problemas de iluminación.",
    number: "05",
    variant: "dark" as const,
  },
] as const;

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const featuredVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-16 gap-8"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Sobre nosotros
            </h2>
            <p className="font-headline text-5xl font-extrabold text-on-surface leading-[0.9] uppercase">
              Nuestros <span className="text-yellow-400">Servicios</span> 
            </p>
            
          </div>
          <div className="h-0.5 grow mx-8 bg-surface-container-highest hidden md:block" />
          <p className="text-sm font-medium text-neutral-500 max-w-xs uppercase tracking-tight">
            Estandarización industrial aplicada a infraestructuras residenciales
            y comerciales.
          </p>
          <div className="block md:hidden h-1 w-24 bg-primary-container" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Featured: Urgencias 24/7 */}
          <motion.div
            variants={featuredVariants}
            className="md:col-span-2 group relative overflow-hidden bg-linear-to-tl from-yellow-500 to-neutral-900 h-80 md:aspect-auto md:h-100"
          >
            {/* Background icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-15 transition-opacity duration-500">
              <span className="material-symbols-outlined text-[400px] text-primary">
                emergency
              </span>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-900/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10 pb-16 md:p-10 md:pb-10 z-10 w-full">
              <div className="text-primary font-black text-6xl mb-4 font-headline opacity-40">
                01
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-4xl text-primary">
                  emergency
                </span>
                <h3 className="text-3xl font-bold text-white uppercase font-headline">
                  Urgencias
                </h3>
              </div>
              <p className="text-neutral-300 max-w-md">
                Respuesta inmediata ante cortocircuitos y fallas críticas de
                energía en cualquier momento.
              </p>
            </div>
          </motion.div>

          {/* Card Services */}
          {CARD_SERVICES.map((service, index) => (
            <motion.div key={service.number} variants={cardVariants}>
              <ServiceCard {...service} isFirst={index === 0} />
            </motion.div>
          ))}
        </motion.div>
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
  isFirst = false,
}: (typeof CARD_SERVICES)[number] & { isFirst?: boolean }) {
  const heightClass = isFirst ? "md:h-100" : "md:min-h-80";

  if (variant === "dark") {
    return (
      <div className={`bg-neutral-900 p-10 flex flex-col justify-between group ${heightClass}`}>
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
      <div className={`bg-white p-10 flex flex-col justify-between group hover:bg-primary-container transition-colors duration-300 ${heightClass}`}>
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
    <div className={`bg-surface-container-highest p-10 flex flex-col justify-between group ${heightClass}`}>
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
