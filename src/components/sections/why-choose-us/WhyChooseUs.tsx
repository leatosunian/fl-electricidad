'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    icon: "verified",
    title: "Técnicos Certificados",
    description: "Personal capacitado bajo normas nacionales e internacionales.",
  },
  {
    icon: "workspace_premium",
    title: "Garantía de Trabajo",
    description: "Año completo de cobertura sobre instalaciones y reparaciones.",
  },
  {
    icon: "bolt",
    title: "Atención Inmediata",
    description: "Turnos rápidos y flexibles adaptados a tu agenda.",
  },
  {
    icon: "request_quote",
    title: "Presupuestos sin Cargo",
    description: "Cotización gratuita y detallada sin compromiso de contratación.",
  },
] as const;

export default function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/20">
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8"
                variants={featureVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <span className="material-symbols-outlined text-primary mb-4">
                  {feature.icon}
                </span>
                <h4 className="font-bold uppercase text-on-surface mb-2">
                  {feature.title}
                </h4>
                <p className="text-xs text-neutral-500 uppercase tracking-tight">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
            Calidad Certificada
          </h2>
          <p className="font-headline text-5xl font-extrabold text-on-surface leading-[0.9] uppercase mb-8">
            Qué nos convierte en tu
            <span className="text-yellow-400"> mejor elección</span>
          </p>
          <p className="text-neutral-600 mb-8 max-w-md">
            Protegemos lo más valioso: tu familia en casa y la continuidad de tu negocio con instalaciones de primera calidad.
          </p>
          <div className="h-1 w-24 bg-primary-container" />
        </motion.div>
      </div>
    </section>
  );
}
