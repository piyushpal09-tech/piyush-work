import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan" },
      { name: "Vite", icon: SiVite, color: "text-violet" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-emerald-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-cyan" },
      { name: "Redis", icon: SiRedis, color: "text-rose-400" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Agentic AI", icon: SiOpenai, color: "text-cyan" },
      { name: "Generative AI", icon: SiOpenai, color: "text-violet" },
      { name: "LLM Integration", icon: SiOpenai, color: "text-fuchsia-300" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative">
      <SectionReveal className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A modern stack shaped for ambitious products."
          description="I work across product surfaces, backend systems, data layers, and AI integration points. The common thread is building software that feels smooth at the interface and deliberate under the hood."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="glass-panel rounded-[28px] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: groupIndex * 0.08 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-mono text-lg text-white">{group.title}</h3>
                <div className="h-px w-20 bg-gradient-to-r from-cyan via-violet to-transparent" />
              </div>

              <div className="flex flex-wrap gap-4">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-cyan/30 hover:shadow-glow"
                    >
                      <Icon className={`text-xl ${item.color}`} />
                      <span className="font-mono text-sm text-slate-200">{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Skills;
