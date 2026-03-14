import { motion } from "framer-motion";
import TerminalAnimation from "./TerminalAnimation";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:py-32 md:pt-40 bg-grid overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary font-mono">Systems Online</span>
            </div>

            <h1 className="text-foreground mb-6">
              Engineered Intelligence for Scale.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              We build production-grade LLM workflows that replace manual ops. No hype, just code that ships results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-foreground text-background rounded-md hover:scale-[0.98] transition-transform duration-200"
              >
                Book Technical Audit
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-muted-foreground border border-border rounded-md hover:text-foreground hover:border-foreground/20 transition-colors duration-200"
              >
                View Capabilities
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
