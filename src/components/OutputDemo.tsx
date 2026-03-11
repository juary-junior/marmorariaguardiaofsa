import CopyButton from "./CopyButton";

const OutputDemo = () => {
  const asciiOutput = `Marmoraria-Guardiao/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Contact.tsx
│   ├── Conversion.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Materials.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── public/
│   ├── Area-gourmet.png
│   ├── Cozinha.jpg
│   ├── Logo-MarmorariaGuardiao.jpg
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
├── .gitignore
├── App.tsx
├── constants.ts
├── eslint.config.mjs
├── index.html
├── index.tsx
├── metadata.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── vite.config.ts`;

  const fullTree = `Marmoraria-Guardiao/
├── .next/                              # ⚠ artefatos de build (ignorar)
│   └── dev/
│       ├── build/
│       │   └── chunks/                 # chunks compilados do servidor
│       ├── cache/                      # cache do Next.js
│       ├── logs/
│       ├── server/
│       │   ├── app/                    # rotas do App Router
│       │   │   ├── _not-found/
│       │   │   └── page/
│       │   ├── chunks/ssr/             # chunks SSR
│       │   └── pages/                  # rotas do Pages Router
│       │       ├── _app/
│       │       ├── _document/
│       │       └── _error/
│       ├── static/
│       │   ├── chunks/                 # assets estáticos do cliente
│       │   ├── development/
│       │   └── media/                  # fontes e favicon
│       └── types/
├── app/                                # 📂 App Router (principal)
│   ├── favicon.ico
│   ├── globals.css                     # estilos globais
│   ├── layout.tsx                      # layout raiz
│   └── page.tsx                        # página inicial
├── components/                         # 🧩 componentes reutilizáveis
│   ├── Contact.tsx                     # formulário de contato
│   ├── Conversion.tsx                  # seção de conversão/CTA
│   ├── Footer.tsx                      # rodapé
│   ├── Header.tsx                      # cabeçalho/navegação
│   ├── Hero.tsx                        # banner principal
│   ├── Materials.tsx                   # catálogo de materiais
│   ├── Services.tsx                    # serviços oferecidos
│   └── Testimonials.tsx               # depoimentos de clientes
├── public/                             # 🖼 arquivos estáticos
│   ├── Area-gourmet.png
│   ├── Cozinha.jpg
│   ├── Logo-MarmorariaGuardiao.jpg
│   ├── file.svg
│   ├── globe.svg
│   └── window.svg
├── .gitignore
├── App.tsx                             # ⚠ possível duplicata (verificar)
├── constants.ts                        # constantes do projeto
├── eslint.config.mjs
├── index.html                          # ⚠ possível duplicata (verificar)
├── index.tsx                           # ⚠ possível duplicata (verificar)
├── metadata.json                       # metadados do projeto
├── next-env.d.ts
├── next.config.ts                      # configuração do Next.js
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── vite.config.ts                      # ⚠ Vite + Next.js misturados`;

  return (
    <section className="mt-16">
      <div className="flex items-start gap-3">
        <span className="tree-char shrink-0 select-none text-sm sm:text-base">├──</span>
        <h2 className="font-mono text-lg font-bold text-foreground sm:text-xl">
          exemplo-de-saida/
        </h2>
      </div>

      {/* Clean tree */}
      <div className="ml-6 tree-line-vertical pl-6 mt-4">
        <div className="group relative rounded-sm border border-border bg-muted/50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs text-muted-foreground">// estrutura limpa (sem .next/)</span>
            <CopyButton textToCopy={asciiOutput} />
          </div>
          <pre className="font-mono text-xs leading-relaxed text-foreground sm:text-sm overflow-x-auto">
            {asciiOutput.split("\n").map((line, i) => {
              const match = line.match(/^(\s*[├└│─\s]*)(.*)/);
              if (match && /[├└│]/.test(match[1])) {
                return (
                  <span key={i} className="block">
                    <span className="tree-char">{match[1]}</span>
                    <span>{match[2]}</span>
                  </span>
                );
              }
              return (
                <span key={i} className="block">
                  {i === 0 ? <span className="text-primary font-bold">{line}</span> : line}
                </span>
              );
            })}
          </pre>
        </div>
      </div>

      {/* Full annotated tree */}
      <div className="ml-6 tree-line-vertical pl-6 mt-6">
        <div className="group relative rounded-sm border border-border bg-muted/50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs text-muted-foreground">// estrutura completa (anotada)</span>
            <CopyButton textToCopy={fullTree} />
          </div>
          <pre className="font-mono text-[10px] leading-relaxed text-foreground sm:text-xs overflow-x-auto">
            {fullTree.split("\n").map((line, i) => {
              // Separate comment from code
              const commentIdx = line.indexOf("# ");
              const codePart = commentIdx > -1 ? line.slice(0, commentIdx) : line;
              const commentPart = commentIdx > -1 ? line.slice(commentIdx) : "";

              const match = codePart.match(/^(\s*[├└│─\s]*)(.*)/);
              if (match && /[├└│]/.test(match[1])) {
                return (
                  <span key={i} className="block">
                    <span className="tree-char">{match[1]}</span>
                    <span>{match[2]}</span>
                    {commentPart && <span className="text-muted-foreground">{commentPart}</span>}
                  </span>
                );
              }
              return (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span className="text-primary font-bold">{codePart}</span>
                  ) : (
                    <span>{codePart}</span>
                  )}
                  {commentPart && <span className="text-muted-foreground">{commentPart}</span>}
                </span>
              );
            })}
          </pre>
        </div>
      </div>

      {/* Observations */}
      <div className="ml-6 tree-line-vertical pl-6 mt-6">
        <div className="flex items-start gap-3 py-2">
          <span className="tree-char shrink-0 select-none text-sm sm:text-base">└──</span>
          <div className="rounded-sm border border-border bg-muted/30 p-4">
            <p className="font-mono text-xs font-bold text-primary mb-2">⚠ observações</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>
                <span className="tree-char mr-2">├──</span>
                Arquivos duplicados detectados: <code className="text-foreground">package copy.json</code>, <code className="text-foreground">README copy.md</code>, <code className="text-foreground">tsconfig copy.json</code> — podem ser removidos
              </li>
              <li>
                <span className="tree-char mr-2">├──</span>
                <code className="text-foreground">App.tsx</code>, <code className="text-foreground">index.tsx</code>, <code className="text-foreground">index.html</code> e <code className="text-foreground">vite.config.ts</code> na raiz sugerem resquícios de uma migração Vite → Next.js
              </li>
              <li>
                <span className="tree-char mr-2">├──</span>
                A pasta <code className="text-foreground">.next/</code> é gerada automaticamente e deve estar no <code className="text-foreground">.gitignore</code>
              </li>
              <li>
                <span className="tree-char mr-2">└──</span>
                O App Router (<code className="text-foreground">app/</code>) é o ponto de entrada principal do Next.js
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputDemo;
