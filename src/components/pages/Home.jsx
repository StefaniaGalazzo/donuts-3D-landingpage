import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Experience from "../3D/Experience";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";

export default function Home() {
  const Left50 = styled.div`
    position: absolute;
    bottom: 50%;
    right: 3vw;
    transform: rotate(-90deg);
  `;

  const MobileOnly = styled.div`
    position: absolute;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 50px;
    padding: 13px 21px;
    background: blue;
    color: white;
    font-size: 1rem;
    top: 50%;
    left: 40%;
    box-shadow: 0 0 21px -3px rgba(0, 0, 0, 0.8);
    animation:
      opacity 3.5s ease-in-out forwards,
      rotateDevice 1.5s ease-in-out;
  `;

  const [speed, set] = useState(1);
  const deviceWidth = window.innerWidth;

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

      {deviceWidth <= 768 && (
        <MobileOnly>
          <MdOutlineFlipCameraAndroid size={30} />
          Rotate your device!
          <MdOutlineFlipCameraAndroid size={30} />
        </MobileOnly>
      )}
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
