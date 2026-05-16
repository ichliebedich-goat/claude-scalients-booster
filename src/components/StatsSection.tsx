import { motion } from "framer-motion";

const stats = [
  { value: "$3.2M+", label: "Revenue generated for clients" },
  { value: "150+", label: "Ad campaigns managed" },
  { value: "40+", label: "AI agents deployed" },
  { value: "8x", label: "Average return on ad spend" },
];

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const StatsSection = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="mb-16">
          <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">
            Our track record
          </span>
          <h2 className="text-foreground">
            <span className="text-muted-foreground">Trusted by business owners</span> who want real growth, not busywork.
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...transition, delay: i * 0.08 }} className="text-center">
              <span className="font-mono text-4xl md:text-5xl font-semibold text-foreground tabular-nums">{stat.value}</span>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
