"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square border border-white rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white font-display leading-tight">
              Ainda com Dúvidas? <br className="hidden md:block" />
              <span className="text-accent italic">Vamos Conversar!</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              Questões fiscais não esperam. Entre em contato agora e agende uma consultoria gratuita com nossos especialistas em Nova Granada.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all text-center lg:text-left">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <p className="text-white font-bold text-sm">WhatsApp</p>
            <p className="text-white/60 text-xs mt-1">Resposta imediata</p>
          </div>

          {/* Email */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all text-center lg:text-left">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <p className="text-white font-bold text-sm">Email</p>
            <p className="text-white/60 text-xs mt-1">contato@azucon.com</p>
          </div>

          {/* Map */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all text-center lg:text-left">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-4 mx-auto lg:mx-0 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <p className="text-white font-bold text-sm">Localização</p>
            <p className="text-white/60 text-xs mt-1">Nova Granada / SP</p>
          </div>

          {/* Featured CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl relative flex flex-col justify-between group"
          >
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-xl flex items-center justify-center -rotate-12 shadow-lg group-hover:rotate-0 transition-transform">
              <TrendingUp size={20} className="text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-black text-primary font-display mb-2">Consultoria Gratuitas</h3>
              <p className="text-gray-600 mb-6 text-xs leading-relaxed">Fale diretamente com quem entende do seu negócio.</p>
            </div>
            
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("open-whatsapp"))}
              className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              Começar
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Fixed import for TrendingUp
import { TrendingUp } from "lucide-react";
