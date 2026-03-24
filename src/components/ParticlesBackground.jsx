import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 70,
            duration: 0.3,
          },
        },
      },
      particles: {
        color: {
          value: ["#00f5ff", "#7c3aed", "#9ca3af"],
        },
        links: {
          color: "#00f5ff",
          distance: 130,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          speed: 0.55,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 55,
        },
        opacity: {
          value: { min: 0.15, max: 0.45 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.8 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!ready) {
    return null;
  }

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0"
      options={options}
    />
  );
}

export default ParticlesBackground;
