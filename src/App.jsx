import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../public/Earth.jsx";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
