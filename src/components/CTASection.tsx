import { motion } from "framer-motion";

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.05),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center max-w-2xl mx-auto relative z-10"
        >
          <h2 className="text-foreground mb-4">Ready to scale?</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            Book a free strategy call. We'll show you exactly how AI ads and automation can grow your business.
          </p>
          <a
            href="https://cal.com/scalients/scalients-30-day-strategy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-all duration-200"
          >
            Book a Free Call
          </a>
          <p className="text-xs text-muted-foreground mt-5">
            Free consultation &middot; No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
