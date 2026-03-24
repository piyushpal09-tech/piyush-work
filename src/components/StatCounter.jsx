import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatCounter({ value, suffix = "+", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setCount(Math.round(latest));
    });

    return () => unsubscribe();
  }, [motionValue]);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <div
      ref={ref}
      className="glass-panel rounded-3xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
    >
      <div className="mb-4 h-px w-16 bg-gradient-to-r from-cyan via-violet to-transparent" />
      <p className="font-mono text-4xl font-semibold text-white">
        {count}
        <span className="text-cyan">{suffix}</span>
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
    </div>
  );
}

export default StatCounter;
