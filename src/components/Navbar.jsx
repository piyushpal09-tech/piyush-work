import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/65 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <motion.a
          href="#home"
          className="font-mono text-lg font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan">&lt;</span>Piyush <span className="text-violet">/&gt;</span>
        </motion.a>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 font-mono text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-cyan"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 * index }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="rounded-full border border-cyan/35 bg-cyan/10 px-4 py-2 font-mono text-sm text-cyan transition hover:shadow-glow"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
        >
          Let&apos;s Build
        </motion.a>
      </nav>
    </header>
  );
}

export default Navbar;
