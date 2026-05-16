import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transition = { duration: 0.3, ease: [0.2, 0, 0, 1] as const };

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="card-surface p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative z-10">
            <h2 className="text-foreground mb-4">Ready to scale?</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Book a 30-minute growth call. We'll map your highest-ROI ad and AI opportunities.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium bg-foreground text-background rounded-md hover:scale-[0.98] transition-transform duration-200">
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-muted-foreground mt-4">Free consultation · No commitment required</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
