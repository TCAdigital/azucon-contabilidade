"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Empresa regularizada e sem multas indevidas",
  "Economia no pagamento de impostos",
  "Suporte com especialistas reais",
  "Atendimento 100% online e humanizado",
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Slow Zoom Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center brightness-[0.3]"
          style={{ 
            backgroundImage: "url('/126.jpg')",
          }}
        />
        {/* Gradients to blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Contabilidade para o Futuro</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              Seu Negócio Merece Uma <br className="hidden md:block" />
              <span className="text-accent">Contabilidade Online</span> que Te Entende
            </h1>

            {/* Subtext */}
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
              Soluções contábeis personalizadas em Nova Granada. Atendimento próximo, segurança fiscal e crescimento garantido para sua empresa.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span className="text-sm md:text-base font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-whatsapp"))}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3 active:scale-95"
              >
                Começar Agora
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-whatsapp"))}
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold transition-all"
              >
                Conhecer Serviços
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Geometric Decorative Element */}
      <div className="absolute right-[-5%] top-[15%] w-[40%] aspect-square border-[1px] border-white/10 rounded-full hidden lg:block" />
      <div className="absolute right-[-10%] top-[10%] w-[50%] aspect-square border-[1px] border-white/5 rounded-full hidden lg:block" />
    </section>
  );
}
