"use client";

import { motion } from "framer-motion";
import { Building2, FileText, UserPlus, Calculator, Search, Receipt, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abertura & Regularização",
    desc: "Iniciar sua empresa com segurança legal e fiscal. MEI, PJ, tudo certo desde o começo.",
  },
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    desc: "Gestão contábil completa com relatórios que ajudam você a tomar melhores decisões.",
  },
  {
    icon: UserPlus,
    title: "Gestão de MEI",
    desc: "Abertura, regularização e gestão fiscal simplificada para micro empreendedores.",
  },
  {
    icon: FileText,
    title: "Imposto de Renda",
    desc: "Declaração de IR otimizada e planejamento tributário personalizado para seus ganhos.",
  },
  {
    icon: Search,
    title: "Revisão Tributária",
    desc: "Análise profunda de impostos, recuperação de créditos e otimização fiscal estratégica.",
  },
  {
    icon: Receipt,
    title: "Folha de Pagamento",
    desc: "Processamento de folha seguro, encargos corretos, e-Social — sempre em dia.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-[-10%] w-[40%] aspect-square bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] aspect-square bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Nossas Especialidades</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary font-display">
              Soluções Completas para o <br /> seu Sucesso Empresarial
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
              Oferecemos um portfólio completo de serviços contábeis, cada um preparado para resolver um desafio específico do seu negócio.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 bg-white text-gray-900 border border-gray-100 hover:bg-primary hover:text-white hover:border-transparent hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 bg-gray-100 text-primary group-hover:bg-accent group-hover:text-white">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
              <p className="mb-8 leading-relaxed text-gray-600 group-hover:text-white/80">
                {service.desc}
              </p>

              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-whatsapp"))}
                className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all pt-4 border-t border-gray-50 text-accent group-hover:text-white group-hover:border-white/10"
              >
                Falar com Especialista
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
