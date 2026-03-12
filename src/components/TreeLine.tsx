interface TreeLineProps {
  char: "├──" | "└──" | "│" | "";
  children: React.ReactNode;
  className?: string;
}

const TreeLine = ({ char, children, className = "" }: TreeLineProps) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <span className="tree-char shrink-0 select-none text-sm leading-7 sm:text-base">
        {char}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default TreeLine;
