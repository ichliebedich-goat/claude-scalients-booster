import { useEffect, useState } from "react";

const lines = [
  { prefix: "$", prefixColor: "text-primary", text: <span>scalients launch --campaign meta-q2</span>, color: "text-foreground" },
  { prefix: "", prefixColor: "", text: <span>Deploying AI receptionist agent...</span>, color: "text-muted-foreground" },
  { prefix: "", prefixColor: "", text: <span>Connecting Meta Ads account... <span className="text-green-500">done</span></span>, color: "text-muted-foreground" },
  { prefix: "", prefixColor: "", text: <span>Configuring Google Ads tracking... <span className="text-green-500">done</span></span>, color: "text-muted-foreground" },
  { prefix: "", prefixColor: "", text: <span>Optimizing audience targeting... <span className="text-green-500">done</span></span>, color: "text-muted-foreground" },
  { prefix: "", prefixColor: "", text: <span>Syncing CRM pipeline... <span className="text-green-500">done</span></span>, color: "text-muted-foreground" },
  { prefix: "", prefixColor: "", text: <span>Setting up AI follow-up sequences... <span className="text-green-500">done</span></span>, color: "text-muted-foreground" },
  { prefix: "✓", prefixColor: "text-green-500", text: <span>Campaign live — 1,240 leads captured this month</span>, color: "text-green-500" },
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
    <div className="p-6 font-mono" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, boxShadow: '0 0 40px rgba(0,0,0,0.4)' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-muted-foreground" style={{ fontSize: '.72rem' }}>scalients-agent-v2.1</span>
      </div>
      <div style={{ fontSize: '.78rem', lineHeight: '1.9' }}>
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
