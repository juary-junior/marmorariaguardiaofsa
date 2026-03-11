import { TESTIMONIALS } from "@/lib/constants";
import { User } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="sobre" className="section-dark py-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          O que dizem os clientes
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Sobre <span className="italic">Nós</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          Mais de uma década entregando projetos que superam expectativas em beleza e durabilidade.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border/20 bg-background/5 p-8 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
