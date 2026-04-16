"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Target, Briefcase, TrendingUp, ArrowRightLeft, ArrowRight } from "lucide-react";

const profiles = [
  {
    icon: Target,
    title: "Você é MEI?",
    desc: "Quer formalizar? Regularizar sua situação? Cuidamos de tudo: abertura, impostos e orientação fiscal.",
    cta: "Formalizar MEI",
  },
  {
    icon: Briefcase,
    title: "É Autônomo?",
    desc: "Precisa de acompanhamento fiscal profissional? Quer se formalizar? Aqui você encontra o caminho certo.",
    cta: "Consultoria Grátis",
  },
  {
    icon: TrendingUp,
    title: "Empresa Cresceu?",
    desc: "Quer melhorar a gestão e otimizar impostos? Temos relatórios que ajudam você a decidir melhor.",
    cta: "Auditoria de Gestão",
  },
  {
    icon: ArrowRightLeft,
    title: "Quer Migrar?",
    desc: "Seu contador atual não te entende mais? Venha para a Azucon. Conversamos e planejamos juntos.",
    cta: "Migrar Agora",
  },
];

export default function UserProfiles() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      id="publicos" 
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-primary"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Fundo corporativo" 
            fill
            className="object-cover"
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Contabilidade Sob Medida</span>
            <h2 className="text-4xl md:text-5xl font-black text-white font-display">Qual é o seu Momento?</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Temos soluções específicas para cada tipo de negócio e empresário em Nova Granada.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:bg-accent hover:text-primary hover:border-transparent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-gray-50 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:text-primary transition-colors mb-6">
                <profile.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold font-display text-primary group-hover:text-primary mb-4">{profile.title}</h3>
              <p className="text-sm text-gray-600 group-hover:text-primary/80 mb-8 leading-relaxed">
                {profile.desc}
              </p>

              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-whatsapp"))}
                className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:text-primary transition-colors"
              >
                {profile.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
