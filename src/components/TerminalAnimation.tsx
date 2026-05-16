import { useEffect, useState } from "react";

const lines = [
  { prefix: "→", text: "Booting Scalients ops console...", color: "text-muted-foreground" },
  { prefix: "✓", text: "Meta Ads: 3 campaigns scaled · ROAS 4.8x", color: "text-emerald-400" },
  { prefix: "→", text: "Google Ads: bid automation running...", color: "text-muted-foreground" },
  { prefix: "✓", text: "Cost/lead reduced 38% week-over-week", color: "text-emerald-400" },
  { prefix: "→", text: "AI receptionist answered 47 calls today", color: "text-muted-foreground" },
  { prefix: "✓", text: "29 appointments booked → est. +$86K pipeline", color: "text-primary" },
  { prefix: "✓", text: "All systems nominal. Standing by.", color: "text-primary" },
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
        <span className="ml-2 text-xs text-muted-foreground">scalients-dashboard-v1.0</span>
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
