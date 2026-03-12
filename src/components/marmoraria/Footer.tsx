import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const whatsappUrl = `https://w.app/marmoraria-guardiao`;

  return (
    <footer className="section-dark border-t border-border/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
              <div className="leading-tight">
                <span className="block text-xs font-bold tracking-wide">MARMORARIA</span>
                <span className="block text-[10px] font-semibold tracking-widest text-muted-foreground">GUARDIÃO</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Transformando ambientes com pedras naturais de alto padrão. Qualidade que protege e embeleza seu projeto.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs text-muted-foreground transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider">Contato</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>{COMPANY.address}</li>
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.email}</li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href={COMPANY.instagram} className="flex h-9 w-9 items-center justify-center rounded-full border border-border/20 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Instagram size={16} />
              </a>
              <a href={COMPANY.facebook} className="flex h-9 w-9 items-center justify-center rounded-full border border-border/20 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Marmoraria Guardião. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </footer>
  );
};

export default Footer;
