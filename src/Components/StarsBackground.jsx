import Particles from "react-tsparticles";

export default function StarsBackground() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          number: {
            value: 120,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
}