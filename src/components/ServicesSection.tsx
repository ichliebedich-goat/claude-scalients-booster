import { motion } from "framer-motion";
import { Target, Search, Bot, PhoneCall } from "lucide-react";

const services = [
  { icon: Target, title: "Meta Ads", description: "Performance-driven Facebook & Instagram campaigns engineered for ROAS. Creative testing, audience modeling, and full-funnel attribution.", tag: "paid-social" },
  { icon: Search, title: "Google Ads", description: "Search, Performance Max, and YouTube campaigns built to capture demand. Bid automation and conversion-tracking infrastructure included.", tag: "paid-search" },
  { icon: PhoneCall, title: "AI Receptionist", description: "24/7 voice agent that answers calls, books appointments, and qualifies leads. Never miss a customer again.", tag: "voice-ai" },
  { icon: Bot, title: "AI Agents", description: "Custom chat and workflow agents for support, sales, and ops. Integrated with your CRM, calendar, and knowledge base.", tag: "agents" },
];

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="mb-16">
          <h2 className="text-foreground mb-4">What we build</h2>
          <p className="text-lg text-muted-foreground max-w-xl">Paid media that performs and AI agents that work around the clock—engineered to scale your client acquisition.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
