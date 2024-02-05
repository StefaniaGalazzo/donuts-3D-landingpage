/* eslint-disable react/no-unknown-property */
// banana https://codesandbox.io/p/sandbox/flying-bananas-2ycs3?file=%2Fsrc%2FBananas.js
// store https://poly.pizza/m/BvRLKgGwc6 Donut Store by J-Toastie [CC-BY] via Poly Pizza
import styled from "styled-components";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/3D/Experience";

const Left50 = styled.div`
  position: absolute;
  bottom: 50%;
  right: 3vw;
  transform: rotate(-90deg);
`;

function App() {
  const [speed, set] = useState(1);

  const cameraSettings = {
    position: [0, 0, 20],
    fov: 20,
    near: 0.5,
    far: 105,
  };

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          flat
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
          camera={cameraSettings}
        >
          <Experience speed={speed} />
        </Canvas>
      </Suspense>
      <Left50>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </Left50>
    </>
  );
}

export default App;
