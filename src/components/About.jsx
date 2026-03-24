import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import StatCounter from "./StatCounter";

function AvatarCard() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.2),transparent_40%)]" />
      <div className="relative flex min-h-[420px] items-center justify-center rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
        <svg
          viewBox="0 0 320 360"
          className="h-[320px] w-full max-w-[280px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="32" y="18" width="256" height="324" rx="28" stroke="rgba(0,245,255,0.25)" />
          <circle cx="160" cy="108" r="52" fill="rgba(124,58,237,0.22)" stroke="rgba(0,245,255,0.36)" />
          <path
            d="M88 284C88 241.974 122.072 208 164.098 208H156.902C198.928 208 233 241.974 233 284V302H88V284Z"
            fill="rgba(0,245,255,0.12)"
            stroke="rgba(255,255,255,0.16)"
          />
          <path d="M68 58H252" stroke="rgba(255,255,255,0.12)" strokeDasharray="8 8" />
          <path d="M68 320H252" stroke="rgba(255,255,255,0.12)" strokeDasharray="8 8" />
          <path d="M56 180H264" stroke="rgba(255,255,255,0.1)" />
          <path d="M160 28V332" stroke="rgba(255,255,255,0.06)" />
          <circle cx="102" cy="70" r="5" fill="#00f5ff" />
          <circle cx="220" cy="286" r="5" fill="#7c3aed" />
        </svg>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative">
      <SectionReveal className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AvatarCard />

          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Engineering digital products that feel sharp, fast, and intelligent."
              description="I’m Piyush Pal, a developer who blends full stack craftsmanship with AI-first thinking. I care deeply about the systems behind the UI, the polish users feel in motion, and the product clarity that turns complex technology into something obvious and elegant."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
              <p>
                My work sits at the intersection of frontend precision, backend reliability, and practical AI integration.
              </p>
              <p>
                I enjoy designing agentic workflows, shipping modern web applications, and building interfaces that translate ambitious product ideas into production-ready experiences.
              </p>
              <p>
                Whether the challenge is performance, architecture, or intelligent automation, I build with the goal of making the final experience feel effortless.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCounter value={18} label="AI-Powered Projects" />
              <StatCounter value={26} label="Full Stack Apps Built" />
              <StatCounter value={20} label="Technologies Mastered" />
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default About;
