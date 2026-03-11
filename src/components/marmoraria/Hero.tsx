import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Casa moderna com acabamento em mármore" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32 md:py-40">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
          Especialistas em pedras naturais
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
          A Proteção e{" "}
          <br className="hidden sm:block" />
          Beleza do{" "}
          <span className="italic text-primary">Alto Padrão</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
          Sua obra merece o melhor acabamento. Na Marmoraria Guardião, 
          especialistas em projetos ambiciosos transformam pedras em arte.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Orçamento via WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60"
          >
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
