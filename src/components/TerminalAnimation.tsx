import { useEffect, useState } from "react";

const lines = [
  { prefix: "$", prefixColor: "text-primary", text: <span>scalients launch --campaign meta-q2</span>, color: "text-foreground" },
  { prefix: "→", prefixColor: "text-muted-foreground/60", text: <span>Deploying AI receptionist agent...</span>, color: "text-muted-foreground" },
  { prefix: "→", prefixColor: "text-muted-foreground/60", text: <span>Connecting Meta Ads account... <span className="text-emerald-400">done</span></span>, color: "text-muted-foreground" },
  { prefix: "→", prefixColor: "text-muted-foreground/60", text: <span>Optimizing audience targeting... <span className="text-emerald-400">done</span></span>, color: "text-muted-foreground" },
  { prefix: "✓", prefixColor: "text-emerald-400", text: <span>Campaign live — 1,240 leads captured this month</span>, color: "text-emerald-400" },
];

const TerminalAnimation = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-surface p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-xs text-muted-foreground">scalients-agent-v2.1</span>
      </div>
      <div className="space-y-2 min-h-[160px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${line.color} flex gap-2`}>
            <span className={line.prefixColor}>{line.prefix}</span>
            <span>{line.text}</span>
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-terminal-blink" />
        )}
      </div>
    </div>
  );
};

export default TerminalAnimation;
