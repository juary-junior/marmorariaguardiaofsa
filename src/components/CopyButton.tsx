import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const [flash, setFlash] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setFlash(true);
    setCopied(true);
    setTimeout(() => setFlash(false), 150);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex items-center gap-1.5 rounded-sm border border-border bg-muted px-2 py-0.5 font-mono text-xs text-primary transition-colors hover:border-primary hover:bg-secondary"
    >
      {flash && (
        <span className="absolute inset-0 flex items-center justify-center rounded-sm bg-background font-mono text-terminal-green flash-cursor">
          █
        </span>
      )}
      {copied ? "copiado!" : "Ctrl+Alt+C"}
    </button>
  );
};

export default CopyButton;
