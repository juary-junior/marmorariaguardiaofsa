import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";
import serviceGourmet from "@/assets/service-gourmet.jpg";

const images = [serviceKitchen, serviceBathroom, serviceGourmet];

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          O que fazemos
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Nossas <span className="text-gradient">Especialidades</span>
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Trabalhamos com as melhores pedras e revestimentos de alto padrão para garantir o acabamento perfeito em cada detalhe do seu projeto.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[i]}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-card-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <a
                  href="#contato"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {service.cta} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
