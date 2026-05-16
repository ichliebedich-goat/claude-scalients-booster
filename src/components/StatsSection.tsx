import { motion } from "framer-motion";

const stats = [
  { value: "$24M+", label: "Ad spend managed across Meta & Google" },
  { value: "5.2x", label: "Average client ROAS" },
  { value: "120+", label: "Brands scaled with paid media" },
  { value: "40K+", label: "Calls handled by AI receptionists" },
];

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const StatsSection = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="text-center mb-16">
          <h2 className="text-foreground mb-4">Our track record</h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">Trusted by operations teams at scale-ups and enterprises worldwide.</p>
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
