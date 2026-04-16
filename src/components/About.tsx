"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, label: "Equipe Especializada", value: "Especialistas reais, não robôs" },
  { icon: MapPin, label: "Presença Física", value: "Nova Granada / SP" },
  { icon: Clock, label: "Agilidade", value: "Resposta rápida garantida" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photos Grid (Humanization) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Board meeting" 
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="space-y-4 pt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl -translate-y-12"
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" 
                    alt="Team working" 
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="bg-accent p-8 rounded-[2.5rem] text-primary max-w-[250px] ml-auto -translate-y-8"
                >
                  <p className="font-display font-black text-4xl mb-1">+250</p>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-80">guias geradas</p>
                </motion.div>
              </div>
            </div>
            
            {/* Decal */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Online</p>
                  <p className="text-sm text-gray-500">e Humano</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Somos Parte de Nova Granada</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary font-display mt-4 leading-tight">
                Contabilidade com <br /> <span className="text-accent italic">Rosto Amigo</span> e <br /> Soluções Digitais
              </h2>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                Somos do tamanho certo para entender você. Uma equipe focada em atender cada cliente como um sócio, não como um número.
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Estamos aqui para crescer com você. Quando você precisa, você fala direto com especialistas que conhecem o mercado local e se importam com seus resultados.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {stats.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="mt-1 text-accent">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
