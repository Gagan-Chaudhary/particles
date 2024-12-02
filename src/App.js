import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        textAlign: "center",
        color: "white",
      }}
    >
      <ParticlesBackground />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "20vh",
        }}
      >
        <h1>Particles.js </h1>
        <p>Interactive Particle Background</p>
      </div>
    </div>
  );
}

export default App;
