import { motion } from "framer-motion";

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const HudCampaignPanel = () => (
  <div className="w-full h-full flex flex-col font-mono">
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-border">
      <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
      <span className="w-2 h-2 rounded-full bg-[#eab308]" />
      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
      <span className="ml-2 text-[0.65rem] text-muted-foreground font-medium">scalients-ads-v1.4</span>
    </div>
    <div className="flex-1 p-3 flex flex-col gap-1">
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">campaign</span>
        <span className="text-foreground/60">meta-q2-scale</span>
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">status</span>
        <span className="text-[#22c55e]">live</span>
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">spend</span>
        <span className="text-foreground/60">$4,200</span>
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">revenue</span>
        <span className="text-primary font-bold">$89,140</span>
      </div>
      <div className="flex items-end gap-1 h-12 my-1">
        {[30, 42, 38, 55, 62, 70, 65, 82, 90, 100].map((h, i) => (
          <div key={i} className="flex-1 h-full flex items-end">
            <div
              className="w-full rounded-t bg-gradient-to-t from-primary to-primary/20 hud-bar-chart"
              style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">roas</span>
        <span className="text-primary font-bold">21.2x</span>
      </div>
    </div>
  </div>
);

const HudRoasPanel = () => (
  <div className="w-full h-full flex flex-col font-mono">
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-border">
      <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
      <span className="w-2 h-2 rounded-full bg-[#eab308]" />
      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
      <span className="ml-2 text-[0.65rem] text-muted-foreground font-medium">scalients-roas-monitor</span>
    </div>
    <div className="flex-1 p-3 flex flex-col items-center justify-center gap-1">
      <div className="text-center mb-1">
        <div className="text-2xl font-extrabold text-foreground tracking-tight">
          12.5<span className="text-primary text-lg font-semibold">x</span>
        </div>
        <div className="text-[0.6rem] text-muted-foreground uppercase tracking-widest mt-0.5">return on ad spend</div>
      </div>
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
        <circle
          cx="50" cy="50" r="42"
          fill="none" stroke="hsl(239 84% 67%)" strokeWidth="4"
          strokeDasharray="264" className="hud-ring-animate"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex justify-between w-full text-[0.7rem] mt-1">
        <span className="text-muted-foreground uppercase tracking-wider">period</span>
        <span className="text-foreground/60">6 months</span>
      </div>
      <div className="flex justify-between w-full text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">consistency</span>
        <span className="text-[#22c55e]">98.4%</span>
      </div>
    </div>
  </div>
);

const HudAgentPanel = () => (
  <div className="w-full h-full flex flex-col font-mono">
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-border">
      <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
      <span className="w-2 h-2 rounded-full bg-[#eab308]" />
      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
      <span className="ml-2 text-[0.65rem] text-muted-foreground font-medium">scalients-agent-v2.1</span>
    </div>
    <div className="flex-1 p-3 flex flex-col gap-1">
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">agent</span>
        <span className="text-foreground/60">ai-receptionist</span>
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">status</span>
        <span className="text-[#22c55e]">active</span>
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">calls handled</span>
        <span className="text-primary font-bold">1,240</span>
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">booked</span>
        <span className="text-foreground/60">847</span>
      </div>
      <div className="flex gap-1 my-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-3.5 rounded-sm hud-pulse-bar"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center text-[0.7rem]">
        <span className="text-muted-foreground uppercase tracking-wider">missed calls</span>
        <span className="text-[#22c55e]">0</span>
      </div>
    </div>
  </div>
);

const results = [
  {
    panel: HudCampaignPanel,
    metric: "+$89K",
    suffix: "/mo",
    label: "Revenue generated through AI-optimized Meta campaigns",
    desc: "Scaled from $5K to $89K/month in 90 days for a local service business",
  },
  {
    panel: HudRoasPanel,
    metric: "12.5x",
    suffix: " ROAS",
    label: "Maintained consistently over 6 months",
    desc: "AI-powered ad optimization with automated A/B testing",
  },
  {
    panel: HudAgentPanel,
    metric: "1,240",
    suffix: " leads",
    label: "Captured in a single month with AI receptionist",
    desc: "Automated booking & qualification — zero missed calls",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">
            Proven results
          </span>
          <h2 className="text-foreground mb-4">
            <span className="text-muted-foreground">Real outcomes</span> from real campaigns. No vanity metrics.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((result, i) => (
            <motion.div
              key={result.metric}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] transition-all duration-300"
            >
              <div className="h-60 bg-black/40 border-b border-border relative overflow-hidden">
                <result.panel />
              </div>
              <div className="p-6">
                <div className="text-2xl font-extrabold tracking-tight text-foreground mb-1">
                  <span className="text-primary">{result.metric}</span>{result.suffix}
                </div>
                <p className="text-foreground/80 font-medium text-[0.85rem] mb-2">{result.label}</p>
                <p className="text-[0.78rem] text-muted-foreground leading-snug">{result.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
