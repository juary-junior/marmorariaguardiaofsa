import { useState } from "react";
import CopyButton from "./CopyButton";

interface FeatureNodeProps {
  char: "├──" | "└──";
  title: string;
  description: string;
  copyText?: string;
}

const FeatureNode = ({ char, title, description, copyText }: FeatureNodeProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-start gap-3 py-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="tree-char shrink-0 select-none pt-0.5 text-sm sm:text-base">
        {char}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-sm font-bold text-foreground sm:text-base">
            {title}
          </h3>
          {hovered && copyText && (
            <span className="animate-fade-in-up">
              <CopyButton textToCopy={copyText} />
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureNode;
