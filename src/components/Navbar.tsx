import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xl font-semibold tracking-tight text-foreground">
          <span className="text-primary">[</span>scalients<span className="text-primary">]</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Results", "Stats", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full origin-left" />
            </button>
          ))}
        </div>

        <a
          href="https://cal.com/scalients/scalients-30-day-strategy"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-md hover:scale-[0.98] transition-transform duration-200"
        >
          Book a Call
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3"
        >
          {["Services", "Results", "Stats", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => { scrollToSection(item.toLowerCase()); setIsOpen(false); }}
              className="block text-sm text-muted-foreground hover:text-foreground text-left w-full"
            >
              {item}
            </button>
          ))}
          <a
            href="https://cal.com/scalients/scalients-30-day-strategy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-md"
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
