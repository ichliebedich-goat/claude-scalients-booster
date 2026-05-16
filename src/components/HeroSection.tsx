import { motion } from "framer-motion";
import TerminalAnimation from "./TerminalAnimation";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };


const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:py-32 md:pt-40 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.07),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e] animate-pulse" />
              <span className="text-xs font-semibold text-primary font-mono uppercase tracking-wider">AI-Powered Growth</span>
            </div>
            <h1 className="text-foreground mb-6">
              Your Marketing on Autopilot.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              We run high-ROI Meta ads and deploy AI agents that handle your operations 24/7. Less manual work, more revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://cal.com/scalients/scalients-30-day-strategy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-all duration-200">
                Book a Free Call
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-muted-foreground border border-border rounded-lg hover:text-foreground hover:border-foreground/20 hover:bg-white/[0.03] transition-all duration-200">
                See What We Do
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
