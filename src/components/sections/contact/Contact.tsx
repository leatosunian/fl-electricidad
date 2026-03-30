'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section ref={ref} className="bg-neutral-900 py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-20 pointer-events-none grayscale">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp35QShtigXr3hxOi2q0hB4melKOExjNg4rf93QKr621Isk6Wf2lK0gdWWF1CFdldf8PXJCyPxbWnUffBpFql7WeGsgw8NknjF-eiwoWvvUlkULyKkgUYDDypD-SaN6IFq49kNOHtlNJGMEnFyaRIbgQ5lxYWqpgIisExPcE3-eLe_EAXYvHv-2YQUN-a9zjF9Dm2g0rFy5XThAyQlqi2KoDyF-6ddsMtg9IV1Azr56Tpoc2-lVY7PEtyvhCMNwEJ6u_4DURQNShu_"
          alt="Plano de edificio con símbolos eléctricos"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="bg-primary-container p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="max-w-xl" variants={itemVariants}>
            <h2 className="font-headline text-4xl md:text-6xl font-black text-on-primary-container uppercase leading-none mb-6">
              ¿Necesitás un electricista de confianza?
            </h2>
            <p className="text-on-primary-container/80 text-lg uppercase font-bold tracking-tight">
              Respondemos rápido, presupuestamos sin cargo y trabajamos con garantía.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-6 w-full lg:w-auto" variants={containerVariants}>
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-on-surface px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-100 transition-colors shadow-xl"
            >
              Solicitar Presupuesto
            </motion.button>
            <Link
              href="https://api.whatsapp.com/send?phone=5492235982883"
              target="_blank"
              className="flex items-center justify-center gap-4 bg-neutral-950 text-white px-10 py-6 font-black text-lg md:text-2xl uppercase tracking-tighter hover:bg-neutral-800 transition-colors"
            >
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-4 w-full"
              >
                <span className="material-symbols-outlined">phone</span>
                +54 9 2235 98-2883
              </motion.div>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5492235423025"
              target="_blank"
              className="flex items-center justify-center gap-4 bg-neutral-950 text-white px-10 py-6 font-black text-lg md:text-2xl uppercase tracking-tighter hover:bg-neutral-800 transition-colors"
            >
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-4 w-full"
              >
                <span className="material-symbols-outlined">phone</span>
                +54 9 2235 42-3025
              </motion.div>
            </Link>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
