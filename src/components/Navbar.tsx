import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl" style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-xl font-semibold tracking-tight text-foreground">
          <span className="text-primary">[</span>systemic<span className="text-primary">]</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Results", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full origin-left" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-md hover:scale-[0.98] transition-transform duration-200"
        >
          Book Audit
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
          {["Services", "Results", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-5 py-2.5 text-sm font-medium bg-foreground text-background rounded-md"
          >
            Book Audit
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
