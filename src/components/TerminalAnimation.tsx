import { useEffect, useState } from "react";

const lines = [
  { prefix: "→", text: "Initializing agent pipeline...", color: "text-muted-foreground" },
  { prefix: "✓", text: "Connected to LLM endpoint", color: "text-emerald-400" },
  { prefix: "→", text: "Processing 2,847 customer records...", color: "text-muted-foreground" },
  { prefix: "✓", text: "Sentiment analysis: 94.2% positive", color: "text-emerald-400" },
  { prefix: "→", text: "Generating campaign recommendations...", color: "text-muted-foreground" },
  { prefix: "✓", text: "3 workflows deployed → est. +$142K/mo", color: "text-primary" },
  { prefix: "✓", text: "ROI projection: 12.5x in 30 days", color: "text-primary" },
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
        <span className="ml-2 text-xs text-muted-foreground">systemic-agent-v3.2</span>
      </div>
      <div className="space-y-2 min-h-[200px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${line.color} flex gap-2`}>
            <span className="text-muted-foreground/60">{line.prefix}</span>
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
