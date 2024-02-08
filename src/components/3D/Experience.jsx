/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {
  DepthOfField,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import CTA from "./CTA";
import Donuts from "./Donuts";
import Shop from "./Shop";
import { Environment } from "@react-three/drei";

export default function Experience({ speed }) {
  return (
    <>
      <spotLight
        angle={Math.PI / 4}
        position={[-10, -10, 10]}
        penumbra={2.5}
        decay={0}
        intensity={0.6}
        color="blue"
      />

      <spotLight
        position={[10, 20, 10]}
        penumbra={1}
        decay={0}
        intensity={0.4}
        color="pink"
      />
      <Environment preset="sunset" />

      <Donuts speed={speed} />
      <fog attach="fog" args={["", 105, 115]} color={"#fbadd5"} />
      <color attach="background" args={["#fbadd5"]} />

      <Shop />
      <CTA
        title={"DO'NUTS"}
        subtitle={"So light to make you fly"}
        cta={"Order now"}
      />
      <EffectComposer multisampling={5}>
        <DepthOfField
          target={[0, 0, 40]}
          focalLength={0.7}
          bokehScale={5}
          height={700}
        />
        <ToneMapping />
      </EffectComposer>
    </>
  );
}
