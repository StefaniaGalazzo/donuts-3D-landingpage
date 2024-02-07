/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, SoftShadows } from "@react-three/drei";
import GlazedDonut from "./GlazedDonut";
import { Canvas } from "@react-three/fiber";

export default function ExperienceMenu({
  donutIngredient,
  position,
  rotation,
}) {
  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      camera={{ position: [2.8, 0.4, 4.5], fov: 70 }}
    >
      <GlazedDonut
        donutIngredient={donutIngredient}
        position={position}
        rotation={rotation}
      />
      <color attach="background" args={["#f0f0f0"]} />
      <fog attach="fog" args={["#f0f0f0", 0, 20]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={2}
        position={[2, 35, -5]}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />

      <mesh
        rotation={[-Math.PI / 2, -0.08, 0]}
        position={[0, -3, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.5} />
        {/* <meshBasicMaterial color="rgb(119, 0, 113)" /> */}
      </mesh>
      <SoftShadows size={250} samples={80} />
      <OrbitControls />
    </Canvas>
  );
}
