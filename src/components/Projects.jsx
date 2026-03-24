import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "Agentic Commerce Console",
    description:
      "A premium admin experience that combines product analytics, conversational automation, and assisted decision-making for modern commerce teams.",
    tags: ["React", "Node.js", "PostgreSQL", "Agentic AI"],
    accent: "from-cyan via-cyan/60 to-transparent",
  },
  {
    title: "Neural Workflow Studio",
    description:
      "An AI-native operations dashboard for designing multi-step workflows, orchestrating LLM tasks, and monitoring execution across teams.",
    tags: ["Vite", "Next.js", "Redis", "Generative AI"],
    accent: "from-violet via-fuchsia-500/60 to-transparent",
  },
  {
    title: "CodePulse Intelligence",
    description:
      "A developer-focused platform that surfaces engineering signals, performance traces, and deployment insights through a sleek terminal-inspired UI.",
    tags: ["React", "MongoDB", "Tailwind", "LLM Integration"],
    accent: "from-cyan via-violet/60 to-transparent",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative">
      <SectionReveal className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected concepts built with product depth and technical range."
          description="These are showcase-ready placeholders shaped like real premium client work: sharp narratives, strong stacks, and interfaces designed to feel modern, credible, and production-minded."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel group relative overflow-hidden rounded-[28px] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-cyan/10 blur-3xl" />
                <div className="absolute -left-8 bottom-12 h-40 w-40 rounded-full bg-violet/10 blur-3xl" />
              </div>

              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                  0{index + 1} / Featured Build
                </p>
                <h3 className="mt-4 font-mono text-2xl text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="code-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 font-mono text-sm text-cyan transition hover:shadow-glow"
                  >
                    Live Demo
                    <FiExternalLink />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm text-slate-200 transition hover:border-violet/30 hover:text-violet"
                  >
                    GitHub
                    <FiGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Projects;
