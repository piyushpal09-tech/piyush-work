import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative">
      <SectionReveal className="section-shell">
        <div className="glass-panel overflow-hidden rounded-[36px] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something intelligent and memorable."
                description="If you’re looking for a developer who cares about clean systems, premium interfaces, and AI-native product thinking, I’d love to hear about the challenge."
              />

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:Palp12633@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan/30 hover:shadow-glow"
                >
                  <span className="rounded-xl border border-cyan/20 bg-cyan/10 p-3 text-cyan">
                    <FiMail />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">Email</p>
                    <p className="mt-1 text-slate-200">Palp12633@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916291262514"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-violet/30 hover:shadow-violet"
                >
                  <span className="rounded-xl border border-violet/20 bg-violet/10 p-3 text-violet">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">Phone</p>
                    <p className="mt-1 text-slate-200">+91 6291262514</p>
                  </div>
                </a>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-[28px] border border-white/10 bg-black/20 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-slate-400">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:shadow-[0_0_0_4px_rgba(0,245,255,0.08)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-slate-400">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:shadow-[0_0_0_4px_rgba(0,245,255,0.08)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.26em] text-slate-400">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell me about your project or idea..."
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50 focus:shadow-[0_0_0_4px_rgba(0,245,255,0.08)]"
                />
              </label>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-cyan/40 bg-cyan/15 px-6 py-3.5 font-mono text-sm text-cyan transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Send Message
                </button>

                {submitted ? (
                  <p className="text-sm text-emerald-300">
                    Message captured. Hook this form to your preferred backend next.
                  </p>
                ) : (
                  <p className="text-sm text-slate-500">Fast reply, clear communication, production mindset.</p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Contact;
