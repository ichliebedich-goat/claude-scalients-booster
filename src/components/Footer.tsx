const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            <span className="text-primary">[</span>scalients<span className="text-primary">]</span>
          </a>

          <div className="flex items-center gap-6">
            {["Services", "Results", "Stats", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#stats" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Stats
            </a>
            <p className="text-xs text-muted-foreground">
              © 2026 Scalients. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
