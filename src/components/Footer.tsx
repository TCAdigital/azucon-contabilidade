import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Serviços",
    links: [
      { name: "Abertura de Empresa", href: "#servicos" },
      { name: "MEI", href: "#servicos" },
      { name: "Contabilidade Empresarial", href: "#servicos" },
      { name: "Imposto de Renda", href: "#servicos" },
      { name: "Folha de Pagamento", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Para Você", href: "#publicos" },
      { name: "FAQ", href: "#faq" },
      { name: "Blog", href: "#" },
      { name: "Contato", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Serviço", href: "#" },
      { name: "LGPD", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-4 md:px-0">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center">
              <div className="relative w-48 h-12">
                <Image 
                  src="/logo-azucon-neg.png" 
                  alt="Azucon Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Contabilidade personalizada e humanizada em Nova Granada. Transformando burocracia em inteligência para o seu negócio.
            </p>
          </div>

          {/* Links Grid */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Azucon Contabilidade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-8">
            <p>
              Desenvolvido com ❤️ pela{" "}
              <a 
                href="https://www.tcadigital.com.br/express" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent font-bold transition-colors"
              >
                TCA Digital Ai-Driven
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
