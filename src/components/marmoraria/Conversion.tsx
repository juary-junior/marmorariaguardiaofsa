import conversionImg from "@/assets/conversion.jpg";

const Conversion = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={conversionImg}
              alt="Especialista instalando mármore"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Qualidade garantida
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Proteja seu Projeto com{" "}
              <span className="text-gradient font-bold">Mão de Obra Especialista</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Evite dores de cabeça com instalações mal feitas. Na Guardião, garantimos o
              resultado perfeito e acabamento exclusivamente fora do comum.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Consultar Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion;
