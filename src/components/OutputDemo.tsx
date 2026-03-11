import CopyButton from "./CopyButton";

const OutputDemo = () => {
  const asciiOutput = `meu-projeto/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── README.md`;

  return (
    <section className="mt-16">
      <div className="flex items-start gap-3">
        <span className="tree-char shrink-0 select-none text-sm sm:text-base">├──</span>
        <h2 className="font-mono text-lg font-bold text-foreground sm:text-xl">
          exemplo-de-saida/
        </h2>
      </div>
      <div className="ml-6 tree-line-vertical pl-6 mt-4">
        <div className="group relative rounded-sm border border-border bg-muted/50 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs text-muted-foreground">// formato ASCII</span>
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
    </section>
  );
};

export default OutputDemo;
