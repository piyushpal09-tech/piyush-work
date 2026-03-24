import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";

const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const roles = [
  "Full Stack Developer",
  "AI Generalist",
  "Agentic AI Builder",
  "Web Architect",
];

const codeCards = [
  {
    title: "deploy.ts",
    code: "const edge = await launch({\n  stack: ['React', 'Node', 'AI'],\n  speed: 'fast'\n});",
    position:
      "left-[4%] top-[18%] hidden w-56 lg:block",
  },
  {
    title: "agent.py",
    code: "agent.plan(goal='ship premium UX')\nagent.execute(context='production')",
    position:
      "right-[10%] top-[22%] hidden w-52 xl:block",
  },
  {
    title: "schema.sql",
    code: "select craft, scale\nfrom systems\nwhere owner = 'Piyush';",
    position:
      "right-[16%] bottom-[12%] hidden w-60 lg:block",
  },
];

function useTypewriter(items, typingSpeed = 80, deletingSpeed = 45, holdDelay = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = items[wordIndex % items.length];
    const nextText = deleting
      ? currentWord.slice(0, text.length - 1)
      : currentWord.slice(0, text.length + 1);
    let holdTimeout;
    const timeout = window.setTimeout(
      () => {
        setText(nextText);

        if (!deleting && nextText === currentWord) {
          holdTimeout = window.setTimeout(() => setDeleting(true), holdDelay);
        } else if (deleting && nextText.length === 0) {
          setDeleting(false);
          setWordIndex((current) => (current + 1) % items.length);
        }
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => {
      window.clearTimeout(timeout);
      if (holdTimeout) {
        window.clearTimeout(holdTimeout);
      }
    };
  }, [deleting, deletingSpeed, holdDelay, items, text, typingSpeed, wordIndex]);

  return text;
}

function TerminalWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="glass-panel relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.14),transparent_34%)]" />
      <div className="relative border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
          ~/portfolio/piyush-pal
        </p>
      </div>

      <div className="relative space-y-4 p-6 font-mono text-sm leading-7 text-slate-300 sm:p-8">
        <pre className="overflow-x-auto text-sm">
          <code>
            <span className="text-violet">const</span> <span className="text-cyan">developer</span> = {"{"}
            {"\n"}  name: <span className="text-emerald-300">&quot;Piyush Pal&quot;</span>,
            {"\n"}  role: <span className="text-emerald-300">&quot;Full Stack Developer &amp; AI Generalist&quot;</span>,
            {"\n"}  focus: [
            {"\n"}    <span className="text-emerald-300">&quot;agentic interfaces&quot;</span>,
            {"\n"}    <span className="text-emerald-300">&quot;LLM workflows&quot;</span>,
            {"\n"}    <span className="text-emerald-300">&quot;scalable products&quot;</span>
            {"\n"}  ],
            {"\n"}  stack: <span className="text-emerald-300">["React", "Node.js", "PostgreSQL", "AI"]</span>,
            {"\n"}  mission: <span className="text-emerald-300">&quot;Build intelligence into every interaction.&quot;</span>
            {"\n"}{"}"};
          </code>
        </pre>

        <div className="rounded-2xl border border-cyan/15 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">$ runtime</p>
          <p className="mt-3 text-cyan">
            &gt; Shipping premium web products with systems thinking, elegant code, and AI-native architecture.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-76px)] items-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>

      <div className="pointer-events-none absolute inset-0">
        {codeCards.map((card, index) => (
          <motion.div
            key={card.title}
            className={`glass-panel absolute ${card.position} rounded-2xl border border-white/10 p-4 font-mono text-xs text-slate-400`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.35 + index * 0.2 },
              y: {
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-slate-500">{card.title}</p>
            <pre className="whitespace-pre-wrap leading-6">{card.code}</pre>
          </motion.div>
        ))}
      </div>

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="relative z-10">
          <motion.p
            className="font-mono text-sm uppercase tracking-[0.34em] text-cyan"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            Hello, World! 👋
          </motion.p>

          <motion.h1
            className="mt-5 max-w-3xl font-mono text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Piyush Pal
          </motion.h1>

          <motion.div
            className="mt-6 min-h-[3.5rem] font-mono text-2xl font-medium text-slate-200 sm:text-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
          >
            <span className="text-violet">{typedRole}</span>
            <span className="ml-1 inline-block h-8 w-[2px] translate-y-1 animate-blink bg-cyan shadow-[0_0_16px_rgba(0,245,255,0.9)]" />
          </motion.div>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            I build intelligent web experiences powered by Agentic &amp; Generative AI.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/50 bg-cyan/15 px-7 py-3.5 font-mono text-sm text-cyan transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              View My Work
              <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 font-mono text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan/35 hover:text-cyan"
            >
              Contact Me
              <FiMail />
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4 }}
          >
            <span className="code-chip">agentic workflows</span>
            <span className="code-chip">scalable architecture</span>
            <span className="code-chip">premium product design</span>
          </motion.div>
        </div>

        <div className="relative z-10">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}

export default Hero;
