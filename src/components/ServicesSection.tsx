import { motion } from "framer-motion";
import { TrendingUp, Bot, Cog } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    tag: "ads",
    title: "Meta Ads Management",
    description: "We build, test, and optimize Facebook & Instagram ad campaigns using AI-driven targeting to maximize your ROAS and scale revenue.",
  },
  {
    icon: Bot,
    tag: "agents",
    title: "AI Receptionist & Agents",
    description: "Deploy conversational AI agents that answer calls, book appointments, qualify leads, and handle customer support — around the clock.",
  },
  {
    icon: Cog,
    tag: "systems",
    title: "Marketing Automation",
    description: "Automated email sequences, CRM pipelines, and follow-up flows that nurture leads and convert prospects without manual effort.",
  },
];

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">
            What we do
          </span>
          <h2 className="text-foreground mb-4">
            <span className="text-muted-foreground">AI-powered marketing</span> and automation that drives real growth for your business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.tag}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
              className="bg-background p-8 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <span className="font-mono text-[0.65rem] font-semibold text-muted-foreground uppercase tracking-widest mb-5 block">
                {service.tag}
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
