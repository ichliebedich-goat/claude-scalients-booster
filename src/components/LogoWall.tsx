import { motion } from "framer-motion";

const logos = [
  "OpenAI", "Anthropic", "LangChain", "Pinecone", "Vercel",
  "AWS", "Hugging Face", "Cohere",
];

const LogoWall = () => {
  return (
    <section className="py-16 border-t border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-10"
        >
          Integrated with leading AI infrastructure
        </motion.p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-logos">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex items-center justify-center"
              >
                <span className="font-mono text-sm text-muted-foreground/50 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
