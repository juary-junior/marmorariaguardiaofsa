import HeroTree from "@/components/HeroTree";
import FeatureNode from "@/components/FeatureNode";
import UsageSection from "@/components/UsageSection";
import OutputDemo from "@/components/OutputDemo";

const features = [
  {
    char: "├──" as const,
    title: "1_extrair.ts",
    description:
      "Extraia a árvore de arquivos a partir da raiz ou de qualquer subdiretório do seu projeto. Basta clicar com o botão direito na pasta desejada.",
    copyText: "Extrair árvore de qualquer diretório",
  },
  {
    char: "├──" as const,
    title: "2_filtrar.ts",
    description:
      "Filtragem automática de arquivos baseada no .gitignore do seu projeto ou em regras de exclusão personalizadas. Nunca mais inclua node_modules no output.",
    copyText: "Filtro automático via .gitignore",
  },
  {
    char: "├──" as const,
    title: "3_personalizar.ts",
    description:
      "Diversas opções de configuração para ajustar o output exatamente como você precisa. Controle total sobre o que aparece e como aparece.",
    copyText: "Configurações personalizáveis",
  },
  {
    char: "├──" as const,
    title: "4_formatos/",
    description:
      "Gere a estrutura em formato ASCII (legível para humanos) ou JSON (legível para máquinas). Escolha o formato ideal para cada situação.",
    copyText: "ASCII e JSON",
  },
  {
    char: "├──" as const,
    title: "5_tamanhos.ts",
    description:
      "Inclua opcionalmente o tamanho de cada arquivo na saída. Útil para auditorias e para entender a distribuição de peso do projeto.",
    copyText: "Tamanho dos arquivos incluído",
  },
  {
    char: "└──" as const,
    title: "6_profundidade.ts",
    description:
      "Defina uma profundidade máxima para a árvore gerada. Projetos enormes? Limite a 2 ou 3 níveis e mantenha o output limpo.",
    copyText: "Controle de profundidade",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
            copy-file-tree
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Extensão para VS Code. Extrai e copia a estrutura de diretórios do seu projeto — 
            pronta para colar em qualquer lugar.
          </p>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=nicolo-ribaudo.copy-file-tree"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary/10 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            instalar no vs code →
          </a>
        </header>

        {/* Tree-line vertical anchor */}
        <div className="tree-line-vertical pl-6">
          {/* Hero Tree */}
          <section className="pb-8">
            <HeroTree />
          </section>

          {/* Features */}
          <section>
            <div className="flex items-start gap-3 mb-2">
              <span className="tree-char shrink-0 select-none text-sm sm:text-base">├──</span>
              <h2 className="font-mono text-lg font-bold text-foreground sm:text-xl">
                funcionalidades/
              </h2>
            </div>
            <div className="ml-6 tree-line-vertical pl-6">
              {features.map((f) => (
                <FeatureNode key={f.title} {...f} />
              ))}
            </div>
          </section>

          {/* Usage */}
          <UsageSection />

          {/* Output Demo */}
          <OutputDemo />

          {/* Footer */}
          <section className="mt-16 pb-16">
            <div className="flex items-start gap-3">
              <span className="tree-char shrink-0 select-none text-sm sm:text-base">└──</span>
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  feito para devs que documentam.
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  <span className="cursor-blink text-terminal-green">█</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
