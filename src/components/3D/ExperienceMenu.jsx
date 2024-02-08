/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, SoftShadows } from "@react-three/drei";
import GlazedDonut from "./GlazedDonut";
import { Canvas } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  // TiltShift2,
} from "@react-three/postprocessing";

export default function ExperienceMenu({
  donutIngredient,
  position,
  rotation,
}) {
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      camera={{ position: [2.8, 0.4, 4.5], fov: 70 }}
    >
      <GlazedDonut
        donutIngredient={donutIngredient}
        position={position}
        rotation={rotation}
      />
      <color attach="background" args={["rgb(220,250,255)"]} />
      <fog attach="fog" args={["#f0f0f0", 6, 20]} />
      <ambientLight intensity={0.4} />
      <directionalLight
        intensity={2}
        position={[20, 60, 20]}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.3, 0]}
        receiveShadow
        frustumCulled={false}
      >
        <planeGeometry args={[100, 100, 1, 1]} />
        <shadowMaterial transparent opacity={0.5} />
        {/* <meshBasicMaterial color="rgb(119, 0, 113)" /> */}
      </mesh>
      <SoftShadows size={150} samples={80} />
      <OrbitControls
      // makeDefault
      // minPolarAngle={0}
      // maxPolarAngle={Math.PI / 2}
      />
      <EffectComposer multisampling={30}>
        <DepthOfField target={[0, 0, 50]} focalLength={0.3} bokehScale={0} />
      </EffectComposer>
    </Canvas>
  );
}
