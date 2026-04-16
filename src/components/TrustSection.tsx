"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "JC",
    name: "João Carlos",
    role: "Empresário",
    text: "Na Azucon, tenho o serviço exato que preciso, com atendimento personalizado e soluções rápidas para minhas questões. Recomendo muito!",
  },
  {
    initials: "MS",
    name: "Maria Silva",
    role: "Médica Autônoma",
    text: "A Azucon é de fácil acesso, tenho tudo na mão bem explicado. O suporte para dúvidas é adequado e sempre disponível.",
  },
  {
    initials: "PC",
    name: "Pedro Costa",
    role: "Consultor de Negócios",
    text: "Atendimento excelente, tanto para contratar como para suporte contínuo. Contribuem muito com a tomada de decisões importantes.",
  },
  {
    initials: "FO",
    name: "Fernanda Oliveira",
    role: "Empreendedora",
    text: "Agradeço à Azucon pelos serviços dinâmicos. Sempre contribuindo com visão estratégica e facilitando minha tomada de decisão.",
  },
];

const faqs = [
  {
    q: "Como funciona o serviço de contabilidade online da Azucon?",
    a: "A contabilidade online é segura, prática e totalmente documentada. Você acessa relatórios, envia documentos e se comunica com nossos especialistas via WhatsApp ou email. Tudo transparente e eficiente.",
  },
  {
    q: "Qual é a diferença entre MEI, PJ e Autônomo?",
    a: "MEI é para até R$81 mil/ano. PJ é empresa formal para maiores operações. Autônomo não tem vínculo empresarial permanente. Analisamos seu caso e recomendamos a melhor estrutura para você economizar impostos.",
  },
  {
    q: "A Azucon tem contadores de verdade ou é tudo robô?",
    a: "Sim! Nossa equipe é formada por contadores reais e especializados. Você não fala com robôs automatizados, mas com pessoas que entendem seu negócio e se importam com seus resultados.",
  },
  {
    q: "Posso trocar de contador e vir para a Azucon?",
    a: "Com certeza! Fazemos uma auditoria gratuita para verificar se tudo está em dia e cuidamos de toda a transição de forma rápida e segura, sem interrupções no seu negócio.",
  },
];

export default function TrustSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      {/* Split Background for Desktop */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-accent/5 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Testimonials */}
          <div className="lg:pr-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-12"
            >
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Depoimentos</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary font-display">Quem Confia em Nós</h2>
              
              <div className="flex items-center gap-6 pt-6">
                <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
                  <span className="font-black text-2xl text-primary">4.8</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider leading-tight">+500 Clientes<br />Satisfeitos</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] border border-gray-100/50 shadow-sm hover:shadow-xl transition-all"
                >
                  <Quote className="text-accent mb-4 opacity-50" size={24} />
                  <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold leading-none">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary font-display">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-600">Tire suas dúvidas sobre como podemos ajudar seu negócio a crescer com segurança.</p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all text-left ${
                      openFaq === index ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-gray-50 text-primary hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-bold pr-8">{faq.q}</span>
                    <ChevronDown 
                      className={`shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} 
                      size={20} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 text-gray-600 leading-relaxed text-sm">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
