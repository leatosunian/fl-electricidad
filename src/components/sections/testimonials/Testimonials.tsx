'use client';

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TESTIMONIALS = [
  {
    initials: "RM",
    name: "Ricardo M.",
    role: "Hogar Particular",
    quote:
      "Excelente servicio. Vinieron por una urgencia un domingo a la noche y lo solucionaron en 30 minutos. Muy profesionales.",
  },
  {
    initials: "LC",
    name: "Lucía C.",
    role: "Comercio Minorista",
    quote:
      "Hicieron toda la instalación de mi local comercial. Prolijidad impecable y cumplieron con los plazos acordados. Recomendados.",
  },
  {
    initials: "JP",
    name: "Juan P.",
    role: "Consorcio Edificio",
    quote:
      "El mantenimiento preventivo que realizaron detectó una falla en el tablero que podría haber sido un desastre. Muy agradecido.",
  },
] as const;

function StarRating() {
  return (
    <div className="flex gap-1 mb-4 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, rotateY: -90, y: 30 },
    visible: {
      opacity: 1,
      rotateY: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="font-headline text-4xl font-extrabold uppercase text-on-surface">
            Voz de nuestros Clientes
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.initials}
              className="p-8 border-l-4 border-primary-container bg-surface-container-low"
              variants={testimonialVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <StarRating />
              <p className="italic text-neutral-700 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-200 flex items-center justify-center font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
