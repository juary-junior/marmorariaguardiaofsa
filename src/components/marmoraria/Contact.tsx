import { Phone, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const Contact = () => {
  const whatsappUrl = `https://w.app/marmoraria-guardiao`;

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid overflow-hidden rounded-xl border border-border lg:grid-cols-2">
          {/* Left */}
          <div className="bg-card p-10 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Solicite seu orçamento
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Vamos construir seu{" "}
              <span className="text-gradient">projeto juntos?</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Nossa equipe técnica está pronta para analisar seu projeto e oferecer a melhor solução em pedras naturais.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-sm">{COMPANY.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm">{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* Right — WhatsApp CTA */}
          <div className="section-dark flex flex-col items-center justify-center p-10 md:p-14 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp/20 mb-6">
              <MessageCircle size={28} className="text-whatsapp" />
            </div>
            <h3 className="font-display text-2xl font-bold">
              Orçamento via <span className="text-whatsapp">WhatsApp</span>
            </h3>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Clique abaixo e inicie uma conversa agora. Resposta garantida em menos de 15 minutos em horário comercial.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-whatsapp px-8 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Abrir Chat no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
