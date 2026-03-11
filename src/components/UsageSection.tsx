const UsageSection = () => {
  const steps = [
    {
      char: "├──" as const,
      step: "01",
      text: "Clique com o botão direito em qualquer pasta no explorador do VS Code",
    },
    {
      char: "├──" as const,
      step: "02",
      text: 'Selecione "Copy File Tree" ou "Copy File Tree From This Directory"',
    },
    {
      char: "├──" as const,
      step: "03",
      text: "A árvore de arquivos é copiada automaticamente para a área de transferência",
    },
    {
      char: "└──" as const,
      step: "04",
      text: "Cole a árvore onde precisar — documentação, chat, README, issues",
    },
  ];

  return (
    <section className="mt-16">
      <div className="flex items-start gap-3">
        <span className="tree-char shrink-0 select-none text-sm sm:text-base">├──</span>
        <h2 className="font-mono text-lg font-bold text-foreground sm:text-xl">
          como-usar/
        </h2>
      </div>
      <div className="ml-6 tree-line-vertical pl-6 mt-2">
        {steps.map((s) => (
          <div key={s.step} className="flex items-start gap-3 py-2">
            <span className="tree-char shrink-0 select-none text-sm sm:text-base">
              {s.char}
            </span>
            <div>
              <span className="font-mono text-xs text-primary">{s.step}</span>
              <p className="text-sm text-muted-foreground mt-0.5">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-6 tree-line-vertical pl-6 mt-4">
        <div className="flex items-start gap-3 py-2">
          <span className="tree-char shrink-0 select-none text-sm sm:text-base">└──</span>
          <div>
            <p className="text-sm text-muted-foreground">
              Ou use o atalho{" "}
              <kbd className="rounded-sm border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
                Ctrl+Alt+C
              </kbd>{" "}
              para copiar a árvore do projeto inteiro instantaneamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
