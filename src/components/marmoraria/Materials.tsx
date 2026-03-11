import { MATERIALS } from "@/lib/constants";
import materialsImg from "@/assets/materials.jpg";

const Materials = () => {
  return (
    <section id="materiais" className="section-dark py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Catálogo de pedras
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Diversidade em Pedras de{" "}
              <span className="italic text-primary">Todo o Mundo</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Importamos as melhores pedras da Itália, Grécia e Espanha, além de selecionarmos o melhor do granito brasileiro.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {MATERIALS.map((mat) => (
                <div
                  key={mat.name}
                  className="rounded-lg border border-border/20 bg-background/5 p-5 transition-colors hover:border-primary/40"
                >
                  <h3 className="text-base font-bold">{mat.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{mat.count}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <img
              src={materialsImg}
              alt="Amostras de pedras naturais"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent p-6">
              <span className="text-sm font-medium text-primary-foreground/80">▸ Saiba mais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
