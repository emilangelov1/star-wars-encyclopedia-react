import React from "react";
import Particles from "react-tsparticles";

type Props = {};

export default function Background({ children }: any) {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#FFFFFF",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.05,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 250,
          },
          opacity: {
            value: 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    >
      {children}
    </Particles>
  );
}
