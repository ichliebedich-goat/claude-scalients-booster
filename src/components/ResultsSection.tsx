import { motion } from "framer-motion";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const caseStudies = [
  { metric: "+$142K/mo", label: "Revenue generated through automated lead scoring", detail: "Deployed in 3 weeks for a B2B SaaS company" },
  { metric: "12.5x ROI", label: "Maintained consistently over 6 months", detail: "AI-powered ad optimization pipeline" },
  { metric: "89% faster", label: "Document processing time reduction", detail: "Custom extraction model for financial services" },
];

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-grid">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="mb-16">
          <h2 className="text-foreground mb-4">Proven results</h2>
          <p className="text-lg text-muted-foreground max-w-xl">Real outcomes from production deployments. No vanity metrics.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="card-surface overflow-hidden">
            <img src={heroDashboard} alt="AI dashboard showing campaign analytics and ROAS metrics" className="w-full h-auto" loading="lazy" />
          </motion.div>
          <div className="space-y-6">
            {caseStudies.map((study, i) => (
              <motion.div key={study.metric} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...transition, delay: i * 0.1 }} className="card-surface card-surface-hover p-6">
                <span className="font-mono text-2xl font-semibold text-primary tabular-nums">{study.metric}</span>
                <p className="text-foreground mt-2 font-medium">{study.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{study.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
