import { motion } from "framer-motion";
import { Workflow, Brain, Database } from "lucide-react";

const services = [
  { icon: Workflow, title: "Workflow Automation", description: "Replace manual processes with intelligent AI agents that handle data entry, customer routing, and operational tasks 24/7.", tag: "ops" },
  { icon: Brain, title: "Custom LLM Pipelines", description: "Fine-tuned language models built on your data. RAG systems, classification engines, and generative workflows tailored to your domain.", tag: "ml" },
  { icon: Database, title: "Data Extraction & ETL", description: "Automated extraction from unstructured sources—PDFs, emails, websites—into clean, queryable datasets for decision-making.", tag: "data" },
];

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="mb-16">
          <h2 className="text-foreground mb-4">What we build</h2>
          <p className="text-lg text-muted-foreground max-w-xl">Production-ready AI systems that integrate directly into your existing stack.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...transition, delay: i * 0.1 }} className="card-surface card-surface-hover p-8 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-primary/60 px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">{service.tag}</span>
              </div>
              <h3 className="text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
