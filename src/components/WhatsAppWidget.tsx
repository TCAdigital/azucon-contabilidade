"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Building2, RefreshCw, BarChart3, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    icon: Building2,
    label: "Abrir uma empresa",
    message: "Olá! Gostaria de abrir uma empresa",
  },
  {
    icon: RefreshCw,
    label: "Trocar de contador",
    message: "Olá! Quero trocar de contador",
  },
  {
    icon: BarChart3,
    label: "Imposto de Renda",
    message: "Olá! Dúvidas sobre Imposto de Renda",
  },
  {
    icon: User,
    label: "MEI/PJ",
    message: "Olá! Gostaria de informações sobre MEI",
  },
  {
    icon: MessageSquare,
    label: "Outro assunto",
    message: "Olá Azucon! Tenho uma dúvida",
  },
];

const WHATSAPP_NUMBER = "5517991040360";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-whatsapp", handleOpen);
    return () => window.removeEventListener("open-whatsapp", handleOpen);
  }, []);

  const handleClick = (message: string) => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-accent p-6 text-white text-center">
              <h3 className="font-display font-bold text-lg mb-1">Como Podemos Ajudar?</h3>
              <p className="text-sm opacity-80">Escolha o tema que mais se encaixa</p>
            </div>

            {/* Options */}
            <div className="p-4 flex flex-col gap-2">
              {options.map((opt, index) => (
                <motion.button
                  key={opt.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleClick(opt.message)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-accent group transition-all"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <opt.icon size={20} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{opt.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-accent rounded-full shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 group overflow-hidden"
      >
        <motion.div
          animate={{
            boxShadow: ["0 0 0 0px rgba(6, 182, 212, 0.4)", "0 0 0 15px rgba(6, 182, 212, 0)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full"
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
