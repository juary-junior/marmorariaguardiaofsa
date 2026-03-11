const HeroTree = () => {
  const tree = `copy-file-tree/
├── 1_extrair.ts
├── 2_filtrar.ts
├── 3_personalizar.ts
├── 4_formatos/
│   ├── ascii.txt
│   └── estrutura.json
├── 5_tamanhos.ts
└── 6_profundidade.ts`;

  return (
    <pre className="font-mono text-sm leading-relaxed text-foreground sm:text-base md:text-lg">
      <code>
        {tree.split("\n").map((line, i) => {
          const hasTreeChar = /[├└│]/.test(line);
          if (i === 0) {
            return (
              <span key={i} className="block text-primary font-bold">
                {line}
              </span>
            );
          }
          if (hasTreeChar) {
            const match = line.match(/^(\s*[├└│─\s]+)(.*)/);
            if (match) {
              return (
                <span key={i} className="block">
                  <span className="tree-char">{match[1]}</span>
                  <span className="text-foreground">{match[2]}</span>
                </span>
              );
            }
          }
          return <span key={i} className="block text-foreground">{line}</span>;
        })}
      </code>
    </pre>
  );
};

export default HeroTree;
